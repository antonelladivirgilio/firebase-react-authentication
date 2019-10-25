import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDxJR-koHviA-ioRsf-YF9nds4ny1zlEuo",
  authDomain: "album-d666c.firebaseapp.com",
  databaseURL: "https://album-d666c.firebaseio.com",
  projectId: "album-d666c",
  storageBucket: "album-d666c.appspot.com",
  messagingSenderId: "964553550668",
  appId: "1:964553550668:web:c1fbac36214eace63b7de9",
  measurementId: "G-4MY91TC5WY"
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase;
