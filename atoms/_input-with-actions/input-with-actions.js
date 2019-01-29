'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n\n  input {\n    padding-right: ', ';\n  }\n\n  ', ' {\n    position: absolute;\n    right: 4px;\n    top: 0;\n\n    ', ' {\n      height: ', ';\n      margin: 0;\n    }\n  }\n'], ['\n  position: relative;\n\n  input {\n    padding-right: ', ';\n  }\n\n  ', ' {\n    position: absolute;\n    right: 4px;\n    top: 0;\n\n    ', ' {\n      height: ', ';\n      margin: 0;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _buttonGroup = require('../../molecules/button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _actionGroupCreator = require('../../_helpers/action-group-creator');

var _actionGroupCreator2 = _interopRequireDefault(_actionGroupCreator);

var _pixelCalc = require('../../_helpers/pixel-calc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* TODO: width of button should be exported by button component */
var widthOfButton = '36px';

/* Calculate how much space should be left on the right for actions */
var getPaddingForActions = function getPaddingForActions(actions) {
  var numberOfActions = actions.length;
  var spaceForActions = (0, _pixelCalc.multiply)(widthOfButton, numberOfActions);
  var buffer = _cosmosTokens.spacing.xsmall;
  var total = (0, _pixelCalc.add)(spaceForActions, buffer);
  return total;
};

var StyledWrapper = _styled2.default.div(_templateObject, function (props) {
  return getPaddingForActions(props.actions);
}, _buttonGroup2.default.Element, _button2.default.Element, function (props) {
  return _cosmosTokens.misc.input[props.size || 'default'].height;
});

/* Override appearance and size of actions */
var actionOverrides = { appearance: 'link', size: 'small' };

var InputWithActions = function InputWithActions(props) {
  var Actions = (0, _actionGroupCreator2.default)(props.actions, actionOverrides);
  return _react2.default.createElement(
    StyledWrapper,
    { actions: props.actions, size: props.size },
    props.children,
    ' ',
    Actions
  );
};

exports.default = InputWithActions;