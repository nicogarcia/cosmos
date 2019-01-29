'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('List', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(
      _.List,
      { label: 'Short List' },
      _react2.default.createElement(
        'div',
        null,
        'one'
      ),
      _react2.default.createElement(
        'div',
        null,
        'two'
      ),
      _react2.default.createElement(
        'div',
        null,
        'three'
      )
    )
  );
});

(0, _react3.storiesOf)('List', module).add('with stack', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'with stack' },
    _react2.default.createElement(
      _.List,
      { label: 'Social' },
      _react2.default.createElement(
        _storyHelpers.Stack,
        null,
        _react2.default.createElement(
          'div',
          null,
          'github'
        ),
        _react2.default.createElement(
          'div',
          null,
          'GitHub'
        ),
        _react2.default.createElement(_.Switch, { on: true })
      ),
      _react2.default.createElement(
        _storyHelpers.Stack,
        null,
        _react2.default.createElement(
          'div',
          null,
          'google-oauth2'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Google'
        ),
        _react2.default.createElement(_.Switch, null)
      )
    )
  );
});

(0, _react3.storiesOf)('List', module).add('stressed', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'stressed - 739 characters per row' },
    _react2.default.createElement(
      _.List,
      { label: 'Short List' },
      _react2.default.createElement(
        'div',
        null,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim. Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim. Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante, id dapibus felis fermentum eget.'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim. Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim. Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante, id dapibus felis fermentum eget.'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim. Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim. Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante, id dapibus felis fermentum eget.'
      )
    )
  );
});