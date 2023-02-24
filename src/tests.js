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