import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDQmI7IVNMcev-FCOYsATuMZkER_-_EyUw",
    authDomain: "ecommerce-6c69e.firebaseapp.com",
    projectId: "ecommerce-6c69e",
    storageBucket: "ecommerce-6c69e.appspot.com",
    messagingSenderId: "991454038241",
    appId: "1:991454038241:web:954810964c3f71e1770fa0",
    measurementId: "G-37WHYL090C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;