class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}
  
class Stack {
    constructor(head = null){
        this.head = head;
    }

    push(data){
        this.head = new Node(data, this.head);
    }

    pop(){
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
  
const s = new Stack();
s.push(3);
s.push(5);
s.push(7);
s.print();
console.log(`Pop = ${s.pop()}`);
console.log(`Pop = ${s.pop()}`);
s.print();