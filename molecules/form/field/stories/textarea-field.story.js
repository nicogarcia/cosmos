'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../../../_helpers/story-helpers');

var _ = require('../../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form', module).add('textarea field', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'textarea field' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Field,
        { label: 'Field label' },
        _react2.default.createElement(_.TextArea, { type: 'text', placeholder: 'Enter something' })
      )
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('textarea field + error', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'textarea field + error' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Field,
        { label: 'Field label', error: 'Everything is broken' },
        _react2.default.createElement(_.TextArea, { type: 'text', placeholder: 'Enter something', hasError: true })
      )
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('textarea-field old API', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'old API' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(_.Form.TextArea, {
        label: 'Field label',
        error: 'Everything is broken',
        placeholder: 'Enter something'
      })
    )
  );
});