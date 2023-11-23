//Promiseによる非同期処理は、async/await構文を利用することでより同期的に表現できる
export default function AsyncAwait01() {
  //関数の引数 value: number
  //関数の戻り値 Promise<number>
  function asyncProcess(value: number): Promise<number> {
    //Promiseオブジェクトを返す
    //Promiseは非同期処理の状態を監視するためのオブジェクト
    //Promiseコンストラクタには実行すべき非同期処理を関数リテラルまたはアロー関数として記述する
    //非同期処理の関数の引数 Promiseオブジェクトによって渡される
    //　resolve：非同期処理の成功を通知するための関数
    //　reject：非同期処理の失敗を通知するための関数
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof value === 'number') {
          //resolve関数の引数に成功したときの結果、エラーメッセージ、などを任意のオブジェクトとして渡す
          resolve(value ** 2);
        } else {
          //reject関数の引数に失敗したときの結果、エラーメッセージ、などを任意のオブジェクトとして渡す
          reject('引数valueは数値でなければいけません。');
        }
      }, 500);
    });
  }

  //Promiseによる非同期処理を関数にまとめasyncキーワードを付与する。
  //これにより非同期関数(async function)と見なされる
  async function main() {
    //async非同期関数の中でawait演算子は利用できる
    //Promiseを返す処理(=非同期処理)にawait演算子を付与することで、
    //JavaScriptは非同期処理の終了を待って、以降の処理を保留する
    //保留している間は、呼び出し元の処理を継続する
    //そして保留中のawait処理が完了したら、次のawait処理を行う
    //await演算子の戻り値はPromiseそのものではなく、Promiseに含まれた実際の結果値
    //(=resolve関数に渡された値(この例では4(自乗した結果)))にような数値である点にも注目する
    let result1 = await asyncProcess(2);
    console.log(result1)
    let result2 = await asyncProcess(result1);
    console.log(result2)
    let result3 = await asyncProcess(result2);
    console.log(result3)
    return result3;
  }

  main()
    //resolve関数で指定された引数を受け取る 成功コールバック
    .then(response => console.log(response))
    //reject関数で指定された引数を受け取る 失敗コールバック
    .catch(error => console.log(`エラー：${error}`))

}