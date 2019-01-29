'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-right: ', ';\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-right: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding-left: ', ';\n  padding-right: ', ';\n  min-width: 0;\n\n  &:focus {\n    background-color: ', ';\n  }\n'], ['\n  padding-left: ', ';\n  padding-right: ', ';\n  min-width: 0;\n\n  &:focus {\n    background-color: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactSortableHoc = require('react-sortable-hoc');

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _tooltip = require('../../atoms/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _button = require('../../atoms/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var noop = function noop() {};

/**
 * Notifies handle's parent when its focus state changes
 * @param {object} props
 * @param {function} onFocus
 */
var notifyFocusStatusChange = function notifyFocusStatusChange(props, onFocus) {
  return props && props.onFocusStatusChange && props.onFocusStatusChange({ onFocus: onFocus });
};

var SortableListHandle = (0, _reactSortableHoc.SortableHandle)(function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$onFocusStatusCha = _ref.onFocusStatusChange,
      onFocusStatusChange = _ref$onFocusStatusCha === undefined ? noop : _ref$onFocusStatusCha;

  return _react2.default.createElement(
    SortableListHandle.Element,
    null,
    _react2.default.createElement(
      _tooltip2.default,
      { content: 'Re-order' },
      _react2.default.createElement(SortableListHandle.Button, {
        onFocusStatusChange: onFocusStatusChange,
        appearance: 'link',
        icon: 'resize-vertical'
      })
    )
  );
});

SortableListHandle.Element = _styledComponents2.default.div(_templateObject, _cosmosTokens.spacing.xsmall);

SortableListHandle.Button = function (props) {
  return _react2.default.createElement(SortableListHandle.Button.Element, _extends({
    onFocus: function onFocus(ev) {
      return notifyFocusStatusChange(props, true, ev);
    },
    onBlur: function onBlur(ev) {
      return notifyFocusStatusChange(props, false, ev);
    }
  }, props));
};

SortableListHandle.Button.Element = (0, _styledComponents2.default)(_button2.default)(_templateObject2, _cosmosTokens.spacing.xxsmall, _cosmosTokens.spacing.xxsmall, _cosmosTokens.colors.base.grayLightest);

exports.default = SortableListHandle;