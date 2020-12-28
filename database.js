import firebase from 'firebase';

const config =  {
	apiKey: "AIzaSyCqL4xiJxTJCRc5kNEFCIufI1Yt717syAw",
    authDomain: "suvridhi-9a7c7.firebaseapp.com",
    projectId: "suvridhi-9a7c7",
    storageBucket: "suvridhi-9a7c7.appspot.com",
    messagingSenderId: "501166761008",
    appId: "1:501166761008:web:fa4a06d48147cfe2a5b9f5",
    measurementId: "G-QLHRFGDMQ6"
};
var app;
if( firebase.apps.length === 0 ){
	app= firebase.initializeApp(config);
}
const db=app.database();

export default db;