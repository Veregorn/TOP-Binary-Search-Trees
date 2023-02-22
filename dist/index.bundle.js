"use strict";
(self["webpackChunktop_binary_search_trees"] = self["webpackChunktop_binary_search_trees"] || []).push([["index"],{

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Factory Node
const Node = (value, left, right) => {
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
  const setData = val => {
    data = val;
  };
  const setLeftChild = node => {
    lChild = node;
  };
  const setRightChild = node => {
    rChild = node;
  };

  // Return methods that can be used for "importers"
  return {
    getData,
    getLeftChild,
    getRightChild,
    setData,
    setLeftChild,
    setRightChild
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);

/***/ }),

/***/ "./src/tests.js":
/*!**********************!*\
  !*** ./src/tests.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ "./src/tree.js");


// Let's define an array unordered and with duplicates
const arr1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// Now let's define a Tree factory
const myTree = (0,_tree__WEBPACK_IMPORTED_MODULE_0__.Tree)(arr1);

// Let's print the tree
myTree.prettyPrint();

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tree": () => (/* binding */ Tree),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");


// Factory Tree
const Tree = array => {
  // CONSTRUCTOR
  const buildTree = function (arr) {
    let start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - 1;
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
    const node = (0,_node__WEBPACK_IMPORTED_MODULE_0__.Node)(arrayOfUniques[middle], buildTree(arrayOfUniques, start, middle - 1), buildTree(arrayOfUniques, middle + 1, end));
    // Now return our value
    return node;
  };

  // ATTRIBUTES
  let root = buildTree(array);

  // METHODS

  // Getters
  const getRoot = () => root;
  // Setters
  const setRoot = node => {
    root = node;
  };
  // Prints a received tree in console
  const prettyPrint = function () {
    let node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : root;
    let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let isLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (node.getRightChild() !== null) {
      prettyPrint(node.getRightChild(), `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.getData()}`);
    if (node.getLeftChild() !== null) {
      prettyPrint(node.getLeftChild(), `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  // Return methods that can be used for "importers"
  return {
    buildTree,
    getRoot,
    setRoot,
    prettyPrint
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/tests.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUVELGlFQUFlSCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLWJpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly90b3AtYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy90ZXN0cy5qcyIsIndlYnBhY2s6Ly90b3AtYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy90cmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZhY3RvcnkgTm9kZVxuZXhwb3J0IGNvbnN0IE5vZGUgPSAodmFsdWUsbGVmdCxyaWdodCkgPT4ge1xuICAgIC8vIEF0dHJpYnV0ZXNcbiAgICBsZXQgZGF0YSA9IHZhbHVlO1xuICAgIGxldCBsQ2hpbGQgPSBsZWZ0O1xuICAgIGxldCByQ2hpbGQgPSByaWdodDtcblxuICAgIC8vIE1ldGhvZHNcbiAgICAvLyBHZXR0ZXJzXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IGRhdGE7XG4gICAgY29uc3QgZ2V0TGVmdENoaWxkID0gKCkgPT4gbENoaWxkO1xuICAgIGNvbnN0IGdldFJpZ2h0Q2hpbGQgPSAoKSA9PiByQ2hpbGQ7XG5cbiAgICAvLyBTZXR0ZXJzXG4gICAgY29uc3Qgc2V0RGF0YSA9ICh2YWwpID0+IHtcbiAgICAgICAgZGF0YSA9IHZhbDtcbiAgICB9XG4gICAgY29uc3Qgc2V0TGVmdENoaWxkID0gKG5vZGUpID0+IHtcbiAgICAgICAgbENoaWxkID0gbm9kZTtcbiAgICB9XG4gICAgY29uc3Qgc2V0UmlnaHRDaGlsZCA9IChub2RlKSA9PiB7XG4gICAgICAgIHJDaGlsZCA9IG5vZGU7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgXCJpbXBvcnRlcnNcIlxuICAgIHJldHVybiB7XG4gICAgICAgIGdldERhdGEsXG4gICAgICAgIGdldExlZnRDaGlsZCxcbiAgICAgICAgZ2V0UmlnaHRDaGlsZCxcbiAgICAgICAgc2V0RGF0YSxcbiAgICAgICAgc2V0TGVmdENoaWxkLFxuICAgICAgICBzZXRSaWdodENoaWxkXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlOyIsImltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi90cmVlXCI7XG5cbi8vIExldCdzIGRlZmluZSBhbiBhcnJheSB1bm9yZGVyZWQgYW5kIHdpdGggZHVwbGljYXRlc1xuY29uc3QgYXJyMSA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF07XG5cbi8vIE5vdyBsZXQncyBkZWZpbmUgYSBUcmVlIGZhY3RvcnlcbmNvbnN0IG15VHJlZSA9IFRyZWUoYXJyMSk7XG5cbi8vIExldCdzIHByaW50IHRoZSB0cmVlXG5teVRyZWUucHJldHR5UHJpbnQoKTsiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuXG4vLyBGYWN0b3J5IFRyZWVcbmV4cG9ydCBjb25zdCBUcmVlID0gKGFycmF5KSA9PiB7XG4gICAgLy8gQ09OU1RSVUNUT1JcbiAgICBjb25zdCBidWlsZFRyZWUgPSAoYXJyLCBzdGFydCA9IDAsIGVuZCA9IGFyci5sZW5ndGggLSAxKSA9PiB7XG4gICAgICAgIC8vIEJhc2UgQ2FzZVxuICAgICAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIG5lZWQgdG8gb3JkZXIgdGhlIGVsZW1lbnRzIGluIHRoZSBhcnJheSAoYXNjZW5kaW5nKVxuICAgICAgICBhcnIuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgICAvLyBOb3cgd2UgbmVlZCB0byBkZWxldGUgcmVwZWF0ZWQgaXRlbXMgaW4gdGhlIGFycmF5XG4gICAgICAgIC8vIExldHMgYnVpbGQgYSBTZXQgb2JqZWN0IChTZXQgYnkgZGVmaW5pdGlvbiBkZWxldGUgZHVwbGljYXRlcykgYW5kIHRoZW4gY292ZXJ0IGl0IGFnYWluIHRvIGFycmF5XG4gICAgICAgIGNvbnN0IGFycmF5T2ZVbmlxdWVzID0gWy4uLm5ldyBTZXQoYXJyKV07XG4gICAgICAgIC8vIE5vdyBsZXQncyBmaW5kIHRoZSBtaWRkbGUgZWxlbWVudCBhbmQgcmV0dXJuIGl0IGFzIGEgTm9kZSBlbGVtZW50IHdoZXJlIGhpcyBjaGlsZHMgYXJlIGRlZmluZWQgYnkgcmVjdXJzaXZlIGNhbGxzXG4gICAgICAgIC8vIHRvIG91ciBmdW5jdGlvblxuICAgICAgICBjb25zdCBtaWRkbGUgPSAoc3RhcnQgKyBlbmQpIC8gMjtcbiAgICAgICAgY29uc3Qgbm9kZSA9IE5vZGUoYXJyYXlPZlVuaXF1ZXNbbWlkZGxlXSxidWlsZFRyZWUoYXJyYXlPZlVuaXF1ZXMsc3RhcnQsbWlkZGxlIC0gMSksYnVpbGRUcmVlKGFycmF5T2ZVbmlxdWVzLG1pZGRsZSArIDEsZW5kKSk7XG4gICAgICAgIC8vIE5vdyByZXR1cm4gb3VyIHZhbHVlXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIC8vIEFUVFJJQlVURVNcbiAgICBsZXQgcm9vdCA9IGJ1aWxkVHJlZShhcnJheSk7XG5cbiAgICAvLyBNRVRIT0RTXG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgY29uc3QgZ2V0Um9vdCA9ICgpID0+IHJvb3Q7XG4gICAgLy8gU2V0dGVyc1xuICAgIGNvbnN0IHNldFJvb3QgPSAobm9kZSkgPT4ge1xuICAgICAgICByb290ID0gbm9kZTtcbiAgICB9XG4gICAgLy8gUHJpbnRzIGEgcmVjZWl2ZWQgdHJlZSBpbiBjb25zb2xlXG4gICAgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSA9IHJvb3QsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUuZ2V0UmlnaHRDaGlsZCgpICE9PSBudWxsKSB7XG4gICAgICAgICAgcHJldHR5UHJpbnQobm9kZS5nZXRSaWdodENoaWxkKCksIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZ2V0RGF0YSgpfWApO1xuICAgICAgICBpZiAobm9kZS5nZXRMZWZ0Q2hpbGQoKSAhPT0gbnVsbCkge1xuICAgICAgICAgIHByZXR0eVByaW50KG5vZGUuZ2V0TGVmdENoaWxkKCksIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gUmV0dXJuIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgXCJpbXBvcnRlcnNcIlxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkVHJlZSxcbiAgICAgICAgZ2V0Um9vdCxcbiAgICAgICAgc2V0Um9vdCxcbiAgICAgICAgcHJldHR5UHJpbnRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWU7Il0sIm5hbWVzIjpbIk5vZGUiLCJ2YWx1ZSIsImxlZnQiLCJyaWdodCIsImRhdGEiLCJsQ2hpbGQiLCJyQ2hpbGQiLCJnZXREYXRhIiwiZ2V0TGVmdENoaWxkIiwiZ2V0UmlnaHRDaGlsZCIsInNldERhdGEiLCJ2YWwiLCJzZXRMZWZ0Q2hpbGQiLCJub2RlIiwic2V0UmlnaHRDaGlsZCIsIlRyZWUiLCJhcnIxIiwibXlUcmVlIiwicHJldHR5UHJpbnQiLCJhcnJheSIsImJ1aWxkVHJlZSIsImFyciIsInN0YXJ0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZW5kIiwic29ydCIsImEiLCJiIiwiYXJyYXlPZlVuaXF1ZXMiLCJTZXQiLCJtaWRkbGUiLCJyb290IiwiZ2V0Um9vdCIsInNldFJvb3QiLCJwcmVmaXgiLCJpc0xlZnQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==