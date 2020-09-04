import '../css/style.css';
import '../sass/main.scss';
import { mult } from './test.js';
import { num } from './test-dep.js';
import { add } from '../vendor';
import '../../test.html';

const ball = document.querySelector('#ball');
ball.addEventListener('click', () => {
  ball.classList.toggle('ball__expand');
});
let x = add(2, 3);
alert(mult(num) + x);
