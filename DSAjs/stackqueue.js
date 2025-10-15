class Node {
constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
constructor(value) {
    const newnode = new Node(value);
    this.first = newnode;
    this.length = 1;
}

   push(value) {
    let newnode = new Node(value);

    if (this.length === 0) {
        this.first = newnode;
        this.length++;
    }
    newnode.next = this.first;
    this.first = newnode;
    this.length++;
    return this;
}

  pop() {
    
    if (this.length === 0) {
        return undefined;
    }
    
    let temp = this.first;
    if (this.length === 1) {
        this.first = null;
        this.length--;
    }

    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
}

  getmin() {
    if (this.length === 0) return undefined;

    let temp = this.first;
    let minNum = temp.value;
    while (temp) {
        if (temp.value < minNum) {
            minNum = temp.value;
        }
        temp = temp.next;
    }
    return minNum;
}
}

class Queue {
constructor(value) {
    const newnode = new Node(value);
    this.first = newnode;
    this.last = newnode;
    this.length = 1;
}

  enqueue(value) {
    let newnode = new Node(value);

    if (this.length === 0) {
        this.first = newnode;
        this.last = newnode;
        this.length++;
    }

    this.last.next = newnode;
    this.last = newnode;
    this.length++;
}

  dequeue() {
    let temp = this.first;

    if (this.length == 0) {
        return undefined;
    }

    if (this.length === 1) {
        this.first = null;
        this.last = null;
    } else {
        this.first = this.first.next;
        temp.next = null;
    }
    this.length--;
    return temp;
}
}

let theStack = new Stack(0);
let myqueue = new Queue(0);
