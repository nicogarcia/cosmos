'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  /* all your css goes here */\n\n  /* you can use variables here like tokens */\n  background: ', ';\n  border: 1px solid ', ';\n  border-radius: ', ';\n\n  /* you can use props here to customize the element */\n  width: ', ';\n  height: ', ';\n\n  /* this is how you add pseudo states */\n  &:hover {\n    background: ', ';\n  }\n'], ['\n  /* all your css goes here */\n\n  /* you can use variables here like tokens */\n  background: ', ';\n  border: 1px solid ', ';\n  border-radius: ', ';\n\n  /* you can use props here to customize the element */\n  width: ', ';\n  height: ', ';\n\n  /* this is how you add pseudo states */\n  &:hover {\n    background: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /*
                                                                                                                                                    This is a demo component to show how to write a good component.
                                                                                                                                                    We will create a square box component here.
                                                                                                                                                  
                                                                                                                                                    There are 5 steps to do this
                                                                                                                                                  */

/*
  Step 1: Import all the dependencies
  - import React and @auth0/cosmos/styled, thes are the bread and butter
  - import prop type for documentation and validation
  - import tokens instead of hard coding values
*/

/*
  Step 2: Create a styled element with css
  You can get the html element from styled.element like styled.a
*/

var StyledBox = _styled2.default.div(_templateObject, _cosmosTokens.colors.base.grayLightest, _cosmosTokens.colors.base.grayDark, _cosmosTokens.misc.radius, function (props) {
  return props.big ? '100px' : '50px';
}, function (props) {
  return props.big ? '100px' : '50px';
}, _cosmosTokens.colors.base.grayLight);

/*
 * Step 3: Create a React component that returns the styled element,
 * Add description above the component, this will be shown in the docs
 */

var Box = function Box(props) {
  /* you can pass on all the props to the component like this */
  return _react2.default.createElement(StyledBox, props);
};

/*
  Step 4: We need to add prop information for our component
  - Add propTypes to make for documentation and validation
  - Add defaultProps for documentation
*/
Box.propTypes = {
  /** This comment will be picked up by the docs */
  big: _propTypes2.default.bool
};

Box.defaultProps = {
  big: false

  /* Finally, export the component */
};exports.default = Box;

/*
  We are not done yet, there is one more step to make our component usable
  Document the examples in _box.md
*/

/*
  Bonus step: Add your component to component/index.js
  so that it can be imported from accross the system

  import { Box } from './components'

  This is a step only for convenience while developing the system,
  it will be replaced with a more explicit syntax

  import { Box } from '@auth0/cosmos'
*/