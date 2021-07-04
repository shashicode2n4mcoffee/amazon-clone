import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyAaUjjOQCzIBOLZw-P8NUh4BSTZeznF4vY',
  authDomain: 'clone-29563.firebaseapp.com',
  projectId: 'clone-29563',
  storageBucket: 'clone-29563.appspot.com',
  messagingSenderId: '1096419879070',
  appId: '1:1096419879070:web:05f4cf98d86613ed49338f',
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
export const auth = firebase.auth()
