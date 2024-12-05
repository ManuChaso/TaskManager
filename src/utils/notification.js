
export default function notification(text, className, interaction){
    return new Promise((resolve, reject) => {
        const notifyContainer = document.createElement('div');
    notifyContainer.className = `notification ${className}`;

    const notifyText = document.createElement('p');
    notifyText.textContent = text;

    if(interaction){
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'notify-buttons'
        const acceptButton = document.createElement('button');
        acceptButton.textContent = 'Aceptar';
        acceptButton.className = 'notify-button accept';
        const declineButton = document.createElement('button');

        declineButton.className = 'notify-button decline';
        declineButton.textContent = 'Cancelar'

        acceptButton.addEventListener('click', () => {
            notifyContainer.remove();
            resolve(true);
        });

        declineButton.addEventListener('click', () => {
            notifyContainer.remove();
            resolve(false)
        })

        buttonsContainer.append(acceptButton, declineButton)
        notifyContainer.append(notifyText, buttonsContainer);
    }else{
        notifyContainer.appendChild(notifyText);

        setTimeout(() => {
            notifyContainer.remove();
            resolve()
        }, 500)
    }

    document.body.appendChild(notifyContainer)
    })
}