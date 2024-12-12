import './inputText.css';

import { dbInterface } from '../../../main';

export default function inputText(task, i, updateTask){
    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';

    const text = document.createElement('p');
    text.textContent = task.text;
    
    const input = document.createElement('input');
    input.id = `input-task-${i}`
    input.value = task.text;

    text.addEventListener('click', () => {
        text.remove();
        inputContainer.appendChild(input);
        input.focus()
    })

    input.addEventListener('keydown', async (e) => {
        console.log('Ahora')
        if(e.key === 'Enter'){
            // const project
            console.log(e.target.value)
            updateTask(e.target.value, i)
            input.remove();
            inputContainer.appendChild(text)
        }
    })

    // document.addEventListener('click', (e) => {
    //         if(!input.contains(e.target)){
    //             if(inputContainer.contains(input)){
    //                 input.remove();
    //                 inputContainer.appendChild(text)
    //             }
    //         }
    // })

    inputContainer.appendChild(text)
    return inputContainer
}