
// Hash table implementation
// 3 major - operations
// set
// get
// remove
// hash function 

class HashMap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    hashFunction(key) {
        let total = 0;
        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hashFunction(key);
        this.map[index] = value;
    }

}

const hash = new HashMap(50);

hash.set('name', 'Emmanuel');
hash.set('age', 24);

