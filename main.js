import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getFirestore, collection, getDocs, setDoc, getDoc, doc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


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
const auth = getAuth(app)

let x = 2


const userName = document.querySelector('span')
const container = document.querySelector('#container')
const li = document.querySelectorAll('li')
const logOut = document.querySelector('button')

const favorites = ['Titanic', 'Titanic 2', 'Titanic 3']



const print = (user) => {
    if (user) {
        userName.innerText = user.name
        li.forEach((e, i) => e.innerText = favorites[i])
    }
}


document.querySelector('#signup').addEventListener('submit', async (event) => {
    console.clear()
    event.preventDefault()




    await createUserWithEmailAndPassword(auth, event.target.email.value, event.target.password.value)
        .then(res => {
            console.log(res);
            setDoc(doc(db, 'users', res.user.uid), {
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value,
                favorites: favorites
            })

        })
        .catch(err => console.log(err, 'ERROR'))

    document.querySelector('#signup').reset()



})


document.querySelector('#signin').addEventListener('submit', async (event) => {
    console.clear()
    event.preventDefault()
    await signInWithEmailAndPassword(auth, event.target.email.value, event.target.password.value)
        .catch((error) => {
            console.log('ERROR', error);
        });

    document.querySelector('#signin').reset()

})

logOut.addEventListener('click', () => {
    signOut(auth).then(res => console.log('Usuario fueraaaaa'))
    userName.innerText = ''
    li.forEach((e, i) => e.innerText = '')
})




onAuthStateChanged(auth, async (user) => {

    if (user) {
        user = await getDoc(doc(db, 'users', user.uid)).then(res => res.data())
        print(user)
        // ...
    } else {
        print(user)
        // User is signed out
        // ...
    }
});
