import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD6Ef_i8r-Dlxf9M-lo5Zm2QpPkvL-Kfg8",
    authDomain: "proyecto-mud.firebaseapp.com",
    projectId: "proyecto-mud",
    storageBucket: "proyecto-mud.appspot.com",
    messagingSenderId: "260237684129",
    appId: "1:260237684129:web:e87963c6966b8389a16fe0",
    measurementId: "G-TPRDQTTKR7"
  };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const storage = firebase.storage();
    const firestore = firebase.firestore();

export { storage,firebase }