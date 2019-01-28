'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

var _tokens = require('../../tokens');

var _icons = require('./icons.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Icon', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Icons' },
    _react2.default.createElement(
      _storyHelpers.Stack,
      null,
      _react2.default.createElement(_.Icon, { name: 'analytics' }),
      _react2.default.createElement(_.Icon, { name: 'anomaly-detection' }),
      _react2.default.createElement(_.Icon, { name: 'apis' }),
      _react2.default.createElement(_.Icon, { name: 'arrow-left' }),
      _react2.default.createElement(_.Icon, { name: 'arrow-right' }),
      _react2.default.createElement(_.Icon, { name: 'authorization' }),
      _react2.default.createElement(_.Icon, { name: 'check' })
    )
  );
});

(0, _react3.storiesOf)('Icon', module).add('size', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Size' },
    _react2.default.createElement(
      _storyHelpers.Stack,
      null,
      _react2.default.createElement(_.Icon, { name: 'analytics', size: _tokens.spacing.xsmall }),
      _react2.default.createElement(_.Icon, { name: 'analytics', size: _tokens.spacing.small }),
      _react2.default.createElement(_.Icon, { name: 'analytics', size: _tokens.spacing.medium }),
      _react2.default.createElement(_.Icon, { name: 'analytics', size: _tokens.spacing.large }),
      _react2.default.createElement(_.Icon, { name: 'analytics', size: _tokens.spacing.xlarge }),
      _react2.default.createElement(_.Icon, { name: 'analytics', size: _tokens.spacing.xxlarge })
    )
  );
});

(0, _react3.storiesOf)('Icon', module).add('color', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Size' },
    _react2.default.createElement(
      _storyHelpers.Stack,
      null,
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'white' }),
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'black' }),
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'gray' }),
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'blue' }),
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'orange' }),
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'green' }),
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'red' })
    )
  );
});

(0, _react3.storiesOf)('Icon', module).add('dark-background', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Dark background', background: 'dark' },
    _react2.default.createElement(
      _storyHelpers.Stack,
      null,
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'white' }),
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'black' }),
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'gray' }),
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'blue' }),
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'orange' }),
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'green' }),
      _react2.default.createElement(_.Icon, { name: 'analytics', color: 'red' })
    )
  );
});

(0, _react3.storiesOf)('Icon', module).add('named icons', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    null,
    _react2.default.createElement(
      'div',
      null,
      Object.keys(_icons.icons).map(function (name) {
        return _react2.default.createElement(
          _storyHelpers.IconStoryBox,
          { key: name },
          _react2.default.createElement(_.Icon, { name: name, size: 40 }),
          _react2.default.createElement(
            'p',
            null,
            name
          )
        );
      })
    )
  );
});