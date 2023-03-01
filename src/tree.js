// eslint-disable-next-line import/no-extraneous-dependencies
import { abs } from "mathjs";
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
        if (node === null) {
            console.log("null");
            return;
        }
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
        if (localRoot === null) {
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

    // Traverse the tree with level-order method applying callback function to nodes
    // or returning an array with nodes in that order if no callback passed as argument
    const levelOrder = (callback) => {
        // Define an output array
        const arr = [];
        // Test if the tree is empty
        if (root == null) {
            return arr;
        }
        // If test is passed, define a queue
        const queue = [root];

        // Start level-order traversal
        while (queue.length > 0) {
            const node = queue.shift();
            if (node.hasLeftChild()) {
                queue.push(node.getLeftChild());
            }
            if (node.hasRightChild()) {
                queue.push(node.getRightChild());
            }
            if (callback) {
                callback(node);
            } else {
                arr.push(node.getData());
            }
        }

        return arr;
    }

    // Traverse the tree with Depth First Search PREORDER method applying callback function to nodes
    // or returning an array with nodes in that order if no callback passed as argument
    const preorder = (callback, localRoot = root) => {
        // Define an output array
        let arr = [];

        // Test if the tree is empty
        if (localRoot == null) {
            return arr;
        }

        // Is there a callback function?
        if (callback) {
            callback(localRoot);
        } else {
            arr = arr.concat(localRoot.getData());
        }

        // Are there any childs?
        if (localRoot.hasLeftChild()) {
            arr = arr.concat(preorder(callback, localRoot.getLeftChild()));
        }
        if (localRoot.hasRightChild()) {
            arr = arr.concat(preorder(callback, localRoot.getRightChild()));
        }

        return arr;
    }

    // Traverse the tree with Depth First Search INORDER method applying callback function to nodes
    // or returning an array with nodes in that order if no callback passed as argument
    const inorder = (callback, localRoot = root) => {
        // Define an output array
        let arr = [];

        // Test if the tree is empty
        if (localRoot == null) {
            return arr;
        }

        // Is there any left child?
        if (localRoot.hasLeftChild()) {
            arr = arr.concat(inorder(callback, localRoot.getLeftChild()));
        }

        // Is there a callback function?
        if (callback) {
            callback(localRoot);
        } else {
            arr = arr.concat(localRoot.getData());
        }
        
        // Is there any right child?
        if (localRoot.hasRightChild()) {
            arr = arr.concat(inorder(callback, localRoot.getRightChild()));
        }

        return arr;
    }

    // Traverse the tree with Depth First Search POSTORDER method applying callback function to nodes
    // or returning an array with nodes in that order if no callback passed as argument.
    const postorder = (callback, localRoot = root) => {
        // Define an output array
        let arr = [];

        // Test if the tree is empty
        if (localRoot == null) {
            return arr;
        }

        // Is there any left child?
        if (localRoot.hasLeftChild()) {
            arr = arr.concat(postorder(callback, localRoot.getLeftChild()));
        }

        // Is there any right child?
        if (localRoot.hasRightChild()) {
            arr = arr.concat(postorder(callback, localRoot.getRightChild()));
        }

        // Is there a callback function?
        if (callback) {
            callback(localRoot);
        } else {
            arr = arr.concat(localRoot.getData());
        }

        return arr;
    }

    // Accepts a node and returns its height.
    // Height is defined as the number of edges in longest path from a given node to a leaf node.
    const height = (node) => {
        let h = 0;
        
        // Base Case
        if (node.isLeaf()) {
            h = 0;
        } else if (node.hasLeftChild() && node.hasRightChild()) {
            // Recursive Calls
            const hl = height(node.getLeftChild());
            const hr = height(node.getRightChild());
            if (hl >= hr) {
                h = 1 + hl;
            } else {
                h = 1 + hr;
            }
        } else if (node.hasLeftChild()) {
            h = 1 + height(node.getLeftChild());
        } else { // has right child
            h = 1 + height(node.getRightChild());
        }

        return h;
    }

    // Accepts a node and returns its depth.
    // Depth is defined as the number of edges in path from a given node to the tree’s root node.
    const depth = (node, localRoot = root) => {
        const value = node.getData();
        let d = null;

        // If node doesn't exist in the tree return 'null'
        if (find(value)) {
            // Base Case
            if (value === localRoot.getData()) {
                d = 0;
            } else if (value < localRoot.getData()) {
                d = 1 + depth(node, localRoot.getLeftChild());
            } else {
                d = 1 + depth(node, localRoot.getRightChild());
            }
        }

        return d;
    }

    // Checks if the tree is balanced. A balanced tree is one where the difference between heights of 
    // left subtree and right subtree of every node is not more than 1
    const isBalanced = (localRoot = root) => {
        let hl = 0;
        let hr = 0;
        
        // Base Case
        if (localRoot.isLeaf()) {
            return true;
        }

        // Recursive calls
        if (localRoot.hasLeftChild()) {
            hl = 1 + height(localRoot.getLeftChild());
        }
        if (localRoot.hasRightChild()) {
            hr = 1 + height(localRoot.getRightChild());
        }

        if (abs(hl - hr) <= 1) {
            if (localRoot.hasLeftChild() && localRoot.hasRightChild()) {
                return (isBalanced(localRoot.getLeftChild()) && isBalanced(localRoot.getRightChild()));
            }
            
            if (localRoot.hasLeftChild()) {
                return isBalanced(localRoot.getLeftChild());
            }
            // Has right child
            return isBalanced(localRoot.getRightChild());
        }
        
        return false;
    }

    // Rebalances an unbalanced tree
    const rebalance = () => {
        setRoot(buildTree(inorder()));
    }

    // Return methods that can be used for "importers"
    return {
        getRoot,
        setRoot,
        prettyPrint,
        insertNode,
        deleteNode,
        find,
        levelOrder,
        preorder,
        inorder,
        postorder,
        height,
        depth,
        isBalanced,
        rebalance
    }
}

export default Tree;