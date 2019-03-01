import { completedBtn, saveItem, deleteItem } from './eventControler.js'

const render = (snap, key) => {
  let jumbotron = document.querySelector('.jumbotron');
  let item = createDiv('todo-item');
  let part1 = createDiv('todo-part1');
  let btn = createDiv('todo-btn round');
  let imp = createDiv('todo-imp');
  let title = createInput('todo-title', snap.title);
  let part2 = createDiv('todo-part2');
  let category = createInput('todo-category', snap.category);
  let dueDate = createInput('todo-dueDate', snap.dueDate);
  let deleteBtn = createDiv('todo-delete');

  let completedness = (snap.completed === 0) ? 0 : 1;
  item.setAttribute('data-type-completed', completedness) 

  let importance = (snap.importance === 0) ? 0 : 1;
  item.setAttribute('data-type-importance', importance);

  imp.addEventListener('click', (e) => { completedBtn(e, 'importance') })
  btn.addEventListener('click', (e) => { completedBtn(e, 'completed') })
  deleteBtn.addEventListener('click', (e) => { deleteItem(e) })
  title.addEventListener('focusout', (e) => { saveItem(e) })
  dueDate.addEventListener('focusout', (e) => { saveItem(e) })
  category.addEventListener('focusout', (e) => { saveItem(e) })

  item.setAttribute('id', key)
        part1.appendChild(btn);
        part1.appendChild(imp);
        part1.appendChild(title);
        part2.appendChild(category);
        part2.appendChild(dueDate);
        part2.appendChild(deleteBtn);
      item.appendChild(part1);
      item.appendChild(part2);
    jumbotron.insertBefore(item, jumbotron.childNodes[2]);

}

const createDiv = (name) => {
  let temp = document.createElement('div');
  temp.setAttribute('class', name);
  return temp
}

const createInput = (name, value) => {
  let x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute('class', name);
  x.setAttribute('minlength',4);
  x.setAttribute('maxlength', 20);
  x.setAttribute('value', value)
  return x;
}

export { render }