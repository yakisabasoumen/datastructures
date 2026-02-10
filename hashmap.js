import { LinkedList } from "./linkedlist.js";

class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.bucketArray = new Array(this.capacity);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    containsKeyAndReplace(key1, list, value) {
        let temp = list.head;
        if (temp.key === key1) {
            temp.data = value;
            return true;
        }
        while (temp.next != null) {
            if (temp.key === key1) {
                temp.data = value;
                return true;
            }
            temp = temp.next;
        }
        if (temp.key === key1) {
            temp.data = value;
            return true;
        }
    }

    set(key, value) {
        const index = this.hash(key);
        if (this.bucketArray[index] == null) {
            this.bucketArray[index] = new LinkedList();
            let element = this.bucketArray[index].appendToEnd(value);
            element.key = key;
            this.isRegrowthNeeded();
        } else if (this.containsKeyAndReplace(key, this.bucketArray[index], value)) {
            return;
        } else {
            let element = this.bucketArray[index].appendToEnd(value);
            element.key = key;
            this.isRegrowthNeeded();
        }
    }

    isRegrowthNeeded() {
        let entries = 0;
        let entries_permitted = this.capacity * this.loadFactor;
        this.bucketArray.forEach(element => {
            entries += element.size();
        });
        return (entries > entries_permitted) ? this.regrowth() : false;
    }

    regrowth() {
        this.capacity = this.capacity * 2;
        let originalArray = this.bucketArray;
        this.bucketArray = new Array(this.capacity);
        originalArray.forEach(bucket => {
            this.set(bucket.head.key, bucket.head.data);
            while (bucket.head.next != null) {
                bucket.head = bucket.head.next;
                this.set(bucket.head.key, bucket.head.data);
            }
        })
    }

    get(key1) {
        let index = this.hash(key1);
        if (this.bucketArray[index] != null) {
            console.log(this.bucketArray[index].containsKey1(key1));
            return this.bucketArray[index].containsKey1(key1);
        } else {
            return null;
        }
    }

    has(key1) {
        let index = this.hash(key1);
        if (this.bucketArray[index] != null) {
            let hasKey = this.bucketArray[index].containsKey(key1);
            return hasKey;
        } else {
            return false;
        }
    }

    remove(key) {
        let index = this.hash(key);
        let indextormv = 1;
        let temp = this.bucketArray[index].head;
        if (this.bucketArray[index] != null) {
            if (this.has(key)) {
                if (temp.next === null) {
                    delete this.bucketArray[index];
                    return;
                }
                while (temp.next != null) {
                    if (temp.key === key) {
                        break;
                    }
                    indextormv = indextormv + 1;
                    temp = temp.next;
                }
                this.bucketArray[index].removeAt(indextormv);
                return true;
            } else {
                console.log("The entry with key " + key + " doesn't exist.");
                return false;
            }
        } else {
            console.log("The entry with key " + key + " doesn't exist.");
            return false;
        }
    }

    length() {
        let numberOfEntries = 0;
        this.bucketArray.forEach(bucket => {
            numberOfEntries = numberOfEntries + bucket.size();
        })
        return numberOfEntries;
    }

    clear() {
        this.capacity = 16;
        this.bucketArray = new Array(this.capacity);
    }

    keys() {
        let arrayOfKeys = [];
        this.bucketArray.forEach(bucket => {
            let temp = bucket.head;
            while (temp != null) {
                arrayOfKeys.push(temp.key)
                temp = temp.next;
            }
        });
        return arrayOfKeys;
    }

    values() {
        let arrayOfValues = [];
        this.bucketArray.forEach(bucket => {
            let temp = bucket.head;
            while (temp != null) {
                arrayOfValues.push(temp.data)
                temp = temp.next;
            }
        });
        return arrayOfValues;
    }

    entries() {
        let arrayOfEntries = [];
        this.bucketArray.forEach(bucket => {
            let temp = bucket.head;
            while (temp != null) {
                let entry = [];
                entry.push(temp.key);
                entry.push(temp.data);
                arrayOfEntries.push(entry);
                temp = temp.next;
            }
        });
        return arrayOfEntries;
    }
}

const hashmap = new HashMap();
hashmap.set('apple', 'red')
hashmap.set('banana', 'yellow')
hashmap.set('carrot', 'orange')
hashmap.set('dog', 'brown')
hashmap.set('elephant', 'gray')
hashmap.set('frog', 'green')
hashmap.set('grape', 'purple')
hashmap.set('hat', 'black')
hashmap.set('ice cream', 'white')
hashmap.set('jacket', 'blue')
hashmap.set('kite', 'pink')
hashmap.set('lion', 'golden')
hashmap.set('moon', 'silver')
hashmap.set('moon', 'gold')
// console.dir(hashmap.bucketArray, { depth: null });
// console.log(hashmap.bucketArray.length);
hashmap.has("hat1");
hashmap.get("ice cream");
hashmap.set('hola', 'adios')
hashmap.remove('hat');
hashmap.set('hat', 'black')
hashmap.remove('hola');
hashmap.remove('hola');
console.log(hashmap.length());
// hashmap.clear();
// hashmap.set('frog', 'green');
// hashmap.remove('frog')
console.dir(hashmap.bucketArray, { depth: null });
console.log(hashmap.keys());
console.log(hashmap.values());
console.log(hashmap.entries());

