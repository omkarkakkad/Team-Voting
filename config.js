import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyDuh_3wMNAXTGgi3JFl7n6NDy4UQxcuv8c',
    authDomain: 'teamvoting-ae535.firebaseapp.com',
    databaseURL: 'https://teamvoting-ae535-default-rtdb.firebaseio.com',
    projectId: 'teamvoting-ae535',
    storageBucket: 'teamvoting-ae535.appspot.com',
    messagingSenderId: '85909018793',
    appId: '1:85909018793:web:fe4eca3dfde1b6c606b1b8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();