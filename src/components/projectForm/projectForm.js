import printProjects from '../../utils/printProjects';
import { dbInterface } from '../../../main';
import './projectForm.css';


const formInputs = [
    {
        id: 'name',
        name: 'Nombre',
        type: 'text'
    },
    {
        id: 'description',
        name: 'Descripción',
        type: 'textarea'
    },
    {
        id: 'date',
        name: 'Fecha',
        type: 'date'
    },
]

export default function projectForm(dbInterface){
    const form = document.createElement('form');
    form.className = 'project-form';

    const closeForm = document.createElement('button');
    closeForm.textContent = 'X';
    closeForm.className = 'close-form'

    closeForm.addEventListener('click', () => form.remove())
    
    const formTitle = document.createElement('h3');
    formTitle.textContent = 'Nuevo Proyecto';
    formTitle.className = 'form-title';

    const importContainer = document.createElement('div');
    importContainer.className = 'import-container';
    const importLabel = document.createElement('label');
    importLabel.textContent = 'Importar proyecto';
    importLabel.className = 'form-button'
    importLabel.setAttribute('for', 'file-input');

    const fileInput = document.createElement('input');
    fileInput.id = 'file-input';
    fileInput.type = 'file';
    fileInput.style.display = 'none'

    fileInput.addEventListener('change', (e) => {
        if(e.target.files[0]){
            const reader = new FileReader();

            reader.addEventListener('load', async () => {
                const data = JSON.parse(reader.result);
                await dbInterface.createProject(data);
                printProjects();
                form.remove();
            });

            reader.readAsText(e.target.files[0])
        }
    })

    importContainer.append(importLabel, fileInput)
    form.append(closeForm, formTitle, importContainer)

    formInputs.forEach(input => {
        const inputsContainer = document.createElement('div');
        inputsContainer.className = 'inputs-container'
        const label = document.createElement('label');
        label.textContent = input.name;
        label.setAttribute('for', input.id);

        const formInput = document.createElement(input.type == 'textarea' ? 'textarea': 'input');
        formInput.id = input.id;
        input.type !== 'textarea' && (formInput.type = input.type);

        inputsContainer.append(label, formInput)
        form.appendChild(inputsContainer)
    })

    const submitButton = document.createElement('button');
    submitButton.className = 'form-button';
    submitButton.textContent = 'Guardar';

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault()
        const name = document.querySelector('#name').value;
        const description =  document.querySelector('#description').value;
        const date = document.querySelector('#date').value
        if(name && description){
            const project = {
                name: name,
                description: description,
                deadLine: date,
                notes: [
                    {
                        name:'First note',
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
                ]
            }
            
            try {
                await dbInterface.createProject(project);
                console.log('Project saved');
                //Añadir notificación
                form.remove();
                printProjects()
            } catch (error) {
                console.log('Error saving project', error)
            }
        }else{
            alert('Datos requeridos')
        }
    })

    form.appendChild(submitButton)

    return form
}