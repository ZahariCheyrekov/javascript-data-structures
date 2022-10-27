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

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;

            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }

            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let removedNode;
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next;
        } else {
            let prev = this.head;

            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }

            removedNode = prev.next;
            prev.next = removedNode.next;
        }

        this.size--;
        return removedNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }

        if (this.head.value === value) {  // O(1)
            this.head = this.head.next;
            this.size--;
            return value
        } else {  // O(n)
            let prev = this.head;

            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }

            if (prev.next) {
                const removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }

            return null;
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }

        let i = 0;
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return i;
            }
            current = current.next;
            i++;
        }

        return -1;
    }

    reverse() {
        let prev = null;
        let current = this.head;

        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
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

list.insert(10, 0);
list.print();

list.insert(20, 0);
list.print();

list.insert(30, 1);
list.print();

list.insert(40, 2);
list.print();
console.log(list.getSize());

console.log(list.removeFrom(9));
console.log(list.removeFrom(8));
console.log(list.removeFrom(7));
console.log(list.removeFrom(0));
list.print();

console.log(list.removeValue(30));
console.log(list.removeValue(30));
list.print();

console.log(list.search(40));
console.log(list.search(20));

list.reverse();
list.print();