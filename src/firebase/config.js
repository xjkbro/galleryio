import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDROQfNz6R1puQoDgqIz6YtuJ0mydXuBbU",
    authDomain: "galleryio-844c0.firebaseapp.com",
    projectId: "galleryio-844c0",
    storageBucket: "galleryio-844c0.appspot.com",
    messagingSenderId: "608565928469",
    appId: "1:608565928469:web:45e48427df6a6e4907a41c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
