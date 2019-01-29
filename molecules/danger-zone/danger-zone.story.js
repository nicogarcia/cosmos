'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('DangerZone', module).add('single', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: '1 element' },
    _react2.default.createElement(_.DangerZone, {
      items: [{
        title: 'Delete this application',
        description: 'All your projects using this application will stop working.',
        action: {
          label: 'Delete Application',
          onClick: function onClick() {}
        }
      }]
    })
  );
});

(0, _react3.storiesOf)('DangerZone', module).add('multiple', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: '2 elements' },
    _react2.default.createElement(_.DangerZone, {
      items: [{
        title: 'Delete this application',
        description: 'All your projects using this application will stop working.',
        action: {
          label: 'Delete application',
          onClick: function onClick() {}
        }
      }, {
        title: 'Rotate secret',
        description: 'All authorized applications will need to be updated with the new client secret.',
        action: {
          label: 'Rotate',
          onClick: function onClick() {}
        }
      }]
    })
  );
});

(0, _react3.storiesOf)('DangerZone', module).add('required', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Required props' },
    _react2.default.createElement(_.DangerZone, {
      items: [{
        title: 'Delete this client',
        action: {
          label: 'Delete',
          onClick: function onClick() {}
        }
      }]
    })
  );
});

(0, _react3.storiesOf)('DangerZone', module).add('stress', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Stress testing' },
    _react2.default.createElement(_.DangerZone, {
      items: [{
        title: 'Delete this application',
        description: 'All your projects using this application will stop. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        action: {
          label: 'Delete application',
          onClick: function onClick() {}
        }
      }, {
        title: 'Destroy this application',
        description: 'All your projects using this application will stop.',
        action: {
          label: 'Delete button has a very long text',
          onClick: function onClick() {}
        }
      }, {
        title: 'Is this a competition?',
        description: 'All your projects using this application will stop. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        action: {
          label: 'Delete button has a very long text',
          onClick: function onClick() {}
        }
      }]
    })
  );
});