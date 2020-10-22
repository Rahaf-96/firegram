import * as firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCofODsQw1nWGo79yOP16l_P2_RujBFrho',
  authDomain: 'firegram-cb001.firebaseapp.com',
  databaseURL: 'https://firegram-cb001.firebaseio.com',
  projectId: 'firegram-cb001',
  storageBucket: 'firegram-cb001.appspot.com',
  messagingSenderId: '825506474476',
  appId: '1:825506474476:web:dc1692d57876564d57b8c9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
