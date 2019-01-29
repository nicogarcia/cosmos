'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n\n  ', ' {\n    margin-right: ', ';\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n\n  ', ' {\n    margin-right: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  /* Override icon-only button color */\n  /* See: https://github.com/auth0/cosmos/pull/1033 */\n  ', ' {\n    path {\n      fill: black;\n    }\n  }\n'], ['\n  /* Override icon-only button color */\n  /* See: https://github.com/auth0/cosmos/pull/1033 */\n  ', ' {\n    path {\n      fill: black;\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background-color: ', ';\n\n  &:hover {\n    background-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n\n  &:hover {\n    background-color: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _button = require('../../atoms/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../../atoms/icon');

var _icon2 = _interopRequireDefault(_icon);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _pagination = require('../../_helpers/pagination');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var renderPaginationItem = function renderPaginationItem(_ref) {
  var toPage = _ref.toPage,
      content = _ref.content,
      appearance = _ref.appearance,
      items = _ref.items,
      perPage = _ref.perPage,
      onPageChanged = _ref.onPageChanged,
      _ref$right = _ref.right,
      right = _ref$right === undefined ? false : _ref$right;
  return _react2.default.createElement(
    _button2.default,
    {
      icon: 'chevron-' + (right ? 'right' : 'left'),
      iconAlign: right ? 'right' : 'left',
      appearance: appearance,
      size: 'compressed',
      onClick: function onClick() {
        return (0, _pagination.changePageIfAppropiate)(toPage, items, perPage, onPageChanged);
      }
    },
    content
  );
};

var handlePaginationButtonClick = function handlePaginationButtonClick(page, items, perPage, onPageChanged) {
  if (page.clickable === false) return;

  return (0, _pagination.changePageIfAppropiate)(page.label, items, perPage, onPageChanged);
};

var Pagination = function Pagination(_ref2) {
  var page = _ref2.page,
      perPage = _ref2.perPage,
      items = _ref2.items,
      appearance = _ref2.appearance,
      onPageChanged = _ref2.onPageChanged,
      props = _objectWithoutProperties(_ref2, ['page', 'perPage', 'items', 'appearance', 'onPageChanged']);

  return _react2.default.createElement(
    Pagination.Element,
    _extends({}, (0, _automationAttribute2.default)('pagination'), props),
    renderPaginationItem({
      toPage: 1,
      content: 'First',
      appearance: appearance,
      items: items,
      perPage: perPage,
      onPageChanged: onPageChanged
    }),
    _react2.default.createElement(Pagination.IconOnlyButton, {
      size: 'compressed',
      onClick: function onClick() {
        return (0, _pagination.changePageIfAppropiate)(page - 1, items, perPage, onPageChanged);
      },
      icon: 'chevron-left'
    }),
    (0, _pagination.getPaginationSlice)(page, items, perPage).map(function (page) {
      return _react2.default.createElement(
        Pagination.PageButton,
        {
          key: page.label,
          appearance: appearance,
          selected: page.selected,
          size: 'compressed',
          onClick: function onClick() {
            return handlePaginationButtonClick(page, items, perPage, onPageChanged);
          }
        },
        page.label
      );
    }),
    _react2.default.createElement(Pagination.IconOnlyButton, {
      size: 'compressed',
      onClick: function onClick() {
        return (0, _pagination.changePageIfAppropiate)(page + 1, items, perPage, onPageChanged);
      },
      icon: 'chevron-right'
    }),
    renderPaginationItem({
      toPage: (0, _pagination.pagesFromItems)(items, perPage),
      content: 'Last',
      appearance: appearance,
      items: items,
      perPage: perPage,
      onPageChanged: onPageChanged,
      right: true
    })
  );
};

Pagination.Element = _styled2.default.div(_templateObject, _button2.default.Element, _cosmosTokens.spacing.small);

Pagination.IconOnlyButton = (0, _styled2.default)(_button2.default)(_templateObject2, _icon2.default.Element);

Pagination.PageButton = (0, _styled2.default)(_button2.default)(_templateObject3, function (props) {
  return props.selected ? _cosmosTokens.colors.button.default.backgroundActive : _cosmosTokens.colors.button.default.background;
}, _cosmosTokens.colors.button.default.backgroundActive);

Pagination.propTypes = {
  page: _propTypes2.default.number.isRequired,
  perPage: _propTypes2.default.number.isRequired,
  items: _propTypes2.default.number.isRequired,
  onPageChanged: _propTypes2.default.func
};

exports.default = Pagination;