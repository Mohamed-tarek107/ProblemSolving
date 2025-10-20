class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newnode = new Node(value);

    if (this.root == null) {
      this.root = newnode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (newnode.value === temp.value) {
        return undefined;
      }

      if (newnode.value < temp.value) {
        if (temp.left === null) {
          this.left = newnode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newnode ;
          return this;
        } else {
          temp = temp.right;
        }
      }
    }
  }


  includes(value){
    if(!this.root){
      return false;
    }

    let temp = this.root
    
    while(temp){

      if(value < temp.value){
        temp = temp.left;
      }else if(value > temp.value){
        temp = temp.right;
      }else if(value === temp.value){
        return true;
      }
    }
    return false;
  }

}


const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);