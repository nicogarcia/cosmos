'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Select', module).add('simple', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Select: simple' },
    _react2.default.createElement(_.Select, {
      options: [{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }],
      onChange: function onChange(event) {
        return console.log(event);
      }
    })
  );
});

(0, _react3.storiesOf)('Select', module).add('with placeholder', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Select: with placeholder' },
    _react2.default.createElement(_.Select, {
      placeholder: 'Select an option...',
      options: [{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }],
      onChange: function onChange(event) {
        return console.log(event);
      }
    })
  );
});

(0, _react3.storiesOf)('Select', module).add('default value', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Select: with default value' },
    _react2.default.createElement(_.Select, {
      value: 2,
      options: [{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }],
      onChange: function onChange(event) {
        return console.log(event);
      }
    })
  );
});

(0, _react3.storiesOf)('Select', module).add('disabled', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Select: disabled' },
    _react2.default.createElement(_.Select, {
      value: 2,
      disabled: true,
      options: [{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }],
      onChange: function onChange(event) {
        return console.log(event);
      }
    })
  );
});

(0, _react3.storiesOf)('Select', module).add('disabled option', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Select: disabled option' },
    _react2.default.createElement(_.Select, {
      placeholder: 'Select from the enabled options',
      options: [{ text: 'One', value: 1, disabled: true }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }],
      onChange: function onChange(event) {
        return console.log(event);
      }
    })
  );
});

(0, _react3.storiesOf)('Select', module).add('groups', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Select: groups' },
    _react2.default.createElement(_.Select, {
      placeholder: 'Groups',
      options: [{
        groupName: 'Group one',
        items: [{ text: 'One one', value: 11 }, { text: 'One two', value: 12 }, { text: 'One three', value: 13 }]
      }, {
        groupName: 'Group two',
        items: [{ text: 'Two one', value: 21 }, { text: 'Two two', value: 22 }, { text: 'Two three', value: 23 }]
      }]
    })
  );
});

(0, _react3.storiesOf)('Select', module).add('stressed', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Select: stressed - 56 characters with 300px width' },
    _react2.default.createElement(
      'div',
      { style: { width: 300 } },
      _react2.default.createElement(_.Select, {
        value: 1,
        options: [{
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          value: 1
        }, {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          value: 2
        }, {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          value: 3
        }],
        onChange: function onChange(event) {
          return console.log(event);
        }
      })
    )
  );
});