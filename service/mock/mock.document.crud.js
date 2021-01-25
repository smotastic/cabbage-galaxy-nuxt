const db = {
    document: [{ name: "Document 1", labels: ['root/level1', 'root/level2'], id: '1', galaxy: '1' }]
}

export const create = (name, content = '', labels = [], galaxy) => {
    return new Promise((resolve, reject) => {
        db.document.push({ id: db.document.length + 1, name, content, labels, galaxy });
        resolve();
    });
}

export const list = (galaxy) => {
    return db.document.filter(d => d.galaxy === galaxy);
}