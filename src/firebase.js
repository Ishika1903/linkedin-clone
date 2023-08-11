import firebase from "./firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyCtJkV52cLl2ticUupo6oTo9npcaJA9gEE",
    authDomain: "linkedin-clone-b163e.firebaseapp.com",
    projectId: "linkedin-clone-b163e",
    storageBucket: "linkedin-clone-b163e.appspot.com",
    messagingSenderId: "330180322257",
    appId: "1:330180322257:web:e7793e6062d11e5af1b6f0",
    measurementId: "G-NV9YTGF865"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };

  export default db;