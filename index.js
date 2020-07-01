import style from './src/assets/style/index.styl'; // импорт стилей

const users = [
  {
    _id: "5cdce6ce338171bb473d2855",
    index: 0,
    isActive: false,
    balance: 2397.64,
    age: 39,
    name: "Lucile Finley",
    gender: "female",
    company: "ZOXY",
    email: "lucilefinley@zoxy.com",
    phone: "+1 (842) 566-3328",
    registered: "2015-07-12T09:39:03 -03:00"
  },
  {
    _id: "5cdce6ce0aa8d071fa4f4cc5",
    index: 1,
    isActive: true,
    balance: 2608.48,
    age: 33,
    name: "Woodward Grimes",
    gender: "male",
    company: "FORTEAN",
    email: "woodwardgrimes@fortean.com",
    phone: "+1 (960) 436-3138",
    registered: "2014-09-08T03:24:39 -03:00"
  },
  {
    _id: "5cdce6ce103de120d32d6fe4",
    index: 2,
    isActive: true,
    balance: 1699.99,
    age: 25,
    name: "Robinson Coleman",
    gender: "male",
    company: "GENMOM",
    email: "robinsoncoleman@genmom.com",
    phone: "+1 (852) 543-3171",
    registered: "2019-04-23T08:24:58 -03:00"
  },
  {
    _id: "5cdce6cebada7a418d8ccb3d",
    index: 3,
    isActive: true,
    balance: 2621.84,
    age: 25,
    name: "Austin Benton",
    gender: "male",
    company: "ZILIDIUM",
    email: "austinbenton@zilidium.com",
    phone: "+1 (977) 573-2627",
    registered: "2016-08-02T10:08:24 -03:00"
  },
  {
    _id: "5cdce6ced81fe99596d9cef5",
    index: 4,
    isActive: true,
    balance: 1297.31,
    age: 37,
    name: "Casandra Stout",
    gender: "female",
    company: "ANACHO",
    email: "casandrastout@anacho.com",
    phone: "+1 (929) 465-3804",
    registered: "2018-04-14T11:27:26 -03:00"
  },
  {
    _id: "5cdce6ce6c3ae6c4d6f39e88",
    index: 5,
    isActive: false,
    balance: 2165.49,
    age: 20,
    name: "Valencia Carrillo",
    gender: "male",
    company: "XEREX",
    email: "valenciacarrillo@xerex.com",
    phone: "+1 (977) 522-3378",
    registered: "2014-02-14T11:45:27 -02:00"
  }
];

// forEach
// users.forEach((user, i, arr) => {
//   console.log(user, i, arr);
// });

// filter
const userLess30 = users.filter(user => user.isActive);
// console.log(userLess30);

//map 
const userName = users.map((user) => ({name: user.name, age: user.age}));
// console.log(userName);

// reduce
const totalBalance = users.reduce((acc, user) => {
  return acc += user.balance;
}, 0);
// console.log(totalBalance);

const userObj = users.reduce((acc, user) => {
  acc[user._id] = user;
  return acc
}, {});
// console.log(userObj);

//some/every
const isMale = users.some(user => user.gender === 'male');
const isAllMale = users.every(user => user.gender === 'male');
const is18 = users.every(user => user.age > 18);
// console.log(is18);

//find
const user = users.find(user => user.name === 'Valencia Carrillo')
// console.log(user);

//sort 
const strArr = [7, 15, 22, 2, 4];
strArr.sort();
// console.log(strArr);

strArr.sort((prev, next) => prev - next)
users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
// console.log(users[0].age);

// №1
// На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

const numArr = [1,2,3,5,8,9,10];
let newNumArr = numArr.reduce((acc, num) => {
  let newObj = {};
  newObj.digit = num;
  if(num % 2) {
    newObj.odd = true;
  } else {
    newObj.odd = false;
  }
  acc.push(newObj);
  return acc;
}, []);
// console.log(newNumArr);

// №2
// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

let mass = [12, 4, 50, 1, 0, 18, 40];
const haveZero = mass.some(number =>  number === 0);
console.log(haveZero);

// №3
// Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true

let wordArr = ['yes', 'hello', 'no', 'easycode', 'what'];

let isElementlength = wordArr.every(element => element.length < 3);
// console.log(isElementlength);

// №4

// Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

const arrayOfLetters = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

let getStr = arr => {
  arr.sort((prevLetter, nextLetter) =>  prevLetter.index - nextLetter.index);
  let foolStr = arr.reduce((acc, letter) => {
    acc = acc + letter.char;
    return acc;
  }, '');
  return foolStr;
}
console.log(getStr(arrayOfLetters));

// №5
// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

const arrayOfArrays = [ [14, 45], [1], ['a', 'c', 'd'] ];

arrayOfArrays.sort((prevArr, nextArr) => prevArr.length - nextArr.length);
// console.log(arrayOfArrays);

// №6
// Есть массив объектов:
// [
// {cpu: 'intel', info: {cores:2, сache: 3}},
// {cpu: 'intel', info: {cores:4, сache: 4}},
// {cpu: 'amd', info: {cores:1, сache: 1}},
// {cpu: 'intel', info: {cores:3, сache: 2}},
// {cpu: 'amd', info: {cores:4, сache: 2}}
// ]
// Отсортировать их по возрастающему количеству ядер (cores).

const comps = [
  {cpu: 'intel', info: {cores:2, сache: 3}},
  {cpu: 'intel', info: {cores:4, сache: 4}},
  {cpu: 'amd', info: {cores:1, сache: 1}},
  {cpu: 'intel', info: {cores:3, сache: 2}},
  {cpu: 'amd', info: {cores:4, сache: 2}}
  ];

  comps.sort((prevCores, nextCores) => prevCores.info.cores - nextCores.info.cores);
  // console.log(comps);

  // №6
//   3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

// let products = [
// {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
// {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
// {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
// {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];

// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

let products = [
{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

let filterCollection = (products, minPrice, maxPrice) => {
    const sortedArray = [];
    products.forEach((product) => {
      if(product.price > minPrice && product.price < maxPrice) {
        sortedArray.push(product);
      }
    })
    sortedArray.sort((prevPrice, nextPrice) => {
      return  prevPrice.price - nextPrice.price;
    });
    return sortedArray;
}

console.log(filterCollection(products, 15, 30));


////////////////////////////////////////////////////////Пример преподавателя
////////////////////////////////////////////////////////Denys Mescheryakov

На основе массива [1,2,3,5,8,9,10] сформировать новый массив,

каждый элемент которого будет хранить информацию о числе и его четности:

[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]


const initialValue = [1,2,3,5,8,9,10];
const convertedArray = initialValue.map(num => ({
  value: num,
  odd: Boolean(num % 2)
}));

Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

const initialValue = [12, 4, 50, 1, 0, 18, 40];
const zeroExist = initialValue.some(num => num === 0);

Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true

const initialValue = ['yes', 'hello', 'no', 'easycode', 'what'];
const strLength = initialValue.every(str => str.length >= 3);

Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:


[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},

{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},

{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]


Напишите функцию, которая из элементов массива соберет и вернёт

строку, основываясь на index каждой буквы. Например:

[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”


const initialValue = [
  {char:"a",index:12},
  {char:"w",index:8},
  {char:"Y",index:10},
  {char:"p",index:3},
  {char:"p",index:2},
  {char:"N",index:6},
  {char:" ",index:5},
  {char:"y",index:4},
  {char:"r",index:13},
  {char:"H",index:0},
  {char:"e",index:11},
  {char:"a",index:1},
  {char:" ",index:9},
  {char:"!",index:14},
  {char:"e",index:7}
];

function getStr(arr) {
  const cloned = arr.slice();

  return cloned
    .sort((prev, next) => prev.index - next.index)
    .reduce((acc, { char }) => acc + char, '');
}

console.log(str(initialValue))

Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

const initialValue = [  [14, 45],  [1],  ['a', 'c', 'd']  ];
initialValue.sort((prev, next) => prev.length - next.length);
console.log(initialValue)

Есть массив объектов:

[

{cpu: 'intel', info: {cores:2, сache: 3}},

{cpu: 'intel', info: {cores:4, сache: 4}},

{cpu: 'amd', info: {cores:1, сache: 1}},

{cpu: 'intel', info: {cores:3, сache: 2}},

{cpu: 'amd', info: {cores:4, сache: 2}}

]


Отсортировать их по возрастающему количеству ядер (cores).

const initialValue = [
  {cpu: 'intel', info: {cores:2, сache: 3}},
  {cpu: 'intel', info: {cores:4, сache: 4}},
  {cpu: 'amd', info: {cores:1, сache: 1}},
  {cpu: 'intel', info: {cores:3, сache: 2}},
  {cpu: 'amd', info: {cores:4, сache: 2}}
];

initialValue.sort((prev, next) => prev.info.cores - next.info.cores);

3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:


let products = [

{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},

{title: 'prod3', price: 15}, {title: 'prod4', price: 25},

{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},

{title: 'prod7', price: 19}, {title: 'prod8', price: 63}

];


filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

let products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection(prod, min, max) {
  return prod
    .filter(({price}) => price >= min && price <= max)
    .sort((prev, next) => prev.price - next.price)
}







