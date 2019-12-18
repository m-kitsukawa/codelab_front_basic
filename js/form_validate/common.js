function formCheck(){
  var flag = 0;

  // 入力必須項目が入力されているかチェック
  var form = document.getElementsById("form");
  var name = document.getElementsByName("name");
  if (document.getElementByName('name').value == "") {
    var errname = document.getElementsById("err-name");
    errname.innerHTML = '名前が未入力です。';
    e.preventDefault();
    flag = 1;
     }
  else{
      }
    }
  var submit = document.getElementsById("submit");
  submit.addEventListener('submit', function(e){
  if(flag){ // 入力必須項目に未入力があった場合
      window.alert( '必須項目は全て入力して下さい。' ); // 一旦アラートを表示
      return false; // 送信中止
  }else{ // 入力必須項目が全て入力済みだった場合
      return true; // 送信実行

  }
}, false);