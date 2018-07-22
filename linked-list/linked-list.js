/**
* `push` (*insert value at back*);
* `pop` (*remove value at back*);
* `shift` (*remove value at front*).
* `unshift` (*insert value at front*);
**/
class Node {
    constructor (value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

LinkedList = function () {
    this.head = new Node();
}

LinkedList.prototype.print = function (val) {
    let curr_node = this.head;
    while (curr_node.next) {
        curr_node = curr_node.next;
        console.log(curr_node.value);
    }
}

LinkedList.prototype.push = function (val) {
    let curr_node = this.head;
    while (curr_node.next) {
        curr_node = curr_node.next;
    }
    curr_node.next = new Node(val, curr_node);
}

LinkedList.prototype.pop = function () {
    let curr_node = this.head;
    while (curr_node.next) {
        curr_node = curr_node.next;
    }
    let val = curr_node.value;
    curr_node = curr_node.prev;
    curr_node.next = undefined;
    return val;
}

LinkedList.prototype.delete = function (val) {
    let curr_node = this.head;
    while (curr_node.value != val) {
        curr_node = curr_node.next;
    }
    // now current node is node to delete
    prev_node = curr_node.prev;
    next_node = curr_node.next; // will be undefined if node is tail
    prev_node.next = next_node;
    if (!!next_node) {
        next_node.prev = prev_node;
    }
}

LinkedList.prototype.shift = function () {
    let curr_node = this.head.next;
    let val = curr_node.value;
    curr_node.prev = undefined;
    curr_node.value = undefined;
    this.head = curr_node;
    return val;
}

LinkedList.prototype.unshift = function (val) {
    this.head.value = val;
    new_head = new Node();
    new_head.next = this.head;
    this.head.prev = new_head;
    this.head = new_head;
}

LinkedList.prototype.count = function () {
    let i = 0;
    let curr_node = this.head;
    while (curr_node.next) {
        curr_node = curr_node.next;
        i += 1;
    }
    return i;
}

module.exports = LinkedList;

list = new LinkedList()
