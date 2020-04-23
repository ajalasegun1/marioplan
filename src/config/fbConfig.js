import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCj-OgE9oiZV9J94vOrsWPLM_7P89TG46U",
  authDomain: "netninja-mario-plan-a59a0.firebaseapp.com",
  databaseURL: "https://netninja-mario-plan-a59a0.firebaseio.com",
  projectId: "netninja-mario-plan-a59a0",
  storageBucket: "netninja-mario-plan-a59a0.appspot.com",
  messagingSenderId: "938514573138",
  appId: "1:938514573138:web:7857f249efeef0d3db3c8b",
  measurementId: "G-KT1FWH9F7C",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()



export default firebase