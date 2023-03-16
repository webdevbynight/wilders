'use strict';

// Import the chalk module according to ES module syntax
import chalk from 'chalk';

// Display the names of four of my roommates
// But, sinc pink is not a function, I have to declare such a colour in another way
const pink = chalk.hex('#FFC0CB');

console.log(pink('Amani Nefzi'));
console.log(chalk.blue('Nicolas Lopes'));
console.log(chalk.green('Frederico Cassola'));
console.log(chalk.red('Charlotte Charrier'));