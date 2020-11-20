import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBB4OIwNu_nz5aNPY4N93n4uAuv21p3PyY",
    authDomain: "instagram-clone-react-63117.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-63117.firebaseio.com",
    projectId: "instagram-clone-react-63117",
    storageBucket: "instagram-clone-react-63117.appspot.com",
    messagingSenderId: "5772532597",
    appId: "1:5772532597:web:949cad1479767cfbbad13c",
    measurementId: "G-PYE6QKSSRB"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }