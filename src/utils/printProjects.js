import { dbInterface } from "../../main";
import project from "../components/project/project";
export default async function printProjects(){
    try {
        const parent = document.querySelector('.projects-container');
        console.log(parent)
        parent.innerHTML = ''

        const projects = await dbInterface.getAllProjects();
        projects.forEach((projectData, index) => {
            const element = project(projectData, index % 2 == 0 ? 'dark' : 'default')
            parent.appendChild(element)
        });
    } catch (error) {
        console.log('Error getting projects', error)
    }
}