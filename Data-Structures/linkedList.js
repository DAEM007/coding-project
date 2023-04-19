// LinkedList implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(element) {
        const node = new Node(element);
        if(this.isEmpty()) {
            this.head = node;
        }else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(element) {
        const node = new Node(element);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(index, value) {
        if(index < 0 || index > this.size) {
            console.log('Node to insert is out of bound');
            return;
        }
        if(index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            console.log('Node to remove is out of bound');
            return null;
        }
        let removedNode;
        if(index === 0) {
            removedNode = this.head;
            this.head = removedNode.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode;
    }

    print() {
        if(this.isEmpty()) {
            console.log('The linked list is Empty!');
        }else {
            let listValues = '';
            let current = this.head;
            while(current) {
                listValues += `${current.value} `;
                current = current.next;
            }
            console.log(listValues);
        }
    }
}

const linkedList1 = new linkedList();
console.log(`Is linkedListEmpty? : ${linkedList1.isEmpty()}`);
console.log(`linkedList size : ${linkedList1.getSize()}`);
linkedList1.print();

// insert

linkedList1.insert(0, 'ferrari');
linkedList1.print();
linkedList1.insert(0, 'buggatti');
linkedList1.print();
linkedList1.insert(1, 'Lamborghini');
linkedList1.print();
linkedList1.insert(2, 'BMW');
linkedList1.print();
console.log(`linkedList size: ${linkedList1.getSize()}`);

// removeFrom
linkedList1.removeFrom(10);
linkedList1.print();
linkedList1.removeFrom(0);
linkedList1.print();
linkedList1.removeFrom(1);
linkedList1.print();
console.log(`linkedList size: ${linkedList1.getSize()}`);


// prepend

// linkedList1.print();
// linkedList1.prepend('ferrari');
// linkedList1.print();
// linkedList1.prepend('BMW');
// linkedList1.prepend('Bugatti');
// linkedList1.prepend('Lamborghini');
// linkedList1.print();

// append

// linkedList1.print();
// linkedList1.append('ferrari');
// linkedList1.print();
// linkedList1.append('BMW');
// linkedList1.append('Bugatti');
// linkedList1.append('Lamborghini');
// linkedList1.print();






