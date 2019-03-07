import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA7FX5hrEStDVQQVmFeuT6eGLnhAE1Vv_I",
  authDomain: "plantwater-60d84.firebaseapp.com",
  databaseURL: "https://plantwater-60d84.firebaseio.com",
  projectId: "plantwater-60d84",
  storageBucket: "plantwater-60d84.appspot.com",
  messagingSenderId: "123494582330"
};
const fire = firebase.initializeApp(config);
export default fire;