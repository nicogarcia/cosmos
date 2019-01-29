'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n\n  margin: ', ' 0;\n'], ['\n  ', ';\n\n  margin: ', ' 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: ', ';\n\n  ', ' {\n    margin: 0;\n  }\n'], ['\n  padding: ', ';\n\n  ', ' {\n    margin: 0;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border-top: 1px solid ', ';\n  padding: ', ' ', ';\n  &:hover {\n    background: ', ';\n  }\n'], ['\n  border-top: 1px solid ', ';\n  padding: ', ' ', ';\n  &:hover {\n    background: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _heading = require('../../atoms/heading');

var _heading2 = _interopRequireDefault(_heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var List = function List(props) {
  return _react2.default.createElement(
    List.Element,
    _extends({}, (0, _automationAttribute2.default)('list'), props),
    props.label ? _react2.default.createElement(
      List.Label,
      null,
      _react2.default.createElement(
        _heading2.default,
        { size: 4 },
        props.label
      )
    ) : null,
    _react2.default.Children.map(props.children, function (child) {
      return _react2.default.createElement(
        List.Row,
        (0, _automationAttribute2.default)('list.item'),
        child
      );
    })
  );
};

List.Element = _styled2.default.ul(_templateObject, _containerStyles2.default, _cosmosTokens.spacing.large);

List.Label = _styled2.default.div(_templateObject2, _cosmosTokens.spacing.xsmall, _heading.StyledHeading[4]);

List.Row = _styled2.default.li(_templateObject3, _cosmosTokens.colors.list.borderColor, _cosmosTokens.spacing.small, _cosmosTokens.spacing.xsmall, _cosmosTokens.colors.list.backgroundHover);

List.propTypes = {
  /** header for list */
  label: _propTypes2.default.string
};

List.defaultProps = {};

exports.default = List;