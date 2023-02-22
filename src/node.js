// Factory Node
export const Node = (value,left = null,right = null) => {
    // ATTRIBUTES
    let data = value;
    let lChild = left;
    let rChild = right;

    // METHODS

    // Getters
    const getData = () => data;
    const getLeftChild = () => lChild;
    const getRightChild = () => rChild;

    // Setters
    const setData = (val) => {
        data = val;
    }
    const setLeftChild = (node) => {
        lChild = node;
    }
    const setRightChild = (node) => {
        rChild = node;
    }

    // Other
    const isLeaf = () => {
        if (lChild == null && rChild == null) {
            return true;
        } 
            return false;
    }

    // Return methods that can be used for "importers"
    return {
        getData,
        getLeftChild,
        getRightChild,
        setData,
        setLeftChild,
        setRightChild,
        isLeaf
    }
}

export default Node;