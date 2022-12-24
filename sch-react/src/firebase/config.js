// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9_EUkQYaHQRNqpgSufM9XJbE01JV_DK8",
  authDomain: "ecommerce-sch.firebaseapp.com",
  projectId: "ecommerce-sch",
  storageBucket: "ecommerce-sch.appspot.com",
  messagingSenderId: "116873591322",
  appId: "1:116873591322:web:623a30e9fd55bb5b462fa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app