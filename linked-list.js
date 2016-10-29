let makeLinkedList = function () {
    "use strict";
    let length = 0;
    let head = undefined;

    function find(index, currentNode) {
        let node;
        if (currentNode === undefined) {
            node = head;
        }
        if (currentNode !== undefined) {
            node = currentNode;
        }
        if (index === 0) {
            return node;
        }
        if (index !== 0) {
            return find(index - 1, node.next);
        }
    }
    function insert(index, value) {
        let newNode = {
            value: value
        };

        if (index < 0 || index > length) {
            throw new Error("Index Error");
        }

        if (index === 0) {
            newNode.next = head;
            head = newNode;
        }

        if (index !== 0) {
            let node = find(index - 1);
            newNode.next = node.next;
            node.next = newNode;
        }

        length += 1;
    }

    function get(index) {
        if (index < 0 || index >= length) {
            throw new Error("Index Error");
        }

        return find(index).value;
    }

    function remove(index) {
        if (index < 0 || index >= length) {
            throw new Error("Index Error");
        }
        if (index === 0) {
            head = head.next;
        }
        if (index !== 0) {
            let node = find(index - 1);
            node.next = node.next.next;
        }
        length -= 1;
    }

    return {
        get: get,
        insert: insert,
        remove: remove
    };
};

let ourLinkedList = makeLinkedList();

ourLinkedList.insert(0, 3);
ourLinkedList.insert(1, 5);
ourLinkedList.insert(0, 8);
ourLinkedList.insert(0, 2);
console.log(ourLinkedList.get(0));
console.log(ourLinkedList.get(1));
console.log(ourLinkedList.get(2));
console.log(ourLinkedList.get(3));
ourLinkedList.remove(3);
console.log(ourLinkedList.get(0));
console.log(ourLinkedList.get(1));
console.log(ourLinkedList.get(2));
