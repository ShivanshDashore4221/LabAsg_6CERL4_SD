//Q21. Write a JavaScript program to check whether a single linked list is empty or not. Return true otherwise false.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;                
    }
}

class SinglyLinkedList {
    constructor(Head = null) {
        this.Head = Head
    }

    add(newNode){
        let node = this.Head;
        if(node == null){
            this.Head = newNode;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }

    isEmpty(){
        if(this.Head == null){
            console.log("List is empty.");
        }
        else{
            console.log("List not empty.");
        }
    }

    printList(){
        let node = this.Head;
        var str = ""
        while (node) {
            str += node.val + "->";
            node = node.next;
        }
        str += "NULL"
        
        console.log(str);  
    }
}


let numList = new SinglyLinkedList();
numList.isEmpty();
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(1));
numList.add(new Node(5));
numList.printList();
numList.isEmpty();

