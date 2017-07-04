var login_btn = document.querySelector('.login');
var signup_btn = document.querySelector('.signup');
var wrapper = document.querySelector('.wrapper');
var body = document.querySelector('body');
var modal_box = document.querySelector('.modal-box');

console.log(modal_box);
login_btn.addEventListener("click", function(){
  modal_box.classList.remove('off');
});


//이슈 모달창만 클릭하면 꺼지게 하고 싶은데... 모달이 부모여서 아무데나 누르면 꺼짐 !!!  
// modal_box.addEventListener("click", function(){
//   modal_box.classList.add('off');
// });
