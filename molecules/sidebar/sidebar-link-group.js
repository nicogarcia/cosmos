'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding-left: 1.75em;\n  overflow: hidden;\n  max-height: ', ';\n  visibility: ', ';\n  transition: max-height 0.5s ease, visibility 0.5s ease;\n'], ['\n  padding-left: 1.75em;\n  overflow: hidden;\n  max-height: ', ';\n  visibility: ', ';\n  transition: max-height 0.5s ease, visibility 0.5s ease;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sidebarLink = require('./sidebar-link');

var _sidebarLink2 = _interopRequireDefault(_sidebarLink);

var _icon = require('../../atoms/icon');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SidebarLinkGroup = function (_React$Component) {
  _inherits(SidebarLinkGroup, _React$Component);

  function SidebarLinkGroup(props) {
    _classCallCheck(this, SidebarLinkGroup);

    var _this = _possibleConstructorReturn(this, (SidebarLinkGroup.__proto__ || Object.getPrototypeOf(SidebarLinkGroup)).call(this, props));

    _this.handleClick = function () {
      _this.setState({ open: !_this.state.open });
    };

    var open = false;

    /* If a child is selected, group should be open */
    _react2.default.Children.forEach(props.children, function (child) {
      if (child && child.props && child.props.selected) open = true;
    });

    _this.state = { open: open };
    return _this;
  }

  _createClass(SidebarLinkGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          label = _props.label,
          children = _props.children;
      var open = this.state.open;

      return _react2.default.createElement(
        SidebarLinkGroup.Element,
        _extends({}, (0, _automationAttribute2.default)('sidebar.group'), this.props),
        _react2.default.createElement(_sidebarLink2.default, { icon: icon, label: label, onClick: this.handleClick }),
        _react2.default.createElement(
          SidebarLinkGroup.Content,
          { open: open },
          children
        )
      );
    }
  }]);

  return SidebarLinkGroup;
}(_react2.default.Component);

SidebarLinkGroup.Element = _styled2.default.div(_templateObject);

SidebarLinkGroup.Content = _styled2.default.div(_templateObject2, function (props) {
  return props.open ? props.children.length * 50 + 'px' : '0';
}, function (props) {
  return props.open ? 'visible' : 'hidden';
});

SidebarLinkGroup.propTypes = {
  icon: _propTypes2.default.oneOf(_icon.__ICONNAMES__).isRequired,
  label: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

SidebarLinkGroup.defaultProps = {};

exports.default = SidebarLinkGroup;