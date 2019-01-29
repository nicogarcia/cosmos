'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding-left: ', ';\n  visibility: ', ';\n'], ['\n  padding-left: ', ';\n  visibility: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: ', ';\n  border-bottom: 2px solid ', ';\n  text-align: left;\n  vertical-align: bottom;\n  ', '\n  cursor: ', ';\n  &:hover {\n    color: ', ';\n    ', ' {\n      visibility: visible;\n    }\n  }\n'], ['\n  padding: ', ';\n  border-bottom: 2px solid ', ';\n  text-align: left;\n  vertical-align: bottom;\n  ', '\n  cursor: ', ';\n  &:hover {\n    color: ', ';\n    ', ' {\n      visibility: visible;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _tableColumn = require('./table-column');

var _tableColumn2 = _interopRequireDefault(_tableColumn);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TableHeader = function TableHeader(props) {
  var cells = props.columns.map(function (column, index) {
    var isSortedBy = column.field === props.sortingColumn.field;
    var order = props.sortDirection || 'asc';
    var icon = order === 'asc' ? '↑' : '↓';

    var sortIndicator = void 0;
    if (column.sortable) {
      sortIndicator = _react2.default.createElement(
        TableHeader.SortIndicator,
        { isSortedBy: isSortedBy },
        icon
      );
    }

    var _onClick = function _onClick(column) {
      if (!column.sortable) return;

      var sortDirection = void 0;

      if (column.field === props.sortingColumn.field) {
        /* if the selected column is clicked, flip sort direction */
        sortDirection = props.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        /* otherwise initialise with asc */
        sortDirection = 'asc';
      }
      props.onSort(column.field, sortDirection);
    };

    return _react2.default.createElement(
      TableHeader.Cell,
      {
        key: 'row-header-' + index,
        column: column,
        sortable: column.sortable && props.onSort,
        onClick: function onClick(_) {
          return _onClick(column);
        },
        width: column.width
      },
      column.title,
      sortIndicator
    );
  });

  return _react2.default.createElement(
    TableHeader.Element,
    (0, _automationAttribute2.default)('table.header'),
    _react2.default.createElement(
      TableHeader.Row,
      null,
      cells
    )
  );
};

TableHeader.Element = _styled2.default.thead(_templateObject);

TableHeader.Row = _styled2.default.tr(_templateObject);

TableHeader.SortIndicator = _styled2.default.span(_templateObject2, _cosmosTokens.spacing.xsmall, function (props) {
  return props.isSortedBy ? 'visible' : 'hidden';
});

TableHeader.Cell = _styled2.default.th(_templateObject3, _cosmosTokens.spacing.xsmall, _cosmosTokens.colors.base.grayLight, function (props) {
  return props.width ? 'width: ' + props.width + ';' : '';
}, function (props) {
  return props.sortable ? 'pointer' : 'auto';
}, function (props) {
  return props.sortable ? _cosmosTokens.colors.link.default : 'inherit';
}, TableHeader.SortIndicator);

TableHeader.propTypes = {
  columns: _propTypes2.default.arrayOf(_tableColumn2.default),
  onSort: _propTypes2.default.func,
  width: _propTypes2.default.string
};

TableHeader.defaultProps = {
  onSort: function onSort(column) {
    return function (event) {
      return null;
    };
  }
};

exports.default = TableHeader;