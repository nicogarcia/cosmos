'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.descriptionIsObject = descriptionIsObject;
/**
 * Returns true or false whether the description
 * is meets an object like:
 *  { text: '...' }
 * @param {object | React.Element} description
 */
function descriptionIsObject(description) {
  return (typeof description === 'undefined' ? 'undefined' : _typeof(description)) === 'object' && description.text;
}