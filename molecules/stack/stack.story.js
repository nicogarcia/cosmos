'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = function Box() {
  return _react2.default.createElement('div', { style: { height: '50px', width: '50px', background: '#EEE', margin: '5px' } });
};

(0, _react3.storiesOf)('Stack', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(
      _.Stack,
      { align: 'left' },
      _react2.default.createElement(Box, null),
      _react2.default.createElement(Box, null),
      _react2.default.createElement(Box, null)
    )
  );
});

(0, _react3.storiesOf)('Stack', module).add('right', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'right' },
    _react2.default.createElement(
      _.Stack,
      { align: 'right' },
      _react2.default.createElement(Box, null),
      _react2.default.createElement(Box, null),
      _react2.default.createElement(Box, null)
    )
  );
});

(0, _react3.storiesOf)('Stack', module).add('widths', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'widths' },
    _react2.default.createElement(
      _.Stack,
      { widths: [10, 30, 30, 30] },
      _react2.default.createElement(Box, null),
      _react2.default.createElement(Box, null),
      _react2.default.createElement(Box, null),
      _react2.default.createElement(Box, null)
    )
  );
});

(0, _react3.storiesOf)('Stack', module).add('stressed', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'stressed - 56 characters per item' },
    _react2.default.createElement(
      _.Stack,
      { align: 'left' },
      _react2.default.createElement(
        _.Paragraph,
        { style: { border: '1px solid black' } },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Paragraph,
        { style: { border: '1px solid black' } },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Paragraph,
        { style: { border: '1px solid black' } },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Paragraph,
        { style: { border: '1px solid black' } },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Paragraph,
        { style: { border: '1px solid black' } },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Paragraph,
        { style: { border: '1px solid black' } },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
    )
  );
});