'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  pointer-events: auto;\n  position: relative;\n  max-height: calc(100vh - (', ' * 2));\n  display: flex;\n  flex-direction: column;\n  background-color: ', ';\n  border-radius: 3px;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n'], ['\n  ', ';\n  pointer-events: auto;\n  position: relative;\n  max-height: calc(100vh - (', ' * 2));\n  display: flex;\n  flex-direction: column;\n  background-color: ', ';\n  border-radius: 3px;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  /* Overwirtes the color of the icons */\n  ', ' {\n    &,\n    i,\n    svg,\n    path {\n      color: ', ';\n      fill: ', ';\n    }\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  /* Overwirtes the color of the icons */\n  ', ' {\n    &,\n    i,\n    svg,\n    path {\n      color: ', ';\n      fill: ', ';\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  padding: ', ' ', ' ', ' ', ';\n  color: ', ';\n  word-break: break-word;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  text-align: center;\n'], ['\n  position: relative;\n  padding: ', ' ', ' ', ' ', ';\n  color: ', ';\n  word-break: break-word;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  text-align: center;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    font-weight: ', ';\n    font-size: ', ';\n    margin: 0;\n  '], ['\n    font-weight: ', ';\n    font-size: ', ';\n    margin: 0;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding: ', ' ', ' ', ' ', ';\n  flex: 1 1 auto;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  overscroll-behavior: contain;\n  word-break: break-word;\n  word-wrap: break-word;\n  /* Clears the margin of the last item of the body */\n  > *:last-child {\n    margin-bottom: 0;\n  }\n\n  ', ' {\n    margin-top: -', ';\n    margin-left: -', ';\n    margin-right: -', ';\n    padding-left: ', ';\n    padding-right: ', ';\n    justify-content: center;\n  }\n'], ['\n  padding: ', ' ', ' ', ' ', ';\n  flex: 1 1 auto;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  overscroll-behavior: contain;\n  word-break: break-word;\n  word-wrap: break-word;\n  /* Clears the margin of the last item of the body */\n  > *:last-child {\n    margin-bottom: 0;\n  }\n\n  ', ' {\n    margin-top: -', ';\n    margin-left: -', ';\n    margin-right: -', ';\n    padding-left: ', ';\n    padding-right: ', ';\n    justify-content: center;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: center;\n  padding: ', ';\n  border-top: 1px solid ', ';\n'], ['\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: center;\n  padding: ', ';\n  border-top: 1px solid ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _button = require('../../atoms/button');

var _button2 = _interopRequireDefault(_button);

var _heading = require('../../atoms/heading');

var _buttonGroup = require('../../molecules/button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _tabs = require('../../molecules/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _overlay = require('../../atoms/_overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _dialogAction = require('./dialog-action');

var _dialogAction2 = _interopRequireDefault(_dialogAction);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _reactFocusLock = require('react-focus-lock');

var _reactFocusLock2 = _interopRequireDefault(_reactFocusLock);

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createButtonForAction = function createButtonForAction(action, index) {
  // As we also support passing raw <Button> components
  // as actions, we only need to create buttons for actions
  // when the action is instance of DialogAction.
  if (!(action instanceof _dialogAction2.default)) {
    if (action.displayName !== _button2.default.displayName) {
      throw new Error('Invalid action component passed to Dialog.');
    }

    /* Add index to the button component as a key prop */
    return _react2.default.cloneElement(action, _extends({ key: index }, (0, _automationAttribute2.default)('dialog.action')));
  }

  var buttonProps = {
    onClick: action.handler,
    appearance: action.appearance
  };
  return _react2.default.createElement(
    _button2.default,
    _extends({ key: index }, buttonProps, (0, _automationAttribute2.default)('dialog.action')),
    action.label
  );
};

var focusOnFormInput = function focusOnFormInput(_ref) {
  var current = _ref.current;

  var node = _reactDom2.default.findDOMNode(current);
  if (!node) return;
  var form = node.querySelector('form');
  if (!form) return;

  var firstInput = form.querySelector('input');
  if (!firstInput) return;

  firstInput.focus();
};

/**
 * Used when you want to apply an attribute to the dialog
 * based on the role it has been applied.
 *
 * If the role of the dialog matches the required one,
 * it returns the prop object.
 *
 * Should be used with the spread operator on the dialog component.
 *
 * Example:
 *
 * {...getAccessibilityRole(props, 'required-role', {
 *    foo: 'bar'
 * })}
 *
 * @param {Dialog.Props} props
 * @param {string} requiredRole
 * @param {object} propObject
 */
var getAccessibilityRole = function getAccessibilityRole(props, requiredRole, propObject) {
  return props.role === requiredRole ? propObject : {};
};

var Dialog = function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.childrenRef = _react2.default.createRef();
    return _this;
  }

  _createClass(Dialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.role === 'form') {
        setImmediate(function () {
          return focusOnFormInput(_this2.childrenRef);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        _overlay2.default,
        _extends({ contentSize: props.width }, props),
        _react2.default.createElement(
          _reactFocusLock2.default,
          { persistentFocus: false, onExit: props.onClose },
          _react2.default.createElement(
            DialogBox,
            _extends({
              width: props.width
            }, (0, _automationAttribute2.default)('dialog'), getAccessibilityRole(props, 'destructive', {
              'aria-describedby': 'dialog-description'
            }), {
              role: 'dialog',
              'aria-modal': 'true',
              'aria-labelledby': 'dialog-title'
            }, props),
            _react2.default.createElement(
              DialogClose,
              null,
              _react2.default.createElement(_button2.default, _extends({
                'aria-label': 'Close',
                size: 'default',
                appearance: 'link',
                icon: 'close',
                onClick: props.onClose
              }, (0, _automationAttribute2.default)('dialog.close')))
            ),
            props.title && _react2.default.createElement(
              DialogHeader,
              (0, _automationAttribute2.default)('dialog.title'),
              _react2.default.createElement(
                DialogTitle,
                { element: props.titleElement, id: 'dialog-title' },
                props.title
              )
            ),
            _react2.default.createElement(
              DialogBody,
              _extends({
                ref: this.childrenRef,
                id: 'dialog-description'
              }, (0, _automationAttribute2.default)('dialog.body')),
              props.children
            ),
            props.actions.length > 0 && _react2.default.createElement(
              DialogFooter,
              (0, _automationAttribute2.default)('dialog.footer'),
              _react2.default.createElement(
                _buttonGroup2.default,
                null,
                props.actions.map(createButtonForAction)
              )
            )
          )
        )
      );
    }
  }]);

  return Dialog;
}(_react2.default.Component);

var DialogBox = _styled2.default.div(_templateObject, _containerStyles2.default, _cosmosTokens.spacing.xlarge, _cosmosTokens.colors.base.white);

var DialogClose = _styled2.default.div(_templateObject2, _button2.default.Element, _cosmosTokens.colors.base.black, _cosmosTokens.colors.base.black);

var DialogHeader = _styled2.default.header(_templateObject3, _cosmosTokens.spacing.small, _cosmosTokens.spacing.large, _cosmosTokens.spacing.xsmall, _cosmosTokens.spacing.large, _cosmosTokens.colors.text.default);

var DialogTitle = function DialogTitle(props) {
  var InternalTitle = (0, _styled2.default)(_heading.BaseHeading.withComponent(props.element))(_templateObject4, _cosmosTokens.fonts.weight.medium, _cosmosTokens.fonts.size.default);

  return _react2.default.createElement(InternalTitle, props);
};

var DialogBody = _styled2.default.div(_templateObject5, _cosmosTokens.spacing.small, _cosmosTokens.spacing.medium, _cosmosTokens.spacing.large, _cosmosTokens.spacing.medium, _tabs2.default.TabList, _cosmosTokens.spacing.small, _cosmosTokens.spacing.medium, _cosmosTokens.spacing.medium, _cosmosTokens.spacing.medium, _cosmosTokens.spacing.medium);

var DialogFooter = _styled2.default.footer(_templateObject6, _cosmosTokens.spacing.small, _cosmosTokens.colors.base.grayLight);

Dialog.Action = _dialogAction2.default;
Dialog.Element = DialogBox;
Dialog.propTypes = {
  /** Buttons that will be shown on the dialog's footer */
  actions: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_dialogAction2.default), _propTypes2.default.element])),
  /** Dialog's header title */
  title: _propTypes2.default.string,
  /** Dialog's header title heading element */
  titleElement: _propTypes2.default.oneOf(['h1', 'h2', 'h3', 'h4']),
  /** Dialog's container width */
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(Object.keys(_overlay.overlayContentSizes))]),
  /* Callback triggered when the the dialog is closed by the user */
  onClose: _propTypes2.default.func,
  /** Whether you're presenting a form or a destructive action */
  role: _propTypes2.default.oneOf(['default', 'form', 'destructive'])
};

Dialog.defaultProps = {
  width: 'medium',
  role: 'default',
  actions: [],
  titleElement: 'h2'
};

exports.default = Dialog;