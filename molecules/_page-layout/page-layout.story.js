'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _storyLayoutPlaceholder = require('../../_helpers/story-layout-placeholder');

var _storyLayoutPlaceholder2 = _interopRequireDefault(_storyLayoutPlaceholder);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Page Layout', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(
      _.PageLayout,
      null,
      _react2.default.createElement(
        _.PageLayout.Header,
        (0, _automationAttribute2.default)('page-header'),
        _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
      ),
      _react2.default.createElement(
        _.PageLayout.Content,
        (0, _automationAttribute2.default)('page-content'),
        _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
      )
    )
  );
});