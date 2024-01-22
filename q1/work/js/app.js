$(function () {
  $("#q1").css("color","blue");
  //読み込み時に、Q1の文字を青色に変化
  
  $("#q2").on("click", function () {
    $(this).css("background", "green") 
    //Q2のボタンをクリックすると、ボタンの色を緑色に変化
  });
  
  $("#q3").on("click", function () {
    $(this).fadeOut(3000) 
    //Q3のボタンをクリックすると、3秒かけてフェードアウト
  });

  $("#q4").on("click", function () {
    $(this).addClass("large") 
    //Q4のボタンをクリックすると、ボタンの幅を300px、内側の余白を50px、文字のサイズを20pxに変更
  });

  $("#q5").on("click", function () {
    $(this).prepend("ボタン中の前").append("ボタン中の後").before("ボタンの前").after("ボタンの後") 
    //Q5のボタンをクリックすると、ボタンの前後と内部の前後にDOMの挿入
  });

  $("#q6").on("click", function () {
    $(this).animate({"margin-top": 100,"margin-left": 100},2000)
    //Q6のボタンをクリックすると、2秒かけて、余白をボタンの上と左に100pxとり、右下に移動
  });

  $("#q7").on("click", function () {
    console.log(this)
    //Q7のボタンをクリックすると、<button id="q7" class="btn">Q7</button>（ノード）をコンソールで表示
  });

  $("#q8").on({mouseenter: function() { $(this).addClass("large") },mouseleave: function() { $(this).removeClass("large") } 
  });
  /*Q8のボタンにマウスを重ねると、ボタンのサイズを、ボタンの幅を300px、内側の余白を50px、文字のサイズを20pxに変更、
    Q8のボタンからマウスを離すと、変更されたボタンの幅300px、内側の余白50px、文字のサイズ20pxを削除。*/

  $("#q9 li").on("click", function () {
      const a = $(this).index();
      alert(a);
  /*Q9-1をクリックすると、インデックス番号0をアラート表示
    Q9-2をクリックすると、インデックス番号1をアラート表示
    Q9-3をクリックすると、インデックス番号2をアラート表示
    Q9-4をクリックすると、インデックス番号3をアラート表示*/
  });

  $("#q10 li").on("click", function () {
    const a = $(this).index();
    $("#q11 li").eq(a).addClass("large-text")
    /*Q10-1をクリックすると、Q11-1を取得し、テキストの文字のサイズを30pxに変更
    Q10-2をクリックすると、Q11-2を取得し、テキストの文字のサイズを30pxに変更
    Q10-3をクリックすると、Q11-3を取得し、テキストの文字のサイズを30pxに変更
    Q10-4をクリックすると、Q11-4を取得し、テキストの文字のサイズを30pxに変更*/
  });
});  