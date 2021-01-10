// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCg7Y_5xEvrd8Xn2xFbJiffFMuzOVgtv0U",
    authDomain: "nwhacks-2021.firebaseapp.com",
    projectId: "nwhacks-2021",
    storageBucket: "nwhacks-2021.appspot.com",
    messagingSenderId: "455525571397",
    appId: "1:455525571397:web:b49755cc3476fb5e99bc2c",
    measurementId: "G-BJVNYS53F7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();