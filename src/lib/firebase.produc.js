import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import {seedDatabase} from '../seed'

//we need seed database
//we need config

const config ={
    apiKey: "AIzaSyDniCOH2AJU7vRCfKeA7pDVKxPeNLcmrx8",
    authDomain: "netflix-clone-ee6e7.firebaseapp.com",
    projectId: "netflix-clone-ee6e7",
    storageBucket: "netflix-clone-ee6e7.appspot.com",
    messagingSenderId: "249759948561",
    appId: "1:249759948561:web:36bf0a06be396c814b76b0",
    measurementId: "G-KHYRHCC77J"
}

const firebase = Firebase.initializeApp(config);



export { firebase };