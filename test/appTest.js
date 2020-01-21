const assert = require('assert');
const testTask1 = require('../src/task1/script');
const testTask2 = require('../src/task2/script');
const testTask3 = require('../src/task3/script');
const testTask4 = require('../src/task4/script');
const testTask5 = require('../src/task5/script');
const testTask6 = require('../src/task6/script');
const testTask2Lab8 = require('../src/lab 8 task2/script');
//Task1
describe("Проверка Task 1", function() {
  it("Замена текста", function() {
    assert.equal(testTask1.replaceString('Это просто текст','текст', 'предложение'), 'Это просто предложение');
  });
});
//Task2
describe("Проверка Task 2", function() {
  it("Равны ли массивы", function() {
    assert.equal(testTask2.isArrayEqual([1, 2, 3],[1, 2, 3]), true);
  });
});
//Task3
describe("Проверка Task 3", function() {
  it("Добавление в родительский массив", function() {
    assert.deepEqual(testTask3.flatArray([1,2,3,[4,5]]),[1,2,3,4,5]);
  });
});
//Task4
describe("Проверка Task 4", function() {
  it("Проверка диапазонов времени", function() {
    assert.equal(testTask4.isTimeRangesIntersect(['08:30', '21:00'],['05:20', '09:59']), true);
  });
});
//Task5
describe("Проверка Task 5", function() {
  it("Тип данных", function() {
    assert.equal(testTask5.check('test', 'string'), true);
  });
});
//Task6

describe("Проверка Task 6", function() {
  it("Включение плеера", function() {
    testTask6.play();
    assert.equal(testTask6.status, 'play');
  });
  it("Пауза плеера", function() {
    testTask6.pause();
    assert.equal(testTask6.status, 'pause');
  });
  it("Следующий трек", function() {
    testTask6.next();
    assert.equal(testTask6.display(),'Track: song2.mp4 Status: pause');
  });
  it("Предыдущий трек", function() {
    testTask6.prev();
    assert.equal(testTask6.display(),'Track: song1.mp4 Status: pause');
  });
  it("Показ информации плеера", function() {
    var displayInfo;
    if(testTask6.checkPlayer() === true){
      displayInfo = 'Track: song1.mp4 Status: pause';
    }
    else{
      displayInfo = 'Плеер пуст';
    }
    assert.equal(testTask6.display(), displayInfo);
  });
});
//lab 8 task2
