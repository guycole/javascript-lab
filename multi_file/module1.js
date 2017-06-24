/*
** Title:module1.js
**
** Description: sample class
**
** Development Environment: OS X 10.9.5, node.js 6.11
**
** Author: G.S. Cole (guycole at gmail dot com)
*/

function Foo(bar) {
  this.bar = bar;
  this.baz = 'baz';
}

Foo.prototype.somethingElse = function() {
  console.log('somethingElse');
  console.log(this.bar);
  console.log(this.baz);
}

Foo.prototype.fooBar = function() {
  console.log('fooBar');
  console.log(this.bar);
  console.log(this.baz);
}

module.exports = new Foo('bogus');
