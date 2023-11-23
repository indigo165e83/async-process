export default function FetchWithErrorHundring01() {
  //fetchメソッドの戻り値はPromise<Response>オブジェクト(=Responseオブジェクトを含んだPromiseオブジェクト)
  fetch('https://jsonplaceholder.typicode.com/post')
    //ここのコールバック関数でResponseオブジェクト(通信の応答情報)を受け取る
    //以下のようなメンバーが用意されている
    //ステータス
    //  OK
    //  redirected
    //  status
    //  statusText
    //ヘッダー
    //  headers
    //  type
    //  url
    //本文
    //  body
    //  arrayBuffer
    //  blob()
    //  formData()
    //  json()
    //  text()
    //json()メソッドの戻り値はPromise<object>
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('指定のリソースが無効です');
    })
    //上記のPromise<object>をさらに処理をする
    //ここのコールバック関数は、解析済みオブジェクトを受け取る
    .then(data => console.log(data))
    //fetch + then(レスポンス処理) + then(結果値処理) は定番なのでイディオムとして覚えるのがよい
    .catch(e => console.log(`問題発生：${e.message}`));
}