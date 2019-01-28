'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../atoms/button');

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = require('../molecules/button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getActionGroup = function getActionGroup() {
  var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var actionOverrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /* If the first button is a React element */
  if (_react2.default.isValidElement(actions[0])) {
    return _react2.default.createElement(
      _buttonGroup2.default,
      { compressed: true },
      actions.map(function (action, index) {
        /* add key to each element of array */
        return _react2.default.cloneElement(action, _extends({ key: index }, actionOverrides));
      })
    );
  } else {
    /* If the actions are of object shape */
    return _react2.default.createElement(
      _buttonGroup2.default,
      { compressed: true },
      actions.map(function (action, index) {
        return _react2.default.createElement(_button2.default, _extends({ key: index, onClick: action.handler }, action, actionOverrides));
      })
    );
  }
};

exports.default = getActionGroup;