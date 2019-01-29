'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Paragraph', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Paragraph' },
    _react2.default.createElement(
      _.Paragraph,
      null,
      'Application metadata are custom string keys and values (max 255 characters each), set on a per application basis.'
    ),
    _react2.default.createElement(
      _.Paragraph,
      null,
      'Using Password or MFA grant types with public clients is not recommended. To use the Client Credentials grant you have to set a Token Endpoint Auth Method other than "none". See our documentation for more information.'
    )
  );
});

(0, _react3.storiesOf)('Paragraph', module).add('with styles', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Paragraph with styles' },
    _react2.default.createElement(
      _.Paragraph,
      null,
      'Now that you have an ',
      _react2.default.createElement(
        _.Link,
        { url: 'https://auth0.com' },
        'account'
      ),
      ', we need to know about your app(s) that will be using our services. To that end, you must register each application. We use the term ',
      _react2.default.createElement(
        'strong',
        null,
        'application'
      ),
      ' to refer to an application (like',
      ' ',
      _react2.default.createElement(
        _.Link,
        { url: 'https://auth0.com' },
        'OAuth 2.0'
      ),
      ' does).'
    ),
    _react2.default.createElement(
      _.Paragraph,
      null,
      'When you create an application in the Dashboard, the first piece of information we ask for is its type. This can be one of the following. Each application is assigned a',
      ' ',
      _react2.default.createElement(
        'strong',
        null,
        'Client ID'
      ),
      ' upon creation. This is an alphanumeric string and it\'s the unique identifier for your application (such as ',
      _react2.default.createElement(
        _.Code,
        null,
        'q8fij2iug0CmgPLfTfG1tZGdTQyGaTUA'
      ),
      '). It cannot be modified and you will be using it in your application\'s code when you call',
      ' ',
      _react2.default.createElement(
        _.Link,
        { url: 'https://auth0.com' },
        'Auth0 APIs'
      ),
      '.'
    ),
    _react2.default.createElement(
      _.Paragraph,
      null,
      'Another important piece of information is the ',
      _react2.default.createElement(
        'strong',
        null,
        'Client'
      ),
      ' Secret. Think of it as your application\'s password which must be kept confidential at all times. If anyone gains access to your ',
      _react2.default.createElement(
        'strong',
        null,
        'Client Secret'
      ),
      ' they can',
      ' ',
      _react2.default.createElement(
        _.Link,
        { url: 'https://auth0.com' },
        'impersonate your application'
      ),
      ' and access protected resources. In our example, ',
      _react2.default.createElement(
        _.Code,
        null,
        'ExampleCo'
      ),
      ' has two apps: a web app (running on a server) and a mobile app. Hence, they would create two applications: one of type',
      ' ',
      _react2.default.createElement(
        _.Code,
        null,
        'Regular Web Applications'
      ),
      ', and one of type ',
      _react2.default.createElement(
        _.Code,
        null,
        'Native'
      ),
      '.'
    )
  );
});