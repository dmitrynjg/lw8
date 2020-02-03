'use strict';
var arrayAnswer = [];
function flatArray(arrayParam1) {
  function isNumber(num) {
    if (typeof num === 'number') {
      arrayAnswer.push(num);
    }
  };
  if (typeof arrayParam1 === 'object') {

    if (typeof arrayParam1 === 'object') {
      for (let i = 0; i < arrayParam1.length; i++) {
        if (isNaN(arrayParam1[i]) === false) {
          isNumber(arrayParam1[i]);
        }

        if (typeof arrayParam1[i] === 'object' && arrayParam1[i] !== null) {
          let numArray = i;
          for (let i = 0; i < arrayParam1[numArray].length; i++) {
            isNumber(arrayParam1[numArray][i]);
          }
        }
      }
    }
    return arrayAnswer;
  }
  else {
    return false;
  }
};
module.exports = flatArray;