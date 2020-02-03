'use strict';
function replaceString(text, searchStr, newStr) {
  if (typeof text === 'string' && typeof searchStr === 'string' && typeof newStr === 'string') {
    if (text.indexOf(searchStr) !== -1) {
      text = text.replace(RegExp(searchStr, 'g'), newStr);
      return text;
    }
    else {
      return false;
    }
  }
  else{
    return false;
  }
}

module.exports = replaceString;