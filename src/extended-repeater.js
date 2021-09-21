/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const { repeatTimes = 0, separator = '+', addition='', additionRepeatTimes = 0, additionSeparator = '|' } = options;
  console.log(str);
  console.log(repeatTimes);
  console.log(separator);
  console.log(addition);
  console.log(additionRepeatTimes);
  console.log(additionSeparator);
  const additionArr = [];
  let additionStr = '';
  if (addition !== '') {
    additionArr.push(String(addition));
    while (additionArr.length < additionRepeatTimes) {
      additionArr.push(String(addition));
    }
    additionStr = additionArr.join(additionSeparator);
  }
  const resultArr = [str+additionStr];
  while (resultArr.length < repeatTimes) {
    resultArr.push(str+additionStr);
  }
  const resultStr = resultArr.join(separator);
  console.log(resultStr);
  return resultStr;
}

let case1 = ('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' });
let case2 = (null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' });

repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' });