'use strict';
// 例題 コンソールに数値「1」を出力してください。
// console.log(1);

// 問題1：要素の取得
// id属性txt1の要素を取得し、変数txt1に代入してください。
// 代入後、変数txt1をコンソールに表示してださい。
var txt1 = document.getElementById('txt1');
console.log(txt1);
// 問題2：テキストの取得
// id属性txt2の要素を取得し、変数txt2に代入してください。
// txt2要素配下のテキストを取得し、コンソールに表示してください。
// ただしHTMLタグを含むもの、含まないもの両方の方法で表示すること。
var txt2 = document.getElementById('txt2');
console.log(txt2);
txt2 = document.getElementById('txt2').textContent;
console.log(txt2);
// 問題3：テキストの書き換え
// id属性txt2配下のテキストを「書き換えました」という文字列に書き換えてください。
var txt2 = document.getElementById('txt2');
console.log(txt2.innerHTML);
txt2.innerHTML = '書き換えました';
// 問題4：イベント(クリック)
// 取得ボタンをクリックしたとき、id属性txt3のテキストを取得し、id属性txt4に表示してください。
function change4(){
  var txt4 = document.getElementById("txt4");
  txt4.innerHTML = document.getElementById("txt3").innerHTML;
}
// 問題5：イベント(サブミット) / フォーム部品の取得(テキスト)
// 送信ボタンをクリックしたとき、フォーム部品(id属性input1のvalue)の値を取得し、id属性txt5に出力してください。
var txt5 = document.getElementById("txt5");
var form1 = document.getElementById("form1");
form1.addEventListener('submit', function(){
  txt5.innerHTML = document.getElementById("input1").value;
  return false; //submitを中断
});
// 問題6：フォーム部品の取得(セレクトボックス)
// 送信ボタンをクリックしたとき、セレクトボックス(name属性item1のvalue)の選択中の値を取得し、id属性result1に出力してください。
var form2 = document.getElementById("form2");
form2.addEventListener('submit', function(e){
    //return false; //submitを中断
    e.preventDefault();
    var item1 = form2.item1;
    var num = item1.selectedIndex;
    var str = item1.options[num].value;
    var result = document.getElementById("result1");
    result.innerHTML = str;
}, false);

// 問題7：フォーム部品の取得(チェックボックス)
// 送信ボタンをクリックしたとき、チェックボックス(name属性item1のvalue)の選択中の値を取得し、id属性result2に出力してください。
var form3 = document.getElementById("form3");
const arr1 = [];
form3.addEventListener('submit', function(e){
    e.preventDefault();
    for (let i = 0; i < form3.length; i++){
    if(form3[i].checked){
			arr1.push(form3[i].value);
    document.getElementById("result2").textContent = arr1;
    };
    };
}, false);

// 問題8：フォーム部品の取得(ラジオ)
// 送信ボタンをクリックしたとき、ラジオボタン(name属性item1のvalue)の選択中の値を取得し、id属性result3に出力してください。
var form4 = document.getElementById("form4");
const arr2 = [];
form4.addEventListener('submit', function(e){
    e.preventDefault();
    for (let i = 0; i < form4.length; i++){
    if(form4[i].checked){
			arr2.push(form4[i].value);
    document.getElementById("result3").textContent = arr2;
    };
    };
}, false);
// 問題9：バリデーションチェック
// 会社名が未入力のまま送信ボタンをクリックしたとき、「会社名が未入力です。」というアラートを表示してください。また未入力の場合は、処理を中断してください。
var form5 = document.getElementById("form5");
form5.addEventListener('submit', function(e){

if (document.getElementById('form5').company.value == "") {
  alert('会社名が未入力です。');
  e.preventDefault();
   }
else{
  alert(form5.company.value);
  form5.submit();
   }
}, false);
// 問題10：CSSの操作
// id属性txt6のCSSプロパティを以下に変更してください。
// また変更するタイミングは画面表示時とする。
// 文字色→赤色、フォントサイズ→32px
var txt6 = document.getElementById("txt6");
txt6.style.color = "red";
txt6.style.fontsize = "32px";
// 問題11：ノード追加
// 追加ボタンをクリックしたとき、id属性parentの子要素にpタグを追加し、pタグに「ノード追加テキスト」というテキストを追加してください。
function change_btn2(){
  var prt = document.getElementById("parent");
  var ptag = document.createElement('p');
  var np = document.createTextNode('ノード追加テキスト');
  ptag.appendChild(np);
  prt.appendChild(ptag);
}
// 問題12：ノード削除
// 削除ボタンをクリックしたとき、id属性parentの子要素を削除してください。
function change_btn3(){
  var prt = document.getElementById("parent");
  prt.parentNode.removeChild(prt);
}
// 問題13：属性取得・変更
// 変更ボタンをクリックしたとき、id属性link1のhref属性を取得し、コンソールに表示してください。またhref属性を「https://www.yahoo.co.jp」に書き換えてください。
var link1 = document.getElementById("link1");
function change_btn4(){
  link1.href = "https://www.yahoo.co.jp";
}

// 問題14：クエリーセレクター / カスタム属性 / this
// querySelectorAllを使い、id属性list1の子要素のliを全て取得してください。
// liをクリックしたとき、カスタム属性numの値を取得し、コンソールに表示してください。
// その場合、クリックした要素のカスタム属性のみ取得すること。
// 例 list２のliをクリックしたときはコンソールに「2」を表示する
var list1 = document.querySelectorAll('#list1 li');
for (var i = 0; i < list1.length; i++) {
  console.log(list1[i].id);
list1[i].addEventListener('click', function(){
console.log(this.dataset.num);
});
};
// 問題15-1：クラスの操作(追加)
// 追加ボタンをクリックしたとき、id属性txt7にクラスredを追加してください。
function change_btn5(){
  var txt7 = document.getElementById("txt7");
  txt7.classList.add("red");
}
// 問題15-2：クラスの操作(削除)
// 削除ボタンをクリックしたとき、id属性txt7にクラスredを削除してください。
function change_btn6(){
  var txt7 = document.getElementById("txt7");
  txt7.classList.remove("red");
}
// 問題15-3：クラスの操作(切り替え)
// 切り替えボタンをクリックしたとき、id属性txt7にクラスredがあれば削除し、なければ追加してください。
function change_btn7(){
  var txt7 = document.getElementById("txt7");
  txt7.classList.contains("red");
  txt7.classList.toggle("red");
}