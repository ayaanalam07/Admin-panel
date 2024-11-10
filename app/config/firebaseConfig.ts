import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCVAS1P4mFRyyAORwHP7jNZVc0EbwTLD_s",
  authDomain: "indrive-app-clone-bd966.firebaseapp.com",
  projectId: "indrive-app-clone-bd966",
  storageBucket: "indrive-app-clone-bd966.firebasestorage.app",
  messagingSenderId: "11472100806",
  appId: "1:11472100806:web:833225e0c6008614cf66c7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
