"use strict";
(function() {
  var btn = document.getElementById("answer");
  btn.addEventListener("click", function(e) {
    //解答ボタンを押したら（メソッド）、for文でラジオボタン（checked==true）で何が選択されているかを調べる
    function checked_btn() {
      const q1 = document.getElementsByName("question1");
      const q2 = document.getElementsByName("question2");
      const q3 = document.getElementsByName("question3");
      //解答value値格納用
      var q1_a = "";
      var q2_a = "";
      var q3_a = "";

      for (var i = 0; i < q1.length; i++) {
        if (q1[i].checked === true) {
          //選択されているvalue値を変数にいれる
          q1_a = q1[i].value;
          break;
        }
      }
      for (var i = 0; i < q2.length; i++) {
        if (q2[i].checked === true) {
          //選択されているvalue値を変数にいれる
          q2_a = q2[i].value;
          break;
        }
      }
      for (var i = 0; i < q3.length; i++) {
        if (q3[i].checked === true) {
          //選択されているvalue値を変数にいれる
          q3_a = q3[i].value;
          break;
        }
      }
      // 正答率
      var result = document.getElementById("result");
      var answer = 0;
      var seikai = 100/3;
      if(q1_a == 2){
        answer += seikai;
      }
      if(q2_a == 3){
        answer += seikai;
      }
      if(q3_a == 2){
        answer += seikai;
      }else{
        answer += 0;
      }
      var kirisute = Math.floor(answer);
      result.innerHTML = "正答率は"+kirisute+"%です";

      //モーダルにshow classを追加してマスクについてるhiddenを消す
      var class_add = document.getElementById("modal");
      var list1 = class_add.classList;
      class_add.classList.add("show");

      var class_mask = document.getElementById("mask");
      var list2 = class_mask.classList;
      class_mask.classList.remove("hidden");

      // 閉じる
      var class_close = document.getElementById("close");
      var list3 = class_close.classList;
      class_close.addEventListener("click", function() {
        mask.classList.add("hidden");
        modal.classList.remove("show");
      });
      class_mask.addEventListener("click", function() {
        mask.classList.add("hidden");
        modal.classList.remove("show");
      });
    }
    checked_btn();
    e.preventDefault();
    return false;
  });
})();
//とってきた値を照合する（if文でカウント（インクリメント）する）
//モーダルにshow classを追加してマスクについてるhiddenを消す
