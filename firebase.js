import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDX1JL67-olB_vgQ7aRD2AN4TIbVu4XHGg',
  authDomain: 'signal-clone-daca3.firebaseapp.com',
  projectId: 'signal-clone-daca3',
  storageBucket: 'signal-clone-daca3.appspot.com',
  messagingSenderId: '597337316201',
  appId: '1:597337316201:web:5535a53c8750c3f35fbbf8',
};
let app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const timestamp = () => firebase.firestore.FieldValue.serverTimestamp();
export { db, auth, timestamp };
