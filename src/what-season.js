/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  } catch (error) {
    throw new Error('Invalid date!');
  }
  switch (date.getMonth()) {
    case 1:
    case 11:
    case 0:
      console.log('winter');
      return 'winter';
    case 3:
    case 4:
    case 2:
      console.log('spring');
      return 'spring';
    case 6:
    case 7:
    case 5:
      console.log('summer');
      return 'summer';
    case 9:
    case 10:
    case 8:
      console.log('fall');
      return 'fall';
  }
}
