import { Node } from "./node";

// Factory Tree
export const Tree = (array) => {
    // BSTs Builder function
    const buildTree = (arr, start = 0, end = arr.length - 1) => {
        // Base Case
        if (start > end) {
            return null;
        }
        // Now let's find the middle element and return it as a Node element where his sons are defined by recursive calls
        // to our function
        const middle = parseInt((start + end) / 2, 10);
        const node = Node(arr[middle],buildTree(arr,start,middle - 1),buildTree(arr,middle + 1,end));
        // Now return our value
        return node;
    }

    // CONSTRUCTOR
    const orderCleanAndBuild = (arr) => {
        // Order the elements in the array (ascending)
        arr.sort((a, b) => a - b);

        // Delete repeated items in the array
        // Lets build a Set object (Set by definition delete duplicates) and then covert it again to array
        const sortedCleanedArr = [...new Set(arr)];

        // Build the tree and return it
        return buildTree(sortedCleanedArr);
    }

    // ATTRIBUTES
    let root = orderCleanAndBuild(array);

    // METHODS

    // Getters
    const getRoot = () => root;
    // Setters
    const setRoot = (node) => {
        root = node;
    }
    // Prints a received tree in console
    const prettyPrint = (node = root, prefix = "", isLeft = true) => {
        if (node.getRightChild() !== null) {
          prettyPrint(node.getRightChild(), `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.getData()}`);
        if (node.getLeftChild() !== null) {
          prettyPrint(node.getLeftChild(), `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }


    // Return methods that can be used for "importers"
    return {
        getRoot,
        setRoot,
        prettyPrint
    }
}

export default Tree;