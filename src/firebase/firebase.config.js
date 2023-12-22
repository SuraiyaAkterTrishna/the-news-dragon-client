// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1I20hlcz91J9_o3BtYPQ-j-c1Nbrx8WM",
  authDomain: "the-news-dragon-client-78728.firebaseapp.com",
  projectId: "the-news-dragon-client-78728",
  storageBucket: "the-news-dragon-client-78728.appspot.com",
  messagingSenderId: "254263489502",
  appId: "1:254263489502:web:fa1c33f7a8326bd032e34f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;