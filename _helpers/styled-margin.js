'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cosmosTokens = require('@auth0/cosmos-tokens');

var directions = ['top', 'bottom', 'left', 'right'];

/**
 * Calculates the margin based on props.margin
 * @param {object} props
 * @return {string} css
 */

var margin = function margin(props) {
  var margin = props.margin || {};

  if (!props.margin) return '';

  var styles = '';
  directions.map(function (direction) {
    if (typeof margin[direction] !== 'undefined') {
      var rawValue = margin[direction];
      var value = void 0;
      /*
        if the value is a string, it's either a token (xsmall)
        or has units (8em)
         if it's a number, we assume it's pixels and pass it through
      */
      if (typeof rawValue === 'string') {
        if (_cosmosTokens.spacing[rawValue]) value = _cosmosTokens.spacing[rawValue];else value = rawValue;
      } else {
        value = rawValue + 'px';
      }

      styles += 'margin-' + direction + ': ' + value + ' !important;';
    }
  });
  return styles;
};
exports.default = margin;