import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2--PlsRk4aamNABqFw7LijO7fgqaybFc",
  authDomain: "tenedores-b70f0.firebaseapp.com",
  projectId: "tenedores-b70f0",
  storageBucket: "tenedores-b70f0.appspot.com",
  messagingSenderId: "438271889248",
  appId: "1:438271889248:web:b928ffb7a46dc974015805"
};

export const initFirebase = initializeApp(firebaseConfig);