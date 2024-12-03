import DbInterface from './src/DbInterface/dbInterface';
import openDB from './src/DbInterface/openDb';
import animationStart from './src/pages/animationStart/animationStart';
import home from './src/pages/home/home';
import './style.css'

const app = document.querySelector('#app');

// animationStart(app)
home(app)