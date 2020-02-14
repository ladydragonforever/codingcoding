// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val, next=null) {
        this.value = val;
        this.next = next;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor(head=null, tail=null, length=0) {
        this.head = head;
        this.tail = tail;
        this.length = length;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val)
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length ++;
            return this
        }
        this.tail.next = newNode; 
        this.tail = newNode;
        this.length ++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        let removedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length === 0;
            return removedNode;
        }

        let currentNode = this.head;
        
        let newTail = currentNode;

        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next
        }
        
        this.tail = newTail;
        this.tail.next = null;

        this.length --;

        return removedNode;
        
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
    

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
            return this;
        }
        let head = this.head;
        this.head = newNode;
        newNode.next = head;
        
        this.length ++

        return this;

    }

    // TODO: Implement the removeHead method here
    removeHead() {
        let head = this.head;
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return head;
        }
      
        let newHead = head.next;
        this.head = newHead;
        this.length--

        return head;
    }

    // TODO: Implement the contains method here
    contains(target) {
        // to iterate through a linked list; use while loop to check if the currentNode having any next
        let currentNode = this.head
        if (currentNode.value === target) return true;
        while(currentNode.next) {
            currentNode = currentNode.next
            if (currentNode.value === target) return true;
        }

        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index >= this.length) return null;

        let currentNode = this.head;

        let curIndex = 0;

        while(currentNode.next) {
            if (curIndex < index) {
                currentNode = currentNode.next;
                curIndex++
                continue
            } else if (curIndex === index) {
                return currentNode
            }
            
        }
    }

    // TODO: Implement the set method here
    set(index, val) {
        // if (!this.get(index)) return false;
        // if (this.get(index).value = val) return true;
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = val;
            return true;
        }
        return false
    }

    // TODO: Implement the insert method here
    insert(index, val) {

        let newNode = new Node(val);
        if (index >= this.length) return false;
        if (index === this.length) return !!this.addToTail(val);
        if (index === 0) return !!this.addToHead(val);

        let preNode= this.get(index-1);

        let currentNode = preNode.next;

        preNode.next = newNode;
        newNode.next = currentNode;

        this.length ++ 

        return true;

    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index >= this.length) return undefined
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();
        let preNode = this.get(index-1);
        let currentNode = preNode.next;
        let nextNode = currentNode.next;
        preNode.next = nextNode;
        this.length --
        return currentNode;


    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
