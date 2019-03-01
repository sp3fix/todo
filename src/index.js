import './style.css';
import './reset.css';
import * as firebase from 'firebase';
import { navBtn, addNewBtn, filterAdmin, addFilters } from './scripts/displayController.js'
import { onReady, show } from './scripts/loading-screen.js'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCT8Sgajy-1nLVRXLJo3rTsmve3KM7XyO4",
  authDomain: "todo-eb79a.firebaseapp.com",
  databaseURL: "https://todo-eb79a.firebaseio.com",
  projectId: "todo-eb79a",
  storageBucket: "todo-eb79a.appspot.com",
  messagingSenderId: "7815036995"
};
firebase.initializeApp(config);


const getRef = () => {
  let ref = firebase.database().ref('/todo');
  return ref
}

onReady(function () {
  show('container', true);
  show('loading', false);
});

navBtn()
addNewBtn()
addFilters(document.querySelectorAll('.nav-link'))
filterAdmin()

export { getRef }
