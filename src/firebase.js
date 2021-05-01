import firebase from 'firebase';

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyDSiuH7A_zus7hQNrLrh_ae2wnIDLBFvm4",
    authDomain: "todo-app-firebase-d3a0b.firebaseapp.com",
    projectId: "todo-app-firebase-d3a0b",
    storageBucket: "todo-app-firebase-d3a0b.appspot.com",
    messagingSenderId: "538126725817",
    appId: "1:538126725817:web:bb88d3515af204deb96168",
    measurementId: "G-67ECRW75S1"
});

const db = firebaseApp.firestore();
export default db;