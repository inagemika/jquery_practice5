$(function() {
    $(".select-box").on("change", function() {
//セレクトボックス内のどれか一つの項目(選択肢）をクリックするとイベントを実行
    const allFood =$(this).val(),
        foodElement=$(".food-list li");
//セレクトボックス内の項目(選択肢）の中のすべての値を取得
    if("all" === allFood){
        foodElement.show();
//「全て」の項目は、各項目の中の全ての値と等しいとき、「全て」がクリックされれば、すべての値が表示されるが、
    }else{
//「全て」の項目以外の別の項目がクリックされた場合は、
        $.each(foodElement, function(index,item) {
//各食べ物(値)に繰り返し処理し、クリックされた項目と共通する値だけを抽出して表示
            const foodCategory = $(item).data("category-type");
//各食べ物(値)をすべて取得
            if(allFood === foodCategory){
//「全て」の項目は、各項目の中の全ての値と各食べ物(値)とも等しいので、
                $(item).show()
//「全て」がクリックされれば、すべての値が表示されるが、
            }else{
//「全て」の項目以外の別の項目がクリックされた場合は
                $(item).hide()
//すべて表示されていた値は非表示になる
            }
        })
    }
    });
});