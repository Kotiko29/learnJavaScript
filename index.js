import style from './src/assets/style/index.styl'; // импорт стилей
// const user = {
//   firstName: 'Denis',
//   lastName: 'Ivanov',
//   info: {
//     work: 'EasyCode',
//     skills: ['html', 'css']
//   }
// }
// let {firstName, lastName, age = 'Совершеннолетний'} = user;
// const {info: {skills} } = user;
// console.log(skills, age);




///Домашнее задание

// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
// func(‘a’, ‘b’, ‘c’, ‘d’) →
// { first: ‘a’, other: [‘b’, ‘c’, ‘d’] }

function getFirstArgumentAndArray(a, ...other) {
  return {
    firstArgument: a,
    arrayOfRemainder: other
  }
}

let pes = getFirstArgumentAndArray('a', 'b', 'c', 'd')
console.log(pes);

// Организовать функцию getInfo, которая принимает объект вида
// { name: ..., info: { employees: [...], partners: [ … ] } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {
name: 'Google',
info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

// getInfo(organisation); →
// Name: Google
// Partners: Microsoft Facebook

function getInfo({name = 'Unknown', info: {employees, partners}} = {}) {
    const [comp1, comp2, ...other] = partners;
    console.log(`Name: ${name}, Partners: ${comp1}, ${comp2}`);
}

getInfo(organisation)

// Дан объект. Используя деструктуризацию получить значения из следующих полей:
// 1. name,  balance, email
// 2. из массива tags получить первый и последний элемент
// 3. из массива friends получить значение поле name из первого элемента массива
// Если какое то из полей не имеет значения то подставить значение по умолчанию.

let user = {
  "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
  "isActive": false,
  "balance": "$2,474.46",
  "age": 30,
  "eyeColor": "blue",
  "name": "Tameka Maxwell",
  "gender": "female",
  "company": "ENOMEN",
  "email": "tamekamaxwell@enomen.com",
  "phone": "+1 (902) 557-3898",
  "tags": [
    "aliquip",
    "anim",
    "exercitation",
    "non",
  ],
  "friends": [
    {
      "id": 0,
      "name": "Barber Hicks"
    },
    {
      "id": 1,
      "name": "Santana Cruz"
    },
    {
      "id": 2,
      "name": "Leola Cabrera"
    }
  ],
};

const {name = 'Noname',  balance = 0, email = 'no mail', tags: [firstTag = 'some tag',, , lastTag = 'some tag'] = [], friends:[{name: firstFriend = 'Best friend'}] = []} = user;

console.log(`name,  balance, email:  ${name},  ${balance}, ${email}`); console.log(`первый и последний элемент: ${firstTag}, ${lastTag}`);
console.log(firstFriend);

const {tags, friends} = user;
let newArr = [...tags, ...friends];
console.log(newArr);







