'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  border-bottom: 1px solid ', ';\n'], ['\n  display: flex;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  &:not(:last-child) {\n    margin-right: ', ';\n  }\n'], ['\n  &:not(:last-child) {\n    margin-right: ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  /* Resets button browser styles */\n  background-color: transparent;\n  border: none;\n  padding: ', ' 0;\n  color: ', ';\n  cursor: pointer;\n  border-bottom: 1px solid transparent;\n  margin-bottom: -1px;\n  line-height: 1.3;\n\n  &:hover {\n    color: ', ';\n  }\n  &:focus {\n    outline: none;\n    border-bottom-color: ', ';\n  }\n  &:active {\n    border-bottom-color: ', ';\n  }\n  ', ';\n'], ['\n  /* Resets button browser styles */\n  background-color: transparent;\n  border: none;\n  padding: ', ' 0;\n  color: ', ';\n  cursor: pointer;\n  border-bottom: 1px solid transparent;\n  margin-bottom: -1px;\n  line-height: 1.3;\n\n  &:hover {\n    color: ', ';\n  }\n  &:focus {\n    outline: none;\n    border-bottom-color: ', ';\n  }\n  &:active {\n    border-bottom-color: ', ';\n  }\n  ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n      border-bottom: 1px solid ', ';\n      cursor: default;\n      color: ', ';\n      &:focus {\n        border-bottom: 1px solid ', ';\n      }\n    '], ['\n      border-bottom: 1px solid ', ';\n      cursor: default;\n      color: ', ';\n      &:focus {\n        border-bottom: 1px solid ', ';\n      }\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  padding-top: ', ';\n'], ['\n  padding-top: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

var _uniqueId = require('../../_helpers/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Used to keep selected tab on uncontrolled Tabs instances */
var tabStore = {};

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.tabs = _this.getTabsFromProps(props);
    _this.state = {
      selectedIndex: _this.getSelectedTabFromChildProps(_this.tabs)
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var cosmosKey = this.props.cosmosKey;

      if (!cosmosKey) return;

      var storedIndex = tabStore[cosmosKey];
      if (storedIndex && storedIndex !== this.state.selectedIndex) {
        this.setState({ selectedIndex: tabStore[cosmosKey] });
      }
    }
  }, {
    key: 'getTabsFromProps',
    value: function getTabsFromProps(props) {
      return _react2.default.Children.toArray(props.children);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.tabs = this.getTabsFromProps(newProps);
      this.setState({
        selectedIndex: this.getSelectedTabFromChildProps(this.tabs)
      });
    }
  }, {
    key: 'getSelectedTabFromChildProps',
    value: function getSelectedTabFromChildProps(tabs) {
      var selected = this.props.selected;

      if (selected) return selected;

      for (var index = 0; index < tabs.length; index++) {
        if (tabs[index].props.selected) return index;
      }
      // If none of the tabs were marked as selected, choose the first.
      return 0;
    }
  }, {
    key: 'changeTab',
    value: function changeTab(nextIndex) {
      var currentIndex = this.props.selected;

      if (currentIndex !== nextIndex) {
        this.props.onSelect(nextIndex);
      }
    }
  }, {
    key: 'handleTabLinkKeypress',
    value: function handleTabLinkKeypress(e, index, tabsId, tabsLength) {
      if (e.key === 'Enter' || e.key === ' ') {
        this.changeTab(index);
        return;
      }

      if (!(e.key === 'ArrowLeft' || e.key === 'ArrowRight')) return;

      var firstTabIndex = 0;
      var lastTabIndex = tabsLength - 1;

      var nextPosition = e.key === 'ArrowLeft' ? index - 1 : index + 1;
      if (nextPosition > lastTabIndex) nextPosition = firstTabIndex;
      if (nextPosition < firstTabIndex) nextPosition = lastTabIndex;

      this.changeFocusedTab(tabsId, nextPosition);
    }
  }, {
    key: 'changeFocusedTab',
    value: function changeFocusedTab(tabsId, index) {
      var tab = document.querySelector('#' + tabsId + '-' + index);
      tab.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var uniqueTabPrefix = 'tabs' + this.props.id;

      var _props = this.props,
          selectedIndex = _props.selected,
          onSelect = _props.onSelect,
          restOfTheProps = _objectWithoutProperties(_props, ['selected', 'onSelect']);

      return _react2.default.createElement(
        Tabs.Element,
        _extends({}, (0, _automationAttribute2.default)('tabs'), restOfTheProps),
        _react2.default.createElement(
          Tabs.TabList,
          _extends({ role: 'tablist' }, (0, _automationAttribute2.default)('tabs.list')),
          this.tabs.map(function (tab, index) {
            var id = uniqueTabPrefix + '-' + index;
            var tabIsSelected = selectedIndex === index;

            return _react2.default.createElement(
              Tabs.TabListItem,
              _extends({ role: 'presentation', key: id }, (0, _automationAttribute2.default)('tabs.list-item')),
              _react2.default.createElement(
                Tabs.TabLink,
                _extends({
                  type: 'button',
                  role: 'tab',
                  id: id,
                  tabIndex: tabIsSelected ? '0' : '-1',
                  'aria-selected': tabIsSelected,
                  'aria-controls': id + '-tab',
                  onClick: function onClick() {
                    return _this2.changeTab(index);
                  },
                  onKeyDown: function onKeyDown(e) {
                    return _this2.handleTabLinkKeypress(e, index, uniqueTabPrefix, _this2.tabs.length);
                  }
                }, (0, _automationAttribute2.default)('tabs.link')),
                tab.props.label
              )
            );
          })
        ),
        this.tabs[selectedIndex] && _react2.default.cloneElement(this.tabs[selectedIndex], _extends({
          role: 'tabpanel',
          id: uniqueTabPrefix + '-' + selectedIndex + '-tab',
          'aria-labelledby': uniqueTabPrefix + '-' + selectedIndex
        }, (0, _automationAttribute2.default)('tabs.item')))
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.Element = _styled2.default.div(_templateObject, _containerStyles2.default);
Tabs.TabList = _styled2.default.ul(_templateObject2, _cosmosTokens.colors.base.grayLight);

Tabs.TabListItem = _styled2.default.li(_templateObject3, _cosmosTokens.spacing.large);

Tabs.TabLink = _styled2.default.button(_templateObject4, _cosmosTokens.spacing.small, _cosmosTokens.colors.link.default, function (props) {
  return !props['aria-selected'] ? _cosmosTokens.colors.link.defaultHover : _cosmosTokens.colors.text.default;
}, _cosmosTokens.colors.link.default, _cosmosTokens.colors.base.text, function (props) {
  return props['aria-selected'] && (0, _styled.css)(_templateObject5, _cosmosTokens.colors.base.text, _cosmosTokens.colors.text.default, _cosmosTokens.colors.base.text);
});

Tabs.TabContent = _styled2.default.div(_templateObject6, _cosmosTokens.spacing.large);

Tabs.Tab = Tabs.TabContent;

Tabs.propTypes = {
  /** Children should be an array of Tabs.Tab */
  children: _propTypes2.default.node.isRequired,
  /** Selected should be the index of the desired selected tab */
  selected: _propTypes2.default.number.isRequired,
  /** onSelect will be called with the new index when a new tab is selected by the user */
  onSelect: _propTypes2.default.func.isRequired,
  /** Unique identifier for each tab list */
  id: _propTypes2.default.string
};

Tabs.defaultProps = {
  children: [],
  id: (0, _uniqueId2.default)()
};

exports.default = Tabs;