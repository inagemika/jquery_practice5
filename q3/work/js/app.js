$(function () {
  $(".drawer_button").on("click", function () {
  //ハンバーガーメニュー(三本線)をクリックすると、
    $(this).toggleClass("active");
  //ハンバーガーメニューにactiveクラスを付け外し切り替わる
  //activeがつくと×に切り替わる
    $(".drawer_bg").fadeToggle();
  //ドロワーサイドメニューの表示/非表示をフェードで切り替える
    $("nav").toggleClass("open");
  //navのメニューリストにopenクラスを付け外し開く
  //openがつくと表示される
  });

  $(".drawer_bg").on("click", function () {
  //ドロワーサイドメニュー(灰色の背景部分)をクリックすると、
    $(this).hide();
  //ドロワーサイドメニューを非表示にする
    $(".drawer_button").removeClass("active");
  //ハンバーガーメニューのactiveクラスを付け外しを削除
  //activeが削除され、ハンバーガーメニュー(三本線)に切り替わる
    $("nav").removeClass("open");
  //navのメニューリストのopenクラスを付け外しが削除され
  //メニューリストが表示されなくなる
  });
});