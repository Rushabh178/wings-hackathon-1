import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword }from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
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
const emailLogin = document.getElementById("email-sign-up");
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;

  emailLogin.addEventListener("click",function(){
  const auth = getAuth();
  auth.languageCode = 'en';
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
    window.location.href = "chat.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const message = document.getElementById("message");
    message.style.display = "block";
    setTimeout(function(){
      message.style.display = "none";
    }, 2000);
  });
  })
