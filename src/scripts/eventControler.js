

const createItem = (name, dueDate, importance, parent) => {
  return {name, dueDate, importance, parent}
}

const saveItem = (ref, obj) => {
  ref.push(obj)
}

const removeItem = (ref, key) => {
  ref.child(key).remove()
}

const updateItem = (ref, key, element, value) => {
  let update = {};
  update['/' + key + '/' + element] = value;
  return ref.update(updates);
}

export { createItem, saveItem, removeItem, updateItem }

