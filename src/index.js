import './style.css';
import './assets/images/reload.png';
import './assets/images/enter.png';
import './assets/images/more.png';

const tasks = [
  {
    desc: 'Wash the dishes',
    completed: false,
  },
  {
    desc: 'Complete The Microverse',
    completed: false,
  },
  {
    desc: 'Go to a travel',
    completed: false,
  },
  {
    desc: 'Find a good job',
    completed: false,
  },
];
const items = document.querySelector('.items');
tasks.forEach((task) => {
  items.innerHTML += `<div class="item">
                <div class="item-desc"><div class="check"><input type="checkbox" class="checkbox"></div><div class="desc">${task.desc}</div></div>
                <div class="humberger"><img class="humberger-image" src="assets/images/more.png" alt="humberger"></div>
               </div>`;
});
