'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('./');

var _2 = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IMAGE_URLS = ['data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjcuMjQ2IDM5SDEwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSA5IDM3LjI0NlYyMC43NTRDOSAxOS43ODUgOS43ODUgMTkgMTAuNzU0IDE5aDE2LjQ5MmMuOTY5IDAgMS43NTQuNzg1IDEuNzU0IDEuNzU0djE2LjQ5MmMwIC45NjktLjc4NSAxLjc1NC0xLjc1NCAxLjc1NCIgZmlsbD0iIzE2MjE0RCIvPjxwYXRoIGQ9Ik0zMi4yNDYgMzRIMTUuNzU0QTEuNzU0IDEuNzU0IDAgMCAxIDE0IDMyLjI0NlYxNS43NTRjMC0uOTY5Ljc4NS0xLjc1NCAxLjc1NC0xLjc1NGgxNi40OTJjLjk2OSAwIDEuNzU0Ljc4NSAxLjc1NCAxLjc1NHYxNi40OTJjMCAuOTY5LS43ODUgMS43NTQtMS43NTQgMS43NTQiIGZpbGw9IiNFQzU0MjQiLz48cGF0aCBkPSJNMzcuMjQ2IDI5SDIwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSAxOSAyNy4yNDZWMTAuNzU0QzE5IDkuNzg1IDE5Ljc4NSA5IDIwLjc1NCA5aDE2LjQ5MkMzOC4yMTUgOSAzOSA5Ljc4NSAzOSAxMC43NTR2MTYuNDkyYzAgLjk2OS0uNzg1IDEuNzU0LTEuNzU0IDEuNzU0IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4=', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSIjNDRDN0Y0IiBkPSJNMTYuODA0IDMyLjM5OWwtMi44MS0xLjYyNSA4Ljc0Mi0xNS4xNyAyLjgxIDEuNjI1eiIvPjxwYXRoIGZpbGw9IiNFQzU0MjQiIGQ9Ik0zMS40NzYgMzIuMzk5bC04Ljc0MS0xNS4xNyAyLjgwOS0xLjYyNSA4Ljc0MSAxNS4xN3oiLz48cGF0aCBkPSJNMjkuNTUzIDE2LjQxN2E1LjQxMSA1LjQxMSAwIDAgMS01LjQwNyA1LjQxNiA1LjQxMSA1LjQxMSAwIDAgMS01LjQwNi01LjQxNkE1LjQxMSA1LjQxMSAwIDAgMSAyNC4xNDYgMTFhNS40MTEgNS40MTEgMCAwIDEgNS40MDcgNS40MTciIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjAuODEyIDMxLjU4M0E1LjQxMSA1LjQxMSAwIDAgMSAxNS40MDYgMzcgNS40MTEgNS40MTEgMCAwIDEgMTAgMzEuNTgzYTUuNDExIDUuNDExIDAgMCAxIDUuNDA2LTUuNDE2IDUuNDExIDUuNDExIDAgMCAxIDUuNDA2IDUuNDE2IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTM4LjI5MyAzMS41ODNhNS40MTEgNS40MTEgMCAwIDAtNS40MDctNS40MTYgNS40MTEgNS40MTEgMCAwIDAtNS40MDYgNS40MTZBNS40MTEgNS40MTEgMCAwIDAgMzIuODg2IDM3YTUuNDExIDUuNDExIDAgMCAwIDUuNDA3LTUuNDE3IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4=', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzEuMzMyIDExLjAyN0ExNS40MzMgMTUuNDMzIDAgMCAwIDIzLjY2NyA5djEwLjA3NWMuODY4LS4wMDEgMS43NDkuMjE2IDIuNTU1LjY3NSAyLjQ0NCAxLjM5IDMuMjgxIDQuNDcxIDEuODcgNi44OGw4Ljg1MSA1LjAzN2M0LjIzNC03LjIyNyAxLjcyMi0xNi40NjgtNS42MTEtMjAuNjQiIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjQgOUMxNS43MTYgOSA5IDE1Ljc2NSA5IDI0LjExYzAgMi43NTMuNzMgNS4zMzQgMi4wMDggNy41NTdsOC42NjEtNS4wMzhBNS4wNDIgNS4wNDIgMCAwIDEgMTkgMjQuMTFjMC0yLjc4MSAyLjIzOS01LjAzNiA1LTUuMDM2czUtMi4yNTUgNS01LjAzN1MyNi43NjEgOSAyNCA5IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTI4LjMzNCAyNi4yMjNhNS4wMzUgNS4wMzUgMCAwIDEtMS44MzIgMS44N2MtMi4zOTIgMS40MTEtNS40NTIuNTc0LTYuODMzLTEuODctMS4zODEtMi40NDUtNC40NDEtMy4yODItNi44MzQtMS44Ny0yLjM5MiAxLjQxLTMuMjEyIDQuNTM1LTEuODMgNi45OCA0LjE0NCA3LjMzMiAxMy4zMjIgOS44NDQgMjAuNSA1LjYxQTE1LjEwNCAxNS4xMDQgMCAwIDAgMzcgMzEuMzM0bC04LjY2Ni01LjExeiIgZmlsbD0iIzQ0QzdGNCIvPjxwYXRoIGQ9Ik0zMC4xNjcgMzIuOTk2YTUgNSAwIDEgMSA1LTguNjU5IDUgNSAwIDAgMS01IDguNjYiIGZpbGw9IiMxNjIxNEQiLz48L2c+PC9nPjwvc3ZnPg=='];

(0, _react3.storiesOf)('Resource List', module).add('titles', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{ title: 'Title One' }, { title: 'Title Two' }, { title: 'Title Three' }]
    })
  );
});

(0, _react3.storiesOf)('Resource List', module).add('titles and subtitles', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{ title: 'Title One', subtitle: 'Subtitle One' }, { title: 'Title Two', subtitle: 'Subtitle Two' }, { title: 'Title Three', subtitle: 'Subtitle Three' }]
    })
  );
});

var SortableResourceListExample = function (_React$Component) {
  _inherits(SortableResourceListExample, _React$Component);

  function SortableResourceListExample() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SortableResourceListExample);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SortableResourceListExample.__proto__ || Object.getPrototypeOf(SortableResourceListExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      items: [{ title: 'Title One', subtitle: 'Subtitle One', href: 'https://auth0.com/' }, { title: 'Title Two', subtitle: 'Subtitle Two', href: 'https://auth0.com/' }, { title: 'Title Three', subtitle: 'Subtitle Three', href: 'https://auth0.com/' }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SortableResourceListExample, [{
    key: 'onSortEnd',
    value: function onSortEnd(_ref2) {
      var oldIndex = _ref2.oldIndex,
          newIndex = _ref2.newIndex;

      this.setState({
        items: (0, _.arrayMove)(this.state.items, oldIndex, newIndex)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_2.ResourceList, {
        actions: [_react2.default.createElement(_2.Button, { onClick: function onClick() {}, icon: 'settings', label: 'Settings' }), _react2.default.createElement(_2.Button, { onClick: function onClick() {}, icon: 'delete', label: 'Delete' })],
        sortable: true,
        items: this.state.items,
        onSortEnd: function onSortEnd(event) {
          return _this2.onSortEnd(event);
        }
      });
    }
  }]);

  return SortableResourceListExample;
}(_react2.default.Component);

(0, _react3.storiesOf)('Resource List', module).add('titles with links', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{ title: 'Title One', subtitle: 'Subtitle One', href: 'https://auth0.com/' }, { title: 'Title Two', subtitle: 'Subtitle Two', href: 'https://auth0.com/' }, { title: 'Title Three', subtitle: 'Subtitle Three', href: 'https://auth0.com/' }]
    })
  );
});

(0, _react3.storiesOf)('Resource List', module).add('sortable', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(SortableResourceListExample, null)
  );
});

(0, _react3.storiesOf)('Resource List', module).add('with images', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{ title: 'Title One', subtitle: 'Subtitle One', image: IMAGE_URLS[0] }, { title: 'Title Two', subtitle: 'Subtitle Two', image: IMAGE_URLS[1] }, { title: 'Title Three', subtitle: 'Subtitle Three', image: IMAGE_URLS[2] }]
    })
  );
});

(0, _react3.storiesOf)('Resource List', module).add('with icons', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{ title: 'Title One', subtitle: 'Subtitle One', icon: 'clients' }, { title: 'Title Two', subtitle: 'Subtitle Two', icon: 'help' }, { title: 'Title Three', subtitle: 'Subtitle Three', icon: 'code' }]
    })
  );
});

(0, _react3.storiesOf)('Resource List', module).add('custom renderer', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{ title: 'Title One', subtitle: 'Subtitle One', image: IMAGE_URLS[0], id: 'abc123' }, { title: 'Title Two', subtitle: 'Subtitle Two', image: IMAGE_URLS[1], id: 'def456' }, { title: 'Title Three', subtitle: 'Subtitle Three', image: IMAGE_URLS[2], id: 'ghi789' }],
      renderItem: function renderItem(item) {
        return _react2.default.createElement(
          _2.ResourceList.Item,
          item,
          'ID: ',
          _react2.default.createElement(
            _2.Code,
            null,
            item.id
          )
        );
      }
    })
  );
});

(0, _react3.storiesOf)('Resource List', module).add('actions', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{ title: 'Title One', subtitle: 'Subtitle One', image: IMAGE_URLS[0], id: 'abc123' }, { title: 'Title Two', subtitle: 'Subtitle Two', image: IMAGE_URLS[1], id: 'def456' }, { title: 'Title Three', subtitle: 'Subtitle Three', image: IMAGE_URLS[2], id: 'ghi789' }],
      renderItem: function renderItem(item) {
        return _react2.default.createElement(
          _2.ResourceList.Item,
          item,
          'ID: ',
          _react2.default.createElement(
            _2.Code,
            null,
            item.id
          )
        );
      },
      actions: [_react2.default.createElement(_2.Button, { icon: 'delete', onClick: function onClick() {} }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {} })]
    })
  );
});

(0, _react3.storiesOf)('Resource List', module).add('body width', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'body width' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{ title: 'Title One', subtitle: 'Subtitle One', image: IMAGE_URLS[0], id: 'abc123' }, { title: 'Title Two', subtitle: 'Subtitle Two', image: IMAGE_URLS[1], id: 'def456' }, { title: 'Title Three', subtitle: 'Subtitle Three', image: IMAGE_URLS[2], id: 'ghi789' }],
      renderItem: function renderItem(item) {
        return _react2.default.createElement(
          _2.ResourceList.Item,
          _extends({}, item, { bodyWidth: '180px' }),
          'ID: ',
          _react2.default.createElement(
            _2.Code,
            null,
            item.id
          )
        );
      },
      actions: [_react2.default.createElement(_2.Button, { icon: 'delete', onClick: function onClick() {} }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {} })]
    })
  );
});

(0, _react3.storiesOf)('Resource List', module).add('actions as buttons', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{
        title: 'Title One',
        subtitle: 'Subtitle One',
        image: IMAGE_URLS[0],
        id: 'def456def456def456def456def456'
      }, {
        title: 'Title Two',
        subtitle: 'Subtitle Two',
        image: IMAGE_URLS[1],
        id: 'def456def456def456def456def456'
      }, {
        title: 'Title Three',
        subtitle: 'Subtitle Three',
        image: IMAGE_URLS[2],
        id: 'def456def456def456def456def456'
      }],
      renderItem: function renderItem(item) {
        return _react2.default.createElement(
          _2.ResourceList.Item,
          item,
          'ID: ',
          _react2.default.createElement(
            _2.Code,
            null,
            item.id
          )
        );
      },
      actions: [_react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'delete', onClick: function onClick() {}, label: 'Delete' })]
    })
  );
});

(0, _react3.storiesOf)('Resource List', module).add('action overrides', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{ title: 'Title One', subtitle: 'Subtitle One', image: IMAGE_URLS[0], id: 'abc123' }, { title: 'Title Two', subtitle: 'Subtitle Two', image: IMAGE_URLS[1], id: 'def456' }, {
        title: 'Title Three',
        subtitle: 'Subtitle Three',
        image: IMAGE_URLS[2],
        id: 'ghi789',
        actions: [_react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings', disabled: true }), _react2.default.createElement(_2.Button, { icon: 'delete', onClick: function onClick() {}, label: 'Delete' })]
      }],
      renderItem: function renderItem(item) {
        return _react2.default.createElement(
          _2.ResourceList.Item,
          item,
          'ID: ',
          _react2.default.createElement(
            _2.Code,
            null,
            item.id
          )
        );
      },
      actions: [_react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'delete', onClick: function onClick() {}, label: 'Delete' })]
    })
  );
});

(0, _react3.storiesOf)('Resource List', module).add('stressed', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'stressed - title and subtitle with 119 characters' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{
        image: IMAGE_URLS[0],
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      }, {
        image: IMAGE_URLS[1],
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      }, {
        image: IMAGE_URLS[2],
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.'
      }]
    })
  );
});

(0, _react3.storiesOf)('Resource List', module).add('stressed - with actions', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'stressed - title and subtitle with 119 characters + 7 actions' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{
        image: IMAGE_URLS[0],
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
        actions: [_react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' })]
      }, {
        image: IMAGE_URLS[1],
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
        actions: [_react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' })]
      }, {
        image: IMAGE_URLS[2],
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
        actions: [_react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' })]
      }]
    })
  );
});

(0, _react3.storiesOf)('Resource List', module).add('stressed - with body', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Stressed - with body content' },
    _react2.default.createElement(_2.ResourceList, {
      items: [{
        title: 'Title One ;lkdfhjad dfajldafh djf hdfjs dfkh ldfhjk jdsf dfhlsj kdfshl kdfshlkjfdsh jdfksh dfskl hdflss',
        subtitle: 'Subtitle One',
        image: IMAGE_URLS[0],
        id: 'abc123'
      }, {
        title: 'Title Two',
        subtitle: 'Subtitle Two lkjhdfjhldf dfkjl hdfsjklh dfskjh dfsjkhdfs lh dfskjldfs',
        image: IMAGE_URLS[1],
        id: 'def456'
      }, {
        title: 'Title Three',
        subtitle: 'Subtitle Three',
        image: IMAGE_URLS[2],
        id: 'ghlkjhsdhlkjdsghkdsfkljhdfslkdfsjkdfhljdfkhjldfskljhfdskljdfhskjhdfsjlkhdfskjlhfdsjlkhdfskljhdfskjhlfdkhljsfdkjfdhkdfslkhjdsfhjki789'
      }],
      renderItem: function renderItem(item) {
        return _react2.default.createElement(
          _2.ResourceList.Item,
          item,
          'ID: ',
          _react2.default.createElement(
            _2.Code,
            null,
            item.id
          )
        );
      },
      actions: [_react2.default.createElement(_2.Button, { icon: 'settings', onClick: function onClick() {}, label: 'Settings' }), _react2.default.createElement(_2.Button, { icon: 'delete', onClick: function onClick() {}, label: 'Delete' })]
    })
  );
});