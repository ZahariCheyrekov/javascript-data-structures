class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() {
        // use the optimised queue implementation
        const queue = [];
        queue.push(this.root);

        while (queue.length) {
            let current = queue.shift();
            console.log(current.value);

            if (current.left) {
                queue.push(current.left);
            }

            if (current.right) {
                queue.push(current.right);
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }
}

const bst = new BinarySearchTree();
console.log('Tree is empty?', bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));

bst.levelOrder(bst.root);

console.log(bst.min(bst.root));
console.log(bst.max(bst.root));