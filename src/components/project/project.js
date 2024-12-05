import contextMenu from '../../utils/contextMenu';
import {dbInterface} from '../../../main'
import './project.css';
import printProjects from '../../utils/printProjects';
import notification from '../../utils/notification';

export default function project(projectData, className){
    const projectContainer = document.createElement('li');
    projectContainer.className = 'project-container';
    projectContainer.classList.add(className);

    projectContainer.addEventListener('contextmenu', (e) => contextMenu(e, [
        {text: 'Exportar proyecto', callback: () => {
            delete projectData.id;
            const projectInfo = new Blob([JSON.stringify(projectData, null, 2)], {type: 'application/json'});
            const downloadUrl = URL.createObjectURL(projectInfo);

            const downloadLink = document.createElement('a');
            downloadLink.href = downloadUrl;
            downloadLink.download = `${projectData.name.replace(' ', '_')}.json`;

            downloadLink.click()
        }},
        {text: 'Clonar proyecto', callback: async () => {
            delete projectData.id;
            await dbInterface.createProject(projectData);
            printProjects()
        }},
        {text: 'Eliminar proyecto', callback: async () => {
            const accept = await notification('¿Eliminar proyecto?', 'info', true);
            console.log(accept)
            if(accept){
                await dbInterface.deleteProject(projectData.id);
                printProjects();
            }
        }},
    ]))

    const projectName = document.createElement('p');
    projectName.textContent = `Nombre: ${projectData.name}`;
    const projectDescription = document.createElement('p');
    projectDescription.textContent = `Descripción: ${projectData.description}`;
    const projectDate = document.createElement('p');
    projectDate.textContent = `Fecha: ${projectData.deadLine}`;

    projectContainer.append(projectName, projectDescription, projectDate);

    return projectContainer
}
