//Promise.allSettledメソッド ES2020
//複数の非同期処理を成否にかかわらず、すべての非同期処理を実行し、その結果を返す
export default function PromiseAllSettled01() {
  function asyncProcess(value: string) {
    //Promiseオブジェクトを返す
    //Promiseは非同期処理の状態を監視するためのオブジェクト
    //Promiseコンストラクタには実行すべき非同期処理を関数リテラルまたはアロー関数として記述する
    //非同期処理の関数の引数 Promiseオブジェクトによって渡される
    //　resolve：非同期処理の成功を通知するための関数
    //　reject：非同期処理の失敗を通知するための関数
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value) {
          //resolve関数の引数に成功したときの結果、エラーメッセージ、などを任意のオブジェクトとして渡す
          resolve(`入力値： ${value}`);
        } else {
          //reject関数の引数に失敗したときの結果、エラーメッセージ、などを任意のオブジェクトとして渡す
          reject('入力値は空です');
        }
      }, 500);
    });
  }

  //Promise.allメソッドが非同期処理でどれか1つでも失敗したところでエラーを返すのに対して
  //Promise.allSettledメソッドは成否にかかわらず、すべての非同期処理を実行し、その結果を返す
  //Promise.allSettledは結果に成否が混在している可能性があるので、
  //resolve/reject関数で指定された値だけでなく、
  //ステータス(結果)情報を含んだオブジェクトの配列がthenメソッドに渡されます。
  //ステータスの意味は、
  //fullfilledが成功(履行済)、rejectedが失敗(拒否)を意味します。
  //fullfilledのときの結果情報はvalueプロパティですが、rejectedの結果情報はreasonプロパティに反映される
  Promise.allSettled([
    asyncProcess('トクジロウ'),
    asyncProcess('ニンザブロウ'),
    asyncProcess(''),
  ])
    //resolve関数で指定された引数を受け取る 成功コールバック
    .then(response => console.log(response))
    //reject関数で指定された引数を受け取る 失敗コールバック
    .catch(error => console.log(`エラー：${error}`))

}