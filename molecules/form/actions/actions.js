'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledActions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  width: ', ';\n  padding-left: ', ';\n  margin-left: ', ';\n  margin-top: ', ';\n  margin-bottom: ', ';\n'], ['\n  width: ', ';\n  padding-left: ', ';\n  margin-left: ', ';\n  margin-top: ', ';\n  margin-bottom: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _layout = require('../layout');

var _layout2 = _interopRequireDefault(_layout);

var _formContext = require('../form-context');

var _formContext2 = _interopRequireDefault(_formContext);

var _button = require('../../../atoms/button');

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = require('../../../molecules/button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _float = require('../../../_helpers/float');

var _actionShape = require('../../../_helpers/action-shape');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getButtonProps = function getButtonProps(action) {
  var props = _extends({}, action);
  props.icon = action.icon;
  props.onClick = action.handler;
  /*
    label should not be passed on to Button, it's a way
    of  showing tooltips which is not the intention here
  */
  delete props.label;
  return props;
};

var Actions = function Actions(props) {
  var primaryAction = props.primaryAction,
      secondaryActions = props.secondaryActions,
      destructiveAction = props.destructiveAction;


  return _react2.default.createElement(
    _formContext2.default.Consumer,
    null,
    function (context) {
      return _react2.default.createElement(
        Actions.Element,
        { layout: context.layout },
        _react2.default.createElement(
          _buttonGroup2.default,
          null,
          primaryAction && _react2.default.createElement(
            _button2.default,
            _extends({}, getButtonProps(primaryAction), { appearance: 'primary' }),
            primaryAction.label
          ),
          secondaryActions && secondaryActions.map(function (action, index) {
            return _react2.default.createElement(
              _button2.default,
              _extends({}, getButtonProps(action), {
                type: 'button',
                appearance: 'secondary',
                key: index
              }),
              action.label
            );
          }),
          destructiveAction && _react2.default.createElement(
            _float.Right,
            null,
            _react2.default.createElement(
              _button2.default,
              _extends({}, getButtonProps(destructiveAction), { appearance: 'destructive' }),
              destructiveAction.label
            )
          )
        ),
        _react2.default.createElement(_float.Clear, null)
      );
    }
  );
};

Actions.Element = _styled2.default.div(_templateObject, function (props) {
  return (0, _layout2.default)(props.layout).formWidth;
}, function (props) {
  return props.layout === 'label-on-left' ? (0, _layout2.default)(props.layout).labelWidth : 0;
}, function (props) {
  return props.layout === 'label-on-left' ? 0 : 'auto';
}, _cosmosTokens.spacing.medium, _cosmosTokens.spacing.small);

Actions.displayName = 'Form Actions';

Actions.propTypes = {
  primaryAction: _actionShape.actionShapeWithoutRequiredHandler,
  secondaryActions: _propTypes2.default.arrayOf(_actionShape.actionShape),
  destructiveAction: _actionShape.actionShape
};

Actions.defaultProps = {};

var StyledActions = Actions.Element;

exports.default = Actions;
exports.StyledActions = StyledActions;