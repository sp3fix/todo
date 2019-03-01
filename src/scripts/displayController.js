import { getRef } from '../index.js'
import { format, addDays, isBefore } from 'date-fns'
import { render } from './initDB.js'

const navBtn = () => {
  let navBtn = document.querySelector('.nav-icon');

  navBtn.addEventListener('click', (e) => {
    let header = document.querySelector('.left-pane');
    if(e.target.id === 'close') {
      header.setAttribute('class', 'left-pane open');
      e.target.id = 'open';
    } else {
      header.setAttribute('class', 'left-pane close');
      e.target.id = 'close';
    }
  })
}

const delayedDestroyItem = (key) => {
  let currentNode = document.getElementById(key);
  fadeOut(currentNode)
}

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.075) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

const newElement = () => {
  let ref = firebase.database().ref('/todo');
  let date = new Date();
  let today = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;
  let newObj = {title :'New Item', dueDate: today, importance: 0, category: 'Undefined', completed : 0}
  ref.push(newObj);
}

const addNewBtn = () => {
  let addNewBtn = document.querySelector('.button-add');
  addNewBtn.addEventListener('click', newElement);
}


const filter = (snap, key, limit) => {
  let today = format(new Date(), 'D/M/YYYY');
  let Upperlimit = format(addDays(today, limit), 'D/M/YYYY');
    if(isBefore(snap.dueDate, Upperlimit)) render(snap, key);
}

const filterAdmin = (option) => {
  clear();
  let ref = getRef();
  ref.on("child_added", function(snapshot) {
    let snap = snapshot.val();
    let key = snapshot.key
    switch (option) {
      case 'archived':
        filterArchived(snap, key, 1)
        break;
      case 'today' :
        filter(snap, key, 0)
        break;
      case 'week' :
        filter(snap, key, 7) 
        break;
      default:
        filterArchived(snap, key, 0)
      break;
    }
  })
}

const clear = () => {
  let jumbotron = document.querySelector('.jumbotron');
  while (jumbotron.childNodes[2]) {
    jumbotron.childNodes[2].remove()
  }
}

const filterArchived = (snap, key, completed) => {
    if(snap.completed === completed) render(snap, key);
}

const addFilters = (nodes) => {
  Array.from(nodes).map(node => node.addEventListener('click', (e) => { filterAdmin(e.target.id) }))
}


export { navBtn, delayedDestroyItem, addNewBtn, addFilters , filterAdmin}