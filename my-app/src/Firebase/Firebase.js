import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDn8_RSJGxVk6bWHzbsQxbiHAGBN3H6oPM",
    authDomain: "app-react-b5f2c.firebaseapp.com",
    projectId: "app-react-b5f2c",
    storageBucket: "app-react-b5f2c.appspot.com",
    messagingSenderId: "157547833286",
    appId: "1:157547833286:web:4cfa5791cf960fb3f8b4c7"
})

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}

