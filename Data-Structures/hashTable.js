
// Hash table implementation
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
        const index = this.hashFunction(key);
        // this.map[index] = value;
        if(!this.map[index]) {
            // create new bucket in that index with key-value pairs
            this.map[index] = [[key, value]];
        } else {
            for(let i = 0; i < this.map[index].length; i++) {
                // check element in the bucket has key equals passed in key
                if(this.map[index][i][0] === key) {
                    this.map[index][i][1] = value;
                } else {
                    // if no element...simply push new key-value pairs
                    this.map[index].push([key, value]);
                }
            }
        }
    }

    get(key) {
        const index = this.hashFunction(key);
        // return this.map[index];
        for(let i = 0; i < this.map[index].length; i++) {
            if(this.map[index][i][0] === key) {
                // return the value
                return this.map[index][i][1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hashFunction(key);
        // this.map[index] = undefined;
        for(let i = 0; i < this.map[index].length; i++) {
            if(this.map[index][i][0] === key) {
                this.map[index].splice(i, 1);
            }
        }
        console.log(`${key} not defined!`);
    }

    print() {
        for(let i = 0; i < this.map.length; i++) {
            if(this.map[i]) {
                console.log(i, this.map[i]);
            }
        }
    }

}

const hash = new HashMap(50);

// hash.set('name', 'Emmanuel');
// // hash.set('name', 'Diana');
// hash.set('mane', 'Damilola');
// hash.set('age', '23');
// hash.set('job', 'software engineer');
// hash.set('company', 'Meta');

// console.log(hash.get('name'));
// hash.remove('black');
// hash.print();

