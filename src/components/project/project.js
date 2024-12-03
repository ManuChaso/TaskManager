import './project.css';

export default function project(projectData){
    const projectContainer = document.createElement('div');
    projectContainer.className = 'project-container';

    const projectName = document.createElement('p');
    projectName.textContent = `Nombre: ${projectData.name}`;
    const projectDescription = document.createElement('p');
    projectDescription.textContent = `Descripción: ${projectData.description}`;
    const projectDate = document.createElement('p');
    projectDate.textContent = `Fecha: ${projectData.deadLine}`;

    projectContainer.append(projectName, projectDescription, projectDate);

    return projectContainer
}
