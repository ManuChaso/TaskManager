import './animationStart.css';

export default function animationStart(app){
    const animationContainer = document.createElement('div');
    animationContainer.className = 'animation-container';


    const logo = document.createElement('p');
    logo.className = 'animation-logo';

    const checkBox = document.createElement('div');
    checkBox.className = 'animation-checkbox';

    const checkOne = document.createElement('div');
    checkOne.className = 'animation-checkone';
    const checkTwo = document.createElement('div');
    checkTwo.className = 'animation-checktwo';

    checkBox.append(checkOne, checkTwo)

    animationContainer.append(logo, checkBox)

    app.appendChild(animationContainer)

    const animationCheckbox = () => {
        checkBox.style.display = 'flex';
        checkOne.style.animation = 'checkOne 80ms forwards'
        checkTwo.style.animation = 'checkTwo 80ms forwards 80ms'
    }

    const logoText = 'TaskManager';

    let index = 0;

    const animationInterval = setInterval(() => {
        logo.textContent += logoText[index];
        index++
        console.log('Ahora')
        if(index >= logoText.length){
            clearInterval(animationInterval)
            animationCheckbox()
        }
    }, 200);


}