import './projectPage.css'
import { dbInterface } from "../../../main";
import homeImage from '../../assets/icons/home.png';
import show from "../../utils/show";
import home from "../home/home";

import orderImage from '../../assets/icons/order.png';
import createImage from '../../assets/icons/create.png';
import note from '../../components/note/note';

export default async function projectPage(app, projectId){
    const projectPageContainer = document.createElement('div');
    projectPageContainer.className = 'project-page';

    const project = await dbInterface.getProjectById(projectId)

    const projectTitle = document.createElement('h1');
    projectTitle.className = 'project-title';
    projectTitle.textContent = project.name

    const homeButton = document.createElement('img');
    homeButton.className = 'home-button';
    homeButton.src = homeImage;

    const orderButton = document.createElement('img');
    orderButton.className = 'order-button';
    orderButton.src = orderImage;

    const createNote = document.createElement('img');
    createNote.className = 'create-note';
    createNote.src = createImage;

    const updateNote = async (note, index) => {
        project.notes[index] = note;
        await dbInterface.updateProject(project);
        show((app) => projectPage(app, projectId))
    }


    // const updateTask = (task, index) => {
    //     note[index] = task;
    // }

    createNote.addEventListener('click', async () => {
        const template =  {
            name:'note',
            color: '#e8d9a7',
            posX: 0,
            posY: 0,
            tasks: [
                {
                    text: 'First task',
                    state: 'pending'
                }
            ]
        }

        project.notes.push(template);
        await dbInterface.updateProject(project);
        show((app) => projectPage(app, projectId))
    })

    const notesContainer = document.createElement('div');
    notesContainer.className = 'notes-container';

    project.notes.forEach((noteData, i) => {
        const noteElement = note(noteData, i, updateNote);
        notesContainer.appendChild(noteElement)
    });

    homeButton.addEventListener('click', () => {
        show(home)
    })


    projectPageContainer.append(projectTitle, homeButton, orderButton, createNote, notesContainer)
    app.appendChild(projectPageContainer)
}