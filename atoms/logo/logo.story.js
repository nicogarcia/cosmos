'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
<div> elements has been added to each <Logo /> instance to make them "display: block;"
  */

(0, _react3.storiesOf)('Logo', module).add('default', function () {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Logo \u2013 tiny' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Logo, { size: 'tiny' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Logo, { size: 'tiny', color: 'dark' })
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Logo \u2013 small' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Logo, { size: 'small' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Logo, { size: 'small', color: 'dark' })
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Logo \u2013 default' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Logo, { size: 'default' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Logo, { size: 'default', color: 'dark' })
      )
    )
  );
});

(0, _react3.storiesOf)('Logo', module).add('dark background', function () {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Logo \u2013 tiny', background: 'dark' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Logo, { size: 'tiny' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Logo, { size: 'tiny', color: 'light' })
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Logo \u2013 small', background: 'dark' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Logo, { size: 'small' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Logo, { size: 'small', color: 'light' })
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Logo \u2013 default', background: 'dark' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Logo, { size: 'default' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Logo, { size: 'default', color: 'light' })
      )
    )
  );
});