'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Breadcrumb', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(
      _.Breadcrumb,
      null,
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/home' },
        'Home'
      ),
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/parent' },
        'Parent'
      ),
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/parent/child' },
        'Child'
      )
    )
  );
});

(0, _react3.storiesOf)('Breadcrumb', module).add('with icon', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'with icon' },
    _react2.default.createElement(
      _.Breadcrumb,
      null,
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/home', icon: 'home-fill' },
        'Home'
      ),
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/parent' },
        'Parent'
      ),
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/parent/child' },
        'Child'
      )
    )
  );
});

(0, _react3.storiesOf)('Breadcrumb', module).add('single link', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'single link' },
    _react2.default.createElement(
      _.Breadcrumb,
      null,
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/home', icon: 'arrow-left-fill' },
        'Back to applications'
      )
    )
  );
});

(0, _react3.storiesOf)('Breadcrumb', module).add('stressed', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'stressed - 56 characters per link' },
    _react2.default.createElement(
      _.Breadcrumb,
      null,
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/home' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/parent' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/parent/child' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/parent/child' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/parent/child' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/parent/child' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/parent/child' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/parent/child' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      _react2.default.createElement(
        _.Breadcrumb.Link,
        { href: '/parent/child' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
    )
  );
});