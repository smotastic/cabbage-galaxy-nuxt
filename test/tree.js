// const documents = [
//     { name: "Document 1", labels: ['1/2', '1/2'], id: '1', galaxy: '1' },
//     // { name: "Document 2", labels: ['root/level1'], id: '2', galaxy: '1' },
//     { name: "Document 11", labels: ['1/2'], id: '3', galaxy: '1' },
//     // { name: "Document 2", labels: ['root/level1', '1/3'], id: '2', galaxy: '1' }
// ]

const documents = [
    { name: "Document 1", labels: ['root/level1', 'root/level2'], id: '1', galaxy: '1' },
    { name: "Document 2", labels: ['root/level1'], id: '2', galaxy: '1' }
]

function findNextNode(tree, labels, prevNode) {
    const [label] = labels.splice(0, 1);
    // if it has a name, its a document (leaf)
    const existingNode = tree.find(e => e.label === label && !e.galaxy);
    if (existingNode) {
        return findNextNode(existingNode.children, labels, existingNode);
    }
    else {
        // no next node found, take prevnode as curNode
        return [prevNode, [label, ...labels]];
    }
}

function fillTree(tree, labels, doc) {
    if (labels.length === 0) {
        // normal case, we reached end of labels, add the doc as leaf
        tree.push(doc);
        return;
    }

    // find a potentiel existing node to the current labels
    const [existingNode, remainingLabels] = findNextNode(tree, labels, undefined);
    const [label] = remainingLabels.splice(0, 1);

    // special case: there is an existingNode, but the labelchain already exists for it
    if (!label) {
        // doc could already exist, if doc has 2 duplicate labeldefinitions
        // else it should be a nonexisting doc in the tree, which has the same label as some other already existing doc in the tree
        const existingDoc = existingNode.children.find(e => e.id === doc.id);
        if (!existingDoc) {
            existingNode.children.push(doc);
        }
        return;
    }
    const children = [];
    // a root somewhere in the tree hierarchy until the last found label was found
    if (existingNode) {
        existingNode.children.push({ label, name: label, id: label, children });
    }
    // if no node already existed, we create a new root
    else {
        tree.push({ label, name: label, id: label, children });
    }
    return fillTree(children, remainingLabels, doc)
}

const toTree = (docs) => {
    const tree = []
    for (let doc of docs) {
        for (let labels of doc.labels) {
            const splittedLabels = labels.split("/");
            fillTree(tree, splittedLabels, doc);
        }
    }
    return tree;
}

const finalTree = toTree(documents);
console.log(finalTree);