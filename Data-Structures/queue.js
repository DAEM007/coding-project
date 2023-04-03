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

// cirular queue implementation

class circularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if(this.isFull()) {
            console.log(`Can't perform enqueue operation on a full queue.`);
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = element;
        this.currentLength++;
        if(this.front === -1) {
            this.front = this.rear;
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log(`sorry! can't perform a dequeue operation on an empty queue.`);
        }else {
            let item = this.items[this.front];
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            this.currentLength--;
            if(this.isEmpty()) {
                this.front = -1;
                this.rear = -1;
            }
            return item;
        }
    }

    peek() {
        if(this.isEmpty()) {
           console.log(`Can't get peek element on an empty queue.`); 
        }
        return this.items[this.front];
    }

    print() {
        if(this.isEmpty()) {
            console.log(`Queue is Empty.`);
        }
        let i;
        let str = '';
        for(i = this.front; i !== this.rear; i = (i+1) % this.capacity) {
            str += this.items[i] + ' ';
        }
        str += this.items[i];
        console.log(str);
    }

}

const circular1 = new circularQueue(5);
circular1.enqueue("ferrari");
circular1.enqueue("BMW");
circular1.enqueue("Buggatti");
circular1.enqueue("Lamborghini");
circular1.enqueue("Ford");
circular1.dequeue();
console.log(circular1.peek());
console.log(circular1.isFull());
console.log(circular1.isEmpty());
console.log(circular1.print());

