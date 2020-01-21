'use strict';
module.exports = {
  check: function (data, expectedType) {
    if ((expectedType === 'array' && Array.isArray(data) && data.length > 0) ||
     (expectedType === typeof data) || (data == null && expectedType === 'null')) {
      return true;
    }
    else {
      return false;
    }
  }
};