import { completedBtn } from './eventControler.js'

const render = (snap, key) => {
  let jumbotron = document.querySelector('.jumbotron');
  let item = createClass('todo-item');
  let part1 = createClass('todo-part1');
  let btn = createClass('todo-btn round');
  let imp = createClass('todo-imp');
  let title = createClass('todo-title');
  let part2 = createClass('todo-part2');
  let category = createClass('todo-category');
  let dueDate = createClass('todo-dueDate');

  let completedness = (snap.completed === 0) ? 0 : 1;
  item.setAttribute('data-type-completed', completedness) 

  btn.addEventListener('click', (e) => { completedBtn(e) })

  item.setAttribute('id', key)

  title.textContent = snap.name;
  dueDate.textContent = snap.dueDate;
  category.textContent = snap.parent;
        part1.appendChild(btn);
        part1.appendChild(imp);
        part1.appendChild(title);
        part2.appendChild(category);
        part2.appendChild(dueDate);
      item.appendChild(part1);
      item.appendChild(part2);
    jumbotron.appendChild(item);

}


const createClass = (name) => {
  let temp = document.createElement('div');
  temp.setAttribute('class', name);
  return temp
}

export { render }