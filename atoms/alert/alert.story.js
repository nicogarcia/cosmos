'use strict';

var _templateObject = _taggedTemplateLiteral(['\n  ', ' {\n    margin-bottom: 22px;\n  }\n'], ['\n  ', ' {\n    margin-bottom: 22px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Example = (0, _styled2.default)(_storyHelpers.Example)(_templateObject, _.Alert.Element);

var types = ['default', 'information', 'success', 'warning', 'danger'];

(0, _react3.storiesOf)('Alert', module).add('default', function () {
  return _react2.default.createElement(
    Example,
    null,
    types.map(function (type) {
      return _react2.default.createElement(
        _.Alert,
        { type: type, key: type },
        'This is the ',
        _react2.default.createElement(
          _.Text,
          { type: 'strong' },
          'alert'
        ),
        ' ',
        _react2.default.createElement(
          _.Link,
          { href: '#' },
          'content'
        ),
        '.'
      );
    })
  );
});

(0, _react3.storiesOf)('Alert', module).add('with string text', function () {
  return _react2.default.createElement(
    Example,
    null,
    types.map(function (type) {
      return _react2.default.createElement(_.Alert, { type: type, key: type, text: 'This is the alert content' });
    })
  );
});

(0, _react3.storiesOf)('Alert', module).add('with title', function () {
  return _react2.default.createElement(
    Example,
    null,
    types.map(function (type) {
      return _react2.default.createElement(
        _.Alert,
        { type: type, title: 'A title', key: type },
        _react2.default.createElement(
          'span',
          null,
          'This is the ',
          _react2.default.createElement(
            _.Text,
            { type: 'strong' },
            'alert'
          ),
          ' ',
          _react2.default.createElement(
            _.Link,
            { href: '#' },
            'content'
          ),
          '.'
        )
      );
    })
  );
});

(0, _react3.storiesOf)('Alert', module).add('with title and children', function () {
  return _react2.default.createElement(
    Example,
    null,
    types.map(function (type) {
      return _react2.default.createElement(
        _.Alert,
        { type: type, title: 'A title', key: type },
        _react2.default.createElement(
          'span',
          null,
          'This is the alert content'
        )
      );
    })
  );
});

(0, _react3.storiesOf)('Alert', module).add('with title and link', function () {
  return _react2.default.createElement(
    Example,
    null,
    types.map(function (type) {
      return _react2.default.createElement(
        _.Alert,
        { type: type, title: 'A title', link: '/test', key: type },
        'This is the ',
        _react2.default.createElement(
          _.Text,
          { type: 'strong' },
          'alert'
        ),
        ' ',
        _react2.default.createElement(
          _.Link,
          { href: '#' },
          'content'
        ),
        '.'
      );
    })
  );
});

(0, _react3.storiesOf)('Alert', module).add('with icon', function () {
  return _react2.default.createElement(
    Example,
    null,
    types.map(function (type) {
      return _react2.default.createElement(
        _.Alert,
        { type: type, title: 'A title', link: '/test', icon: 'hourglass', key: type },
        'This is the ',
        _react2.default.createElement(
          _.Text,
          { type: 'strong' },
          'alert'
        )
      );
    })
  );
});

(0, _react3.storiesOf)('Alert', module).add('stressed content', function () {
  return _react2.default.createElement(
    Example,
    null,
    types.map(function (type) {
      return _react2.default.createElement(
        _.Alert,
        { type: type, title: 'A title', link: '/test', key: type },
        'This is the alert content. This is the alert content. This is the alert content. This is the alert content. This is the alert content. This is the alert content. This is the alert content. This is the alert content. This is the alert content.'
      );
    })
  );
});

(0, _react3.storiesOf)('Alert', module).add('with no children/text', function () {
  return _react2.default.createElement(
    Example,
    null,
    types.map(function (type) {
      return _react2.default.createElement(_.Alert, { type: type, title: 'A title', link: '/test', key: type });
    })
  );
});