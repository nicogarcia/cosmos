'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerStyleSheet = exports.ThemeProvider = exports.StyledComponent = exports.injectGlobal = exports.css = exports.keyframes = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _domElements = require('./_helpers/dom-elements');

var _domElements2 = _interopRequireDefault(_domElements);

var _styledMargin = require('./_helpers/styled-margin');

var _styledMargin2 = _interopRequireDefault(_styledMargin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  create a thin replacement for styled
  styledWithHelpers(c) = styled(c)
*/
var styledWithHelpers = function styledWithHelpers(styledComponent) {
  return (0, _styledComponents2.default)(styledComponent);
};

/* create functions for all the elements supported in styled */


/* import cosmos specific helpers */
_domElements2.default.forEach(function (domElement) {
  styledWithHelpers[domElement] = function (styles) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    /*
      this is where we can add custom interpolation logic:
       defaults should be added to the start of the list
      overrides should be added to the end of the list
       you can add a function that looks like this:
      const margin: function = (props: object) => css: string
    */
    interpolations.push(_styledMargin2.default);

    return (0, _styledComponents2.default)(domElement).apply(undefined, [styles].concat(interpolations));
  };

  /* attach inbuilt styled-components helpers back */
  styledWithHelpers[domElement].withConfig = _styledComponents2.default[domElement].withConfig;
  styledWithHelpers[domElement].attrs = _styledComponents2.default[domElement].attrs;
});

exports.default = styledWithHelpers;
exports.keyframes = _styledComponents.keyframes;
exports.css = _styledComponents.css;
exports.injectGlobal = _styledComponents.injectGlobal;
exports.StyledComponent = _styledComponents.StyledComponent;
exports.ThemeProvider = _styledComponents.ThemeProvider;
exports.ServerStyleSheet = _styledComponents.ServerStyleSheet;