// Queues implementation

class Queue {
    constructor() {
        this.arr = [];
    }

    enqueue(element) {
        this.arr.push(element);
    }

    dequeue() {
        return this.arr.shift();
    }

    peek() {
        if(!this.isEmpty()) {
            return this.arr[0];
        }
        return null;
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    size() {
        return this.arr.length;
    }

    print() {
        console.log(this.arr.toString());
    }

}

const q = new Queue([]);
// console.log(q.isEmpty());
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
// console.log(q.size());
// console.log(q.dequeue());
// console.log(q.peek());  
console.log(q.print());