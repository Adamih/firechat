import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/performance';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCDA9Qp7dwiCXgTzb9VgLRJ6qQ2o9YQOZU',
  authDomain: 'firechat-f499d.firebaseapp.com',
  projectId: 'firechat-f499d',
  appId: '1:473536506555:web:42da72166a9cfa950c579e',
  measurementId: 'G-37B49PCQ59',
});

export const db = app.firestore();
export const auth = app.auth();
export default firebase;
