import style from './src/assets/style/index.styl'; // импорт стилей

// Функции высшего порядка

const arr = ['Masha', 'Vlad', 'Olga','Ekaterina', 'Max', 'Alexey'];

function mapArray(arr, fn) {
  const res = [];

  for(let item in arr) {
    res.push(fn(arr[item]));
  }
  return res; 
}

function nameLangth(el) {
  return el.length;
}
let res1 = mapArray(arr, nameLangth);

console.log(res1);

function nametoUpperCase(el) {
  return el.toUpperCase();
}

let res2 = mapArray(arr, nametoUpperCase);
console.log(res2);

