(function() {
  //即時関数　スコープ
  // 入力必須項目が入力されているかチェック
  var form = document.getElementById("form");
  //名前未入力用
  var name = document.getElementsByName("name");
  var errname = document.getElementById("err-name");
  //全角カタカナ用
  var kana = document.getElementsByName("kana");
  var errkana = document.getElementById("err-kana");
  //電話番号用
  var tel = document.getElementsByName("tel");
  var errtel = document.getElementById("err-tel");
  //メールアドレス用
  var mail = document.getElementsByName("mail");
  var errmail = document.getElementById("err-mail");

  form.addEventListener(
    "submit",
    function(e) {
      //名前未入力用
      errname.innerHTML = "";
      // if (name[0].value == "") {
      if (form.name.value == "") {
        errname.style.color = '#dc143c';
        errname.innerHTML = "名前が未入力です。";
        e.preventDefault();
      } else {
        console.log("else");
      }
      //全角カタカナ未入力用
      //デバッグはいけてそうだが定義ができてない…？
      var str = "アイウエオワイウエオン";
      var kanachk = /^([ァ-ン]|ー)+$/;
      errkana.innerHTML = "";
      errkana.style.color = '#dc143c';
      if (form.kana.value == "") {
        errkana.innerHTML = "全角カタカナが未入力です。";
        e.preventDefault();
        // } else if (form.kana.value == str.match(kanachk)) {
      } else if (form.kana.value == str.match(/^[\u30A0-\u30FF]+$/)) {
        errkana.innerHTML = "全角カタカナが未入力です。";
        e.preventDefault();
      } else {
        console.log("else");
      }
      //電話番号未入力用
      //デバッグはいけてそうだが定義ができてない…？
      var str = "123456";
      var telchk = /^\d{10}$/;
      errtel.innerHTML = "";
      errtel.style.color = '#dc143c';
      if (form.tel.value == "") {
        errtel.innerHTML = "半角数字が未入力です。";
        e.preventDefault();
      } else if (form.tel.value == str.match(telchk)) {
        errtel.innerHTML = "半角数字が未入力です。";
        e.preventDefault();
      } else {
        console.log("else");
      }
      //メールアドレス未入力用
      //デバッグはいけてそうだが定義ができてない…？
      var str = "123456";
      var mailchk = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      errmail.innerHTML = "";
      errmail.style.color = '#dc143c';
      if (form.mail.value == "") {
        errmail.innerHTML = "メールアドレスが未入力です。";
        e.preventDefault();
      } else if (form.mail.value == str.match(mailchk)) {
        errmail.innerHTML = "メールアドレスが未入力です。";
        e.preventDefault();
      } else {
        console.log("else");
      }
    },
    false
  );
})();

//　booleanで真偽値
// function formCheck(){ on Click buttonで発動する
// hogehogehogeは配列みたいなやつを使う。単体はform.みたいに明示する
