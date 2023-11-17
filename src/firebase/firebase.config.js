// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBc22CgbZfi7IG-jx5q8B0KOlGiHary8RY",
    authDomain: "react-dragon-news-auth-2a172.firebaseapp.com",
    projectId: "react-dragon-news-auth-2a172",
    storageBucket: "react-dragon-news-auth-2a172.appspot.com",
    messagingSenderId: "1000681501125",
    appId: "1:1000681501125:web:78dad0542cb18d2c515bac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;