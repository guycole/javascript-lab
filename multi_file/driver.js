/*
** Title:driver.js
**
** Description: driver
**
** Development Environment: OS X 10.9.5, node.js 6.11
**
** Author: G.S. Cole (guycole at gmail dot com)
*/

const mod1 = require('./module1.js');

console.log('start');

mod1.fooBar();
mod1.somethingElse();
//var foo2 = mod1('test');
//foo2.somethingElse();

console.log('stop');
