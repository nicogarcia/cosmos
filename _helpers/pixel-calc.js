'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var parse = function parse(a) {
  /* Explicitly convert to string, so that we can except numbers as well */
  a = a.toString();
  var value = parseFloat(a);
  var unit = a.replace(value, '');
  return { value: value, unit: unit };
};

var validate = function validate(a, b) {
  var unitA = parse(a).unit;
  var unitB = parse(b).unit;

  /* If there are units but they don't match it's bad */
  if (unitA && unitB && unitA !== unitB) {
    console.log('Invalid operation, units should be the same');
    return false;
  }
  return true;
};

var add = function add(a, b) {
  if (!validate(a, b)) return;
  var unit = parse(a).unit;
  var value = parse(a).value + parse(b).value;

  return value + unit;
};

var subtract = function subtract(a, b) {
  if (!validate(a, b)) return;
  var unit = parse(a).unit;
  var value = parse(a).value - parse(b).value;

  return value + unit;
};

var multiply = function multiply(a, b) {
  if (!validate(a, b)) return;
  var unit = parse(a).unit;
  var value = parse(a).value * parse(b).value;

  return value + unit;
};

exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;