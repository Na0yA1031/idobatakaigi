import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYRMtB1woZ-9Rv-br4bfGsJOOhbgvLXAE",
    authDomain: "idobatakaigi-with-nao.firebaseapp.com",
    projectId: "idobatakaigi-with-nao",
    storageBucket: "idobatakaigi-with-nao.appspot.com",
    messagingSenderId: "717340749563",
    appId: "1:717340749563:web:70262c39664d0c1eaf0a5e"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
    messagesRef.push({ name, text })
}