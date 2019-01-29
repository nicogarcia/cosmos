'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  display: ', ';\n  width: ', ';\n  margin-left: ', ';\n  margin-bottom: ', ';\n\n  ', ' {\n    /* browsers give textareas an annoying alignment\n  that needs to be overwritten :/ */\n    vertical-align: top;\n    min-height: ', ';\n  }\n  ', ' {\n    margin-top: 6px;\n  }\n  ', ' {\n    margin-top: ', ';\n  }\n'], ['\n  ', ';\n  display: ', ';\n  width: ', ';\n  margin-left: ', ';\n  margin-bottom: ', ';\n\n  ', ' {\n    /* browsers give textareas an annoying alignment\n  that needs to be overwritten :/ */\n    vertical-align: top;\n    min-height: ', ';\n  }\n  ', ' {\n    margin-top: 6px;\n  }\n  ', ' {\n    margin-top: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', ';\n  margin: ', ';\n  text-align: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n  min-height: ', ';\n  margin-bottom: ', ';\n'], ['\n  width: ', ';\n  margin: ', ';\n  text-align: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n  min-height: ', ';\n  margin-bottom: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: ', ';\n'], ['\n  width: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _layout = require('../layout');

var _layout2 = _interopRequireDefault(_layout);

var _uniqueId = require('../../../_helpers/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _formContext = require('../form-context');

var _formContext2 = _interopRequireDefault(_formContext);

var _automationAttribute = require('../../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _label = require('../label');

var _label2 = _interopRequireDefault(_label);

var _error = require('../error');

var _error2 = _interopRequireDefault(_error);

var _helpText = require('../help-text');

var _helpText2 = _interopRequireDefault(_helpText);

var _textarea = require('../../../atoms/textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _switch = require('../../../atoms/switch');

var _switch2 = _interopRequireDefault(_switch);

var _radio = require('../../../atoms/radio');

var _radio2 = _interopRequireDefault(_radio);

var _actionShape = require('../../../_helpers/action-shape');

var _containerStyles = require('../../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Field = function Field(props) {
  /* Get unique id for label */
  var id = props.id || (0, _uniqueId2.default)(props.label);

  var error = props.error,
      fieldProps = _objectWithoutProperties(props, ['error']);

  return _react2.default.createElement(
    _formContext2.default.Consumer,
    null,
    function (context) {
      return _react2.default.createElement(
        Field.Element,
        _extends({ layout: context.layout }, (0, _automationAttribute2.default)('form.field')),
        _react2.default.createElement(
          Field.LabelLayout,
          { layout: context.layout },
          _react2.default.createElement(
            _label2.default,
            { htmlFor: id },
            props.label
          )
        ),
        _react2.default.createElement(
          Field.ContentLayout,
          { layout: context.layout },
          props.fieldComponent ? _react2.default.createElement(props.fieldComponent, _extends({ id: id, hasError: error ? true : false }, fieldProps)) : props.children,
          props.error ? _react2.default.createElement(
            _error2.default,
            null,
            props.error
          ) : null,
          props.helpText ? _react2.default.createElement(
            _helpText2.default,
            null,
            props.helpText
          ) : null
        )
      );
    }
  );
};

Field.Element = _styled2.default.div(_templateObject, _containerStyles2.default, function (props) {
  return props.layout === 'label-on-left' ? 'flex' : 'block';
}, function (props) {
  return (0, _layout2.default)(props.layout).formWidth;
}, function (props) {
  return props.layout === 'label-on-left' ? 0 : 'auto';
}, _cosmosTokens.spacing.small, _textarea2.default.Element, _cosmosTokens.misc.input.default.height, _switch2.default.Element, _radio2.default.Element, function (props) {
  return props.layout === 'label-on-left' ? '11px' : null;
});

Field.LabelLayout = _styled2.default.div(_templateObject2, function (props) {
  return (0, _layout2.default)(props.layout).labelWidth;
}, function (props) {
  return (0, _layout2.default)(props.layout).labelMargin;
}, function (props) {
  return props.layout === 'label-on-left' ? 'right' : 'left';
}, function (props) {
  return props.layout === 'label-on-left' ? _cosmosTokens.spacing.medium : 'none';
}, function (props) {
  return props.layout === 'label-on-left' ? '11px' : '0';
}, function (props) {
  return props.layout === 'label-on-left' ? '44px' : 'none';
}, function (props) {
  return props.layout === 'label-on-top' ? '8px' : '0';
});
Field.ContentLayout = _styled2.default.div(_templateObject3, function (props) {
  return (0, _layout2.default)(props.layout).contentWidth;
});

Field.displayName = 'Form Field';

Field.propTypes = {
  /** Form Label */
  label: _propTypes2.default.string.isRequired,
  /** Text that further explains the purpose of the field, or provides more detail */
  helpText: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  /** Error message to show in case of failed validation */
  error: _propTypes2.default.string,
  /** Actions to be attached to input */
  actions: _propTypes2.default.arrayOf(_actionShape.actionShapeWithRequiredIcon)
};

Field.defaultProps = {
  label: '',
  helpText: null,
  error: null
};

exports.default = Field;