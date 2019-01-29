'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.overlayContentSizes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: ', ';\n  background: hsla(0, 12%, 95%, 0.95);\n  display: flex;\n  justify-content: center;\n'], ['\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: ', ';\n  background: hsla(0, 12%, 95%, 0.95);\n  display: flex;\n  justify-content: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: ', ' ', ';\n  pointer-events: none;\n  display: inline-block;\n\n  /* Since the focus trap is adding divs around the dialog box, the max width prop should be here */\n  max-width: ', ';\n'], ['\n  width: 100%;\n  margin: ', ' ', ';\n  pointer-events: none;\n  display: inline-block;\n\n  /* Since the focus trap is adding divs around the dialog box, the max width prop should be here */\n  max-width: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: create tokens?
var layers = {
  overlayBackdrop: 20,
  overlay: 30
};

var keyCodes = {
  escape: 27
};

var overlayContentSizes = exports.overlayContentSizes = {
  small: '480px',
  medium: '640px',
  large: '800px'
};

var Overlay = function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay(props) {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));

    _this.handleMouseDown = function (evt) {
      var _this$props = _this.props,
          closeOnBackdropClick = _this$props.closeOnBackdropClick,
          open = _this$props.open,
          onClose = _this$props.onClose;

      var clickWasOnBackdrop = _this.contentElement && !_this.contentElement.contains(evt.target);
      if (open && closeOnBackdropClick && clickWasOnBackdrop) {
        onClose();
      }
    };

    _this.handleDocumentKeyDown = function (evt) {
      var _this$props2 = _this.props,
          closeOnEscape = _this$props2.closeOnEscape,
          open = _this$props2.open,
          onClose = _this$props2.onClose;

      var escapeWasPressed = evt.which === keyCodes.escape;
      if (open && closeOnEscape && escapeWasPressed) {
        evt.preventDefault();
        onClose();
      }
    };

    _this.state = { hasBeenMounted: false };
    _this.mountElement = document.createElement('div');
    _this.contentElement = null;
    return _this;
  }

  _createClass(Overlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.appendChild(this.mountElement);
      document.addEventListener('keydown', this.handleDocumentKeyDown);
      this.setState(function (prevState, props) {
        return {
          hasBeenMounted: true
        };
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeChild(this.mountElement);
      document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          open = _props.open,
          children = _props.children,
          contentSize = _props.contentSize;


      if (!this.state.hasBeenMounted) return null;

      var content = null;
      if (open) {
        content = _react2.default.createElement(
          Overlay.Backdrop,
          { onMouseDown: this.handleMouseDown },
          _react2.default.createElement(
            Overlay.Element,
            { contentSize: contentSize, innerRef: function innerRef(el) {
                return _this2.contentElement = el;
              } },
            children
          )
        );
      }

      return _reactDom2.default.createPortal(content, this.mountElement);
    }
  }], [{
    key: 'getSizeForOverlay',
    value: function getSizeForOverlay(propValue) {
      if (typeof propValue === 'number') return propValue + 'px';

      return overlayContentSizes[propValue];
    }
  }]);

  return Overlay;
}(_react2.default.Component);

Overlay.Backdrop = _styled2.default.div(_templateObject, layers.overlayBackdrop);

Overlay.Element = _styled2.default.div(_templateObject2, _cosmosTokens.spacing.xlarge, _cosmosTokens.spacing.small, function (props) {
  return Overlay.getSizeForOverlay(props.contentSize);
});

Overlay.propTypes = {
  closeOnBackdropClick: _propTypes2.default.bool.isRequired,
  closeOnEscape: _propTypes2.default.bool.isRequired,
  onClose: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool.isRequired,
  contentSize: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(Object.keys(overlayContentSizes))])
};

Overlay.defaultProps = {
  closeOnBackdropClick: true,
  closeOnEscape: true,
  open: false
};

exports.default = Overlay;