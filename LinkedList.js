class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    removeFirst() {
        this.head = this.head.next;
    }

    getAt(i) {
        let node = this.head;

        while (i > 0) {
            node = node.next;
            i--;
        }

        return node;
    }

    removeAll() {
        this.head = null;
    }
 
    removeFirst() {
        this.head = this.head.next;
    }

    removeLast() {
        if (this.head === null || this.head.next === null) {
            this.head = null;
        } else {
            var headNode = this.head;
            var tailNode = this.head.next;

            while (tailNode.next) {
                headNode = tailNode;
                tailNode = tailNode.next;
            }

            headNode.next = null;
        }
    }

    getLast() {
        if (this.head === null) {
            return null;
        }

        let node = this.head.next;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }

        return node;
    }

    insertLast(data) {
        if (this.head === null) {
            this.head = new Node(data, this.head);
        }

        let node = this.head.next;
        while (node.next) {
            node = node.next;
        }
        node.next = new Node(data, null);
    }

    insertAt(i, data) {
        if (!this.head) {
            throw new Error('Linked List is null!');
        }

        if (i<0) {
            throw new Error('Index out of bound Exception!');
        }

        if (i === 0) {
            this.head = new Node(data,this.head);
            return;
        }

        let count = 0;
        let node = this.head;

        while (count < i-1) {
            node = node.next;
            if (!node) {
                throw new Error('Index out of bound Exception!');
            }
            count++;
        }

        node.next = new Node(data, node.next);
    }

    removeAt(i) {
        if (!this.head) {
            throw new Error('Linked List is null!');
        }

        if (i<0) {
            throw new Error('Index out of bound Exception!');
        }

        if (i === 0) {
            this.head = this.head.next
            return;
        }

        let count = 0;
        let node = this.head;

        while (count < i) {
            node = node.next;
            if (!node) {
                throw new Error('Index out of bound Exception!');
            }
            count++;
        }

        node.data = node.next.data;
        node.next = node.next.next;
    }
}

function fromLast(list = new LinkedList(), i = 0) {
    if (i < 1) {
        return list.getLast();
    }

    let node = list.getLast();

    while (i > 0) {
        list.removeLast();
        node = list.getLast();
        i--;
    }

    return node;
}

function midPoint(list = new LinkedList()) {
    var iteratorNode = list.getFirst();

    var middleNode = iteratorNode;
    var counter = 0;

    while (iteratorNode) {
        counter++;
        if ((counter % 2) === 0) {
            middleNode = middleNode.next;
        }
        iteratorNode = iteratorNode.next;
    }

    return middleNode;
}



var linkedList = new LinkedList();

linkedList.insertFirst(1);
linkedList.insertFirst(2);
linkedList.insertFirst(3);
linkedList.insertFirst(4);
linkedList.insertFirst(5);
linkedList.insertFirst(6);
linkedList.insertFirst(7);

console.log(fromLast(linkedList,4));