
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
        this.map[index] = value;
    }

    get(key) {
        const index = this.hashFunction(key);
        return this.map[index];
    }

    remove(key) {
        const index = this.hashFunction(key);
        this.map[index] = undefined;
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

hash.set('name', 'Emmanuel');
hash.set('age', '23');
hash.set('job', 'software engineer');
hash.set('company', 'Meta');

console.log(hash.get('name'));
hash.remove('age');
hash.print();

