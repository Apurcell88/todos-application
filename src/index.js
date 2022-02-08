import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import CreateTodo from './inbox.js';

const btn = document.querySelector('#add-task');
btn.addEventListener('click', CreateTodo);
