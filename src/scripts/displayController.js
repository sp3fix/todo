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



export { navBtn }