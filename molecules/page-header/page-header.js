'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPageHeader = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n\n  @media (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  /*\n  Components should not have margin by default.\n  We\'ll remove this margin eventually\n  */\n  margin-bottom: ', ';\n\n  ', ' {\n    margin-top: ', ';\n    @media (min-width: 768px) {\n      margin-top: 0;\n      margin-left: ', ';\n    }\n  }\n\n  ', ' {\n    flex: 1;\n    /*\n    Components should not have margin by default.\n    We\'ll remove this margin reset when we remove margins from headers\n    */\n    margin: 0;\n  }\n'], ['\n  ', ';\n\n  @media (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  /*\n  Components should not have margin by default.\n  We\'ll remove this margin eventually\n  */\n  margin-bottom: ', ';\n\n  ', ' {\n    margin-top: ', ';\n    @media (min-width: 768px) {\n      margin-top: 0;\n      margin-left: ', ';\n    }\n  }\n\n  ', ' {\n    flex: 1;\n    /*\n    Components should not have margin by default.\n    We\'ll remove this margin reset when we remove margins from headers\n    */\n    margin: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _heading = require('../../atoms/heading');

var _heading2 = _interopRequireDefault(_heading);

var _description = require('./description');

var _description2 = _interopRequireDefault(_description);

var _button = require('../../atoms/button');

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = require('../../molecules/button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _actionShape = require('../../_helpers/action-shape');

var _pageHeader = require('../../_helpers/page-header');

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

var _buttonProp = require('../../_helpers/button-prop');

var _buttonProp2 = _interopRequireDefault(_buttonProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageHeader = function PageHeader(props) {
  return _react2.default.createElement(
    PageHeader.Element,
    _extends({}, (0, _automationAttribute2.default)('page-header'), props),
    _react2.default.createElement(
      _heading2.default,
      { size: 1 },
      props.title
    ),
    _react2.default.createElement(PageHeader.Description, props),
    (props.secondaryAction || props.primaryAction) && _react2.default.createElement(
      _buttonGroup2.default,
      null,
      (0, _buttonProp2.default)(props.secondaryAction, { size: 'large', appearance: 'secondary' }),
      (0, _buttonProp2.default)(props.primaryAction, { size: 'large', appearance: 'cta' })
    )
  );
};

PageHeader.Element = _styled2.default.div(_templateObject, _containerStyles2.default, _cosmosTokens.spacing.large, _buttonGroup2.default.Element, _cosmosTokens.spacing.medium, _cosmosTokens.spacing.small, _heading2.default.Element[1]);

PageHeader.Description = function (_ref) {
  var description = _ref.description,
      learnMore = _ref.learnMore;

  if (!description) return null;

  if ((0, _pageHeader.descriptionIsObject)(description)) {
    return _react2.default.createElement(
      _description2.default,
      null,
      description
    );
  }

  var descriptionCompat = { text: description, learnMore: learnMore };

  return _react2.default.createElement(
    _description2.default,
    null,
    descriptionCompat
  );
};

PageHeader.displayName = 'Page Header';

PageHeader.propTypes = {
  /** Page title of the section */
  title: _propTypes2.default.string.isRequired,
  /** Description to give more information to the user */
  description: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    text: _propTypes2.default.string,
    learnMore: _propTypes2.default.string
  }), _propTypes2.default.node]),
  /** URL to be used as the target of the 'Learn more' link */
  learnMore: _propTypes2.default.string,
  /** Actions to be attached on top */
  primaryAction: _propTypes2.default.oneOfType([_actionShape.actionShapeWithRequiredIcon, _propTypes2.default.element]),
  secondaryAction: _propTypes2.default.oneOfType([_actionShape.actionShapeWithRequiredIcon, _propTypes2.default.element])
};

PageHeader.defaultProps = {
  title: ''
};

var StyledPageHeader = PageHeader.Element;

exports.default = PageHeader;
exports.StyledPageHeader = StyledPageHeader;