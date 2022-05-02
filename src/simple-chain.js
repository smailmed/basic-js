const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
   arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {

  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    return this.arr.reverse();
  },
  finishChain() {
    return this.arr.join('~~')
  }
};

module.exports = {
  chainMaker
};
