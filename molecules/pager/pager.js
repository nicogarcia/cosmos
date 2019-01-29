'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n'], ['\n  ', ';\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n'], ['\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

var _button = require('../../atoms/button');

var _button2 = _interopRequireDefault(_button);

var _pagination = require('../../_helpers/pagination');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Pager = function Pager(_ref) {
  var onPageChanged = _ref.onPageChanged,
      page = _ref.page,
      perPage = _ref.perPage,
      items = _ref.items,
      props = _objectWithoutProperties(_ref, ['onPageChanged', 'page', 'perPage', 'items']);

  return _react2.default.createElement(
    Pager.Element,
    _extends({}, (0, _automationAttribute2.default)('pager'), props),
    _react2.default.createElement(
      _button2.default,
      {
        position: 'left',
        size: 'compressed',
        appearance: 'secondary',
        onClick: function onClick() {
          return (0, _pagination.changePageIfAppropiate)(page - 1, items, perPage, onPageChanged);
        },
        icon: 'chevron-left'
      },
      'Newer'
    ),
    _react2.default.createElement(
      Pager.PageSelector,
      { page: page },
      items && (0, _pagination.totals)(page, perPage, items)
    ),
    _react2.default.createElement(
      _button2.default,
      {
        position: 'right',
        size: 'compressed',
        appearance: 'secondary',
        icon: 'chevron-right',
        iconAlign: 'right',
        onClick: function onClick() {
          return (0, _pagination.changePageIfAppropiate)(page + 1, items, perPage, onPageChanged);
        }
      },
      'Older'
    )
  );
};

Pager.Element = _styled2.default.div(_templateObject, _containerStyles2.default);

Pager.PageSelector = _styled2.default.div(_templateObject2);

Pager.propTypes = {
  page: _propTypes2.default.number,
  perPage: _propTypes2.default.number,
  items: _propTypes2.default.number,
  onPageChanged: _propTypes2.default.func
};

exports.default = Pager;