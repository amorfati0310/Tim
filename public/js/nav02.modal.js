var login_btn = document.querySelector('.login');
var signup_btn = document.querySelector('.signup');
var wrapper = document.querySelector('.wrapper');
var body = document.querySelector('body');
var modal_box = document.querySelector('.modal-box');
var btn_modal_close = document.querySelector('.btn-modal-close');

modal_box.classList.add('off');
var login_box = document.querySelector('.login-box');
var singup_box = document.querySelector('.signup-box');

//  함수로 loginbox를 키고 signup-box를 끄는게 맞나?


var loginActive = function(){
  // login_box.classList.('off');
  // signup_box.classList.add('off');
}
var SingupActive = function(){

  modal_box.classList.add('off');
}
//import 시켜서 공통으로 쓸 수 있게 해야 됨 !
var modalColse = function(){
  var modal_box = document.querySelector('.modal-box');
  modal_box.classList.add('off');
}

login_btn.addEventListener("click", function(){
  modal_box.classList.remove('off');
});

btn_modal_close.addEventListener("click", function(){

  modal_box.classList.add('off');
});

//이슈 모달창만 클릭하면 꺼지게 하고 싶은데... 모달이 부모여서 아무데나 누르면 꺼짐 !!!
// modal_box.addEventListener("click", function(){
//   modal_box.classList.add('off');
// });
