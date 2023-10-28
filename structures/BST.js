class Node {
    constructor(data){
      this.left = null;
      this.right = null;
      this.data = data;
    }
    
    insert(data) {
      if (data <= this.data) {
        if (this.left !== null) {
          this.left.insert(data);
        } else {
          this.left = new Node(data);
        }
      } else {
        if (this.right !== null) {
          this.right.insert(data);
        } else {
          this.right = new Node(data);
        }
      }
    }
    
    printInOrder() {
      if (this.left !== null) {
        this.left.printInOrder();
      }
      console.log(this.data);
      if (this.right !== null) {
        this.right.printInOrder();
      }
    }
}
  
  
const head = new Node(12);
head.insert(2);
head.insert(3);
head.insert(45);
head.insert(23);
head.insert(99);

head.printInOrder();