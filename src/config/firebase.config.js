import {initializeApp, getApp, getApps} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBDis3lxwlNPAvI7R1dvHB5pQ8n5_S6-Yg",
    authDomain: "react-portfolio-project-29477.firebaseapp.com",
    projectId: "react-portfolio-project-29477",
    storageBucket: "react-portfolio-project-29477.appspot.com",
    messagingSenderId: "930685530040",
    appId: "1:930685530040:web:5c74d4767e36ddc9c3694d",
    measurementId: "G-VW89F9N57X"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {app, db};