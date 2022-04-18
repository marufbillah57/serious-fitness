// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,


  apiKey: "AIzaSyCwNZ4n_hWVLxuMzF7FivbAPNiGf1rV8wA",
  authDomain: "serious-fitness.firebaseapp.com",
  projectId: "serious-fitness",
  storageBucket: "serious-fitness.appspot.com",
  messagingSenderId: "584442694462",
  appId: "1:584442694462:web:0383d5e1321c118efb3a6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;