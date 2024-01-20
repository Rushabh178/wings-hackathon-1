import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDmMCUKvjWYGrPK_AneiRlHsFYOP6bhwMA",
    authDomain: "chat-bot-7b870.firebaseapp.com",
    projectId: "chat-bot-7b870",
    storageBucket: "chat-bot-7b870.appspot.com",
    messagingSenderId: "126726137053",
    appId: "1:126726137053:web:d0eb2ceea24509c0732734"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



 
  // google
  const googleLogin = document.getElementById("google_sign_up");
  googleLogin.addEventListener("click", function(){
    const auth = getAuth();
    auth.languageCode = 'en';
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user; 
    console.log(user);
    window.location.href = "chat.html"
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  })
});


//twitter login
const twitterLogin = document.getElementById("twitter_sign_up");
twitterLogin.addEventListener("click", function () {  
const auth = getAuth();
auth.languageCode = 'en';
const provider = new TwitterAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;
    const user = result.user;
    console.log(user);
    window.location.href = "chat.html"
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = TwitterAuthProvider.credentialFromError(error);

  });})