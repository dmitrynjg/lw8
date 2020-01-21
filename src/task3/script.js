'use strict';
module.exports = {
  arrayAnswer : [],
  isNumber:function (num) { 
    if (typeof num === 'number') {
      this.arrayAnswer.push(num);
    }
  },
  flatArray: function (arrayParam1) {
    if (typeof arrayParam1 === 'object') {
  
      if (typeof arrayParam1 === 'object') {
        for (let i = 0; i < arrayParam1.length; i++) {
          if (isNaN(arrayParam1[i]) === false) {
            this.isNumber(arrayParam1[i]);
          }

          if (typeof arrayParam1[i] === 'object' && arrayParam1[i] !== null) {
            let numArray = i;
            for (let i = 0; i < arrayParam1[numArray].length; i++) {
              this.isNumber(arrayParam1[numArray][i]);
            }
          }
        }
      }
      return this.arrayAnswer;
    }
    else {
      return 'Вы передаете не массив';
    }
  }
};