import { delayedDestroyItem } from './displayController.js'
import { getRef } from '../index.js'

const createItem = (name, dueDate, importance, parent) => {
  return {name, dueDate, importance, parent}
}

const getKey = (target) => {
  let key = target.getAttribute('id');
  return key;
}

const updateItem = (key, element, value) => {
  let ref = getRef();
  let updates = {};
  updates['/' + key + '/' + element] = value;
  return ref.update(updates);
}

const deleteItem = (e) => {
  let key = getKey(e.target.parentNode.parentNode);
  let ref = getRef();
  ref.child(`/${key}`).remove();
  delayedDestroyItem(key)
}

const completedBtn = (e, element) => {
  let target = e.target.parentNode.parentNode;
  let key = getKey(target);

  let status = target.getAttribute(`data-type-${element}`);
  let newStatus = (status === '0') ? 1 : 0 ;
  target.setAttribute(`data-type-${element}`, newStatus);

  if(element === 'completed') {
    if(newStatus === 1) delayedDestroyItem(key);
  }
  updateItem(key, element, newStatus)
}

const saveItem = (e) => {
  let key = getKey(e.target.parentNode.parentNode);
  let element = e.target.getAttribute('class').replace(/todo-/,"")
  let value = e.target.value;
  updateItem(key, element, value);
}

export { createItem, updateItem, completedBtn, saveItem, deleteItem, getRef }

