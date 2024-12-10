import './note.css';

export default function note(note){
    const noteContainer = document.createElement('div');
    noteContainer.className = 'note-container';

    const noteTitle = document.createElement('p');
    noteTitle.className = 'note-title';
    noteTitle.textContent = note.name;

    const taskContainer = document.createElement('ul');
    taskContainer.className = 'task-container';

    note.tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.text;

        taskContainer.appendChild(taskElement)
    });

    noteContainer.append(noteTitle, taskContainer)



    return noteContainer
}