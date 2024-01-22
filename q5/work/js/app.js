$(function() {
  $(".dropdwn li").hover(function() {
  //A～Dをホバーすると
    $(this).children("ul").stop().slideToggle();
  //A～Dの子要素のサブメニュー各1～5がスライドしながら開閉し、
  //連続でホバーした回数だけサブメニューが開閉を繰り返すアニメーションの重複を中止
  });
});