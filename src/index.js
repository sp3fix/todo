import './style.css';
import './reset.css';
import * as firebase from 'firebase';
import { createItem, saveItem, removeItem } from './scripts/eventControler.js';
import { seeds } from './scripts/seeds.js'

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

let ref = firebase.database().ref('/todo')

// seeds(ref)

ref.on("child_added", function(snapshot) {
  var project = snapshot.val();
  console.log(`${snapshot.key} has been added`);
});

let navBtn = document.querySelector('.nav-icon');

navBtn.addEventListener('click', (e) => {
  let header = document.querySelector('.left-pane');
  if(e.target.id === 'close') {
    // header.style.height = '310px';
    header.setAttribute('class', 'left-pane open');
    e.target.id = 'open';
  } else {
    // header.style.height = '100px';
    header.setAttribute('class', 'left-pane close');
    e.target.id = 'close';
  }
})


