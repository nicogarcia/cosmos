'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: grid;\n  grid-row-gap: 20px;\n  grid-column-gap: 20px;\n  grid-template-areas:\n    \'header\'\n    \'sidebar\'\n    \'content\';\n  @media (min-width: 700px) {\n    grid-template-columns: auto 200px calc(866px - ', ') auto;\n    grid-template-areas:\n      \'header header header header\'\n      \'. sidebar  content .\';\n  }\n'], ['\n  position: relative;\n  display: grid;\n  grid-row-gap: 20px;\n  grid-column-gap: 20px;\n  grid-template-areas:\n    \'header\'\n    \'sidebar\'\n    \'content\';\n  @media (min-width: 700px) {\n    grid-template-columns: auto 200px calc(866px - ', ') auto;\n    grid-template-areas:\n      \'header header header header\'\n      \'. sidebar  content .\';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  grid-area: header;\n  position: sticky;\n  top: 0;\n  background: rgba(255, 255, 255, 0.9);\n  border-bottom: 1px solid #f1f1f1;\n\n  /* \n\n  Comsmos won\'t set heights and padding for now, \n  until we create the inner structures and\n  header components\n  \n  height: 69px;\n  padding: 10px 0; */\n  > * {\n    width: 1064px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n'], ['\n  grid-area: header;\n  position: sticky;\n  top: 0;\n  background: rgba(255, 255, 255, 0.9);\n  border-bottom: 1px solid #f1f1f1;\n\n  /* \n\n  Comsmos won\'t set heights and padding for now, \n  until we create the inner structures and\n  header components\n  \n  height: 69px;\n  padding: 10px 0; */\n  > * {\n    width: 1064px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  grid-area: sidebar;\n  > * {\n    position: sticky;\n\n    /* The value of top should be the height of the header */\n    top: 20px;\n  }\n'], ['\n  grid-area: sidebar;\n  > * {\n    position: sticky;\n\n    /* The value of top should be the height of the header */\n    top: 20px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  grid-area: content;\n'], ['\n  grid-area: content;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: -1;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  &:focus {\n    z-index: 1;\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: -1;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  &:focus {\n    z-index: 1;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AppLayout = function AppLayout(props) {
  return _react2.default.createElement(
    AppLayout.Element,
    (0, _automationAttribute2.default)('app-frame'),
    _react2.default.createElement(
      AppLayout.SkipLink,
      _extends({}, (0, _automationAttribute2.default)('app-frame.skiplink'), { href: '#main' }),
      'Skip to main content'
    ),
    props.children
  );
};

AppLayout.Element = _styledComponents2.default.div(_templateObject, _cosmosTokens.spacing.medium);

AppLayout.Header = _styledComponents2.default.header(_templateObject2);

AppLayout.SideBar = _styledComponents2.default.div(_templateObject3);

AppLayout.Content = _styledComponents2.default.main(_templateObject4);

AppLayout.SkipLink = _styledComponents2.default.a(_templateObject5);

exports.default = AppLayout;