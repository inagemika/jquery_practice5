$(function() {
    $(".btn__submit").on("click", function () {
//アカウント作成ボタンをクリックすると、
    console.log("名字");
//コンソールに名字の項目名を表示
    console.log($("#family__name").val());
//コンソールに名字の入力フォームに入力された全ての値を表示
    console.log("名前");
//コンソールに名前の項目名を表示
    console.log($("#given__name").val());
//コンソールに名前の入力フォームに入力された全ての値を表示
    console.log("生年月日");
//コンソールに生年月日の項目名を表示
    console.log($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日");
//コンソールに年月日の各選択フォームの中にあるすべての値で選択された値を表示
    console.log("性別");
//コンソールに性別の項目名を表示
    console.log($('[name="gender"]:checked').val());
//コンソールに性別の各ラジオボタン男・女・その他のすべての値の中でチェックが入ったラジオボタンの値を表示
    console.log("職業");
//コンソールに職業の項目名を表示
    console.log($(".occupation").val());
//コンソールに職業の選択フォームの中にあるすべての値で選択された値を表示
    console.log("アカウント名");
//コンソールにアカウント名の項目名を表示
    console.log($("#account__name").val());
//コンソールにアカウント名の入力フォームに入力された全ての値を表示
    console.log("メールアドレス");
//コンソールにメールアドレスの項目名を表示
    console.log($("#email").val());
//コンソールにメールアドレスの入力フォームに入力された全ての値を表示
    console.log("パスワード");
//コンソールにパスワードの項目名を表示
    console.log($("#password").val());
//コンソールにパスワードの入力フォームに入力された全ての値を表示
    console.log("確認用パスワード");
//コンソールに確認用パスワードの項目名を表示
    console.log($("#duplication__password").val());
//コンソールに確認用パスワードの入力フォームに入力された全ての値を表示
    console.log("住所");
//コンソールに住所の項目名を表示
    console.log($("#address").val());
//コンソールに住所の入力フォームに入力された全ての値を表示
    console.log("電話番号");
//コンソールに電話番号の項目名を表示
    console.log($("#tel").val());
//コンソールに電話番号の入力フォームに入力された全ての値を表示
    console.log("購読情報");
//コンソールに購読情報の項目名を表示
    $('[name="subscription"]:checked').each(function() {
        console.log($(this).val());
//購読情報の各チェックボタンメールマガジン・クーポンのすべての値の中でチェックが入ったチェックボタンのそれぞれの値を取得し表示
    });
    });
});