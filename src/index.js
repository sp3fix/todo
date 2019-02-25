import './style.css';
import './reset.css';
import { createProject } from './scripts/eventControler'
import { initDB } from './scripts/initDB'

initDB()

var project1 = createProject('project1',['laundry', 'dishes', 'programming'])
var ref = firebase.database().ref()
ref.push(project1)
console.log(db)


