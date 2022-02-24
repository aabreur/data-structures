class Node {
    constructor (data){
      this.data = data;
      this.next = null;
    }
}
  
class LinkedList {
    constructor (head = null) {
      this.head = head;
    }
    
    append(data) {
      if (this.head == null) {
        this.head = new Node(data);
      } else { 
        let current = this.head;
        while(current.next !== null) {
          current = current.next;
        }
        current.next = new Node(data);
      }
    }
    
    prepend(data) {
      const oldHead = this.head;
      this.head = new Node(data);
      this.head.next = oldHead;
    }
    
    print() {
      let current = this.head;
      let finalStr = ""
      while (current !== null){
        finalStr += current.next == null ? current.data.toString() : `${current.data} -> `;
        current = current.next;
      }
      console.log(finalStr);
    }
}
  
const list = new LinkedList();
list.prepend(9);
list.append(12);
list.append(10);
list.append(-8);
list.prepend(0);
list.append(45);

list.print();