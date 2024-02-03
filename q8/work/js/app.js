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
    let pageCount = 1,
    //初期値は、１に設定
        searchNoword = "";
        //入力する内容は何も入っていない
    $(".search-btn").on("click", function() {
    //検索ボタンをクリックしたとき
        let searchWord = $("#search-input").val();
        //検索フォームで入力されるすべての値を表示
        if(searchWord !== searchNoword) {
        //検索されるワードが入力されているときと、検索ワードが入力されていないときは異なる条件が正しいとき、
            pageCount = 1,
            $(".lists").empty(),
            searchNoword = searchWord
        //初期値１になる,検索結果で表示される詳細は何もなし(違う検索ワードで検索するため),検索ワードが入力されていない状態になる
        }else{
            pageCount++;
        }
        //検索されるワードが入力されているときと、検索ワードが入力されていないときは異なる条件が異なるとき、そのまま同じ検索ワードで検索する
    $.ajax({
        url: "https://ci.nii.ac.jp/books/opensearch/search?title="+ searchWord + "&format=json&p=" + pageCount + "&count=20",
        //ajaxで検索結果として表示されるAPI仕様のリンクを設定
        method: "GET"
        //「GET」を設定して、通信でサーバーからデータを取得し、サーバーと通信が成功すればjsonファイルの情報を取得
    }).done(function (response) {
    //通信が成功したとき
        searcResult(response["@graph"])
        //検索結果として、@graphの詳細データを表示
    }).fail(function(xhr,status,error) {
    //通信が失敗したとき
    $(".lists").empty();
    //検索結果で表示される詳細は何もなし
    $(".message").remove();
    //メッセージとして表示される要素を削除
    if(xhr.status === 0) {
    //検索結果として表示される各項目の詳細が0のとき、
        $(".lists").before(status = '<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
        //リスト要素の直前に「正常に通信できませんでした。、インターネットの接続の確認をしてください。」を表示
    }else{
    //検索結果として表示される各項目の詳細が0と異なり、
        if(xhr.status === 400) {
        //検索結果として表示される各項目の詳細が400でエラーになったとき、
        $(".lists").before(status = '<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>')
        //リスト要素の直前に「検索キーワードが有効ではありません。、1文字以上で検索して下さい。」を表示
        }else{
        //検索結果として表示される各項目の詳細が400のエラーと異なる例外のとき、
        $(".lists").before(error = '<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>')
        //リスト要素の直前に「予期せぬエラーが起きました。、再読み込みを行ってください。」を表示
    }
    }
    })
    })
    function searcResult(searchWord){
    //検索ワードとして入力された値に対応する検索結果を表示
        $(".message").remove();
        //メッセージとして表示される要素を削除
        let messageLength = 0
        //メッセージ部分の値が0で何もなし
        if (null == searchWord[0].items) {
        //もし取得された各項目の0番目の最初の詳細が何もない場合
            messageLength = ''
        //メッセージ部分の値が何もなく表示されない
        }else{
        //取得された各項目の0番目の最初の詳細がある場合
            messageLength = searchWord[0].items.length
        //メッセージ部分の値は、検索結果として見つかった0番目の最初の詳細から順に表示
        }
        if(0 < messageLength){
        //メッセージ部分に表示される、検索結果の詳細を取得でき表示される場合
        $.each(searchWord[0].items, function(index,data) {
            //検索ワードとして入力された値に対応する検索結果として表示される値の、0番目の値からループ処理で各項目と共通する値を抽出して表示
            const resultHtml = '<li class="lists-item"><div class="list-inner"><p>タイトル：' +
            //リスト要素(各項目の要素)を追加、「タイトル：」の項目を追加
            ((data.title ? data.title : "タイトル不明") +
            //レスポンス内容の"@graph"の中の「タイトル」の詳細を取得できたら表示、取得できない場合は、「タイトル不明」を表示
            "</p><p>著者名：" ) +
            //リスト要素に、「著者名：」の項目を追加
            ((data["dc:creator"] ? data["dc:creator"] : "著者名不明") +
            //レスポンス内容の"@graph"の中の「著者名」の詳細を取得できたら表示、取得できない場合は、「著者名不明」を表示
            "</p><p>出版社：" ) +
            //リスト要素に、「出版社：」の項目を追加
            ((data["dc:publisher"] ? data["dc:publisher"][0] : "出版社不明") +
            //レスポンス内容の"@graph"の中の「出版社」の詳細を取得できたら表示、取得できない場合は、「出版社不明」を表示
            '</p><a href="' ) +
            (data.link["@id"] +
            '"target="_blank">書籍情報</a></div></li>');
            //リスト要素に、「書籍情報」の項目を追加し、レスポンス内容の"@graph"の中の書籍情報のURLを設定、詳細を表示する欄は何も表示せず別タブで表示
            $(".lists").prepend(resultHtml)
            //各項目のタイトルは、取得された各詳細の要素の先頭に表示する
        })
        }else{
        //メッセージ部分に表示される、検索結果が不明で詳細を取得できない場合
            $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>')
            //リスト要素の直前に「検索結果が見つかりませんでした。、別のキーワードで検索して下さい。」を表示
        }
    }
    $(".reset-btn").on("click", function() {
    //リセットボタンをクリックすると、
        pageCount = 1;
        searchNoword = "";
    //初期値１に戻し、
    $(".lists").empty();
    //各項目は何も表示されない
    $(".message").remove();
    //メッセージは削除される
    $("#seach-input").val("");
    //検索フォームで入力されたすべての値は元に戻る
    })
});