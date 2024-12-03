import './createButton.css';

export default function createButton(cssClass, callback){
    const button = document.createElement('button');
    button.className = `create-button ${cssClass}`;
    button.textContent = '+';
    button.addEventListener('click', callback);

    return button
}