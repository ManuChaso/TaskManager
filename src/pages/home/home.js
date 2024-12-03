import createButton from '../../components/createButton/createButton';
import projectForm from '../../components/projectForm/projectForm';
import DbInterface from '../../DbInterface/dbInterface';
import printProjects from '../../utils/printProjects';
import './home.css';

const dbInterface = new DbInterface('taskmanager');

export default async function home(app){

    const homeContainer = document.createElement('section');
    homeContainer.className = 'home-container';

    const homeLogo = document.createElement('h1');
    homeLogo.textContent = 'TaskManager';
    homeLogo.className = 'home-logo';

    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';

    const searchInput = document.createElement('input');
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Buscar...';
    const searchButton = document.createElement('button');
    searchButton.className = 'search-button';
    searchButton.textContent = 'Buscar'

    searchContainer.append(searchInput, searchButton)

    const createProjectButton = createButton('home-button', () => {
        const form = projectForm(dbInterface);

        homeContainer.appendChild(form)
    })

    const projectsContainer = document.createElement('ul');
    projectsContainer.className = 'projects-container';

    printProjects(dbInterface, projectsContainer)

    homeContainer.append(homeLogo, searchContainer, createProjectButton, projectsContainer)

    app.appendChild(homeContainer)
}