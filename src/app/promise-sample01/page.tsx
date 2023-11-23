export default function PromiseSample01() {
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

  asyncProcess('トクジロウ')
    //resolve関数で指定された引数を受け取る 成功コールバック
    .then(response => console.log(response))
    //reject関数で指定された引数を受け取る 失敗コールバック
    .catch(error => console.log(`エラー：${error}`))
    //処理修了時、必ず実行される処理
    .finally(() => console.log('処理修了'));

}