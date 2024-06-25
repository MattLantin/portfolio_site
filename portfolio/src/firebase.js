import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDQ3WV8lVd9oa6ne-KMfpRmM3OBPiGXc6Q",
    authDomain: "mattlantin-89259.firebaseapp.com",
    projectId: "mattlantin-89259",
    storageBucket: "mattlantin-89259.appspot.com",
    messagingSenderId: "264268118441",
    appId: "1:264268118441:web:b71f9d7f22a97282a26cb8",
    measurementId: "G-P9SF68R5HK"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  
