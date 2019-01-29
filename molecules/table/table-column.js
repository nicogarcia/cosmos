'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The table column isn't actually rendered; it's just used to capture props.
var TableColumn = function TableColumn(props) {
  return null;
};

TableColumn.propTypes = {
  field: _propTypes2.default.string,
  title: _propTypes2.default.string,
  width: _propTypes2.default.string,
  sortable: _propTypes2.default.bool,
  comparator: _propTypes2.default.func,
  truncate: _propTypes2.default.bool
};

TableColumn.defaultProps = {
  sortable: false,
  truncate: false
};

exports.default = TableColumn;