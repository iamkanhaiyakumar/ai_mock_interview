// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Ky3KWtgtlaok3dRTazr2YiaiImD7-OA",
  authDomain: "oggyprepwise.firebaseapp.com",
  projectId: "oggyprepwise",
  storageBucket: "oggyprepwise.firebasestorage.app",
  messagingSenderId: "253014388897",
  appId: "1:253014388897:web:111dab214c226b303480e0",
  measurementId: "G-37SRY84K0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);