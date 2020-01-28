const assert = require('assert');
const testTask1 = require('../src/task1/script');
const testTask2 = require('../src/task2/script');
const testTask3 = require('../src/task3/script');
const testTask4 = require('../src/task4/script');
const testTask5 = require('../src/task5/script');
const testTask6 = require('../src/task6/script');
const testTask2Lab8 = require('../src/lab 8 task 2/script');
//Task1
describe("Проверка Task 1", function() {
  it("Замена текста", function() {
    assert.equal(testTask1.replaceString('Это просто текст','текст', 'предложение'), 'Это просто предложение');
    assert.notEqual(testTask1.replaceString('Это просто текст','текст', 'предложение'), undefined);
    assert.notEqual(testTask1.replaceString('Это просто текст','текст', 'предложение'), NaN);
    assert.notEqual(testTask1.replaceString('Это просто текст','текст', 'предложение'), '');
  });
});
//Task2
describe("Проверка Task 2", function() {
  it("Равны ли массивы", function() {
    assert.equal(testTask2.isArrayEqual([1, 2, 3],[1, 2, 3]), true);
    assert.notEqual(testTask2.isArrayEqual([1, 2, 3],[1, 2, 3]), undefined);
    assert.notEqual(testTask2.isArrayEqual([1, 2, 3],[1, 2, 3]), NaN);
    assert.notEqual(testTask2.isArrayEqual([1, 2, 3],[1, 2, 3]), '');
    assert.notEqual(testTask2.isArrayEqual([1, 2, 3],[1, 2, 3]), false);
  });
});
//Task3
describe("Проверка Task 3", function() {
  it("Добавление в родительский массив", function() {
    assert.deepEqual(testTask3.flatArray([1,2,3,[4,5]]),[1,2,3,4,5]);
    assert.notEqual(testTask3.flatArray([1,2,3,[4,5]]),[1,2,3,[4,5]]);
    assert.notEqual(testTask3.flatArray([1,2,3,[4,5]]),undefined);
    assert.notEqual(testTask3.flatArray([1,2,3,[4,5]]),NaN);
    assert.notEqual(testTask3.flatArray([1,2,3,[4,5]]),'');
  });
});
//Task4
describe("Проверка Task 4", function() {
  it("Проверка диапазонов времени", function() {
    assert.equal(testTask4.isTimeRangesIntersect(['08:30', '21:00'],['05:20', '09:59']), true);
    assert.notEqual(testTask4.isTimeRangesIntersect(['08:30', '21:00'],['05:20', '09:59']), false);
    assert.notEqual(testTask4.isTimeRangesIntersect(['08:30', '21:00'],['05:20', '09:59']), undefined);
    assert.notEqual(testTask4.isTimeRangesIntersect(['08:30', '21:00'],['05:20', '09:59']), '');
    assert.notEqual(testTask4.isTimeRangesIntersect(['08:30', '21:00'],['05:20', '09:59']), NaN);
  });
});
//Task5
describe("Проверка Task 5", function() {
  it("Тип данных", function() {
    assert.equal(testTask5.check('test', 'string'), true);
    assert.notEqual(testTask5.check('test', 'string'), false);
    assert.notEqual(testTask5.check('test', 'string'), undefined);
    assert.notEqual(testTask5.check('test', 'string'), '');
    assert.notEqual(testTask5.check('test', 'string'), NaN);
  });
});
//Task6

describe("Проверка Task 6", function() {
  it("Включение трека", function() {
    testTask6.play();
    assert.equal(testTask6.status, 'play');
    assert.notEqual(testTask6.status, NaN);
    assert.notEqual(testTask6.status, undefined);
    assert.notEqual(testTask6.status, '');
  });
  it("Пауза плеера", function() {
    testTask6.pause();
    assert.equal(testTask6.status, 'pause');
    assert.notEqual(testTask6.status, NaN);
    assert.notEqual(testTask6.status, undefined);
    assert.notEqual(testTask6.status, '');
  });
  it("Следующий трек", function() {
    testTask6.next();
    assert.equal(testTask6.display(),'Track: '+ testTask6.tracks[1] +' Status: pause');
    assert.notEqual(testTask6.display(),'Track: '+ testTask6.tracks[0] +' Status: pause');
    assert.notEqual(testTask6.display(),'Track: '+ testTask6.tracks[1] +' Status: play');
    assert.notEqual(testTask6.display(),'Track: '+ testTask6.tracks[0] +' Status: play');
    assert.notEqual(testTask6.display(),'');
    assert.notEqual(testTask6.display(),undefined);
    assert.notEqual(testTask6.display(),NaN);
  });
  it("Предыдущий трек", function() {
    testTask6.prev();
    assert.equal(testTask6.display(),'Track: '+ testTask6.tracks[0] +' Status: pause');
    assert.notEqual(testTask6.display(),'Track: '+ testTask6.tracks[1] +' Status: pause');
    assert.notEqual(testTask6.display(),'Track: '+ testTask6.tracks[1] +' Status: play');
    assert.notEqual(testTask6.display(),'Track: '+ testTask6.tracks[0] +' Status: play');
    assert.notEqual(testTask6.display(),'');
    assert.notEqual(testTask6.display(),NaN);
    assert.notEqual(testTask6.display(),undefined);
  });
  it("Показ информации плеера", function() {
    var displayInfo;
    if(testTask6.checkPlayer() === true){
      displayInfo = 'Track: '+ testTask6.tracks[0] +' Status: pause';
    }
    else{
      displayInfo = 'Плеер пуст';
    }
    assert.equal(testTask6.display(), displayInfo);
    assert.notEqual(testTask6.display(), undefined);
    assert.notEqual(testTask6.display(), NaN);
    assert.notEqual(testTask6.display(), '');
  });
});
//lab 8 task2


describe("Проверка Task 2 в LW8", function() {
  it("Открытие кассы", function() {
    assert.equal(testTask2Lab8.open(10), true);
    assert.equal(testTask2Lab8.open('10'), false);
    assert.equal(testTask2Lab8.open({}), false);
    assert.equal(testTask2Lab8.open(NaN), false);
    assert.equal(testTask2Lab8.open(undefined), false);
    assert.equal(testTask2Lab8.open(''), false);
  });
  it("Добавление amount", function() {
    testTask2Lab8.addPayment({ amount: 10, info: 'Оплата штрафа'});
    assert.equal(testTask2Lab8.amount,10);
    assert.equal(testTask2Lab8.history[0],'Оплата штрафа');
    assert.notEqual(testTask2Lab8.amount,undefined);
    assert.notEqual(testTask2Lab8.amount,NaN);
    assert.notEqual(testTask2Lab8.amount,'');
    assert.equal(testTask2Lab8.addPayment({ amount: -10, info: 'Оплата штрафа'}), 'Error');
  });
  it("Возврат amount", function() {
    testTask2Lab8.refundPayment({  amount: 9,  info: 'Возврат клиенту' });
    assert.equal(testTask2Lab8.amount,1);
    assert.equal(testTask2Lab8.history[1],'Возврат клиенту');
    assert.notEqual(testTask2Lab8.amount,undefined);
    assert.notEqual(testTask2Lab8.amount,NaN);
    assert.notEqual(testTask2Lab8.amount,'');
    assert.notEqual(testTask2Lab8.amount,10);
    testTask2Lab8.refundPayment({  amount: 9,  info: 'Возврат клиенту' });
    assert.equal(testTask2Lab8.history[2],'Возврат не возможен');
    assert.equal(testTask2Lab8.refundPayment({  amount: 9,  info: 'Возврат клиенту' }), 'В кассе нет таких денег');
  });
});