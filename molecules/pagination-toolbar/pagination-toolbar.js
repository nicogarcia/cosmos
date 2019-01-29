'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', ' {\n    path {\n      fill: ', ';\n    }\n  }\n'], ['\n  ', ' {\n    path {\n      fill: ', ';\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  margin-top: ', ';\n'], ['\n  display: flex;\n  justify-content: space-between;\n  margin-top: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  & > * {\n    margin-right: ', ';\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n\n  ', ' {\n    width: ', 'px;\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  & > * {\n    margin-right: ', ';\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n\n  ', ' {\n    width: ', 'px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _textInput = require('../../atoms/text-input');

var _textInput2 = _interopRequireDefault(_textInput);

var _button = require('../../atoms/button');

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = require('../../molecules/button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _icon = require('../../atoms/icon');

var _icon2 = _interopRequireDefault(_icon);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _pagination = require('../../_helpers/pagination');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Pager = function Pager(_ref) {
  var page = _ref.page,
      pages = _ref.pages,
      onPrevPressed = _ref.onPrevPressed,
      onNextPressed = _ref.onNextPressed;

  var inFirstPage = page === 1;
  var inLastPage = page === pages;
  return _react2.default.createElement(
    _buttonGroup2.default,
    { compressed: true },
    _react2.default.createElement(Pager.Button, {
      icon: 'chevron-left',
      size: 'compressed',
      onClick: onPrevPressed,
      disabled: inFirstPage
    }),
    _react2.default.createElement(Pager.Button, {
      icon: 'chevron-right',
      size: 'compressed',
      onClick: onNextPressed,
      disabled: inLastPage
    })
  );
};

Pager.Button = (0, _styled2.default)(_button2.default)(_templateObject, _icon2.default.Element, _cosmosTokens.colors.text.inputs);

var PaginationToolbar = function PaginationToolbar(_ref2) {
  var onPageChanged = _ref2.onPageChanged,
      page = _ref2.page,
      perPage = _ref2.perPage,
      items = _ref2.items,
      props = _objectWithoutProperties(_ref2, ['onPageChanged', 'page', 'perPage', 'items']);

  var pages = (0, _pagination.pagesFromItems)(items, perPage);

  // Do not show the pagination toolbar if there is one page or less
  if (pages <= 1) return null;

  return _react2.default.createElement(
    PaginationToolbar.Element,
    _extends({}, (0, _automationAttribute2.default)('pagination-toolbar'), props),
    _react2.default.createElement(
      PaginationToolbar.PageSelector,
      { page: page },
      _react2.default.createElement(
        'div',
        null,
        'Page'
      ),
      _react2.default.createElement(_textInput2.default, {
        type: 'number',
        size: 'compressed',
        value: page.toString(),
        onChange: function onChange(evt) {
          return (0, _pagination.changePageIfAppropiate)(evt.target.value, items, perPage, onPageChanged);
        }
      }),
      _react2.default.createElement(
        'div',
        null,
        'of ',
        pages
      )
    ),
    _react2.default.createElement(Pager, {
      page: page,
      pages: pages,
      onNextPressed: function onNextPressed() {
        return (0, _pagination.changePageIfAppropiate)(page + 1, items, perPage, onPageChanged);
      },
      onPrevPressed: function onPrevPressed() {
        return (0, _pagination.changePageIfAppropiate)(page - 1, items, perPage, onPageChanged);
      }
    })
  );
};

PaginationToolbar.Element = _styled2.default.div(_templateObject2, _cosmosTokens.spacing.medium);

PaginationToolbar.PageSelector = _styled2.default.div(_templateObject3, _cosmosTokens.spacing.xsmall, _textInput2.default.Element, function (_ref3) {
  var page = _ref3.page;
  return (0, _pagination.pageInputWidth)(page);
});

PaginationToolbar.propTypes = {
  page: _propTypes2.default.number.isRequired,
  perPage: _propTypes2.default.number.isRequired,
  items: _propTypes2.default.number.isRequired,
  onPageChanged: _propTypes2.default.func
};

exports.default = PaginationToolbar;