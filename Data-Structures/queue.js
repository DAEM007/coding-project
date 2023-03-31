// Queues implementation

// class Queue {
//     constructor() {
//         this.arr = [];
//     }

//     enqueue(element) {
//         this.arr.push(element);
//     }

//     dequeue() {
//         return this.arr.shift();
//     }

//     peek() {
//         if(!this.isEmpty()) {
//             return this.arr[0];
//         }
//         return null;
//     }

//     isEmpty() {
//         return this.arr.length === 0;
//     }

//     size() {
//         return this.arr.length;
//     }

//     print() {
//         console.log(this.arr.toString());
//     }

// }

// const q = new Queue([]);
// console.log(q.isEmpty());
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// q.enqueue(40);
// console.log(q.size());
// console.log(q.dequeue());
// console.log(q.peek());  
// console.log(q.print());

// optimized queue implementation with objects
class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        let first = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return first;
    }

    peek() {
        return this.items[this.front];
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log(this.items);
    }

}

const queue1 = new Queue();
// console.log(queue1.isEmpty());
// queue1.enqueue(10);
// queue1.enqueue(20);
// queue1.enqueue(30);
// queue1.enqueue(40);
// console.log(queue1.dequeue()); 
// console.log(queue1.peek());    
// console.log(queue1.size());
// queue1.print();