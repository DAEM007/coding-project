
// Queues implementation with linkedList
const LinkedList = require('./head-tail-linkedList');

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(element) {
        this.list.append(element);
    }

    dequeue() {
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

const queue = new LinkedListQueue();
console.log(`is queue empty?: ${queue.isEmpty()}`);

queue.enqueue('ferrari');
queue.enqueue('BMW');
queue.enqueue('lamborghini');
queue.enqueue('Buggatti');

queue.dequeue();
console.log(`queue size: ${queue.getSize()}`);
queue.print();
console.log(queue.peek());


