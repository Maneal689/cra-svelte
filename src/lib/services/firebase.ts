import { getApps, getApp, initializeApp } from "firebase/app";
// import "firebase/analytics";
// import "firebase/firestore";
// import "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs8tLLke_QlWtxU0vinZWnNo2VDqzrJTk",
  authDomain: "activityreport-298f7.firebaseapp.com",
  projectId: "activityreport-298f7",
  storageBucket: "activityreport-298f7.appspot.com",
  messagingSenderId: "1066914148478",
  appId: "1:1066914148478:web:4f1a49ade2f2fa96d9e82f",
  databaseURL: "activityreport-298f7.eur3.firebasedatabase.app"
};

let app = null;

if (getApps().length > 0) {
  app = getApps()[0];
} else {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
// export const db = firebase.firestore();
// export const storage = firebase.storage();
// export const firestore = firebase.firestore;
