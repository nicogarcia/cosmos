'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  padding: ', ';\n'], ['\n  background: ', ';\n  padding: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledWell = _styled2.default.div(_templateObject, _cosmosTokens.colors.form.background, _cosmosTokens.spacing.large);

var Well = function Well(props) {
  return _react2.default.createElement(
    StyledWell,
    props,
    props.children
  );
};

Well.propTypes = {};

Well.defaultProps = {};

exports.default = Well;