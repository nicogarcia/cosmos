'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  margin-top: ', ';\n'], ['\n  ', ';\n  margin-top: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-top: 0;\n'], ['\n  margin-top: 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  > * {\n    flex: 0 auto;\n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  > * {\n    flex: 0 auto;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: ', ';\n  border-bottom: 1px solid ', ';\n'], ['\n  padding: ', ';\n  border-bottom: 1px solid ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  border: 1px solid ', ';\n  border-radius: ', ';\n  list-style: none;\n  ', ';\n  padding-left: 0;\n  margin-bottom: 0;\n  > ', ':last-child {\n      border-bottom: none;\n    }\n  }\n'], ['\n  border: 1px solid ', ';\n  border-radius: ', ';\n  list-style: none;\n  ', ';\n  padding-left: 0;\n  margin-bottom: 0;\n  > ', ':last-child {\n      border-bottom: none;\n    }\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 1.0714285714em;\n  color: ', ';\n  margin: 0;\n'], ['\n  font-size: 1.0714285714em;\n  color: ', ';\n  margin: 0;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  margin-right: ', ';\n  p {\n    color: ', ';\n    margin: 0;\n    margin-top: 0.5em;\n  }\n'], ['\n  margin-right: ', ';\n  p {\n    color: ', ';\n    margin: 0;\n    margin-top: 0.5em;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  text-align: right;\n'], ['\n  text-align: right;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _heading = require('../../atoms/heading');

var _heading2 = _interopRequireDefault(_heading);

var _button = require('../../atoms/button');

var _button2 = _interopRequireDefault(_button);

var _paragraph = require('../../atoms/paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _stack = require('../stack');

var _stack2 = _interopRequireDefault(_stack);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styled2.default.div(_templateObject, _containerStyles2.default, _cosmosTokens.spacing.xlarge);

var MainTitle = (0, _styled2.default)(_heading2.default)(_templateObject2);

var TempStack = _styled2.default.div(_templateObject3);
var Item = _styled2.default.li(_templateObject4, _cosmosTokens.spacing.medium, _cosmosTokens.colors.text.error);

var ItemsContainer = _styled2.default.ul(_templateObject5, _cosmosTokens.colors.text.error, _cosmosTokens.misc.radius, '' /* reset the default spacing for ul */, Item);

var Title = (0, _styled2.default)(_heading2.default)(_templateObject6, _cosmosTokens.colors.text.error);

var Description = _styled2.default.div(_templateObject7, _cosmosTokens.spacing.small, _cosmosTokens.colors.text.secondary);

var Action = _styled2.default.div(_templateObject8);

var DangerZone = function DangerZone(_ref) {
  var items = _ref.items,
      props = _objectWithoutProperties(_ref, ['items']);

  return _react2.default.createElement(
    Container,
    _extends({}, (0, _automationAttribute2.default)('danger-zone'), props),
    _react2.default.createElement(
      MainTitle,
      { size: 3 },
      'Danger Zone'
    ),
    _react2.default.createElement(
      ItemsContainer,
      null,
      items.map(function (item) {
        return _react2.default.createElement(
          Item,
          { key: item.title },
          _react2.default.createElement(
            TempStack,
            null,
            _react2.default.createElement(
              Description,
              null,
              _react2.default.createElement(
                Title,
                { size: 4 },
                item.title
              ),
              item.description ? _react2.default.createElement(
                _paragraph2.default,
                null,
                item.description
              ) : null
            ),
            _react2.default.createElement(
              Action,
              null,
              _react2.default.createElement(
                _button2.default,
                _extends({
                  type: item.action.type || 'button',
                  onClick: function onClick(e) {
                    item.action.onClick(e);
                  },
                  appearance: 'destructive',
                  loading: item.action.loading
                }, (0, _automationAttribute2.default)('danger-zone.action')),
                item.action.label
              )
            )
          )
        );
      })
    )
  );
};

DangerZone.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    action: _propTypes2.default.function
  })).isRequired
};

exports.default = DangerZone;