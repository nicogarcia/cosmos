'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionToButtonProps = exports.buttonBuilder = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../../atoms/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Builds a Button from its props
 * @param {Button.Props} props
 */
var buttonBuilder = exports.buttonBuilder = function buttonBuilder(props) {
  return _react2.default.createElement(_button2.default, props);
};

/**
 * Returns a set of Button props from an action object
 * @param {ResourceList.Item.Action} action
 * @param {ResourceList.Item.Props} item
 */
var actionToButtonProps = exports.actionToButtonProps = function actionToButtonProps(_ref, item) {
  var icon = _ref.icon,
      handler = _ref.handler,
      label = _ref.label,
      disabled = _ref.disabled,
      href = _ref.href,
      target = _ref.target,
      key = _ref.key;
  return {
    icon: icon,
    onClick: handler ? function (evt) {
      return handler(evt, item);
    } : null,
    label: label,
    disabled: disabled,
    href: href,
    target: target,
    key: key
  };
};