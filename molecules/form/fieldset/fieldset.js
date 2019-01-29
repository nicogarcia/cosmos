'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  border: none;\n  padding: 0;\n  margin-bottom: ', ';\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n'], ['\n  ', ';\n  border: none;\n  padding: 0;\n  margin-bottom: ', ';\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _divider = require('./divider');

var _divider2 = _interopRequireDefault(_divider);

var _automationAttribute = require('../../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _containerStyles = require('../../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FieldSet = function FieldSet(props) {
  return _react2.default.createElement(
    FieldSet.Element,
    (0, _automationAttribute2.default)('form.fieldset'),
    _react2.default.createElement(
      _divider2.default,
      null,
      props.label
    ),
    props.children
  );
};

FieldSet.Element = _styled2.default.fieldset(_templateObject, _containerStyles2.default, _cosmosTokens.spacing.xlarge);

FieldSet.displayName = 'Form Fieldset';

FieldSet.propTypes = {
  /** Label for group of fields */
  label: _propTypes2.default.string.isRequired
};

FieldSet.defaultProps = {
  label: 'Fieldset Label'
};

exports.default = FieldSet;