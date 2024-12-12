import notification from '../../utils/notification';
import inputText from '../inputText/inputText';
import './note.css';

import createImage from '../../assets/icons/create.png'
import contextMenu from '../../utils/contextMenu';

export default function note(note, index, updateNote){
    const noteContainer = document.createElement('div');
    noteContainer.className = 'note-container';
    noteContainer.style.backgroundColor = note.color;

    noteContainer.addEventListener('contextmenu', (e) => contextMenu(e, [
        {text: 'Editar', callback: editMode},
        {text: 'Clonar nota', callback: () => {

        }},
        {text: 'Eliminar nota', callback: () => {

        }}
    ]))

    const noteTitle = document.createElement('p');
    noteTitle.className = 'note-title';
    noteTitle.textContent = note.name;

    const taskContainer = document.createElement('ul');
    taskContainer.className = 'task-container';

    const updateTask = (task, i) => {
        console.log(i)
        console.log(note)
        note.tasks[i].text = task;
        updateNote(note, index)
    }

    const editMode = () => {
        const deleteButton = document.createElement('img');
        deleteButton.src = '';
        deleteButton.className = 'delete-button';

        // deleteButton.addEventListener('click', () => {

        // })

        const changeTitle = document.createElement('input');
        changeTitle.value = noteTitle.textContent;
        changeTitle.className = 'change-title'

        const changeColor = document.createElement('input');
        changeColor.type = 'color';
        changeColor.className = 'change-color';

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Guardar';
        saveButton.className = 'save-button';

        saveButton.addEventListener('click', () => {
            note.name = changeTitle.value;
            note.color = changeColor.value;

            updateNote(note, index);
        })

        noteTitle.style.opacity = 0;
        noteContainer.append(deleteButton, changeTitle, changeColor, saveButton);

        document.addEventListener('click', (e) => {
            console.log('Ahora')
            console.log(e.target)
            console.log(document.querySelector('#Editar'))
            if(!noteContainer.contains(e.target) && e.target.id !== 'Editar'){
                console.log('Entra')
                deleteButton.remove();
                changeTitle.remove();
                changeColor.remove();
                saveButton.remove()
                noteTitle.style.opacity = 1;
            }
        })
    }

    note.tasks.forEach((task, i) => {
        const taskElement = document.createElement('li');
        // taskElement.textContent = task.text;
        const text = inputText(task, i, updateTask)
        taskElement.appendChild(text)
        taskContainer.appendChild(taskElement)
    });

    const createTask = document.createElement('div');
    createTask.className = 'create-task';

    const createIcon = document.createElement('img');
    createIcon.src = createImage
    createTask.appendChild(createIcon);

    createTask.addEventListener('click', () => {
        if(note.tasks.length < 10){
            note.tasks.push({text: 'task', state: 'pending'});
            updateNote(note, index)
        }else{
            notification('Limite de tareas alcanzado', 'info', false)
        }
    })

    noteContainer.append(noteTitle, taskContainer, createTask)



    return noteContainer
}