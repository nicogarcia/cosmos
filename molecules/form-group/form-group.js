'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n  margin-bottom: ', ';\n  padding-bottom: ', ';\n'], ['\n  ', ';\n  margin-bottom: ', ';\n  padding-bottom: ', ';\n']);

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

var _well = require('../../atoms/_well');

var _well2 = _interopRequireDefault(_well);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FormGroup = function FormGroup(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var wrappedChildren = _react2.default.Children.map(children, function (child) {
    return _react2.default.createElement(
      FormGroup.FormWrapper,
      null,
      child
    );
  });

  return _react2.default.createElement(
    FormGroup.Element,
    _extends({}, (0, _automationAttribute2.default)('form-group'), props),
    wrappedChildren
  );
};

FormGroup.Element = _styled2.default.div(_templateObject);

FormGroup.FormWrapper = (0, _styled2.default)(_well2.default)(_templateObject2, _containerStyles2.default, _cosmosTokens.spacing.medium, _cosmosTokens.spacing.xlarge);
FormGroup.propTypes = {
  /** children should be Form components */
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)])
};

FormGroup.defaultProps = {};

exports.default = FormGroup;