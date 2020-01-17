"use strict";
(function() {
  var btn = document.getElementById("answer");
  btn.addEventListener("click", function(e) {
//解答ボタンを押したら（メソッド）、for文でラジオボタン（checked==true）で何が選択されているかを調べる
    function checked_btn(){
      const q1 = document.getElementsByName("question1").value;
      const q2 = document.getElementsByName("question2").value;
      const q3 = document.getElementsByName("question3").value;
      //解答value値格納用
      var q1_a = "";
      var q2_a = "";
      var q3_a = "";

      for(var i = 0; i < q1.length; i++){
        if(q1[i].checked === true){
          //選択されているvalue値を変数にいれる
          q1_a = q1[i].value;
          break;
        }
      }
      for(var i = 0; i < q2.length; i++){
        if(q2[i].checked === true){
          //選択されているvalue値を変数にいれる
          q2_a = q2[i].value;
          break;
        }
      }
      for(var i = 0; i < q3.length; i++){
        if(q3[i].checked === true){
          //選択されているvalue値を変数にいれる
          q3_a = q3[i].value;
          break;
        }
      }
      //モーダルにshow classを追加してマスクについてるhiddenを消す
      var class_add = document.getElementById("modal");
      var list = class_add.classList;
      class_add.classList.add("show");
    }
    checked_btn();
    e.preventDefault();
    return false;
  });
})();
//とってきた値を照合する（if文でカウント（インクリメント）する）
//モーダルにshow classを追加してマスクについてるhiddenを消す
