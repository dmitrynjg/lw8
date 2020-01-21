'use strict';
module.exports = {
   replaceString: function(text, searchStr, newStr) {
    if (text.indexOf(searchStr) !== -1) {
      text = text.replace(RegExp(searchStr, 'g'), newStr);
      return text;
    }
    else {
      return 'Ничего не найдено';
    }
  }
};