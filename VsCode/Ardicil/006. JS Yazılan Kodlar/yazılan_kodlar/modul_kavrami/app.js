// import { sayilariTopla, sayilariBol ,selamVer } from './utils.js';

// sayilariTopla(5, 6);
// sayilariBol(6, 2);
// selamVer('hasan');

// import * as utilsFonksiyonlari from './utils.js';
// utilsFonksiyonlari.sayilariTopla(5, 6);

// import { sayilariCarp as carp} from './utils.js';
// //sayilariCarp(9, 7);
// carp(7, 4);

// import topla , {sayilariCarp as b} from './utils.js';
// topla(7, 4);
// b(7, 4);

import Ogrenci, {test, PI} from './utils.js';

const ogr = new Ogrenci('emre', 5);
test();

console.log(PI);




// //commonjs ==> browserify , amd ==> requirejs
// const yardimciFonksiyonlar = require('utils');
// const yardimciFonksiyonlar2 = require('utils');
// const yardimciFonksiyonlar3 = require('utils');
// yardimciFonksiyonlar.ekle(5, 9);

// define(['m1', 'm2']),

//     function (m1import, m2import) {

//         const module1 = m1import;
//         const module2 = m2import;

//         function test() {

//         }
//         return {
//             test
//         }
//     }


