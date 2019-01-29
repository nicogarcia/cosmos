'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  position: relative;\n'], ['\n  ', ';\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse;\n  table-layout: fixed;\n  opacity: ', ';\n'], ['\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse;\n  table-layout: fixed;\n  opacity: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']),
    _templateObject4 = _taggedTemplateLiteral(['\n  cursor: ', ';\n  &:hover {\n    background-color: ', ';\n  }\n'], ['\n  cursor: ', ';\n  &:hover {\n    background-color: ', ';\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding: ', ';\n  border-top: 1px solid ', ';\n  text-align: left;\n  vertical-align: middle;\n  overflow-wrap: break-word;\n  width: ', ';\n  ', ';\n'], ['\n  padding: ', ';\n  border-top: 1px solid ', ';\n  text-align: left;\n  vertical-align: middle;\n  overflow-wrap: break-word;\n  width: ', ';\n  ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow-x: hidden;\n        '], ['\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow-x: hidden;\n        ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    padding: ', ';\n    background-color: rgb(250, 250, 250);\n    border-radius: ', ';\n    text-align: center;\n    margin-top: ', ';\n    color: ', ';\n  '], ['\n    padding: ', ';\n    background-color: rgb(250, 250, 250);\n    border-radius: ', ';\n    text-align: center;\n    margin-top: ', ';\n    color: ', ';\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    position: ', ';\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: ', ';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: ', ';\n  '], ['\n    position: ', ';\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: ', ';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: ', ';\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    background-color: white;\n    display: inline-block;\n    padding: ', ';\n    border-radius: 50%;\n  '], ['\n    background-color: white;\n    display: inline-block;\n    padding: ', ';\n    border-radius: 50%;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _spinner = require('../../atoms/spinner');

var _spinner2 = _interopRequireDefault(_spinner);

var _tableColumn = require('./table-column');

var _tableColumn2 = _interopRequireDefault(_tableColumn);

var _tableHeader = require('./table-header');

var _tableHeader2 = _interopRequireDefault(_tableHeader);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    /*
      This component can exists in 2 modes:
       1. Automatic sorting
         We initialse sortingColumn and sortDirection in internal state to
         work with defaultOnSort
       2. Controlled sorting
         The internal state is completely bipassed, we expect the user to send
         sortedItems directly.
    */

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.defaultCellRenderer = function (item, column) {
      return item[column.field];
    };

    _this.defaultOnSort = function (sortOnField, sortDirection) {
      var sortingColumn = _this.getSortingColumn(sortOnField);
      _this.setState({ sortingColumn: sortingColumn, sortDirection: sortDirection });
    };

    _this.sortItems = function (_ref) {
      var unsortedItems = _ref.unsortedItems,
          sortingColumn = _ref.sortingColumn,
          sortDirection = _ref.sortDirection;

      /* create a copy of allItems */
      var items = [].concat(_toConsumableArray(unsortedItems));

      /* if there are no items or no sorting column sorting code breaks */
      if (!sortingColumn || items.length === 0) return items;

      var comparator = _this.getComparator(items, sortingColumn);

      items.sort(function (row1, row2) {
        return comparator(row1, row2, sortingColumn);
      });
      if (sortDirection === 'desc') items.reverse();

      return items;
    };

    _this.handleRowClicked = function (item) {
      if (!_this.props.onRowClick) return null;
      return function (evt) {
        _this.props.onRowClick(evt, item);
      };
    };

    if (!props.onSort) {
      // automatic mode
      _this.state = {
        sortingColumn: _this.getSortingColumn(props.sortOn),
        sortDirection: 'asc'
      };
    }
    return _this;
  }

  _createClass(Table, [{
    key: 'inferColumnsFromChildren',
    value: function inferColumnsFromChildren(children) {
      return _react2.default.Children.toArray(children).map(function (element) {
        return element.props;
      });
    }
  }, {
    key: 'getSortingColumn',
    value: function getSortingColumn(sortOnField) {
      var columns = this.inferColumnsFromChildren(this.props.children);
      if (sortOnField) {
        /* find matching column by field prop */
        return columns.find(function (column) {
          return column.field === sortOnField;
        });
      } else {
        /*
          default to the first column that has sortable prop
          if there are no columns with sortable, return empty
        */
        return columns.find(function (column) {
          return column.sortable;
        }) || {};
      }
    }
  }, {
    key: 'getComparator',
    value: function getComparator(items, sortingColumn) {
      /* Use custom comparator if given as prop */
      if (sortingColumn.comparator) return sortingColumn.comparator;

      /* if not, try to guess it from the type of data */
      var firstItem = items[0];
      var sampleValue = firstItem[sortingColumn.field];
      if (typeof sampleValue === 'number') return Table.compare.numbers;else return Table.compare.strings;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var columns = this.inferColumnsFromChildren(this.props.children);
      var sortedItems = void 0,
          sortingColumn = void 0,
          sortDirection = void 0,
          onSort = void 0;
      var loading = this.props.loading;


      if (this.props.onSort) {
        // User-controlled sorting mode: items are already sorted

        onSort = this.props.onSort;
        sortingColumn = this.getSortingColumn(this.props.sortOn); // field:string to sortingColumn:object
        sortDirection = this.props.sortDirection;
        sortedItems = this.props.items;
      } else {
        //  Automatic sorting mode: use internal state

        onSort = this.defaultOnSort;
        sortingColumn = this.state.sortingColumn;
        sortDirection = this.state.sortDirection;
        sortedItems = this.sortItems({
          unsortedItems: this.props.items,
          sortDirection: sortDirection,
          sortingColumn: sortingColumn
        });
      }

      // If columns are passed as a variable or as a child to <div> element
      if (columns[0].children != undefined && columns[0].children.length > 1) {
        var nestedColumns = [];
        columns[0].children.map(function (column) {
          nestedColumns.push(column.props);
        });
        columns = nestedColumns;
      }

      var rows = sortedItems.map(function (item, index) {
        return _react2.default.createElement(
          Table.Row,
          _extends({
            key: 'row-' + index,
            onClick: _this2.handleRowClicked(item)
          }, (0, _automationAttribute2.default)('table.row')),
          columns.map(function (column) {
            var cellRenderer = column.children || _this2.defaultCellRenderer;

            return _react2.default.createElement(
              Table.Cell,
              { key: column.field, column: column },
              cellRenderer(item, column)
            );
          })
        );
      });

      return _react2.default.createElement(
        Table.Container,
        null,
        _react2.default.createElement(
          Table.Element,
          _extends({}, (0, _automationAttribute2.default)('table'), this.props, { rows: rows }),
          _react2.default.createElement(Table.Header, {
            columns: columns,
            sortingColumn: sortingColumn,
            sortDirection: sortDirection,
            onSort: onSort
          }),
          _react2.default.createElement(
            Table.Body,
            (0, _automationAttribute2.default)('table.body'),
            rows
          )
        ),
        _react2.default.createElement(
          Table.EmptyState,
          { rows: rows, loading: loading },
          this.props.emptyMessage
        ),
        _react2.default.createElement(Table.LoadingIndicator, { rows: rows, loading: loading })
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

Table.Header = _tableHeader2.default;
Table.Column = _tableColumn2.default;

Table.compare = {
  numbers: function numbers(row1, row2, column) {
    return Number(row1[column.field]) - Number(row2[column.field]);
  },
  strings: function strings(row1, row2, column) {
    return String(row1[column.field]).toLowerCase() - String(row2[column.field]).toLowerCase();
  }
};

Table.Container = _styled2.default.div(_templateObject, _containerStyles2.default);

Table.Element = _styled2.default.table(_templateObject2, function (p) {
  return p.loading && p.rows.length !== 0 ? 0.3 : 1;
});

Table.Body = _styled2.default.tbody(_templateObject3);

Table.Row = _styled2.default.tr(_templateObject4, function (props) {
  return props.onClick ? 'pointer' : 'inherit';
}, _cosmosTokens.colors.list.backgroundHover);

Table.Cell = _styled2.default.td(_templateObject5, _cosmosTokens.spacing.xsmall, _cosmosTokens.colors.base.grayLight, function (props) {
  return props.column.width || 'auto';
}, function (props) {
  return props.column.truncate ? (0, _styled.css)(_templateObject6) : '';
});

Table.EmptyState = function (_ref2) {
  var rows = _ref2.rows,
      children = _ref2.children,
      loading = _ref2.loading;

  if (rows.length > 0 || !children || loading) return null;

  var TableEmptyState = _styled2.default.div(_templateObject7, _cosmosTokens.spacing.small, _cosmosTokens.misc.radius, _cosmosTokens.spacing.xsmall, _cosmosTokens.colors.text.default);

  return _react2.default.createElement(
    TableEmptyState,
    null,
    children
  );
};

Table.LoadingIndicator = function (_ref3) {
  var loading = _ref3.loading,
      rows = _ref3.rows;

  if (!loading) return null;
  var initialLoadingState = rows.length === 0;

  var TableLoadingIndicator = _styled2.default.div(_templateObject8, initialLoadingState ? 'initial' : 'absolute', initialLoadingState ? 'auto' : '100%', initialLoadingState ? '20px' : '0');

  var SpinnerContainer = _styled2.default.div(_templateObject9, _cosmosTokens.spacing.xsmall);

  return _react2.default.createElement(
    TableLoadingIndicator,
    null,
    _react2.default.createElement(
      SpinnerContainer,
      null,
      _react2.default.createElement(_spinner2.default, { size: 'medium' })
    )
  );
};

Table.propTypes = {
  /** The items in the table. */
  items: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  /** Items are sorted on this field (defaults to the first sortable column)*/
  sortOn: _propTypes2.default.string,
  /** Direction of sort */
  sortDirection: _propTypes2.default.oneOf(['asc', 'desc']),
  /** A function that will be called when a row is clicked. */
  onRowClick: _propTypes2.default.func,
  /** A function that will be called when the table is re-sorted via clicking a header. */
  onSort: _propTypes2.default.func,
  /** A message to show to the user in case there */
  emptyMessage: _propTypes2.default.node
};

Table.defaultProps = {
  onRowClick: null,
  onSort: null,
  sortDirection: 'asc',
  emptyMessage: 'There are no items to display'
};

exports.default = Table;