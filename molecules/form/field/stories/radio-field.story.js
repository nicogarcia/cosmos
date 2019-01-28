'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../../../_helpers/story-helpers');

var _ = require('../../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form', module).add('radio field', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'radio field' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Radio,
        { name: 'example1', selected: 'one', label: 'Form label' },
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'one' },
          'One'
        ),
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'two' },
          'Two'
        ),
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'three' },
          'Three'
        )
      )
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('radio field horizontal', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'radio field horizontal' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Radio,
        { name: 'example1', selected: 'one', align: 'horizontal', label: 'Form label' },
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'one' },
          'One'
        ),
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'two' },
          'Two'
        ),
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'three' },
          'Three'
        )
      )
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('radio field + helper text', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'radio field' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Radio,
        {
          name: 'example1',
          selected: 'one',
          helpText: 'Additional text to guide the user.',
          label: 'Form label'
        },
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'one' },
          'One'
        ),
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'two' },
          'Two'
        ),
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'three' },
          'Three'
        )
      )
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('radio field + error', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'radio field + error' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Radio,
        { name: 'example1', selected: '', error: 'Everything is broken', label: 'Form label' },
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'one' },
          'One'
        ),
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'two' },
          'Two'
        ),
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'three' },
          'Three'
        )
      )
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('radio field + error + helper text', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'radio field + error' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Radio,
        {
          label: 'Form label',
          name: 'example1',
          selected: '',
          error: 'Everything is broken',
          helpText: 'Additional text to guide the user.'
        },
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'one' },
          'One'
        ),
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'two' },
          'Two'
        ),
        _react2.default.createElement(
          _.Form.Radio.Option,
          { value: 'three' },
          'Three'
        )
      )
    )
  );
});