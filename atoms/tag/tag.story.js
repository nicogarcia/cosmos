'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Tag', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Tag' },
    _react2.default.createElement(
      _.Tag,
      { onClick: function onClick(evt) {
          return false;
        }, onRemove: function onRemove(evt) {
          return false;
        } },
      'Example'
    )
  );
});

(0, _react3.storiesOf)('Tag', module).add('without remove callback', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Tag' },
    _react2.default.createElement(
      _.Tag,
      { onClick: function onClick(evt) {
          return false;
        } },
      'Example'
    )
  );
});

(0, _react3.storiesOf)('Tag', module).add('tag group', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Tag' },
    _react2.default.createElement(
      _.Tag.Group,
      null,
      _react2.default.createElement(
        _.Tag,
        { onRemove: function onRemove(evt) {
            return false;
          } },
        'One'
      ),
      _react2.default.createElement(
        _.Tag,
        { onRemove: function onRemove(evt) {
            return false;
          } },
        'Two'
      ),
      _react2.default.createElement(
        _.Tag,
        { onRemove: function onRemove(evt) {
            return false;
          } },
        'Three'
      ),
      _react2.default.createElement(
        _.Tag,
        { onRemove: function onRemove(evt) {
            return false;
          } },
        'Four'
      ),
      _react2.default.createElement(
        _.Tag,
        { onRemove: function onRemove(evt) {
            return false;
          } },
        'Five'
      )
    )
  );
});

(0, _react3.storiesOf)('Tag', module).add('stressed', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'stressed - 119 characters per tag' },
    _react2.default.createElement(
      _.Tag.Group,
      null,
      _react2.default.createElement(
        _.Tag,
        { onRemove: function onRemove(evt) {
            return false;
          } },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      ),
      _react2.default.createElement(
        _.Tag,
        { onRemove: function onRemove(evt) {
            return false;
          } },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      ),
      _react2.default.createElement(
        _.Tag,
        { onRemove: function onRemove(evt) {
            return false;
          } },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      ),
      _react2.default.createElement(
        _.Tag,
        { onRemove: function onRemove(evt) {
            return false;
          } },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      ),
      _react2.default.createElement(
        _.Tag,
        { onRemove: function onRemove(evt) {
            return false;
          } },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      )
    )
  );
});