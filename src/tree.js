import { Node } from "./node";

// Factory Tree
export const Tree = (array) => {
    // CONSTRUCTOR
    const buildTree = (arr,start,end) => {
        // Base Case
        if (start > end) {
            return null;
        }
        // First we need to order the elements in the array (ascending)
        arr.sort((a, b) => a - b);
        // Now we need to delete repeated items in the array
        // Lets build a Set object (Set by definition delete duplicates) and then covert it again to array
        const arrayOfUniques = [...new Set(arr)];
        // Now let's find the middle element and return it as a Node element where his childs are defined by recursive calls
        // to our function
        const middle = (start + end) / 2;
        const node = Node(arrayOfUniques[middle],buildTree(arrayOfUniques,start,middle - 1),buildTree(arrayOfUniques,middle + 1,end));
        // Now return our value
        return node;
    }

    // ATTRIBUTES
    let root = buildTree(array,0,array.length - 1);

    // METHODS

    // Getters
    const getRoot = () => root;
    // Setters
    const setRoot = (node) => {
        root = node;
    }
    // Prints a received tree in console
    const prettyPrint = (node, prefix = "", isLeft = true) => {
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
        buildTree,
        getRoot,
        setRoot,
        prettyPrint
    }
}

export default Tree;