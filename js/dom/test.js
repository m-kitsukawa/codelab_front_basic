// 問題5：イベント(サブミット) / フォーム部品の取得(テキスト)
// 送信ボタンをクリックしたとき、フォーム部品(id属性input1のvalue)の値を取得し、id属性txt5に出力してください。
  var txt5 = document.getElementById("txt5");
  var form1 = document.getElementById("form1");
  form1.addEventListener('submit', function(e){
    txt5.innerHTML = document.getElementById("input1").value;
    //return false; //submitを中断
    e.preventDefault();
  }, false);
// 問題6：フォーム部品の取得(セレクトボックス)
// 送信ボタンをクリックしたとき、セレクトボックス(name属性item1のvalue)の選択中の値を取得し、id属性result1に出力してください。
var form2 = document.getElementById("form2");
form2.addEventListener('submit', function(e){
    //return false; //submitを中断
    e.preventDefault();
    var item1 = document.form2.item1;
    var num = item1.selectedIndex;
    var str = item1.options[num].value;
    var result = document.getElementById("result").innerHTML;
    result.innerHTML = str;
//    document.getElementById("result1").innerHTML = str;
//    result.innerHTML = document.getElementById("result").innerHTML;
}, false);


// 問題7：フォーム部品の取得(チェックボックス)
// 送信ボタンをクリックしたとき、チェックボックス(name属性item1のvalue)の選択中の値を取得し、id属性result2に出力してください。


// 問題8：フォーム部品の取得(ラジオ)
// 送信ボタンをクリックしたとき、ラジオボタン(name属性item1のvalue)の選択中の値を取得し、id属性result3に出力してください。


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