$(function () {
  $(".modal_open_button").on("click", function () {
  //OPENボタンをクリックすると、
    $(".modal_win").fadeIn()
  //モーダルウィンドウがフェードインし、表示される
  });
  $(".modal_close_button").on("click", function () {
  //モーダルウィンドウの中にある×をクリックすると、
    $(".modal_win").fadeOut()
  //モーダルウィンドウがフェードアウトし、非表示になる
  });
});