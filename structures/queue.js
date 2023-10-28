class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class Queue {
    constructor(){
      this.head = null;
      this.tail = null;
    }
    
    isEmpty(){
      return (this.head == null);
    }
    
    push(data){
      const node = new Node(data);
      if (this.tail == null) {
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      if (this.head == null){
        this.head = node;
      }
    }
    
    remove(){
      const value = this.head.data;
      this.head = this.head.next;
      return value;
    }
    
    print(){
      let pointer = this.head;
      while(pointer !== null){
        console.log(pointer.data);
        pointer = pointer.next;
      }
    }
  }
  
  const q = new Queue();
  q.push(1);
  q.push(2);
  q.push(3);
  q.push(4);
  q.push(5);
  q.push(6);
  
  q.print();
  
  console.log(`removed from queue ${q.remove()}`);
  console.log(`removed from queue ${q.remove()}`);
  q.push(1);
  q.push(2);
  console.log(`removed from queue ${q.remove()}`);
  
  
  
  q.print();
  