

export default function show(page){
    const app = document.querySelector('#app')
    app.innerHTML = ''

    page(app)
}