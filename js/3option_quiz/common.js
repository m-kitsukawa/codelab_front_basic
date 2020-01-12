"use strict";
(function() {
  var btn = document.getElementById("answer");
  btn.addEventListener("click", function(e) {
    var q1 = document.getElementsByName("question1").value;
    var q2 = document.getElementsByName("question2").value;
    var q3 = document.getElementsByName("question3").value;
    e.preventDefault();
    // if(document.q1[2].checked){
    if (q1.value.checked == 2) {
      alert("選択されました");
    }
    return false;
  });
})();
//解答ボタンを押したら（メソッド）、for文でラジオボタン（checked==true）で何が選択されているかを調べる
//選択されているvalue値を変数にいれる
//とってきた値を照合する（if文でカウント（インクリメント）する）
//モーダルにshow classを追加してマスクについてるhiddenを消す
