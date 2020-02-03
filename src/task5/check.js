'use strict';
function check(data, expectedType) {
  if ((expectedType === 'array' && Array.isArray(data) && data.length > 0) ||
    (expectedType === typeof data) || (data == null && expectedType === 'null') || 
    (Number.isNaN(data) === true && Number.isNaN(expectedType)) || (data === expectedType && data === undefined)) {
    return true;
  }
  else {
    return false;
  }
}
module.exports = check;