//버튼 정보 받아오기!
var btn_google_login = document.querySelector('.google-login');
var btn_facebook_login = document.querySelector('.facebook-login');
var btn_login = document.querySelector('.btn-login');
var btn_signup = document.querySelector('.btn-signup');

var auth = firebase.auth();

var provider_google = new firebase.auth.GoogleAuthProvider();
var provider_facebook = new firebase.auth.FacebookAuthProvider();
// window.onload = function () {
//   login_btn.addEventListener('click', EmailLogin);
//   btn_google_login.addEventListener('click',  GoogleLogin);
// };

var id_input = document.querySelector('#user-email');
var pw_input = document.querySelector('#user-pw');

var modalColse = function(){
  console.log("안녕");
  var modal_box = document.querySelector('.modal-box');
  console.log(modal_box);
  modal_box.classList.add('off');
}




function EmailLogin() {
  var user_info = getIdPw();
  console.log("유저정보 잘 가지고 오나?",user_info);

  firebase.auth().signInWithEmailAndPassword(user_info.user_email, user_info.user_pw).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("에러났다!!!!");
    // ...
  }).then(function(user){
    console.log(user);
    clearForm();
    modalColse();
    alert("The account " + user.email + " has been registered in Authentication");
  });
}
// }).then(
//   // GetUserInfo();
// )};

function GetUserInfo(){

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
  console.log("유저 정보들",name,email,photoUrl,uid);
}

}

var firebaseSignInwithFacebook = function(){
  firebase.auth().signInWithPopup(provider_facebook).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}


var firebaseSignInWithGoogle = function () {
  firebase.auth().signInWithPopup(provider_google).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(result);
    console.log("token : ", token);
    console.log("user : ", user);
    modalColse();
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log("errorCode: " + errorCode + ". errorMessage : " + errorMessage + ". email : " + email);
  });
};


function getIdPw(){
  var user_info = {
    user_email: id_input.value,
    user_pw: pw_input.value
  };
  return user_info;
}


function GoogleLogin(){

}


function clearForm(){
  id_input.value ="";
  pw_input.value ="";

}
//버튼 클릭되면
btn_login.addEventListener('click', EmailLogin);
btn_google_login.addEventListener('click', firebaseSignInWithGoogle);
btn_facebook_login.addEventListener('click', firebaseSignInwithFacebook);
