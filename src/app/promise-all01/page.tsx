//Promise.allメソッド
//複数の非同期処理を並列に実行し、それらすべてが成功した場合に処理を実行する。
export default function PromiseAll01() {
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

  //Promise.allメソッドでは、引数で渡されたすべてのPromiseオブジェクトがresolve(成功)した場合にだけ
  //thenメソッドの成功コールバックを実行する。
  //その際、引数responseには、すべてのPrimiseから渡された結果値が配列として渡される
  //Promiseオブジェクトのいずれかがreject(失敗)した場合には、失敗コールバックが呼び出される
  Promise.all([
    asyncProcess('トクジロウ'),
    asyncProcess('ニンザブロウ'),
    asyncProcess('リンリン'),
  ])
    //resolve関数で指定された引数を受け取る 成功コールバック
    .then(response => console.log(response))
    //reject関数で指定された引数を受け取る 失敗コールバック
    .catch(error => console.log(`エラー：${error}`))

}