import './createButton.css';

import icon from '../../assets/icons/create.png'

export default function createButton(cssClass, callback){
    const button = document.createElement('button');
    button.className = `create-button ${cssClass}`;
    button.addEventListener('click', callback);

    const buttonIcon = document.createElement('img');
    buttonIcon.className = 'button-icon'
    buttonIcon.src = icon;

    button.append(buttonIcon)

    return button
}