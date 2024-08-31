import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
    apiKey: "AIzaSyDCcUTE2nROkLrebv_9_QCfTaLR6pL05bo",
    authDomain: "jsfutbol-cdf8d.firebaseapp.com",
    projectId: "jsfutbol-cdf8d",
    storageBucket: "jsfutbol-cdf8d.appspot.com",
    messagingSenderId: "466782058794",
    appId: "1:466782058794:web:972ac4452aa1d56e800653"
    };

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);