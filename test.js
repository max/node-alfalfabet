'use strict';
var test     = require('ava');
var alphabet = require('./');

var characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

test(function (t) {
	t.assert(alphabet.indexOf(characters[Math.floor(Math.random() * characters.length)]) !== -1);
	t.end();
});
