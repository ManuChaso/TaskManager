
export default function contextMenu(e, options){
    e.preventDefault();

    const exist = document.querySelector('#context');

    if(exist){
        exist.remove()
    }

    const context = document.createElement('ul');
    context.id = 'context';
    context.className = 'context-menu';
    context.style.top = `${e.clientY}px`;
    context.style.left = `${e.clientX}px`

    options.forEach(option => {
        const element = document.createElement('li');
        element.textContent = option.text;
        element.id = option.text;
        element.addEventListener('click', () => {
            option.callback();
            context.remove();
        });
        context.appendChild(element)
    });

    document.body.appendChild(context);

    document.addEventListener('click', (e) => {
        if(!context.contains(e.target)){
            context.remove()
        }
    })

}