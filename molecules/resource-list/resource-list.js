'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayMove = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n\n  margin: ', ' 0;\n  padding: 0;\n'], ['\n  ', ';\n\n  margin: ', ' 0;\n  padding: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSortableHoc = require('react-sortable-hoc');

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _actionShape = require('../../_helpers/action-shape');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

var _sortableHandle = require('./sortable-handle');

var _sortableHandle2 = _interopRequireDefault(_sortableHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ResourceList = function ResourceList(props) {
  var defaultItemRenderer = function defaultItemRenderer(item, _, index) {
    // We can say we are in dragging mode if there one .cosmos-dragging
    // element in the DOM.
    var draggingMode = document.querySelector('.cosmos-dragging');
    return _react2.default.createElement(_item2.default, _extends({
      index: index,
      draggingMode: draggingMode,
      reorderHandle: props.sortable ? _sortableHandle2.default : null,
      item: item
    }, item));
  };

  var itemRendererBuilder = function itemRendererBuilder(props) {
    var item = props.item,
        index = props.index,
        actions = props.actions,
        renderItem = props.renderItem,
        onItemClick = props.onItemClick,
        accessibilityIndex = props.accessibilityIndex,
        accessibilityOnSortEnd = props.accessibilityOnSortEnd;

    var itemRenderer = renderItem || defaultItemRenderer;
    var actualIndex = index || accessibilityIndex;

    var handleOnItemClick = function handleOnItemClick(evt) {
      onItemClick(evt, item);
    };

    return _react2.default.cloneElement(itemRenderer(item, props, actualIndex), {
      item: item,
      key: actualIndex,
      index: actualIndex,
      accessibilityOnSortEnd: accessibilityOnSortEnd,
      actions: item.actions || actions,
      onClick: item.onClick || handleOnItemClick
    });
  };

  var defaultChildrenRenderer = function defaultChildrenRenderer(_ref) {
    var items = _ref.items,
        actions = _ref.actions,
        onItemClick = _ref.onItemClick,
        renderItem = _ref.renderItem;
    return items.map(function (item, index) {
      return itemRendererBuilder({ item: item, index: index, renderItem: renderItem, onItemClick: onItemClick, actions: actions });
    });
  };

  var SortableResourceListItem = (0, _reactSortableHoc.SortableElement)(function (_ref2) {
    var item = _ref2.item,
        actions = _ref2.actions,
        renderItem = _ref2.renderItem,
        accessibilityIndex = _ref2.accessibilityIndex,
        onItemClick = _ref2.onClick,
        accessibilityOnSortEnd = _ref2.accessibilityOnSortEnd;
    return itemRendererBuilder({
      item: item,
      actions: actions,
      renderItem: renderItem,
      accessibilityIndex: accessibilityIndex,
      onItemClick: onItemClick,
      accessibilityOnSortEnd: accessibilityOnSortEnd
    });
  });

  var SortableResourceList = (0, _reactSortableHoc.SortableContainer)(function (_ref3) {
    var sortableItems = _ref3.items,
        actions = _ref3.actions,
        onItemClick = _ref3.onItemClick,
        renderItem = _ref3.renderItem,
        accessibilityOnSortEnd = _ref3.accessibilityOnSortEnd;
    return _react2.default.createElement(
      'div',
      null,
      sortableItems.map(function (item, index) {
        return _react2.default.createElement(SortableResourceListItem, {
          actions: item.actions || actions,
          onClick: item.onClick || onItemClick,
          item: item,
          key: index
          // Need to pass accessibilityIndex due to index being omitted
          // when calling child component.
          // See: https://github.com/clauderic/react-sortable-hoc/blob/0077f0b4e3b50f68c04672e78b6b69b8dc880d96/src/SortableElement/index.js#L89
          , accessibilityIndex: index,
          accessibilityOnSortEnd: accessibilityOnSortEnd,
          index: index,
          renderItem: renderItem
        });
      })
    );
  });

  var sortableChildrenRenderer = function sortableChildrenRenderer(props) {
    return _react2.default.createElement(SortableResourceList, _extends({}, props, {
      useDragHandle: true,
      helperClass: 'cosmos-dragging',
      accessibilityOnSortEnd: props.onSortEnd
    }));
  };

  var resolveChildrenRenderer = function resolveChildrenRenderer(props) {
    return props.sortable ? sortableChildrenRenderer(props) : defaultChildrenRenderer(props);
  };

  return _react2.default.createElement(
    ResourceList.Element,
    _extends({}, (0, _automationAttribute2.default)('resource-list'), props),
    resolveChildrenRenderer(props)
  );
};

ResourceList.Element = _styled2.default.ul(_templateObject, _containerStyles2.default, _cosmosTokens.spacing.large);

ResourceList.Item = _item2.default;

ResourceList.propTypes = {
  /** The items that will be rendered in the list. */
  items: _propTypes2.default.array.isRequired,
  /** The actions to render to the right side of the list items. */
  actions: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.arrayOf(_actionShape.actionShapeWithRequiredIcon)]),
  /** A function that will be called when an item is clicked. */
  onItemClick: _propTypes2.default.func,
  /** A function that accepts an item from the items array, and returns a ResourceList.Item. */
  renderItem: _propTypes2.default.func,
  /** Whether the resource list will be sortable by the user or not */
  sortable: _propTypes2.default.bool
};

exports.default = ResourceList;
exports.arrayMove = _reactSortableHoc.arrayMove;