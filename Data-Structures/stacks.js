// stacks implementation
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

// create a new stack
const stack1 = new Stack([]);
// console.log(stack1.isEmpty());
stack1.push(30);
stack1.push(50);
stack1.push(40);
// console.log(stack1.size());
// console.log(stack1.print());
// console.log(stack1.pop());
// console.log(stack1.peak());
