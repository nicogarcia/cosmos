'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _2 = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Prueba = function (_React$Component) {
  _inherits(Prueba, _React$Component);

  function Prueba(props) {
    _classCallCheck(this, Prueba);

    var _this = _possibleConstructorReturn(this, (Prueba.__proto__ || Object.getPrototypeOf(Prueba)).call(this, props));

    _this.state = { selectedTab: 0 };
    return _this;
  }

  _createClass(Prueba, [{
    key: 'changeSelected',
    value: function changeSelected(selectedTab) {
      this.setState({ selectedTab: selectedTab });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _2.Tabs,
        {
          selected: this.state.selectedTab,
          onSelect: function onSelect(newIndex) {
            return _this2.changeSelected(newIndex);
          },
          id: 'example'
        },
        _react2.default.createElement(
          _2.Tabs.Tab,
          { label: 'Tab 1' },
          'This is tab 1'
        ),
        _react2.default.createElement(
          _2.Tabs.Tab,
          { label: 'Tab 2' },
          'You can render anything you want here'
        ),
        _react2.default.createElement(
          _2.Tabs.Tab,
          { label: 'Tab 3' },
          'Look, third tab is selected by default!'
        )
      );
    }
  }]);

  return Prueba;
}(_react2.default.Component);

(0, _react3.storiesOf)('Tabs', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(Prueba, null)
  );
});

(0, _react3.storiesOf)('Tabs', module).add('default selected', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(
      _2.Tabs,
      { selected: 2, onSelect: function onSelect(_) {} },
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Tab 1' },
        'This is tab 1'
      ),
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Tab 2' },
        'You can render anything you want here'
      ),
      _react2.default.createElement(
        _2.Tabs.Tab,
        { selected: true, label: 'Tab 3' },
        'Look, third tab is selected by default!'
      )
    )
  );
});

(0, _react3.storiesOf)('Tabs', module).add('null tab in children', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(
      _2.Tabs,
      { selected: 0, onSelect: function onSelect(_) {} },
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Tab 1' },
        'This is tab 1'
      ),
      null,
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Tab 2' },
        'You can render anything you want here'
      )
    )
  );
});

(0, _react3.storiesOf)('Tabs', module).add('stressed', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'stressed - 9 tabs with 26 characters labels' },
    _react2.default.createElement(
      _2.Tabs,
      { selected: 0, onSelect: function onSelect(_) {} },
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Lorem ipsum dolor sit amet' },
        'This is tab 1'
      ),
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Lorem ipsum dolor sit amet' },
        'This is tab 2'
      ),
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Lorem ipsum dolor sit amet' },
        'This is tab 3'
      ),
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Lorem ipsum dolor sit amet' },
        'This is tab 4'
      ),
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Lorem ipsum dolor sit amet' },
        'This is tab 5'
      ),
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Lorem ipsum dolor sit amet' },
        'This is tab 6'
      ),
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Lorem ipsum dolor sit amet' },
        'This is tab 7'
      ),
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Lorem ipsum dolor sit amet' },
        'This is tab 8'
      ),
      _react2.default.createElement(
        _2.Tabs.Tab,
        { label: 'Lorem ipsum dolor sit amet' },
        'This is tab 9'
      )
    )
  );
});