// Factory Node
export const Node = (value,left,right) => {
    // Attributes
    let data = value;
    let lChild = left;
    let rChild = right;

    // Methods
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

    // Return methods that can be used for "importers"
    return {
        getData,
        getLeftChild,
        getRightChild,
        setData,
        setLeftChild,
        setRightChild
    }
}

export default Node;