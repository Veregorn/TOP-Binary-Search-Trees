import { Tree } from "./tree";

// Let's define an array unordered and with duplicates
const arr1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// Now let's define a Tree factory
const myTree = Tree(arr1);

// Let's print the tree
myTree.prettyPrint();