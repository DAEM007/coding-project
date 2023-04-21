const LinkedList = require('./head-tail-linkedList');

class LinkedListStack {
    constructor() {
        this.list = new LinkedList();
    }

    push(element) {
        return this.list.prepend(element);
    }

    pop() {
        return this.list.removeFront();
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }

}

// const listStack = new LinkedListStack();

// console.log(`is list empty?: ${listStack.isEmpty()}`);

// listStack.push('ferrari');
// listStack.push('BMW');
// listStack.push('lamborghini');
// listStack.push('Buggatti');

// listStack.print();
// console.log(`list size: ${listStack.getSize()}`);

// listStack.pop();
// listStack.print();

// console.log(`peek list: ${listStack.peek()}`);