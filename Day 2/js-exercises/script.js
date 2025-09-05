// Entry point - imports other modules
import { greet, add, multiply } from './functions.js';
import { numbers, getSquares, getEvens, getSum } from './arrays.js';
import { profile, showProfile } from './objects.js';

console.log('=== Functions Demo ===');
console.log(greet('Tejas'));
console.log('2 + 3 =', add(2, 3));
console.log('5 + 9 =', add(5, 9));
console.log('4 * 5 =', multiply(4, 5));
console.log('10 - 5 =', 10 - 5);

console.log('\n=== Arrays Demo ===');
console.log('Numbers:', numbers);
console.log('Squares:', getSquares(numbers));
console.log('Even Numbers:', getEvens(numbers));
console.log('Sum:', getSum(numbers));

console.log('\n=== Objects Demo ===');
console.log(showProfile(profile));

// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});
// Smooth scroll for nav links
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
