/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value = '') {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (this.chain[ position-1 ] === undefined) {
      this.chain.splice(0, this.chain.length);
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.map((item) => {
      return `( ${item} )`;
    });
    this.chain.splice(0, this.chain.length);
    return result.join('~~');
  }
};
