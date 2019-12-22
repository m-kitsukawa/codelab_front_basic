(function(){//即時関数　スコープ
  // 入力必須項目が入力されているかチェック
  var form = document.getElementById("form");
  var name = document.getElementsByName("name");
  var errname = document.getElementById("err-name");

  form.addEventListener('submit', function(e){
    errname.innerHTML = "";
   // if (name[0].value == "") {
    if (form.name.value == "") {
      errname.innerHTML = '名前が未入力です。';
      e.preventDefault();
       }else {
         console.log("else");
       }
}, false);
}());

//　booleanで真偽値
// function formCheck(){ on Click buttonで発動する
// hogehogehogeは配列みたいなやつを使う。単体はform.みたいに明示する
