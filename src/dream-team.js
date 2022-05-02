const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(members) {
   let str = [];
   if(!(Array.isArray(members))){
      return false;
   };

   for (let j = 0; j < members.length; j++) {
      if(!(isNaN(members[j])) || !(typeof(members[j]) === "string")){
         members.splice(j, 1);
         j--;
      }
   };
   if(members.length < 1) {
      return false;
   };

  for(let i = 0; i < members.length; i++) {
   members[i] = members[i].replace(/\s+/gmi, '');
   members[i] = members[i].toUpperCase();
  };

  members.sort();

  for(let o = 0; o < members.length; o++){
   str[o] = members[o][0];
  };

  return str.join('');
  console.log(members);



}

module.exports = {
  createDreamTeam
};
