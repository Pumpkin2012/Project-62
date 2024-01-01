import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4JBSlCUiNaxPtkAiOkRZe7MJvphg-hBE",
  authDomain: "project-60-63372.firebaseapp.com",
  databaseURL: "https://project-60-63372-default-rtdb.firebaseio.com",
  projectId: "project-60-63372",
  storageBucket: "project-60-63372.appspot.com",
  messagingSenderId: "156207903803",
  appId: "1:156207903803:web:cbcfe402e9768aa483181e"
};


if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.database()