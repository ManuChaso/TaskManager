import { dbInterface } from '../../../main';
import createButton from '../../components/createButton/createButton';
import projectForm from '../../components/projectForm/projectForm';
import printProjects from '../../utils/printProjects';
import iconSearch from '../../assets/icons/search.png';
import './home.css';



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

    const searchIcon = document.createElement('img');
    searchIcon.className = 'search-icon'
    searchIcon.src = iconSearch;

    searchButton.appendChild(searchIcon)
    searchContainer.append(searchInput, searchButton)

    const createProjectButton = createButton('create', () => {
        const form = projectForm(dbInterface);

        homeContainer.appendChild(form)
    })

    const projectsContainer = document.createElement('ul');
    projectsContainer.className = 'projects-container';

    homeContainer.append(homeLogo, searchContainer, createProjectButton, projectsContainer)

    app.appendChild(homeContainer);

    printProjects()
}