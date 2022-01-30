// const firebase = require('firebase/app');
const { initializeApp } = require("firebase/app");
var firebase = require("firebase/app");

// const firebaseConfig = {
//     apiKey: "AIzaSyC6Y2pKv2B6OpLeJZEB3EHzxPDBQcsy6o4",
//     authDomain: "news-b8a71.firebaseapp.com",
//     projectId: "news-b8a71",
//     storageBucket: "news-b8a71.appspot.com",
//     messagingSenderId: "293366423347",
//     appId: "1:293366423347:web:8bcce449c26775301ba846"
// };


// initializeApp(firebaseConfig); // Initialize Firebase

// Get the current user
function getCurrentUser() {
    return firebase.auth().currentUser;
}



// login with email and password
function logIn(email, password) {
    try {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
        console.log(error);
    }
}

function registerUser(email, password) {
    try {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
        console.log(error);
    }
}

function logOut() {
    return firebase.auth().signOut();
}

module.exports = {
    logIn,
    registerUser,
    logOut,
    getCurrentUser
};







