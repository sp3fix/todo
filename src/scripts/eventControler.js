import { delayedDestroyItem } from './displayController.js'

const createItem = (name, dueDate, importance, parent) => {
  return {name, dueDate, importance, parent}
}


const updateItem = (key, element, value) => {
  let ref = firebase.database().ref('/todo')
  let updates = {};
  updates['/' + key + '/' + element] = value;
  return ref.update(updates);
}

const getKey = (target) => {
  let key = target.getAttribute('id');
  return key;
}

const completedBtn = (e, element) => {
  let target = e.target.parentNode.parentNode;
  let key = getKey(target);
  // let status = target.getAttribute('data-type-completed');
  let status = target.getAttribute(`data-type-${element}`);
  let newStatus = (status === '0') ? 1 : 0 ;
  target.setAttribute(`data-type-${element}`, newStatus);

  if(element === 'completed') {
    if(newStatus === 1) delayedDestroyItem(key);
  }
  updateItem(key, element, newStatus)
}

const impBtn = (e) => {
  let target = e.target.parentNode.parentNode;
  let key = getKey(target);
  let status = target.getAttribute('data-type-imp');
  let newStatus = (status === '0') ? 1 : 0 ;
}

const saveItem = (e) => {
  let key = getKey(e.target.parentNode.parentNode);
  let element = e.target.getAttribute('class').replace(/todo-/,"")
  let value = e.target.value;
  updateItem(key, element, value);
}

export { createItem, updateItem, completedBtn, saveItem}

