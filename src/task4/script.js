'use strict';
module.exports = {
isTimeRangesIntersect: function (timeRange1, timeRange2) {
  if (Array.isArray(timeRange1,timeRange2) === true) {
  if(timeRange1.length === 2 && timeRange2.length === 2){
    var beginRange1 = timeRange1[0].replace(':', '');
    var endRange1 = timeRange1[1].replace(':', '');
    var beginRange2 = timeRange2[0].replace(':', '');
    var endRange2 = timeRange2[1].replace(':', '');
    var regTime = /[0-9]{2}[0-5][0-9]/g;
  if((0 < (beginRange1 <= 2400) && 0 < (beginRange2 <= 2400) && 0 < (endRange1 <= 2400) && 
  0 < (endRange2 <= 2400)) && (beginRange1.search(regTime) === 0 && 
  beginRange2.search(regTime) === 0 && endRange1.search(regTime) === 0 && 
  endRange2.search(regTime) === 0) ){
    if(beginRange1 < endRange1 && beginRange2 < endRange2){
      if (((beginRange1 >= beginRange2) && (beginRange1 <= endRange2))|| 
        ((beginRange2 >= beginRange1) && (beginRange2 <= endRange1))) {
        return true;
      }
      else {
        return false;
      }
    }
    else{
      return 'Неправильно введены диапазоны';
    }
  }
    else {
      return 'Такого времени не существует';
    }
  }
 }
}
};