import DbInterface from './src/DbInterface/dbInterface';
import animationStart from './src/pages/animationStart/animationStart';
import home from './src/pages/home/home';
import show from './src/utils/show';
import './style.css'

export const dbInterface = new DbInterface('taskmanager');

// show(animationStart)
show(home)