import style from './src/assets/style/index.styl'; // импорт стилей

function getFullName(firstName, lastName) {
  // console.log('first function');
  return function() {
    return `${firstName} ${lastName}`
  }
}
const getName = getFullName('Leo', 'Lol');
// console.log(getName());

function updateValue(val = 0) {
  let x = val;
  return function(num = 0) {
    return x += num;
  }
}
// const updateVal = updateValue(2);
// console.log(updateVal(1));
// const updateVal2 = updateValue(4);
// console.log(updateVal(0));
// console.log(updateVal2(2));
// console.log(updateVal2(0));

function checkCred() {
  const login = 'test';
  const password = 'somePassword';
  return {
    checkLogin(value) {
      return login === value;
    },
    checkPassword(value) {
      return password === value;
    }
  }
}
const check = checkCred();
// console.log(check.checkPassword('asd'));

function closureExample() {
  const arrrOfFunc = [];
  let value = '';

  for(let i =0; i < 10; i++) {
    value += i;
    arrrOfFunc.push(function() {
      console.log(value, i);
    });
  }
  return arrrOfFunc;
}
const res = closureExample();
// res[0]();
// res[5]();

/// DZ 1

// Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

function minus(num = 0) {
  return function(value = 0) {
    return num - value;
  }
}
let resMinus = minus()();
// console.log(resMinus);

/// DZ 2

// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(val = 0) {
  let num = val;
  return function(num2) {
    return num = num*num2;
  }
}
const multiply = multiplyMaker(2);
let resMultiply = multiply(2);
resMultiply = multiply(1);
resMultiply = multiply(3);
resMultiply = multiply(10);
// console.log(resMultiply);


// Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const module = (function() {
  let str = '';

  function setStr(value = ''){
    str = String(value);
    return str;
  }

  function getString() {
    return str;
  }

  function getGtrLength() {
    return str.length;
  }

  function reverseString() {
    return str.split('').reverse().join('');
  }

  return {
    setStr,
    getString,
    getGtrLength,
    reverseString
  }
}())
module.setStr('Hello');
let strLength = module.getGtrLength();
// console.log(strLength);
// console.log(module.getString());
// console.log(module.reverseString());


// Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100



const calcModule = (function() {
  let num = 0;

  function setNumber(value) {
    num = parseFloat(value);
    return this;
  }

  function addFive(value) {
    num += value
    return this;
  }

  function multiply(value) {
    num *= value;
    return this;   
  }

  function findOutTheValue() {
    console.log(parseInt(num));
  }

  return {
    setNumber,
    addFive,
    multiply,
    findOutTheValue
  }
}());


calcModule.setNumber(10).addFive(5).multiply(2).findOutTheValue();

