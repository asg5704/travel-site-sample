//Node version to use require
//var Person = require('./modules/Person');

//ES6 Importing
// import Person from './modules/Person';

// class Adult extends Person {
//   payTaxes() {
//     console.log(`${this.name} you owe me money`)
//   }
// }
// var john = new Person('John', 'blue');
// john.greet();

// var jane = new Adult('Jane', 'purple');
// jane.greet();
// jane.payTaxes();

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonials'), '60%');