'use strict';
function isArrayEqual(arrayParam1, arrayParam2) {
  if (typeof (arrayParam1 && arrayParam2) === 'object') {
    if (arrayParam1.length !== arrayParam2.length) {
      return false;
    }
    else {
      for (let i = 0; i = arrayParam1.length - 1; i++) {
        if (arrayParam1[i] === arrayParam2[i]) {
          return true;
        }
        else {
          return false;
        }
      }
    }
  }
  else {
    return false;
  }
};
module.exports = isArrayEqual;
