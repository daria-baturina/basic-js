/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(backyard) {
  let result = backyard.reduce(function (cats, item) {
    let count = 0;
    count = 0;
    item.forEach((item) => {
      if (item === '^^') {
        count = count + 1
      }
    })
    return cats + count
  }, 0);
  return result
}
