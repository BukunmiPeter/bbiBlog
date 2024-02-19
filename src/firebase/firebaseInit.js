import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBu6evh-pOLkE3nPs8VKLH1lj9abLEGRvc",
  authDomain: "innovate-f2e86.firebaseapp.com",
  projectId: "innovate-f2e86",
  storageBucket: "innovate-f2e86.appspot.com",
  messagingSenderId: "239582086243",
  appId: "1:239582086243:web:bea40bf7af97efb21de456"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();