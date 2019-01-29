'use strict';

var _templateObject = _taggedTemplateLiteral(['\n  border: 2px solid black;\n'], ['\n  border: 2px solid black;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 50px;\n  height: 50px;\n  /* understands tokens */\n  color: ', ';\n  /* understands props */\n  background: ', ';\n  /* css helper works */\n  ', ';\n'], ['\n  width: 50px;\n  height: 50px;\n  /* understands tokens */\n  color: ', ';\n  /* understands props */\n  background: ', ';\n  /* css helper works */\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height: 20px;\n'], ['\n  height: 20px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  height: 200px;\n'], ['\n  height: 200px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  :hover {\n    background: #fff;\n  }\n'], ['\n  :hover {\n    background: #fff;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _ = require('./..');

var _styled = require('../styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var borderStyles = (0, _styled.css)(_templateObject);

var Box = _styled2.default.div(_templateObject2, _cosmosTokens.colors.base.white, function (props) {
  return _cosmosTokens.colors.base[props.bg] || '#ccc';
}, borderStyles);

/*
 extend works:
 commented out because .extend will be deprecated in styled-components v4
*/
// const TallBox = Box.extend`
//   height: 200px;
// `

/* styled wrapper works */
var ShortBox = (0, _styled2.default)(Box)(_templateObject3);
var TallBox = (0, _styled2.default)(Box)(_templateObject4);

/* withComponent works */
var InputBox = (0, _styled2.default)(Box.withComponent('input'))(_templateObject5);

var PasswordBox = (0, _styled2.default)('input').attrs({ type: 'password' })(_templateObject6);
var ExtendedPasswordBox = (0, _styled2.default)(InputBox).attrs({ type: 'password' })(_templateObject6);

(0, _react3.storiesOf)('Component', module).add('default', function () {
  return _react2.default.createElement(
    _.Stack,
    null,
    _react2.default.createElement(Box, null),
    _react2.default.createElement(Box, { bg: 'blue' }),
    _react2.default.createElement(TallBox, { bg: 'blue' }),
    _react2.default.createElement(ShortBox, { bg: 'blue' }),
    _react2.default.createElement(InputBox, { bg: 'blue', defaultValue: 'okay' }),
    _react2.default.createElement(PasswordBox, { bg: 'blue', defaultValue: 'okay' }),
    _react2.default.createElement(ExtendedPasswordBox, { bg: 'blue', defaultValue: 'okay' })
  );
});