/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (Array.isArray(arr)) {
    let result = [];
    let inf = null;
    arr.forEach((item, index) => {
        switch (item) {
          case '--discard-next':
            inf = 'delete';
            break;
          case '--discard-prev':
            if (inf !== 'deleted') {
              result.pop();
            }
            inf = null;
            break;
          case '--double-next':
            inf = 'double';
            break;
          case '--double-prev':
            if (index > 0 && inf !== 'deleted') {
              let lastItem = result.pop();
              result.push(lastItem);
              result.push(lastItem);
            }
            inf = null;
            break;
          default:
            if (inf === 'delete') {
              inf = 'deleted';
            } else if (inf === 'double') {
              result.push(item);
              result.push(item);
              inf = null;
            } else {
              result.push(item)
            }
        }
    })
    return result;
  }
  throw new Error("'arr' parameter must be an instance of the Array!")
}
