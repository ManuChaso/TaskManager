export default function openDB(dbname){
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbname, 1);

        console.log(request)

        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            console.log('aqui', db)
            if(!db.objectStoreNames.contains('projects')){
                const store = db.createObjectStore('projects', {keyPath: 'id', autoIncrement: true});
                store.createIndex('name', 'name', {unique: false});
            }
        }

        request.onsuccess = () => resolve(request.result);
        request.onerror = (e) => reject(e.target.error)
    });
}