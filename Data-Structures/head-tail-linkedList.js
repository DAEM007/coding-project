
// Head and tail implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty!');
        } else {
            let listValues = '';
            let curr = this.head;
            while(curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }

    // o(1) OR constant time complexity
    prepend(element) {
        const node = new Node(element);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            let curr = this.head;
            node.next = curr;
            this.head = node;
        }
        this.size++;
    }

    // o(1) OR constant time complexity
    append(element) {
        const node = new Node(element);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            let tail = this.tail;
            tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    // o(1) OR constant time complexity
    removeFront() {
        if(this.isEmpty()) {
            console.log('cannot remove from an empty list!');
            return null;
        } else {
            let curr = this.head;
            this.head = curr.next;
            this.size--;
            return curr.value;
        }
    }

    // o(n) OR linear time complexity
    removeEnd() {
        if(this.isEmpty()) {
            console.log('cannot remove from an empty list!');
            return null;
        }
        let tail = this.tail;
        if(this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while(prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return tail.value;
    }

}

const list = new LinkedList();
console.log(`is List empty?: ${list.isEmpty()}`);
console.log(`list size: ${list.getSize()}`);

list.append('Buggatti');
list.prepend('BMW');
list.prepend('ferrari');
list.prepend('Lamborghini');
list.print();
console.log(`list size: ${list.getSize()}`);

list.removeFront();
list.removeEnd();
list.print();
console.log(`list size: ${list.getSize()}`);
