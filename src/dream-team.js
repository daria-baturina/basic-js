/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let result = [];
    members.forEach((name) => {
      if (typeof(name) === "string") {
        let firstLetter = name.trim().split('')[0];
        result.push(firstLetter.toUpperCase());
      }
    })
    return result.sort().join('');
  }
  return false;
}
