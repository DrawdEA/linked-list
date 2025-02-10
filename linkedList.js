class Node {
    #value;
    #nextNode;

    constructor() {
        this.#value = null;
        this.#nextNode = null;
    }

    get value() { return this.#value; };
    get nextNode() { return this.#nextNode; };
    set value(val) { this.#value = val; };
    set nextNode(node) { this.#nextNode = node; };
}

class LinkedList {
    #headNode;

    constructor() {
        this.#headNode = null;
    }

    append(value) {
        // Initialize new node.
        const newNode = new Node();
        newNode.value = value;


        // Insert the node.
        if (this.#headNode === null) {
            this.#headNode = newNode;
        } else {
            let referenceNode = this.#headNode;
            while (referenceNode.nextNode !== null) {
                referenceNode = referenceNode.nextNode;
            }
            referenceNode.nextNode = newNode;
        }
    }

    prepend(value) {
        // Initialize new node.
        const newNode = new Node();
        newNode.value = value;

        // Insert the node as the new root node.
        if (this.#headNode !== null) {
            newNode.nextNode = this.#headNode;
        }
        this.#headNode = newNode;
    }

    size() {
        let count = 0;
        if (this.#headNode !== null) {
            let referenceNode = this.#headNode;
            while (referenceNode.nextNode !== null) {
                referenceNode = referenceNode.nextNode;
                count++;
            }
        }
        return count;
    }

    head() {
        return this.#headNode;
    }

    tail() {
        let referenceNode = null;
        if (this.#headNode !== null) {
            referenceNode = this.#headNode;
            while (referenceNode.nextNode !== null) {
                referenceNode = referenceNode.nextNode;
            }
        }

        return referenceNode;
    }

    at(index) {
        let referenceNode = this.#headNode;

        for (let i = 0; i < index; i++) { // might be 0 or 1, try out
            referenceNode = referenceNode.nextNode;
        }

        return referenceNode;
    }

    pop() {
        let referenceNode = null;
        let previousNode = null;
        if (this.#headNode !== null) {
            referenceNode = this.#headNode;
            while (referenceNode.nextNode !== null) {
                previousNode = referenceNode;
                referenceNode = referenceNode.nextNode;
            }
        }

        previousNode.nextNode = null;
    }

    contains(value) {
        let found = false;

        if (this.#headNode !== null) {
            if (this.#headNode.value === value) {
                found = true;
            } else {
                let referenceNode = this.#headNode;
                do {
                    if (referenceNode.value === value) {
                        found = true;
                        break;
                    }
                    referenceNode = referenceNode.nextNode;
                } while (referenceNode !== null);
            }
            
        }

        return found;
    }

    find(value) {
        let index = 0

        if (this.#headNode !== null) {
            if (this.#headNode.value != value) {
                let referenceNode = this.#headNode;
                while (referenceNode.nextNode !== null) {
                    index++;
                    if (referenceNode.value == value) {
                        break;
                    }
                    referenceNode = referenceNode.nextNode;
                }
            }
        }

        return index;
    }

    toString() {
        let finalString = "";

        let referenceNode = null;
        if (this.#headNode !== null) {
            referenceNode = this.#headNode;
            finalString += `( ${referenceNode.value} )`;
            while (referenceNode.nextNode !== null) {
                referenceNode = referenceNode.nextNode;
                finalString += ` -> ( ${referenceNode.value} )`;
            }
        } else {
            finalString += "( no head node )";
        }

        finalString += " -> null";
        return finalString;
    }
}

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

