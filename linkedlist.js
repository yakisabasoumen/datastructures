export class LinkedList {
    constructor() {
        this.head = null;
    }

    appendToEnd(data) {
        const element = new Node(data);
        if (this.head == null) {
            this.head = element;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = element;
        }
        return element;
    }

    prepend(data) {
        const element = new Node(data);
        let temp = this.head;
        element.next = temp;
        this.head = element;
    }

    size() {
        let count = 0;
        let temp = this.head;
        while (temp != null) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    headValue() {
        if (this.head === null) return undefined;
        return this.head.data;
    }

    tail() {
        let temp = this.head;
        if (temp === null) return undefined;
        if (temp.next === null) return temp.data;
        while (temp.next != null) {
            temp = temp.next;
        }
        return temp.data;
    }

    at(index) {
        let temp = this.head;
        let i = 1;
        if (i === index) {
            return temp.data;
        } else {
            while (temp.next != null) {
                temp = temp.next;
                i++;
                if (i === index) {
                    return temp.data;
                }
            }
        }
    }

    pop() {
        let value = this.head.data;
        this.head = this.head.next;
        return value;
    }

    contains(value) {
        let temp = this.head;
        while (temp.next != null) {
            if (temp.data === value) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    containsKey1(key1) {
        let temp = this.head;
        if (temp.key === key1) return temp.data;
        while (temp.next != null) {
            temp = temp.next;
            if (temp.key === key1) {
                return temp.data;
            }
        }
        return null;
    }

    containsKey(key1) {
        let temp = this.head;
        if (temp.key === key1) return true;
        while (temp.next != null) {
            temp = temp.next;
            if (temp.key === key1) {
                return true;
            }
        }
        return false;
    }

    toString() {
        let string = "";
        let temp = this.head;
        if (this.head == null) {
            return string;
        }
        while (temp.next != null) {
            string += "(" + temp.data + ") -> ";
            temp = temp.next;
        }
        string += "(" + temp.data + ") -> null";
        return string;
    }

    insertAt(index, ...values) {
        let i = 1;
        let array = [...values];
        if (index == i) {
            for (let j = (array.length - 1); j >= 0; j--) {
                this.prepend(array[j]);
            }
            return;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
            i++;
        }
        try {
            if (index > i || index < 1) throw RangeError;
        } catch (error) {
            console.log(error);
            return;
        }
        temp = this.head;
        i = 1;
        while (i < index) {
            i++
            temp = temp.next;
        }
        let temp1 = temp.next;
        temp.next = null;
        for (let j = 0; j <= (array.length - 1); j++) {
            this.appendToEnd(array[j]);
        }
        temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = temp1;
    }
    removeAt(index) {
        let len = 1;
        let temp = this.head;
        while (temp.next != null) {
            len++;
            temp = temp.next;
        }
        try {
            if (index > len || index < 1) throw RangeError;
        } catch (error) {
            console.log(error);
            return;
        }
        temp = this.head;
        let i = 1;
        if (index == 1) {
            this.pop();
            return;
        }
        while (i < (index - 1)) {
            temp = temp.next;
            i++;
        }
        temp.next = temp.next.next;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.key = null;
        this.next = null;
    }
}

// const list = new LinkedList();
// list.appendToEnd("sonic");
// list.appendToEnd("tails");
// list.appendToEnd("shadow");
// list.appendToEnd("knucles");
// list.prepend("doctor eggman");
// list.prepend("amy rose");
// list.appendToEnd("blaze");

// console.dir(list, { depth: null });
// console.log(list.size());

// console.log(list.headValue());
// console.log(list.tail());
// console.log(list.at(4));
// console.log(list.pop());
// console.log(list.contains("doctor eggman"));
// list.insertAt(4, "1", "2", "3");
// list.removeAt(1);
// console.log(list.toString());
