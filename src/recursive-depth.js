/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    console.log(arr.filter(item => Array.isArray(item)));
    if (arr.filter(item => Array.isArray(item)).length !== 0) {
      return 1 + this.calculateDepth([].concat(...arr.filter(item => Array.isArray(item))));
    } else {
      return 1;
    }
  }
}

let a = new DepthCalculator();
let arr1 = [1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]];
let arr2 = [[[[[[[[[[]]]]]]]]]];

a.calculateDepth(arr1);




