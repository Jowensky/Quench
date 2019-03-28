import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCDkQEG2X82na5YtN5ps6AWUOJbxSUQA8o",
  authDomain: "quench-60887.firebaseapp.com",
  databaseURL: "https://quench-60887.firebaseio.com",
  projectId: "quench-60887",
  storageBucket: "quench-60887.appspot.com",
  messagingSenderId: "738912737991"
};
const fire = firebase.initializeApp(config);
export default fire;


