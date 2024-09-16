

import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiNJ0dRcI7oR61cSoEOVvc5KLMPovEj1k",
  authDomain: "react-todoapp-1da36.firebaseapp.com",
  projectId: "react-todoapp-1da36",
  storageBucket: "react-todoapp-1da36.appspot.com",
  messagingSenderId: "366653393989",
  appId: "1:366653393989:web:7af67f6ef0e12d5e4fe72c",
  measurementId: "G-HB6WT5B2W7"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
