'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  width: 100%;\n  text-align: center;\n'], ['\n  ', ';\n  width: 100%;\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  max-width: 400px;\n  margin: 0 auto ', ' auto;\n\n  > ', ' {\n    margin-bottom: ', ';\n    line-height: 1em;\n    opacity: 0.2;\n  }\n'], ['\n  max-width: 400px;\n  margin: 0 auto ', ' auto;\n\n  > ', ' {\n    margin-bottom: ', ';\n    line-height: 1em;\n    opacity: 0.2;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin: 0 0 ', ' 0;\n'], ['\n  margin: 0 0 ', ' 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: inline-block;\n  i {\n    position: relative;\n    left: 2px;\n    display: inline-block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 4px 0 4px 6px;\n    border-color: transparent transparent transparent ', ';\n  }\n  &:hover i\xA0 {\n    border-color: transparent transparent transparent ', ';\n  }\n'], ['\n  display: inline-block;\n  i {\n    position: relative;\n    left: 2px;\n    display: inline-block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 4px 0 4px 6px;\n    border-color: transparent transparent transparent ', ';\n  }\n  &:hover i\xA0 {\n    border-color: transparent transparent transparent ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _icon = require('../../atoms/icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../../atoms/button');

var _button2 = _interopRequireDefault(_button);

var _link = require('../../atoms/link');

var _link2 = _interopRequireDefault(_link);

var _heading = require('../../atoms/heading');

var _heading2 = _interopRequireDefault(_heading);

var _actionShape = require('../../_helpers/action-shape');

var _freeText = require('../../_helpers/free-text');

var _freeText2 = _interopRequireDefault(_freeText);

var _customValidations = require('../../_helpers/custom-validations');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getHelpLink = function getHelpLink(link) {
  if (!link) return;

  /* link supports both formats: string and object */
  if (typeof link === 'string') {
    link = { href: link, target: '_blank' // defaults
    };
  }

  return _react2.default.createElement(
    LearnMore,
    null,
    _react2.default.createElement(
      _link2.default,
      link,
      'Learn More ',
      _react2.default.createElement(
        'i',
        null,
        ' '
      )
    )
  );
};

var EmptyState = function EmptyState(_ref) {
  var link = _ref.link,
      helpUrl = _ref.helpUrl,
      title = _ref.title,
      icon = _ref.icon,
      action = _ref.action,
      props = _objectWithoutProperties(_ref, ['link', 'helpUrl', 'title', 'icon', 'action']);

  var helpLink = getHelpLink(link || helpUrl);

  return _react2.default.createElement(
    EmptyState.Element,
    _extends({}, (0, _automationAttribute2.default)('empty-state'), props),
    _react2.default.createElement(
      Title,
      { size: 1 },
      title
    ),
    _react2.default.createElement(
      EmptyState.Body,
      null,
      _react2.default.createElement(_icon2.default, { name: icon, size: 110, color: 'blue' }),
      _react2.default.createElement(_freeText2.default, _extends({}, props, { useParagraph: true })),
      helpLink
    ),
    _react2.default.createElement(
      _button2.default,
      { size: 'large', appearance: 'cta', icon: action.icon, onClick: action.handler },
      action.label
    )
  );
};

EmptyState.Element = _styled2.default.div(_templateObject, _containerStyles2.default);
EmptyState.Body = _styled2.default.div(_templateObject2, _cosmosTokens.spacing.small, _icon2.default.Element, _cosmosTokens.spacing.xsmall);
var Title = (0, _styled2.default)(_heading2.default)(_templateObject3, _cosmosTokens.spacing.xlarge);

var LearnMore = _styled2.default.div(_templateObject4, _cosmosTokens.colors.link.default, _cosmosTokens.colors.link.defaultHover);

EmptyState.displayName = 'EmptyState';

EmptyState.propTypes = {
  /** Big heading for section */
  title: _propTypes2.default.string.isRequired,
  /** Icon associated with section */
  icon: _propTypes2.default.oneOf(_icon.__ICONNAMES__).isRequired,
  /** @deprecated:children Message */
  text: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  /** Message */
  children: _propTypes2.default.node,
  /** @deprecated:link url and target for "Learn more" */
  helpUrl: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    href: _propTypes2.default.string,
    target: _propTypes2.default.string
  })]),
  /** url and target for "Learn more" */
  link: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    href: _propTypes2.default.string,
    target: _propTypes2.default.string
  })]),
  /** Primary call to action */
  action: _actionShape.actionShapeWithRequiredIcon.isRequired,

  _deprecation_text: function _deprecation_text(props) {
    return (0, _customValidations.deprecate)(props, { name: 'text', replacement: 'children' });
  },
  _deprecation_helpUrl: function _deprecation_helpUrl(props) {
    return (0, _customValidations.deprecate)(props, { name: 'helpUrl', replacement: 'link' });
  }
};

exports.default = EmptyState;