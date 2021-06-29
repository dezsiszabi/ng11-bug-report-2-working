'use strict';

var isArray = require('isarray');

console.log(isArray);

module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};
