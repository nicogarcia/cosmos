'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledParagraph = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0;\n  flex: 1 0 100%;\n  order: 1;\n  margin-top: ', ';\n  @media (min-width: 768px) {\n    margin-bottom: 0;\n  }\n'], ['\n  margin: 0;\n  flex: 1 0 100%;\n  order: 1;\n  margin-top: ', ';\n  @media (min-width: 768px) {\n    margin-bottom: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  left: 2px;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 4px 0 4px 6px;\n  border-color: transparent transparent transparent ', ';\n'], ['\n  position: relative;\n  left: 2px;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 4px 0 4px 6px;\n  border-color: transparent transparent transparent ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  &:hover ', ' {\n    border-color: transparent transparent transparent ', ';\n  }\n'], ['\n  &:hover ', ' {\n    border-color: transparent transparent transparent ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _paragraph = require('../../atoms/paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _link = require('../../atoms/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
Components should not have margin by default.
We'll remove this margin reset when we remove margins from the paragraph
*/
var StyledParagraph = exports.StyledParagraph = (0, _styled2.default)(_paragraph2.default)(_templateObject, _cosmosTokens.spacing.medium);

var ArrowMore = _styled2.default.i(_templateObject2, _cosmosTokens.colors.link.default);

// Required to style hover from parent element
var StyledLink = (0, _styled2.default)(_link2.default)(_templateObject3, ArrowMore, _cosmosTokens.colors.link.defaultHover);

var Description = function Description(props) {
  return _react2.default.createElement(
    StyledParagraph,
    null,
    props.children.text,
    ' ',
    props.children.learnMore ? _react2.default.createElement(
      StyledLink,
      { href: props.children.learnMore },
      'Learn more ',
      _react2.default.createElement(ArrowMore, null)
    ) : null
  );
};

exports.default = Description;