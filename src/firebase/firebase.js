import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyANq_5Empe-S8g9911b24dVDnqDOAQIMzo',
  authDomain: 'vue-geo-coders.firebaseapp.com',
  databaseURL: 'https://vue-geo-coders.firebaseio.com',
  projectId: 'vue-geo-coders',
  storageBucket: 'vue-geo-coders.appspot.com',
  messagingSenderId: '859649483256',
  appId: '1:859649483256:web:24856e4ea3e072baadb60d'
};

//  Initialize firebase if there's no app initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.database();
export const firestore = firebase.firestore();
