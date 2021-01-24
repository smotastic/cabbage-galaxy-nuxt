const db = {
    galaxy: [{ name: "Galaxy 1", id: 1 }]
}

export const create = (galaxy) => {
    return new Promise((resolve, reject) => {
        db.galaxy.push({ name: galaxy, id: db.galaxy.length + 1 });
        resolve();
    });
}

export const list = () => {
    return db.galaxy;
}