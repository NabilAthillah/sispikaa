import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-ysQBgnsEf4QkGkFnDye1Ez8CrtyMXrU",
  authDomain: "smartirrigation-c6633.firebaseapp.com",
  databaseURL: "https://smartirrigation-c6633-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "smartirrigation-c6633",
  storageBucket: "smartirrigation-c6633.appspot.com",
  messagingSenderId: "908039459056",
  appId: "1:908039459056:web:cca8bf32f6f8371a693235",
  measurementId: "G-G49S5B4C4J"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database }