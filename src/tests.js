// eslint-disable-next-line import/no-extraneous-dependencies
import { sqrt,random,floor } from "mathjs";
import { Tree } from "./tree";

// Let's define an array unordered and with duplicates
const arr1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// Now let's define a Tree factory
const myTree = Tree(arr1);

// Let's print the tree
myTree.prettyPrint(); // OK

// Let's insert a '15' in our tree
myTree.insertNode(15);

// Let's print the tree
myTree.prettyPrint(); // OK

// Now we can try to insert a value that already exist in the tree
myTree.insertNode(3);

// Let's print the tree
myTree.prettyPrint(); // OK

// Delete a leaf node
myTree.deleteNode(15);
myTree.deleteNode(7);

// Let's print the tree
myTree.prettyPrint(); // OK

// Delete a node with one child
myTree.deleteNode(1);

// Let's print the tree
myTree.prettyPrint(); // OK

// Delete a node with one child
myTree.deleteNode(324);

// Let's print the tree
myTree.prettyPrint(); // OK

// Delete a node with two child
myTree.deleteNode(8);

// Let's print the tree
myTree.prettyPrint(); // OK

// Let's try a find of a node that doesn't exist
const myTree2 = Tree([]);
myTree2.setRoot(myTree.find(55));
myTree2.prettyPrint(); // OK

// Now find a node that exist
myTree2.setRoot(myTree.find(23));
myTree2.prettyPrint(); // OK

// Let's define a function to use with level order
function squareNode(node) {
    node.setData(node.getData() * node.getData());
}

// Let's try 'levelOrder' method
myTree.levelOrder(squareNode);

// Let's print the tree
myTree.prettyPrint(); // OK

// Now let's call 'levelOrder' without arguments and print the output array
console.log(myTree.levelOrder().toString());

// Let's define a function to use with preorder
function radixNode(node) {
    node.setData(sqrt(node.getData()));
}

// Let's try 'preorder' method
myTree.preorder(radixNode);

// Let's print the tree
myTree.prettyPrint(); // OK

// Let's try 'preorder' method without callback function
console.log("Array in preorder is: ", myTree.preorder().toString()); // OK

// Let's try 'inorder' method
myTree.inorder(squareNode);

// Let's print the tree
myTree.prettyPrint(); // OK

// Let's try 'inorder' method without callback function
console.log("Array in inorder is: ", myTree.inorder().toString()); // OK

// Let's try 'postorder' method
myTree.postorder(radixNode);

// Let's print the tree
myTree.prettyPrint(); // OK

// Let's try 'inorder' method without callback function
console.log("Array in postorder is: ", myTree.postorder().toString()); // OK

// Let's print the height of the root node
console.log("The height of root is: ", myTree.height(myTree.getRoot())); // OK
myTree.insertNode(15);
myTree.prettyPrint();
console.log("The height of root is: ", myTree.height(myTree.getRoot())); // OK

// Let's test 'height' with a leaf node
console.log("The height of 15 value node is: ", myTree.height(myTree.find(15))); // OK

// More examples
console.log("The height of 23 value node is: ", myTree.height(myTree.find(23))); // OK
console.log("The height of 67 value node is: ", myTree.height(myTree.find(67))); // OK

// Let's test 'depth' method
console.log("The depth of 9 value node is: ", myTree.depth(myTree.find(9))); // OK
console.log("The depth of 4 value node is: ", myTree.depth(myTree.find(4))); // OK
console.log("The depth of 6345 value node is: ", myTree.depth(myTree.find(6345))); // OK
console.log("The depth of 15 value node is: ", myTree.depth(myTree.find(15))); // OK

console.log("Is this tree balanced? ", myTree.isBalanced()); // OK
myTree.insertNode(13);
myTree.prettyPrint();
console.log("Is this tree balanced? ", myTree.isBalanced()); // OK

const arr2 = [3];
const myTree3 = Tree(arr2);
myTree3.insertNode(2);
myTree3.insertNode(1);
myTree3.prettyPrint();
console.log("Is this tree balanced? ", myTree3.isBalanced()); // OK

const arr3 = [20];
const myTree4 = Tree(arr3);
myTree4.insertNode(19);
myTree4.insertNode(8);
myTree4.insertNode(15);
myTree4.insertNode(2);
myTree4.insertNode(13);
myTree4.insertNode(1);
myTree4.prettyPrint();
console.log("Is this tree balanced? ", myTree4.isBalanced()); // OK
myTree4.deleteNode(8);
myTree4.prettyPrint();
console.log("Is this tree balanced? ", myTree4.isBalanced()); // OK
myTree4.insertNode(33);
myTree4.prettyPrint();
console.log("Is this tree balanced? ", myTree4.isBalanced()); // OK
myTree4.deleteNode(19);
myTree4.prettyPrint();
console.log("Is this tree balanced? ", myTree4.isBalanced()); // OK
myTree4.deleteNode(1);
myTree4.prettyPrint();
console.log("Is this tree balanced? ", myTree4.isBalanced()); // OK
myTree4.deleteNode(33);
myTree4.prettyPrint();
console.log("Is this tree balanced? ", myTree4.isBalanced()); // OK

// Let's try 'rebalance' method
myTree4.rebalance();
myTree4.prettyPrint();
console.log("Is this tree balanced? ", myTree4.isBalanced()); // OK

myTree3.rebalance();
myTree3.prettyPrint();
console.log("Is this tree balanced? ", myTree3.isBalanced()); // OK

myTree.rebalance();
myTree.prettyPrint();
console.log("Is this tree balanced? ", myTree.isBalanced()); // OK

// TOP testing proposal

// Function that generates a random number between 0 and 'max'
function getRandomInt(max) {
    return floor(random() * max);
}

// Returns an array of 'n' random numbers each time you call it
function generateRandomArray(n) {
    const arr = [];

    for (let i = 0; i < n - 1; i+=1) {
        arr.push(getRandomInt(101));
    }

    return arr;
}

// Create a binary search tree from an array of random numbers
const oneTree = Tree(generateRandomArray(10));

// Print it
oneTree.prettyPrint();

// Confirm that the tree is balanced
console.log("Is oneTree balanced? ", oneTree.isBalanced()); // OK

// Print out all elements in level, pre, post, and in order
console.log("oneTree nodes in LEVEL order: ", oneTree.levelOrder().toString()); 
console.log("oneTree nodes in PRE order: ", oneTree.preorder().toString());
console.log("oneTree nodes in POST order: ", oneTree.postorder().toString());
console.log("oneTree nodes in IN order: ", oneTree.inorder().toString());

// Unbalance the tree by adding several numbers > 100
oneTree.insertNode(127);
oneTree.insertNode(159);
oneTree.insertNode(111);
oneTree.insertNode(172);

// Print it
oneTree.prettyPrint();

// Confirm that the tree is unbalanced
console.log("Is oneTree balanced? ", oneTree.isBalanced()); // OK

// Balance the tree
oneTree.rebalance();

// Print it
oneTree.prettyPrint();

// Confirm that the tree is balanced
console.log("Is oneTree balanced? ", oneTree.isBalanced()); // OK

// Print out all elements in level, pre, post, and in order
console.log("oneTree nodes in LEVEL order: ", oneTree.levelOrder().toString()); 
console.log("oneTree nodes in PRE order: ", oneTree.preorder().toString());
console.log("oneTree nodes in POST order: ", oneTree.postorder().toString());
console.log("oneTree nodes in IN order: ", oneTree.inorder().toString());