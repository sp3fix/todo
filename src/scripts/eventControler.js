const createItem = (name, dueDate, importance, parent) => {
  return {name, dueDate, importance, parent}
}

const saveItem = (obj) => {
  ref.push(obj)
}

const removeItem = (key) => {
  ref.child(key).remove()
}

const delayedDestroyItem = (key) => {
  let currentNode = document.getElementById(key);
  fadeOut(currentNode)
}

const updateItem = (key, element, value) => {
  let update = {};
  update['/' + key + '/' + element] = value;
  return ref.update(updates);
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

const completedBtn = (e) => {
  let ref = firebase.database().ref('/todo')
  let target = e.target.parentNode.parentNode;
  let key = target.getAttribute('id');
  let status = target.getAttribute('data-type-completed');
  let newStatus = (status === '0') ? 1 : 0 ;
  target.setAttribute('data-type-completed', newStatus);

  if(newStatus === 1) delayedDestroyItem(key);
  
  let updates = {};
  updates['/' + key + '/completed'] = newStatus;
  return ref.update(updates);
}


export { createItem, saveItem, removeItem, updateItem, completedBtn}

