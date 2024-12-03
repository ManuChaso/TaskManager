import project from "../components/project/project";

export default async function printProjects(dbInterface, parent){
    try {
        parent.innerHTML = ''
        const projects = await dbInterface.getAllProjects();

        projects.forEach((projectData, index) => {
            const element = document.createElement('li');
            element.appendChild(project(projectData));
            if(index % 2 == 0){
                element.className = 'dark'
            }

            parent.appendChild(element)
        });
    } catch (error) {
        console.log('Error getting projects', error)
    }
}