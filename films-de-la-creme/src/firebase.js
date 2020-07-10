import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBdj9m79OLoOIWdCu8r52bRgpD5dS1xzLU",
    authDomain: "films-de-la-creme.firebaseapp.com",
    databaseURL: "https://films-de-la-creme.firebaseio.com",
    projectId: "films-de-la-creme",
    storageBucket: "films-de-la-creme.appspot.com",
    messagingSenderId: "12609236780",
    appId: "1:12609236780:web:04210d8516652ed3968689",
    measurementId: "G-K2DC9D6SPP"
});

export default app;