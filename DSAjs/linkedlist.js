class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newnode = new Node(value);

    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    }

    this.tail.next = newnode;
    this.tail = newnode;
    this.length++;
  }

  pop() {
    if (!head) {
      return undefined;
    }
    let temp = this.head;
    let prev = this.head;
    let delptr = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    let newnode = new Node(value);

    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    }
    newnode.next = this.head;
    this.head = newnode;
    this.length++;

    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;

    this.head = this.head.next;

    temp.next = null;
    this.length--;

    if (this.length == 0) {
        this.tail = null;
    }

    return temp;
   }

  getfirst() {
    return this.head;
  }

  getlast() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;

    while (temp) {
      if (!temp.next) {
        return temp;
      }
    }
  }

    get(index){
        let temp = this.head
        let counter = 0;

        while(temp){
            if(counter === index){
                return temp
            }

            counter++;
            temp = temp.next;
        }

        return null;
    }

    set(index, value){
        let temp = this.get(index);
        
        if(temp){
            temp.value = value;
            return true;
        }

        return false;
    }

    insert(index, value){
        const newnode = new Node(value)
        if(index === 0){
            return this.unshift(value)
        }
        if(index === this.length){
            return push(value)
        }

        let temp = get(index - 1)

        newnode.next = temp.next;
        temp.next = newnode;
        this.length++

        return true;
        
    }

    clear(){
        this.head = null;
        this.length = 0;
    }

    reverse(){
      let temp = this.head;
      let prev = null;
      let next = null;

      this.head = this.tail;
      this.tail = temp;

      while(temp){
          next = temp.next;
          temp.next = prev;
          prev = temp;
          temp = next;
      }
    }
}

// const mylinkedlist = new Linkedlist(1)
// mylinkedlist.push(10)
// console.log(mylinkedlist)
