// stacks implementation with arrays in javascript
class Stack {
    constructor() {
        this.arr = [];
    }
    push(element) {
        // this pushes a specified element to the stack
        this.arr.push(element);
    }
    pop() {
        // this returns the last element in the stack
        return this.arr.pop();
    }
    peak() {
        // get the top element in the stacks without removing it
        return this.arr[this.arr.length - 1];
    }
    isEmpty() {
        // return a boolean to check if the stack is empty
        return this.arr.length === 0;
    }
    size() {
        // returns the size of the stack
        return this.arr.length;
    }
    print() {
        // prints the elements in the stack to visualize it
        console.log(this.arr.toString());
    }
}

const stack1 = new Stack([]);
// console.log(stack1.isEmpty());
// stack1.push(30);
// stack1.push(50);
// stack1.push(40);
// console.log(stack1.size());
// console.log(stack1.print());
// console.log(stack1.pop());
// console.log(stack1.peak());

// stacks implementation with objects in javascript
class stackObj {
    constructor() {
        this.counter = 0;
        this.items = {};
    }

    push(element) {
        this.items[this.counter] = element;
        this.counter++;
    }

    isEmpty() {
        return this.counter === 0;
    }

    pop() {
        if(!this.isEmpty()) {
            let last = this.items[this.counter - 1];
            delete this.items[this.counter - 1];
            this.counter--;
            return last;
        }
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[this.counter - 1];
        }
        console.log('The stack is empty, hence no peek value.');
    }

    size() {
        if(this.isEmpty()) {
            console.log('The stack is empty!');
            return;
        }
        return this.counter;
    }

    print() {
        console.log(this.items);
    }

}

const stack2 = new stackObj({});
// console.log(stack2.push('ferrari'));
// console.log(stack2.push('BMW'));
// console.log(stack2.push('Buggati'));
// console.log(stack2.push('Lamborghini'));
// console.log(stack2.pop());
// console.log(stack2.peek());
// console.log(stack2.isEmpty());
// console.log(stack2.size());
// console.log(stack2.print());
