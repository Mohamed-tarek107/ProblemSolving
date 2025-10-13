class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}


class DoublyLinkedlist {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value){
        let newnode = new Node(value)
        let temp = this.head;

        if(!this.head){
            this.head = newnode;
            this.tail = newnode;
        }

        this.tail.next = newnode;
        newnode.prev = this.tail
        this.tail = newnode

        this.length++

        return this;
    }

    pop(){
        let temp = this.tail;

        if(this.length == 0){
            return undefined;
        }

        if(this.length === 1){
            this.head = null;
            this.tail = null
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }


    unshift(value){
        
        let newnode = new Node(value);

        if(this.length === 0){
            this.head = newnode;
            this.tail = newnode;
        }else{
            let temp = this.head;
            newnode.next = temp;
            this.head = newnode;
            temp.prev = newnode;
        }
        this.length++;
        return this;
    }

    shift(){
        let temp = this.head;

        if(this.length === 0){
            return undefined;
        }

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--
        return temp;
    }

    
}


let myDoublyLinkedlist = new DoublyLinkedlist(0)
myDoublyLinkedlist.push(1)
myDoublyLinkedlist.push(2)
myDoublyLinkedlist.push(3)
myDoublyLinkedlist.push(4)
myDoublyLinkedlist.push(5)

myDoublyLinkedlist.pop()
console.log(myDoublyLinkedlist)