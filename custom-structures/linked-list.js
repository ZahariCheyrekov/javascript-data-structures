class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    // O(1)
    prepend(value) {
        const node = new Node(value);

        if (!this.isEmpty()) {
            node.next = this.head;
        }

        this.head = node;
        this.size++;
    }

    // this can be improved with node wich points to the last element(node)
    append(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            let previous = this.head;

            while (previous.next) {
                previous = previous.next;
            }

            previous.next = node;
        }

        this.size++;
    }

    print() {
        if (list.isEmpty()) {
            console.log('List is empty');
        } else {
            let current = this.head;
            let listValues = '';

            while (current) {
                listValues += `${current.value} `
                current = current.next;
            }

            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log('List is empty?', list.isEmpty());
console.log('List size:', list.getSize());

list.prepend(10);
list.prepend(20);
list.prepend(30);

list.append(5);
list.append(2);
list.append(1);

list.print();