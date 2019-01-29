'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid ', ';\n  padding: ', ' ', ';\n  cursor: ', ';\n\n  &:hover {\n    background: ', ';\n  }\n\n  &.cosmos-dragging {\n    background-color: ', ';\n    opacity: 0.9;\n    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);\n  }\n\n  > *:not(:last-child) {\n    margin-right: ', ';\n  }\n\n  /* Disable pointer events on non-dragging elements */\n  /* to avoid unexpected hover behaviors. */\n  ', ';\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid ', ';\n  padding: ', ' ', ';\n  cursor: ', ';\n\n  &:hover {\n    background: ', ';\n  }\n\n  &.cosmos-dragging {\n    background-color: ', ';\n    opacity: 0.9;\n    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);\n  }\n\n  > *:not(:last-child) {\n    margin-right: ', ';\n  }\n\n  /* Disable pointer events on non-dragging elements */\n  /* to avoid unexpected hover behaviors. */\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n          &:not(.cosmos-dragging) {\n            pointer-events: none;\n          }\n        '], ['\n          &:not(.cosmos-dragging) {\n            pointer-events: none;\n          }\n        ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  flex: 1;\n  display: flex;\n  align-items: center;\n  word-break: break-all;\n\n  ', ' {\n    /* This is a magic number */\n    margin-right: 12px;\n  }\n'], ['\n  flex: 1;\n  display: flex;\n  align-items: center;\n  word-break: break-all;\n\n  ', ' {\n    /* This is a magic number */\n    margin-right: 12px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  flex: 1;\n  flex-basis: ', ';\n\n  /* This is not mobile first, but it avoids negation of margin */\n  @media screen and (max-width: 768px) {\n    flex: 1 0 100%;\n    order: 1;\n    margin-top: ', ';\n  }\n'], ['\n  flex: 1;\n  flex-basis: ', ';\n\n  /* This is not mobile first, but it avoids negation of margin */\n  @media screen and (max-width: 768px) {\n    flex: 1 0 100%;\n    order: 1;\n    margin-top: ', ';\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral([''], ['']),
    _templateObject6 = _taggedTemplateLiteral(['\n  margin-top: ', ';\n  display: block;\n'], ['\n  margin-top: ', ';\n  display: block;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _ = require('../../..');

var _avatar = require('../../../atoms/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _text = require('../../../atoms/text');

var _actionShape = require('../../../_helpers/action-shape');

var _icon = require('../../../atoms/icon');

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _automationAttribute = require('../../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _actionBuilder = require('../action-builder');

var _widthStringPropValidator = require('../../../_helpers/width-string-prop-validator');

var _widthStringPropValidator2 = _interopRequireDefault(_widthStringPropValidator);

var _customValidations = require('../../../_helpers/custom-validations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var itemFocusOutline = '2px';

/**
 * Builds the button from the action or
 * adds the key to the action if it's a raw button.
 * @param {ResourceList.Item.Props} item
 * @param {ResourceList.Item.Action} action
 * @param {number} key
 */
var resolveAction = function resolveAction(item, action, key) {
  if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object' && !_react2.default.isValidElement(action)) {
    return (0, _actionBuilder.buttonBuilder)((0, _actionBuilder.actionToButtonProps)(_extends({}, action, { key: key }), item));
  }

  // Patch action's onClick handler to include the item
  var handler = action.props.onClick;

  var onClick = function onClick(evt) {
    evt.stopPropagation();
    handler(evt, item);
  };

  return _react2.default.cloneElement(action, { key: key, onClick: onClick });
};

/**
 * Maps each action to a button if applicable
 * @param {ResourceList.Item.Action[]} actions
 * @param {ResourceList.Item.Props} item
 */
var resolveActions = function resolveActions(actions, item) {
  return actions.map(resolveAction.bind(undefined, item));
};

var ListItem = function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

    _this.dragHandler = _react2.default.createRef();
    return _this;
  }

  _createClass(ListItem, [{
    key: 'renderSortingHandler',
    value: function renderSortingHandler() {
      if (this.props.reorderHandle) {
        var SortableHandler = this.props.reorderHandle;

        return _react2.default.createElement(SortableHandler, { ref: this.dragHandler });
      }

      return null;
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      if (this.props.image) {
        // TODO: We might want a way to control the type of the avatar, but we don't
        // want to leak every prop from Avatar into the ListItem...
        return _react2.default.createElement(_avatar2.default, { type: 'resource', image: this.props.image, size: 'large' });
      } else if (this.props.icon) {
        return _react2.default.createElement(_avatar2.default, { type: 'resource', icon: this.props.icon, size: 'large' });
      }

      return null;
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      if (this.props.title) {
        if (this.props.href) {
          return _react2.default.createElement(
            _.Link,
            { href: this.props.href },
            this.props.title
          );
        } else {
          return this.props.title;
        }
      }

      return null;
    }
  }, {
    key: 'renderSubtitle',
    value: function renderSubtitle() {
      return this.props.subtitle ? _react2.default.createElement(
        ListItem.Subtitle,
        null,
        this.props.subtitle
      ) : null;
    }
  }, {
    key: 'renderActions',
    value: function renderActions() {
      return this.props.actions ? _react2.default.createElement(
        _.ButtonGroup,
        { align: 'right' },
        resolveActions(this.props.actions, this.props.item)
      ) : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var callHandler = function callHandler(handler) {
        return function (evt) {
          return handler(evt, props.item);
        };
      };
      return _react2.default.createElement(
        ListItem.Element,
        _extends({}, props, {
          draggingMode: props.draggingMode,
          onClick: props.onClick ? callHandler(props.onClick) : null
        }, (0, _automationAttribute2.default)('resource-list.item'), props),
        this.renderSortingHandler(),
        _react2.default.createElement(
          ListItem.Header,
          null,
          this.renderImage(),
          _react2.default.createElement(
            'div',
            null,
            this.renderTitle(),
            this.renderSubtitle()
          )
        ),
        props.children && _react2.default.createElement(
          ListItem.Body,
          props,
          props.children
        ),
        props.actions && _react2.default.createElement(
          ListItem.Footer,
          null,
          this.renderActions()
        )
      );
    }
  }]);

  return ListItem;
}(_react2.default.Component);

ListItem.Element = _styled2.default.li(_templateObject, _cosmosTokens.colors.list.borderColor, _cosmosTokens.spacing.small, _cosmosTokens.spacing.xsmall, function (props) {
  return props.onClick ? 'pointer' : 'inherit';
}, _cosmosTokens.colors.list.backgroundHover, _cosmosTokens.colors.base.white, _cosmosTokens.spacing.small, function (props) {
  return props.draggingMode ? (0, _styled.css)(_templateObject2) : '';
});

ListItem.Header = _styled2.default.div(_templateObject3, _avatar.StyledAvatar);

ListItem.Body = _styled2.default.div(_templateObject4, function (props) {
  return props.bodyWidth;
}, _cosmosTokens.spacing.small);

ListItem.Footer = _styled2.default.div(_templateObject5);

ListItem.Subtitle = (0, _styled2.default)(_text.StyledTextAllCaps)(_templateObject6, _cosmosTokens.spacing.xxsmall);

ListItem.propTypes = {
  /** The main text for the list item. */
  title: _propTypes2.default.string,
  /** The secondary line of text for the list item. */
  subtitle: _propTypes2.default.string,
  /** If specified, the main text will be rendered as a hyperlink with this as the target. */
  href: _propTypes2.default.string,
  /** An image URL to display as a thumbnail image for the list item. */
  image: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /** An icon to display as a thumbnail image for the list item. */
  icon: _propTypes2.default.oneOf(_icon.__ICONNAMES__),
  /** Defines the flex-basis of the middle column. Accepts any number and unit, for example: `40%` or `200px` */
  bodyWidth: _widthStringPropValidator2.default,
  /** A function that will be called when the list item is clicked. */
  onClick: _propTypes2.default.func,
  /** The actions to display for the list item. */
  actions: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.arrayOf(_actionShape.actionShapeWithRequiredIcon)]),
  _actions: function _actions(props) {
    if (!props.actions) return;

    /* validation first action should be enough */
    var firstAction = props.actions[0];

    if (!_react2.default.isValidElement(firstAction)) {
      // See: https://github.com/auth0/cosmos/issues/1133
      // See: https://github.com/auth0/cosmos/issues/1222
      return (0, _customValidations.deprecate)(props, {
        name: 'actions',
        oldAPI: 'Objects in actions',
        replacement: '<Button /> in actions. See https://github.com/auth0/cosmos/pull/1133 for an example.'
      });
    }
  }
};

exports.default = ListItem;