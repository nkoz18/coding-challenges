class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{

    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){

        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        }else{

            let current = this.head;
            let newTail = current;

            while(current.next){
                newTail = current;
                current  = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if(this.length === 0 ){
                this.head = null;
                this.tail = null;
            }
            return current;
        }
                
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if(this.length === 0 ){
            this.tail = null;
        }
        return oldHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
           this.head = newNode;
           this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(pos){
        if(pos >= this.length || pos < 0) return null;
        let node = this.head;
        for(let i = 0; i < pos; i++){
            node = node.next;
        }
        return node;
    }

    set(pos, value){
        let node = this.get(pos);
        if(node){
            node.val = value;
            return true;
        }else{
            return false;
        }
    }

    insert(pos, value){
        
        if(pos < 0 || pos > this.length){
            return false;
        }else if(pos === this.length) {
            this.push(value);
            return true;
        }else if(pos === 0){
            this.unshift(value);
            return true;
        }else{
            let newNode = new Node(value);
            let beforeNode = this.get(pos - 1);
            let tempNext = beforeNode.next;
            beforeNode.next = newNode;
            newNode.next = tempNext;
            this.length++;
            return true;
        }      

    }

    remove(pos){
        if(pos < 0 || pos >= this.length){
            return undefined;
        }else if(pos === this.length - 1){
            return this.pop();
        }else if(pos === 0){
            return this.shift();
        }else{
            let beforeNode = this.get(pos - 1);
            let removed = beforeNode.next;
            beforeNode.next = removed.next;
            this.length--;
            return removed;
        }
    }

    reverse(){

        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        while(next !== null){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }

    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

}


var list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);

console.log(list);
console.log(list.reverse());
list.print();
