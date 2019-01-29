'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Page Header', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_.PageHeader, {
      title: 'Clients',
      description: _react2.default.createElement(
        'span',
        null,
        'Setup a mobile, web or ',
        _react2.default.createElement(
          _.Link,
          { href: 'https://auth0.com' },
          'IoT application'
        ),
        ' to',
        ' ',
        _react2.default.createElement(
          _.Text,
          { type: 'strong' },
          'use Auth0 for Authentication'
        ),
        '.'
      ),
      learnMore: '/link',
      primaryAction: _react2.default.createElement(
        _.Button,
        { icon: 'plus', onClick: function onClick() {} },
        'Create Client'
      ),
      secondaryAction: _react2.default.createElement(
        _.Button,
        { icon: 'play-circle', onClick: function onClick() {} },
        'Tutorial'
      )
    })
  );
});

(0, _react3.storiesOf)('Page Header', module).add('no actions', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'No actions' },
    _react2.default.createElement(_.PageHeader, {
      title: 'Clients',
      description: _react2.default.createElement(
        'span',
        null,
        'Setup a mobile, web or IoT application to',
        ' ',
        _react2.default.createElement(
          _.Text,
          { type: 'strong' },
          'use Auth0 for Authentication'
        ),
        '.'
      )
    })
  );
});

(0, _react3.storiesOf)('Page Header', module).add('no description', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'No description' },
    _react2.default.createElement(_.PageHeader, { title: 'Clients' })
  );
});

(0, _react3.storiesOf)('Page Header', module).add('only primary action', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_.PageHeader, {
      title: 'Clients',
      description: _react2.default.createElement(
        'span',
        null,
        'Setup a mobile, web or IoT application to',
        ' ',
        _react2.default.createElement(
          _.Text,
          { type: 'strong' },
          'use Auth0 for Authentication'
        ),
        '.'
      ),
      learnMore: '/link',
      primaryAction: _react2.default.createElement(
        _.Button,
        { icon: 'plus', onClick: function onClick() {} },
        'Create Client'
      )
    })
  );
});

(0, _react3.storiesOf)('Page Header', module).add('only secondary action', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_.PageHeader, {
      title: 'Clients',
      description: _react2.default.createElement(
        'span',
        null,
        'Setup a mobile, web or IoT application to',
        ' ',
        _react2.default.createElement(
          _.Text,
          { type: 'strong' },
          'use Auth0 for Authentication'
        ),
        '.'
      ),
      learnMore: '/link',
      secondaryAction: _react2.default.createElement(
        _.Button,
        { icon: 'play-circle', onClick: function onClick() {} },
        'Tutorial'
      )
    })
  );
});

(0, _react3.storiesOf)('Page Header', module).add('only primary action with deprecated API', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_.PageHeader, {
      title: 'Clients',
      description: {
        text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
        learnMore: '/clients'
      },
      primaryAction: _react2.default.createElement(
        _.Button,
        { icon: 'plus', onClick: function onClick() {} },
        'Create Client'
      )
    })
  );
});

(0, _react3.storiesOf)('Page Header', module).add('only secondary action with deprecated API', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(
      _.PageHeader,
      {
        title: 'Clients',
        description: {
          text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
          learnMore: '/clients'
        },
        secondaryAction: _react2.default.createElement(
          _.Button,
          { icon: 'play-circle', onClick: function onClick() {} },
          'Tutorial'
        )
      },
      'Setup a mobile, web or IoT application to',
      ' ',
      _react2.default.createElement(
        _.Text,
        { type: 'strong' },
        'use Auth0 for Authentication'
      ),
      '.'
    )
  );
});