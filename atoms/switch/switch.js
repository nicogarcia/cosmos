'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSwitch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  --switch-height: 32px;\n\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n  height: var(--switch-height);\n  position: relative;\n\n  input:focus ~ ', ' {\n    box-shadow: 0 0 0 2px ', ';\n  }\n'], ['\n  --switch-height: 32px;\n\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n  height: var(--switch-height);\n  position: relative;\n\n  input:focus ~ ', ' {\n    box-shadow: 0 0 0 2px ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 0;\n  opacity: 0;\n  position: absolute;\n'], ['\n  width: 0;\n  opacity: 0;\n  position: absolute;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  width: 55px;\n  height: var(--switch-height);\n  border-radius: 21px;\n  background: ', ';\n  cursor: pointer;\n  position: relative;\n\n  &:before {\n    content: \'\';\n    display: block;\n    position: absolute;\n    top: 4px;\n    left: 6px;\n    height: 24px;\n    width: 24px;\n    border-radius: 24px;\n    background: ', ';\n    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25), 0 4px 11px 0 rgba(0, 0, 0, 0.08),\n      -1px 3px 3px 0 rgba(0, 0, 0, 0.14);\n    transition: transform ', ' ease, width ', ',\n      left ', ';\n    transform: translateX(', ');\n  }\n\n  ', ';\n'], ['\n  display: inline-block;\n  width: 55px;\n  height: var(--switch-height);\n  border-radius: 21px;\n  background: ', ';\n  cursor: pointer;\n  position: relative;\n\n  &:before {\n    content: \'\';\n    display: block;\n    position: absolute;\n    top: 4px;\n    left: 6px;\n    height: 24px;\n    width: 24px;\n    border-radius: 24px;\n    background: ', ';\n    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25), 0 4px 11px 0 rgba(0, 0, 0, 0.08),\n      -1px 3px 3px 0 rgba(0, 0, 0, 0.14);\n    transition: transform ', ' ease, width ', ',\n      left ', ';\n    transform: translateX(', ');\n  }\n\n  ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n          opacity: 0.4;\n        '], ['\n          opacity: 0.4;\n        ']),
    _templateObject5 = _taggedTemplateLiteral(['\n          &:active {\n            &:before {\n              width: 30px;\n              left: ', ';\n            }\n          }\n        '], ['\n          &:active {\n            &:before {\n              width: 30px;\n              left: ', ';\n            }\n          }\n        ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  height: var(--switch-height);\n\n  span {\n    display: block;\n    font-size: ', ';\n    font-weight: ', ';\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    color: ', ';\n\n    margin-left: ', ';\n    margin-right: ', ';\n\n    /* \n    In order to make the switch always the same width\n    we are setting a fixed height and overlapping the switch labels\n    */\n    height: var(--switch-height);\n    line-height: var(--switch-height);\n\n    &:last-child {\n      /* Moves the second label up to overlap the first */\n      margin-top: calc(var(--switch-height) * -1);\n    }\n\n    &[aria-hidden=\'true\'] {\n      visibility: hidden;\n    }\n    /* if the label is empty, then remove the node so it doesn\'t create a margin */\n    &:empty {\n      display: none;\n    }\n  }\n'], ['\n  height: var(--switch-height);\n\n  span {\n    display: block;\n    font-size: ', ';\n    font-weight: ', ';\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    color: ', ';\n\n    margin-left: ', ';\n    margin-right: ', ';\n\n    /* \n    In order to make the switch always the same width\n    we are setting a fixed height and overlapping the switch labels\n    */\n    height: var(--switch-height);\n    line-height: var(--switch-height);\n\n    &:last-child {\n      /* Moves the second label up to overlap the first */\n      margin-top: calc(var(--switch-height) * -1);\n    }\n\n    &[aria-hidden=\'true\'] {\n      visibility: hidden;\n    }\n    /* if the label is empty, then remove the node so it doesn\'t create a margin */\n    &:empty {\n      display: none;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch(props) {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _this.state = { on: props.on };
    return _this;
  }

  _createClass(Switch, [{
    key: 'onToggle',
    value: function onToggle(e) {
      var _this2 = this;

      e.preventDefault();
      e.stopPropagation();

      if (this.props.readOnly) return;
      this.setState(function (currentState) {
        if (_this2.props.onToggle) _this2.props.onToggle(!currentState.on);
        return { on: !currentState.on };
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.on !== this.state.on) this.setState({ on: newProps.on });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$accessibleLabe = _slicedToArray(this.props.accessibleLabels, 2),
          onLabel = _props$accessibleLabe[0],
          offLabel = _props$accessibleLabe[1];

      var checkbox = _react2.default.createElement(Checkbox, { type: 'checkbox', checked: this.state.on, readOnly: true, id: this.props.id });

      var elements = _react2.default.createElement(
        _react2.default.Fragment,
        null,
        checkbox
      );

      var label = _react2.default.createElement(
        Label,
        { labelPosition: this.props.labelPosition, key: 'switch-label' },
        _react2.default.createElement(
          'span',
          { 'aria-hidden': this.state.on },
          offLabel
        ),
        _react2.default.createElement(
          'span',
          { 'aria-hidden': !this.state.on },
          onLabel
        )
      );
      var toggle = _react2.default.createElement(Toggle, { on: this.state.on, readOnly: this.props.readOnly, key: 'switch-toggle' });

      if (this.props.labelPosition == 'left') {
        elements = _react2.default.createElement(
          _react2.default.Fragment,
          null,
          checkbox,
          this.props.hideAccessibleLabels ? null : label,
          toggle
        );
      } else if (this.props.labelPosition == 'right') {
        elements = _react2.default.createElement(
          _react2.default.Fragment,
          null,
          checkbox,
          toggle,
          this.props.hideAccessibleLabels ? null : label
        );
      }

      /*
        The checkbox is controlled by the component state
        and is itself a readOnly component
      */

      return _react2.default.createElement(
        Switch.Element,
        _extends({ onClick: this.onToggle.bind(this) }, (0, _automationAttribute2.default)('switch'), this.props),
        elements
      );
    }
  }]);

  return Switch;
}(_react2.default.Component);

Switch.displayName = 'Switch';


Switch.Element = _styled2.default.span(_templateObject, Toggle, _cosmosTokens.colors.base.blue);

var Checkbox = _styled2.default.input(_templateObject2);
var Toggle = _styled2.default.span(_templateObject3, function (props) {
  return props.on ? _cosmosTokens.colors.base.green : _cosmosTokens.colors.base.grayLight;
}, _cosmosTokens.colors.base.white, _cosmosTokens.misc.animationDuration, _cosmosTokens.misc.animationDuration, _cosmosTokens.misc.animationDuration, function (props) {
  return props.on ? '20px' : 0;
}, function (props) {
  return props.readOnly ? (0, _styled.css)(_templateObject4) : (0, _styled.css)(_templateObject5, function (props) {
    return props.on ? '0' : '6px';
  });
});

var Label = _styled2.default.label(_templateObject6, _cosmosTokens.fonts.size.small, _cosmosTokens.fonts.weight.normal, _cosmosTokens.colors.text.secondary, function (props) {
  return props.labelPosition == 'left' ? '0' : _cosmosTokens.spacing.small;
}, function (props) {
  return props.labelPosition == 'left' ? _cosmosTokens.spacing.small : '0';
});

var StyledSwitch = Switch.Element;

Switch.propTypes = {
  /** Function called on toggle */
  onToggle: _propTypes2.default.func,
  /** State of the toggle */
  on: _propTypes2.default.bool,
  /** Labels to show, import for accessibility */
  accessibleLabels: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /** Hides accessibility labels */
  hideAccessibleLabels: _propTypes2.default.bool,
  /** Locked switch */
  readOnly: _propTypes2.default.bool,
  /** Label on left side */
  labelPosition: _propTypes2.default.oneOf(['right', 'left'])
};

Switch.defaultProps = {
  onToggle: null,
  on: false,
  accessibleLabels: ['Enabled', 'Disabled'],
  hideAccessibleLabels: false,
  readOnly: false,
  labelPosition: 'right'
};

exports.default = Switch;
exports.StyledSwitch = StyledSwitch;