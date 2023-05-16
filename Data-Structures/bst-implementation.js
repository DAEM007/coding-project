// Implementation of a binary search tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    // check if empty
    isEmpty() {
        return this.root === null;
    }

    // insert
    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // recursive function for insertion
    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode;
            } else {
                return this.insertNode(root.left, newNode);
            }
        } else {
            if(root.right === null) {
                root.right = newNode;
            } else {
                return this.insertNode(root.right, newNode);
            }
        }
    }

    // search
    search(root, value) {
        if(!root) {
            return false;
        } else {
            if(value === root.value) {
                return true;
            } else if(value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    // All DFS traversals
    preOrder(root) {
        if(root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    // BFS traversals
    levelOrder(root) {
        // recall you can use the optimized version for the queue
        const queue = [];
        queue.push(root);
        while(queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left) {
                queue.push(curr.left);
            }
            if(curr.right) {
                queue.push(curr.right);
            }
        }
    }

    // min value of a tree
    min(root) {
        if(!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    // max value of a tree
    max(root) {
        if(!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    delete() {
        
    }

}

// invert a binary tree
// invert(root) {
//     if(!root) {
//         return root;
//     }
//     let left = root.left;
//     let right = root.right;
//     left = root.right;
//     right = root.left;
//     this.invert(root.left);
//     this.invert(root.right);
//     // console.log(root);
//     return root;
// }

const bst = new binarySearchTree();
console.log(`isEmpty?: ${bst.isEmpty()}`);
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 3));
// console.log(bst.search(bst.root, 7));
// console.log(`isEmpty?: ${bst.isEmpty()}`);
// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
// bst.levelOrder(bst.root);
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
console.log(bst.invert(bst.root));
