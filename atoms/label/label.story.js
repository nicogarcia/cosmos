'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Label', module).add('appearances', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'appearances' },
    _react2.default.createElement(
      _storyHelpers.Stack,
      null,
      _react2.default.createElement(
        _.Label,
        { appearance: 'default' },
        'Default'
      ),
      _react2.default.createElement(
        _.Label,
        { appearance: 'information' },
        'Information'
      ),
      _react2.default.createElement(
        _.Label,
        { appearance: 'success' },
        'Success'
      ),
      _react2.default.createElement(
        _.Label,
        { appearance: 'warning' },
        'Warning'
      ),
      _react2.default.createElement(
        _.Label,
        { appearance: 'danger' },
        'Danger'
      )
    )
  );
});

(0, _react3.storiesOf)('Label', module).add('no appearance specified', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'no appearance specified' },
    _react2.default.createElement(
      _.Label,
      null,
      'Example'
    )
  );
});

(0, _react3.storiesOf)('Label', module).add('stressed', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'stressed - 119 characters' },
    _react2.default.createElement(
      _storyHelpers.Stack,
      null,
      _react2.default.createElement(
        _.Label,
        { appearance: 'default' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      ),
      _react2.default.createElement(
        _.Label,
        { appearance: 'information' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      ),
      _react2.default.createElement(
        _.Label,
        { appearance: 'success' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      ),
      _react2.default.createElement(
        _.Label,
        { appearance: 'warning' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      ),
      _react2.default.createElement(
        _.Label,
        { appearance: 'danger' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      )
    )
  );
});