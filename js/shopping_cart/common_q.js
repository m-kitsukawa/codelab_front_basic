'use strict';
(function () {
  // 仕様
  // ショッピングカートに入った商品の合計を求めます。
  // 商品はタブレット(10,000円)とパソコン(50,000円)の2つです。
  // 計算ボタンをクリックした時に小計、税額、合計を求めてください。
  // 求めるものは以下の3つです。
  // 小計･･･商品の価格と数量の合計
  // 税額･･小計の金額に対して発生する消費税
  // 合計･･･小計と消費税を足した値

  //ヒント
  // HTMLから取得した値は常に文字列になります。JSで計算するには文字列→数値に変換する必要があります。

  // 使いそうな変数を宣言。必要に応じて後から追加する
  var pc = document.getElementById('pc');
  var tablet = document.getElementById('tablet');
  var btn = document.getElementById('btn');
  var subtotal = document.getElementById('subtotal');
  var tax = document.getElementById('tax');
  var total = document.getElementById('total');
  // 定数は全て大文字で書くことが多い
  var TAXRATE = 0.08;
  
  btn.addEventListener('click', function(){
    var tabletPrice = document.getElementById('tabletPrice').textContent;
    var pcPrice = document.getElementById('pcPrice').textContent;
    var subtotal = document.getElementById("subtotal");
    //タブレットの数量取得
    var taSelectIndex = tablet.selectedIndex;
    var taSelectValue = tablet[taSelectIndex].value;
    // console.log(taSelectValue);
    //パソコンの数量取得
    var pcSelectIndex = pc.selectedIndex;
    var pcSelectValue = pc[pcSelectIndex].value;
    //console.log(pcSelectValue);
    //単価＊数量の計算
    var taSubtotal = tabletPrice * taSelectValue;
    var pcSubtotal = pcPrice * pcSelectValue;
    //タブレットとパソコンの小計表示
    var subtotalAdd = taSubtotal + pcSubtotal;
　  subtotal.innerText = subtotalAdd.toLocaleString();
    //税計算
　　var taxTotal = subtotalAdd * TAXRATE;
　  tax.innerText = taxTotal.toLocaleString();
    //合計
　　var Total = subtotalAdd + taxTotal;
    total.innerText = Total.toLocaleString();
    return false;
    });

}());