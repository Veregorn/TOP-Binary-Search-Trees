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

    // Insert a value in the tree
    const insertNode = (value, localRoot = root) => {
        // Base Case
        if (localRoot == null) {
            const node = Node(value);
            return node;
        }

        // Recursive calls (equal case not contemplated because if the value exist, simply we return that node)
        if (value < localRoot.getData()) {
            localRoot.setLeftChild(insertNode(value, localRoot.getLeftChild()));
        } else if (value > localRoot.getData()) {
            localRoot.setRightChild(insertNode(value, localRoot.getRightChild()));
        }

        return localRoot;
    }

    // Gets the node with the next greater value in the tree
    const getInOrderSuccessor = (node) => {
        let successor = node.getRightChild();
        while (successor.getLeftChild() != null) {
            successor = successor.getLeftChild();
        }
        return successor;
    }

    // Delete a value from the tree
    const deleteNode = (value, localRoot = root) => {
        // Base Case
        if (localRoot.getData() == null) {
            return localRoot;
        }

        // Recursive calls
        if (value < localRoot.getData()) {
            localRoot.setLeftChild(deleteNode(value, localRoot.getLeftChild()));
        } else if (value > localRoot.getData()) {
            localRoot.setRightChild(deleteNode(value, localRoot.getRightChild()));
        } else { // If I have found value, then check the type of node I have
            if (localRoot.isLeaf()) {
                return null; // Delete it
            }
            if (localRoot.hasLeftChild() && localRoot.hasRightChild()) {
                const nodeAux = getInOrderSuccessor(localRoot);
                const data = nodeAux.getData();
                localRoot.setData(data);
                localRoot.setRightChild(deleteNode(data, localRoot.getRightChild()));
            } else if (localRoot.hasLeftChild()) {
                return localRoot.getLeftChild(); // Assign it to his father
            } else { // In this case the node has only right child
                return localRoot.getRightChild();
            }
        }
        return localRoot;
    }

    // Accepts a value and returns the node with the given value (null if value doesn't exist)
    const find = (value, localRoot = root) => {
        // Base Case 1
        if (localRoot.getData() === null) {
            return null;
        }
        
        // Base Case 2
        if (value === localRoot.getData()) {
            return localRoot;
        }

        // Recursive calls
        if (value < localRoot.getData()) {
            return find(value, localRoot.getLeftChild());
        }
        
        // value > localRoot.getData()
        return find(value, localRoot.getRightChild());
    }

    // Return methods that can be used for "importers"
    return {
        getRoot,
        setRoot,
        prettyPrint,
        insertNode,
        deleteNode,
        find
    }
}

export default Tree;