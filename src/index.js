import './style.css';
import './reset.css';
import * as firebase from 'firebase';
import { createProject } from './scripts/eventControler';

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

let ref = firebase.database().ref()

// let project1 = createProject('project1',['laundry', 'dishes', 'programming'])
// let project2 = createProject('project1',['cook', 'eat', 'programm'])

// ref.push(project1)
// ref.push(project2)

ref.on("child_added", function(snapshot) {
  var project = snapshot.val();
  console.log("key :" + snapshot.key);
  console.log("Name: " + project.name);
  console.log("Tasks: " + project.tasks);
});

// ref.update({'/-LZ_ovQSqVMg43fEz7aH/tasks' : ['eat', 'sleep', 'program']})

// console.log(ref.child('project1').val())