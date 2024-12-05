import DbInterface from './src/DbInterface/dbInterface';
import animationStart from './src/pages/animationStart/animationStart';
import home from './src/pages/home/home';
import './style.css'

export const dbInterface = new DbInterface('taskmanager');
const app = document.querySelector('#app');

// animationStart(app)
home(app)