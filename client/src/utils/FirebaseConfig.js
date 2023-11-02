import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAUItn-xXzGVAYJevLg4Qg4hcZtW731-S4",
  authDomain: "whatsappclone-b9a76.firebaseapp.com",
  projectId: "whatsappclone-b9a76",
  storageBucket: "whatsappclone-b9a76.appspot.com",
  messagingSenderId: "436487604940",
  appId: "1:436487604940:web:fd5d841642b1d385d65069",
  measurementId: "G-PV719QTMNX",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
