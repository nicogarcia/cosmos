'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  height: ', 'px;\n  width: ', 'px;\n  svg {\n    display: block;\n  }\n'], ['\n  display: inline-block;\n  height: ', 'px;\n  width: ', 'px;\n  svg {\n    display: block;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var colors = {
  default: '#EB5424',
  dark: '#00000029',
  light: '#E9E9E9'
};

var sizes = {
  default: { width: 29, height: 32 },
  small: { width: 25, height: 27 },
  tiny: { width: 17, height: 19 }
};

var Logo = function Logo(_ref) {
  var size = _ref.size,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ['size', 'color']);

  return _react2.default.createElement(
    Logo.Element,
    _extends({ size: size }, (0, _automationAttribute2.default)('logo'), props),
    _react2.default.createElement(
      'svg',
      { height: sizes[size].height, width: sizes[size].width, viewBox: '0 0 29 32' },
      _react2.default.createElement(
        'g',
        { transform: 'translate(-100.000000, -88.000000)', fill: colors[color] },
        _react2.default.createElement(
          'g',
          { transform: 'translate(100.000000, 88.000000)' },
          _react2.default.createElement('path', { d: 'M22.9616476,25.864 L19.715652,15.9851429 L28.2126476,9.88133333 L17.7094918,9.88133333 L14.4633035,0.00285714286 L14.4623403,0.00019047619 L24.9670372,0.00019047619 L28.2139961,9.88038095 L28.2141888,9.88019048 L28.2168857,9.87866667 C30.1024528,15.6104762 28.160442,22.1297143 22.9616476,25.864 L22.9616476,25.864 L22.9616476,25.864 Z M5.96418875,25.864 L5.96149178,25.8659048 L14.4606065,31.9712381 L22.9616476,25.8641905 L14.4633035,19.7586667 L5.96418875,25.864 L5.96418875,25.864 L5.96418875,25.864 Z M0.711069704,9.87885714 L0.711069704,9.87885714 C-1.27389999,15.9209524 1.03027533,22.3232381 5.96245499,25.8651429 L5.96322555,25.8620952 L9.2096065,15.9838095 L0.714537237,9.88114286 L11.2151888,9.88114286 L14.4615697,0.00266666667 L14.4623403,0 L3.95706538,0 L0.711069704,9.87885714 L0.711069704,9.87885714 L0.711069704,9.87885714 Z' })
        )
      )
    )
  );
};

Logo.Element = _styled2.default.span(_templateObject, function (props) {
  return sizes[props.size].height;
}, function (props) {
  return sizes[props.size].width;
});

Logo.propTypes = {
  size: _propTypes2.default.oneOf(['tiny', 'small', 'default']),
  color: _propTypes2.default.oneOf(['default', 'dark', 'light'])
};

Logo.defaultProps = {
  /** Defines the size of the logo */
  size: 'default',
  /** Defines the color of the logo */
  color: 'default'
};

exports.default = Logo;