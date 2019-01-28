'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButtonGroup = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n'], ['\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n'], ['\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border-radius: 0;\n'], ['\n  border-radius: 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', ' {\n    ', ';\n    ', ';\n    ', ';\n  }\n'], ['\n  ', ' {\n    ', ';\n    ', ';\n    ', ';\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: ', ';\n\n  & > * {\n    ', ';\n  }\n'], ['\n  display: flex;\n  justify-content: ', ';\n\n  & > * {\n    ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _button = require('../../atoms/button');

var _button2 = _interopRequireDefault(_button);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonGroup = function ButtonGroup(props) {
  return _react2.default.createElement(
    ButtonGroup.Element,
    _extends({}, props, (0, _automationAttribute2.default)('button-group')),
    _react2.default.Children.map(props.children, function (child, index) {
      if (child) return _react2.default.createElement(
        ButtonGroup.Child,
        {
          key: index,
          first: index === 0,
          last: index === props.children.length - 1,
          compressed: props.compressed
        },
        child
      );
    })
  );
};

var firstButtonStyles = (0, _styled.css)(_templateObject);
var lastButtonStyles = (0, _styled.css)(_templateObject2);

var middleButtonStyles = (0, _styled.css)(_templateObject3);

ButtonGroup.Child = _styled2.default.span(_templateObject4, _button2.default.Element, function (props) {
  return props.compressed && props.first ? firstButtonStyles : null;
}, function (props) {
  return props.compressed && props.last ? lastButtonStyles : null;
}, function (props) {
  return props.compressed && !props.first && !props.last ? middleButtonStyles : null;
});

var justifyContent = {
  left: 'flex-start',
  right: 'flex-end'
};

var marginForButton = function marginForButton(props) {
  if (!props.children) return '';

  var isSingleChild = props.children.constructor.name !== 'Array';
  if (isSingleChild || props.compressed) return null;

  var property = props.align === 'left' ? 'margin-right' : 'margin-left';
  var trailing = props.align === 'left' ? '&:last-child' : '&:first-child';

  return '\n  ' + property + ': ' + _cosmosTokens.spacing.xsmall + ';\n\n  ' + trailing + ' {\n    ' + property + ': 0;\n  }\n  ';
};

ButtonGroup.Element = _styled2.default.div(_templateObject5, function (props) {
  return justifyContent[props.align];
}, marginForButton);

var StyledButtonGroup = ButtonGroup.Element;

ButtonGroup.propTypes = {
  /** Make Buttons are ordered with the correct space between them  */
  align: _propTypes2.default.oneOf(['left', 'right']),
  /** Make Buttons stick to each other */
  compressed: _propTypes2.default.bool,
  /** Should container only Buttons */
  children: _propTypes2.default.node
};

ButtonGroup.defaultProps = {
  compressed: false,
  align: 'left'
};

exports.default = ButtonGroup;
exports.StyledButtonGroup = StyledButtonGroup;