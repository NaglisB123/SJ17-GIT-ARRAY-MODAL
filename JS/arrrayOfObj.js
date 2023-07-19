import { printMen, printDriverGender } from './modules/forEachFn.js';
import { youngWomen } from './modules/filterFn.js';
console.log('arrrayOfObj.js file was loaded');

const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

/*
    {
      name: 'Jonas',
      surname: 'Jonaitis',
      sex: 'male',
      age: 26,
      income: 1200,
      married: false,
      hasCar: false,
    },
    */
console.table(people);
const skArr = [1, 4, 5];

// printMen(people);

// const moterys = youngWomen(people);

// 5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių lytį.

// printDriverGender naudotu argumenta
// printDriverGender iskelti i forEach moduli
printDriverGender(people);

// 5.1 Naudojant Array.prototype.map grazinti naujame masyve visų vairuojančių žmonių lytį.

const driversGendersArr = people
  .filter((pObj) => pObj.hasCar === true)
  .map((pObj) => pObj.sex);
console.log('driversGendersArr ===', driversGendersArr);
