import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDEIGj6mYxYpVCfwQSA8GwqS1IapNyCRBA",
    authDomain: "moviesapp-57fbb.firebaseapp.com",
    projectId: "moviesapp-57fbb",
    storageBucket: "moviesapp-57fbb.appspot.com",
    messagingSenderId: "375122766805",
    appId: "1:375122766805:web:5e28dbcf7b0fbcbc60eb5c"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export  {
    db
  }