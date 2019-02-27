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



export { navBtn, delayedDestroyItem }