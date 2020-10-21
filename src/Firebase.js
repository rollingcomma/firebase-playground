import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBRrrYr1bgq3rG1JwTjqoblHTO6b-Q5fdc",
  authDomain: "live-chat-c8d7b.firebaseapp.com",
  databaseURL: "https://live-chat-c8d7b.firebaseio.com",
  projectId: "live-chat-c8d7b",
  storageBucket: "live-chat-c8d7b.appspot.com",
  messagingSenderId: "712878854090",
  appId: "1:712878854090:web:8a20db271a9a3dcc15c933"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();