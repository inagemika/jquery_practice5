// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });

$(function() {
  function a(e) {
//aの処理をするとeを出力
    $(".message").remove();
//メッセージで表示される要素の削除
    let b;
//bは初期値なし
    0 < (null == (b = e[0].items) ? void 0 : b.length) ?
//検索された詳細は0と等しいと値は表示されない、0より値が大きい時
    $.each(e[0].items, function(h,c) {
//(値)に繰り返し処理し、検索された詳細と共通する値だけを抽出して表示
    let g = '<li class="lists-item"><div class="list-inner"><p>タイトル：' + ((c.title ? c.title : "タイトル不明") + "</p><p>作者：") + ((c["dc:creator"] ? c["dc:creator"] : "作者不明") + "</p><p>出版社：") + ((c["dc:publisher"] ? c["dc:publisher"][0] : "出版社不明") + '</p><a href="') + (c.link["@id"] + '" target="_blank">書籍情報</a></div></li>');
//検索結果の表示部分に各タイトル：、作者：、出版社：書籍情報のリンクページの項目を表示し、検索結果がない項目に不明を表示
    $(".lists").prepend(g)
//各タイトル：、作者：、出版社：書籍情報のリンクページの項目は要素の先頭に追加し表示
    }) : $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>')
    }
//検索結果の表示部分に検索結果がない場合、検索結果が見つかりませんでした。別のキーワードで検索して下さい。の文字を表示
    let d = 1, f = "";
//dに初期値１を代入
    $(".search-btn").on("click", function() {
//検索ボタンをクリックしたとき
      let e = $("#search-input").val();
//検索フォームで入力されたすべての値を表示
      e !== f ? (d = 1,$(".lists").empty(),f = e) : d++;
//検索フォームで入力されたすべての値と不一致の時、各項目は何も表示されない、違う検索ワードを表示
    $.ajax({
      url:"https://ci.nii.ac.jp/books/opensearch/search?title=" + e + "&format=json&p=" + d + "&count=20",
      method: "GET"
// 検索されたワードからサーバーにメソッドを送り、エンドポイントの中の値を検索結果で表示し実行
    })
    .done(function(b) {
      a(b["@graph"])
//検索に成功すれば検索結果を実行
    })
    .fail(function(b) {
//検索に失敗の時
      $(".lists").empty();
//各項目が不明の時
      $(".message").remove();
      0 === b.status ? $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
//各項目の詳細0で受けとれなかったら、検索結果の表示部分に正常に通信できませんでした。インターネットの接続の確認をしてください。を表示
      : 400 === b.status ? $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>')
//各項目の詳細400で受けとれなかったら、検索結果の表示部分に検索キーワードが有効ではありません.1文字以上で検索して下さい。を表示
      : $(".lists").before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>')
//検索結果の表示部分に予期せぬエラーが起きました。再読み込みを行ってください。を表示
    });
    });
    $(".reset-btn").on("click", function() {
//リセットボタンをクリックすると、
      d = 1;
      f = "";
//初期値１に戻し、
      $(".lists").empty();
//各項目は何も表示されない
      $(".message").remove();
//メッセージは削除される
      $("#seach-input").val("")
//検索フォームで入力されたすべての値は元に戻る
    });
});