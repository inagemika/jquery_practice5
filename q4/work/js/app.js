$(function () {
$(".nav li").on("click", function () {
//ホーム、ページA〜Eをそれぞれクリックすると、
  let index_text = $(this).index();
  $(".description li").addClass("is-hidden")
//ホーム、ページA〜Eの下にそれぞれの項目に対応した、取得され表示される各文字にis-hiddenクラスを追加
  $(".description li").eq(index_text).removeClass("is-hidden")
//ホーム、ページA〜Eのそれぞれ取得した下に表示される文字のis-hiddenクラスが削除され、
//表示中の文字はis-hiddenクラスが付き非表示に、次にクリックされた該当の文字に切り替わり表示される
  });
});