//Promise.raceメソッド
//複数の非同期処理を並列に実行し、いずれか1つが最初に完了したところで処理を実行する。
export default function PromiseRace01() {
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

  //Promise.raceメソッドでは、複数の非同期処理が渡されたにも関わらず、結果は1つとなる。
  //どの処理が最初に終了するかは一般的には推測できないので、結果も変化する可能性がある。
  //最初の結果はrejectedであった場合には、catchメソッドの結果が返される可能性もある。
  Promise.race([
    asyncProcess('トクジロウ'),
    asyncProcess('ニンザブロウ'),
    asyncProcess('リンリン'),
  ])
    //resolve関数で指定された引数を受け取る 成功コールバック
    .then(response => console.log(response))
    //reject関数で指定された引数を受け取る 失敗コールバック
    .catch(error => console.log(`エラー：${error}`))

}