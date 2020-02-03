const assert = require('assert');
const replaceString = require('../src/task1/replaceString');
const isArrayEqual = require('../src/task2/isarrayequal');
const flatArray = require('../src/task3/flatarray');
const isTimeRangesIntersect = require('../src/task4/istimerangesintersect');
const check = require('../src/task5/check');
const PlayerTest = require('../src/task6/player');
const testTask2Lab8 = require('../src/lab 8 task 2/script');
//Task1
describe('Проверка Task 1', function() {
  it('Проверка на входные данные (кроме string)', function() {
    assert.equal(replaceString(undefined,'текст','новый текст'), false);
    assert.equal(replaceString(undefined,undefined,'новый текст'), false);
    assert.equal(replaceString(undefined,undefined,undefined), false);
    assert.equal(replaceString(1,'текст','новый текст'), false);
    assert.equal(replaceString(1,1,'новый текст'), false);
    assert.equal(replaceString(1,1,1), false);
    assert.equal(replaceString(NaN,NaN,NaN), false);
  });
  it('Проверка на пустые значение у параметров', function() {
    assert.equal(replaceString('','текст','новый текст'), false);
    assert.equal(replaceString('текст','','1'), '1т1е1к1с1т1');
    assert.equal(replaceString('текст','текст',''), '');
    assert.equal(replaceString(), false);
    assert.equal(replaceString('','','новый текст'), 'новый текст');
  });
  it('Проверка выходных данных', function() {
    assert.equal(replaceString('текст','текст','новый текст'),'новый текст');
    assert.notEqual(replaceString('текст','текст','новый текст'),undefined);
    assert.notEqual(replaceString('текст','текст','новый текст'),NaN);
    assert.notEqual(replaceString('текст','текст','новый текст'),'');
    assert.notEqual(replaceString('текст','текст','новый текст'),false);
    assert.notEqual(replaceString('текст','текст','новый текст'),true);
  });
});

// Task2
describe('Проверка Task 2', function() {
  it('Проверка выходных данных', function() {
    assert.equal(isArrayEqual([1, 2, 3],[1, 2, 3]), true);
    assert.notEqual(isArrayEqual([1, 2, 3],[1, 2, 3]), undefined);
    assert.notEqual(isArrayEqual([1, 2, 3],[1, 2, 3]), '');
    assert.notEqual(isArrayEqual([1, 2, 3],[1, 2, 3]), false);
    assert.notEqual(isArrayEqual([1, 2, 3],[1, 2, 3]), NaN);
    assert.equal(isArrayEqual(), false);
    assert.equal(isArrayEqual([1,2,3],), false);
    assert.equal(isArrayEqual([],[1,2,3]), false);
  });
  it('Проверка входных данных', function() {
    assert.equal(isArrayEqual(1,1), false);
    assert.equal(isArrayEqual(1,[1,2,3]), false);
    assert.equal(isArrayEqual([1,2,3],1), false);
    assert.equal(isArrayEqual('',[1,2,3]), false);
    assert.equal(isArrayEqual([1,2,3],''), false);
    assert.equal(isArrayEqual('',''), false);
    assert.equal(isArrayEqual(NaN,[1,2,3]), false);
    assert.equal(isArrayEqual([1,2,3],NaN), false);
    assert.equal(isArrayEqual(NaN,NaN), false);
    assert.equal(isArrayEqual(undefined,undefined), false);
    assert.equal(isArrayEqual([1,2,3],undefined), false);
    assert.equal(isArrayEqual(undefined,[1,2,3]), false);
    assert.equal(isArrayEqual(false,[1,2,3]), false);
    assert.equal(isArrayEqual([1,2,3],false), false);
    assert.equal(isArrayEqual(false,false), false);
  });
});

//Task3

describe('Проверка Task 3', function() {
    it('Проверка выходных данных', function() {
      assert.deepEqual(flatArray([1,2,3,[4,5]]),[1,2,3,4,5]);
      assert.notEqual(flatArray([1,2,3,[4,5]]),[1,2,3,[4,5]]);
      assert.notEqual(flatArray([1,2,3,[4,5]]),undefined);
      assert.notEqual(flatArray([1,2,3,[4,5]]),NaN);
      assert.notEqual(flatArray([1,2,3,[4,5]]),'');
    });
    it('Проверка входных данных', function() {
      assert.equal(flatArray(''),false);
      assert.notEqual(flatArray([1,2,3,[4,5]]),'');
      assert.equal(flatArray(1),false);
      assert.equal(flatArray(NaN),false);
      assert.equal(flatArray(),false);
      assert.equal(flatArray(true),false);
      assert.equal(flatArray(false),false);
    });
});
//Task4
describe('Проверка Task 4', function() {
  it('Проверка диапазонов времени', function() {
    assert.equal(isTimeRangesIntersect(['08:30', '21:00'],['05:20', '09:59']), true);
    assert.equal(isTimeRangesIntersect(['08:30', '21:00'],['03:20', '07:59']), false);

  });
  it('Проверка входных данных', function() {
    assert.equal(isTimeRangesIntersect(['08:30', '21:00'],1), false);
    assert.equal(isTimeRangesIntersect(1,['05:20', '09:59']), false);
    assert.equal(isTimeRangesIntersect(1,1), false);
    assert.equal(isTimeRangesIntersect('',''), false);
    assert.equal(isTimeRangesIntersect(['08:30'],['00:30']), false);
    assert.equal(isTimeRangesIntersect([],[]), false);
    assert.equal(isTimeRangesIntersect(undefined,undefined), false);
    assert.equal(isTimeRangesIntersect(NaN,NaN), false);
  });
  it('Проверка выходных данных', function() {
    assert.notEqual(isTimeRangesIntersect(['08:30', '21:00'],['05:20', '09:59']), false);
    assert.notEqual(isTimeRangesIntersect(['08:30', '21:00'],['03:20', '07:59']), true);
    assert.notEqual(isTimeRangesIntersect(['08:30', '21:00'],['03:20', '07:59']), undefined);
    assert.notEqual(isTimeRangesIntersect(['08:30', '21:00'],['03:20', '07:59']), true);
    assert.notEqual(isTimeRangesIntersect(['08:30', '21:00'],['03:20', '07:59']), undefined);
    assert.notEqual(isTimeRangesIntersect(['08:30', '21:00'],['05:20', '09:59']), '');
    assert.notEqual(isTimeRangesIntersect(['08:30', '21:00'],['05:20', '09:59']), NaN);
    assert.notEqual(isTimeRangesIntersect(['08:30', '21:00'],['05:20', '09:59']), []);
    });
});
//Task5
describe('Проверка Task 5', function() {
  it('Проверка входных данных', function() {
    assert.equal(check(1, 1), false);
    assert.equal(check([], 1), false);
    assert.equal(check(NaN, 1), false);
    assert.equal(check(undefined, 1), false);
    assert.equal(check('', 1), false);
    assert.equal(check('', ''), false);
    assert.equal(check([], 1), false);
    assert.equal(check(NaN, 1), false);
    assert.equal(check(undefined, 1), false);
    assert.equal(check('', 1), false);
  });
  it('Проверка выходных данных', function() {
    assert.equal(check('test', 'string'), true);
    assert.equal(check('test', 'number'), false);
    assert.equal(check('test', 'object'), false);
    assert.equal(check('test', undefined), false);
    assert.equal(check('test', NaN), false);
    assert.equal(check([], 'string'), false);
    assert.equal(check([], 'number'), false);
    assert.equal(check([], 'object'), true);
    assert.equal(check([], undefined), false);
    assert.equal(check([], NaN), false);
    assert.equal(check(undefined, 'string'), false);
    assert.equal(check(undefined, 'number'), false);
    assert.equal(check(undefined, 'object'), false);
    assert.equal(check(undefined, undefined), true);
    assert.equal(check(undefined, NaN), false);
    assert.equal(check(1, 'string'), false);
    assert.equal(check(1, 'number'), true);
    assert.equal(check(1, 'object'), false);
    assert.equal(check(1, undefined), false);
    assert.equal(check(1, NaN), false);
    assert.equal(check(NaN, 'string'), false);
    assert.equal(check(NaN, 'number'), true);
    assert.equal(check(NaN, 'object'), false);
    assert.equal(check(NaN, undefined), false);
    assert.equal(check(NaN, NaN), true);
  });

});
//Task6

describe('Проверка Task 6', function() {

it('Включение плеера', function() {
   let playerTest = new PlayerTest();
   playerTest.play();
   assert.equal(playerTest.display(), 'Track: '+playerTest.tracks[0]+' Status: play');
});
it('Пауза плеера', function() {
  let playerTest = new PlayerTest();
  playerTest.pause();
  assert.equal(playerTest.display(), 'Track: '+playerTest.tracks[0]+' Status: pause');
});
it('Следующий трек', function() {
  let playerTest = new PlayerTest();
  playerTest.next();
  assert.equal(playerTest.display(), 'Track: '+playerTest.tracks[1]+' Status: pause');
});
it('Предыдущий трек', function() {
  let playerTest = new PlayerTest();
  playerTest.prev();
  assert.equal(playerTest.display(), 'Track: '+playerTest.tracks[playerTest.tracks.length - 1]+' Status: pause');
});
});
//lab 8 task2


describe('Проверка Task 2 в LW8', function() {
  it('Открытие кассы', function() {
    assert.equal(testTask2Lab8.open(10), true);
    assert.equal(testTask2Lab8.open('10'), false);
    assert.equal(testTask2Lab8.open({}), false);
    assert.equal(testTask2Lab8.open(NaN), false);
    assert.equal(testTask2Lab8.open(undefined), false);
    assert.equal(testTask2Lab8.open(''), false);
  });
  it('Добавление amount', function() {
    testTask2Lab8.addPayment({ amount: 10, info: 'Оплата штрафа'});
    assert.equal(testTask2Lab8.amount,10);
    assert.equal(testTask2Lab8.history[0],'Оплата штрафа');
    assert.notEqual(testTask2Lab8.amount,undefined);
    assert.notEqual(testTask2Lab8.amount,NaN);
    assert.notEqual(testTask2Lab8.amount,'');
    assert.equal(testTask2Lab8.addPayment({ amount: -10, info: 'Оплата штрафа'}), 'Error');
  });
  it('Возврат amount', function() {
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