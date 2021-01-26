const db = {
    document: [
        { name: "Document 1", labels: ['root/level1', 'root/level2'], id: '1', galaxy: '1' },
        { name: "Document 2", labels: ['root/level1'], id: '2', galaxy: '1' }
    ]
}

export const create = (doc) => {
    return new Promise((resolve, reject) => {
        const newDoc = { id: db.document.length + 1, name: doc.name, content: doc.content, labels: doc.labels, galaxy: doc.galaxy };
        db.document.push(newDoc);
        resolve(newDoc);
    });
}

export const update = (doc) => {
    return new Promise((resolve, reject) => {
        const existingDocIndex = this.db.document.findIndex(d => d.id === doc.id);
        Object.assign(this.db.document[existingDocIndex], doc);
        resolve();
    });
}

export const list = (galaxy) => {
    return db.document.filter(d => d.galaxy === galaxy);
}