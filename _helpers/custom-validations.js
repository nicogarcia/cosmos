'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var onlyOneOf = function onlyOneOf(props, list) {
  var matches = [];
  list.map(function (item) {
    if (props[item]) matches.push(item);
    return item;
  });
  if (matches.length > 1) return new Error('Can not use ' + matches.join(' + ') + ' together!');
};

var sumOfElements = function sumOfElements(elements, expectedSum) {
  if (!elements) return;
  var sum = elements.reduce(function (a, b) {
    return a + b;
  }, 0);
  if (sum !== expectedSum) return new Error('The sum of values should be ' + expectedSum + '!');
};

var numberOfValues = function numberOfValues(elements, expectedCount) {
  if (!elements) return;
  if (elements.length !== expectedCount) {
    return new Error('Expected ' + expectedCount + ' values, found ' + elements.length + '!');
  }
};

var deprecate = function deprecate(props, _ref) {
  var name = _ref.name,
      oldAPI = _ref.oldAPI,
      replacement = _ref.replacement;

  var message = 'Hi \uD83D\uDC4B, \'' + (oldAPI || name) + '\' prop will be deprecated in 1.0.0';
  if (replacement) message += ' You might want to use \'' + replacement + '\' instead.';
  if (props[name]) return new Error(message);
};

exports.onlyOneOf = onlyOneOf;
exports.sumOfElements = sumOfElements;
exports.numberOfValues = numberOfValues;
exports.deprecate = deprecate;