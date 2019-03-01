import './style.css';
import './reset.css';
import * as firebase from 'firebase';
import { seeds } from './scripts/seeds.js'
import { render } from './scripts/initDB.js'
import { navBtn, addNewBtn, filterAdmin, addFilters } from './scripts/displayController.js'

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

navBtn()
addNewBtn()
addFilters(document.querySelectorAll('.nav-link'))
filterAdmin()

export { getRef }
