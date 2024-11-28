import openDB from "./openDb"

export default class DbInterface {
    constructor(dbname){
        this.dbname = dbname
    }

    async getDB(){
        if(!this.db){
            this.db = await openDB(this.dbname)
        }

        return this.db
    }

    async getAllProjects(){
        const db = await this.getDB();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction('projects', 'readonly');
            const store = transaction.objectStore('projects');
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = (e) => reject(e.target.error);
        })
    }

    async getProjectById(id){
        const db = await this.getDB();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction('projects', 'readonly');
            const store = transaction.objectStore('projects');
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = (e) => reject(e.target.error);
        })
    }

    async createProject(payload){
        const db = await this.getDB();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction('projects', 'readwrite');
            const store = transaction.objectStore('projects');
            const request = store.add(payload);

            request.onsuccess = () => resolve(request.result);
            request.onerror = (e) => reject(e.target.error);
        })
    }

    async updateProject(payload){
        const db = await this.getDB();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction('projects', 'readwrite');
            const store = transaction.objectStore('projects');
            const request = store.put(payload);

            request.onsuccess = () => resolve(request.result);
            request.onerror = (e) => reject(e.target.error)
        })
    }

    async deleteProject(id){
        const db = await this.getDB();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction('projects', 'readwrite');
            const store = transaction.objectStore('projects');
            const request = store.delete(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = (e) => reject(e.target.error)
        })
    }
}