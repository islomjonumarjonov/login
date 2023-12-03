import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCz0jFkoc55TSxJO2jVrhhvAeBe3Bxmj4",
  authDomain: "aasa-43607.firebaseapp.com",
  projectId: "aasa-43607",
  storageBucket: "aasa-43607.appspot.com",
  messagingSenderId: "713294030807",
  appId: "1:713294030807:web:b89d5198c4899d9099cd92",
  measurementId: "G-KNJEBVHZ9E",
};

const app = initializeApp(firebaseConfig);

//Installize
const auth = getAuth(app);
export { auth };
