'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  color: ', ';\n  border-radius: ', ';\n  width: max-content;\n  text-align: center;\n  padding: ', ';\n  line-height: ', ';\n  font-size: 13px;\n  pointer-events: none;\n  max-width: 260px;\n'], ['\n  background: ', ';\n  color: ', ';\n  border-radius: ', ';\n  width: max-content;\n  text-align: center;\n  padding: ', ';\n  line-height: ', ';\n  font-size: 13px;\n  pointer-events: none;\n  max-width: 260px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  position: relative;\n'], ['\n  display: inline-block;\n  position: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  width: 0;\n  height: 0;\n\n  &::before {\n    content: \'\';\n    margin: auto;\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: ', ';\n    border-color: transparent;\n  }\n\n  &[data-placement*=\'top\'] {\n    bottom: 0;\n    margin-left: ', ';\n\n    &::before {\n      border-bottom-width: 0;\n      border-top-color: ', ';\n    }\n  }\n\n  &[data-placement*=\'right\'] {\n    left: 0;\n    margin-top: ', ';\n    margin-left: -', ';\n    &::before {\n      border-left-width: 0;\n      border-right-color: ', ';\n    }\n  }\n\n  &[data-placement*=\'bottom\'] {\n    top: 0;\n    left: 0;\n    margin-left: ', ';\n    margin-top: -', ';\n    &::before {\n      border-top-width: 0;\n      border-bottom-color: ', ';\n    }\n  }\n\n  &[data-placement*=\'left\'] {\n    right: 0;\n    margin-top: ', ';\n    &::before {\n      border-right-width: 0;\n      border-left-color: ', ';\n    }\n  }\n'], ['\n  position: absolute;\n  width: 0;\n  height: 0;\n\n  &::before {\n    content: \'\';\n    margin: auto;\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: ', ';\n    border-color: transparent;\n  }\n\n  &[data-placement*=\'top\'] {\n    bottom: 0;\n    margin-left: ', ';\n\n    &::before {\n      border-bottom-width: 0;\n      border-top-color: ', ';\n    }\n  }\n\n  &[data-placement*=\'right\'] {\n    left: 0;\n    margin-top: ', ';\n    margin-left: -', ';\n    &::before {\n      border-left-width: 0;\n      border-right-color: ', ';\n    }\n  }\n\n  &[data-placement*=\'bottom\'] {\n    top: 0;\n    left: 0;\n    margin-left: ', ';\n    margin-top: -', ';\n    &::before {\n      border-top-width: 0;\n      border-bottom-color: ', ';\n    }\n  }\n\n  &[data-placement*=\'left\'] {\n    right: 0;\n    margin-top: ', ';\n    &::before {\n      border-right-width: 0;\n      border-left-color: ', ';\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _reactPopper = require('react-popper');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _pixelCalc = require('../../_helpers/pixel-calc');

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.showTooltip = function () {
      _this.setState({ visible: true });
    };

    _this.hideTooltip = function () {
      if (_this.props.defaultVisible) return;
      _this.setState({ visible: false });
    };

    _this.state = { visible: props.defaultVisible || false };
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          content = _props.content,
          props = _objectWithoutProperties(_props, ['content']);

      return _react2.default.createElement(
        _reactPopper.Manager,
        null,
        _react2.default.createElement(
          _reactPopper.Reference,
          null,
          function (_ref) {
            var ref = _ref.ref;
            return _react2.default.createElement(
              Tooltip.Trigger,
              _extends({
                onMouseEnter: _this2.showTooltip,
                onFocus: _this2.showTooltip,
                onMouseLeave: _this2.hideTooltip,
                onBlur: _this2.hideTooltip,
                innerRef: ref
              }, (0, _automationAttribute2.default)('tooltip.trigger')),
              props.children
            );
          }
        ),
        _react2.default.createElement(
          _reactPopper.Popper,
          {
            placement: props.position,
            modifiers: {
              preventOverflow: { enabled: false },
              hide: { enabled: false },
              offset: { offset: '0, 10' }
            }
          },
          function (_ref2) {
            var ref = _ref2.ref,
                style = _ref2.style,
                placement = _ref2.placement,
                arrowProps = _ref2.arrowProps;
            return _react2.default.createElement(
              _react2.default.Fragment,
              null,
              _this2.state.visible ? _react2.default.createElement(
                Tooltip.Element,
                _extends({
                  innerRef: ref,
                  style: style,
                  'data-placement': placement
                }, (0, _automationAttribute2.default)('tooltip'), props),
                content,
                _react2.default.createElement(Tooltip.Arrow, {
                  'data-placement': placement,
                  innerRef: arrowProps.ref,
                  style: arrowProps.style
                })
              ) : null
            );
          }
        )
      );
    }
  }]);

  return Tooltip;
}(_react2.default.Component);

Tooltip.Element = _styled2.default.div(_templateObject, _cosmosTokens.colors.tooltip.background, _cosmosTokens.colors.tooltip.text, _cosmosTokens.misc.radius, _cosmosTokens.spacing.xsmall, _cosmosTokens.misc.lineHeight);

Tooltip.Trigger = _styled2.default.div(_templateObject2);

var arrowWidth = '6px';
var arrowColor = _cosmosTokens.colors.tooltip.background;

/*
  popper doesn't arrange the tooltip right in the center,
  so we add an adjustment
*/
var arrowAdjustment = (0, _pixelCalc.multiply)(arrowWidth, -2);

Tooltip.Arrow = _styled2.default.div(_templateObject3, arrowWidth, arrowAdjustment, arrowColor, arrowAdjustment, arrowWidth, arrowColor, arrowAdjustment, arrowWidth, arrowColor, arrowAdjustment, arrowColor);

/**
 * We renamed `Wrapper` to `Trigger` when migrating
 * to the dotElement API.
 * See: https://github.com/auth0/cosmos/pull/1080#discussion_r237026967
 */
var TooltipWrapper = Tooltip.Trigger;
var StyledTooltip = Tooltip.Element;

Tooltip.propTypes = {
  /** Content to show in the tooltip */
  content: _propTypes2.default.string.isRequired,
  /** Where to place the tooltip */
  position: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right']),
  /** Visible by default */
  defaultVisible: _propTypes2.default.bool
};

Tooltip.defaultProps = {
  content: null,
  position: 'top',
  defaultVisible: false
};

exports.default = Tooltip;