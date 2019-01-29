'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Select', module).add('default', function () {
  return _react2.default.createElement(_.Select, {
    value: 1,
    options: [{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }],
    onChange: function onChange(event) {
      return console.log(event);
    }
  });
});

(0, _react3.storiesOf)('Select', module).add('default value', function () {
  return _react2.default.createElement(_.Select, {
    value: 2,
    options: [{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }],
    onChange: function onChange(event) {
      return console.log(event);
    }
  });
});

(0, _react3.storiesOf)('Select', module).add('readOnly', function () {
  return _react2.default.createElement(_.Select, {
    readOnly: true,
    value: 2,
    options: [{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }],
    onChange: function onChange(event) {
      return console.log(event);
    }
  });
});