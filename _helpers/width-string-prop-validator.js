'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Checks the string is a valid width.
 * @param {object} props
 * @param {string} propName
 * @param {string} componentName
 */
function widthString(props, propName, componentName) {
  function buildError() {
    var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The value should be a positive number plus the unit.';

    var lines = ['The "' + propName + '" prop\'s value of the ' + componentName + ' is invalid.', reason, 'Example: 200px, 40%.'];

    return new Error(lines.join('\n'));
  }

  var prop = props[propName];
  if (!prop) return;

  var expression = new RegExp('(-?)([0-9]+\\.[0-9]+)(px|%)');
  if (!expression.test(prop)) return buildError();

  var _prop$match = prop.match(expression),
      _prop$match2 = _slicedToArray(_prop$match, 4),
      text = _prop$match2[0],
      sign = _prop$match2[1],
      strNumber = _prop$match2[2],
      unit = _prop$match2[3];

  var number = parseFloat(strNumber);

  var isNegativeNumber = sign === '-';
  var isRelativeWidthMoreThan100 = number > 100 && unit === '%';

  if (isNegativeNumber) return buildError('The number must be positive.');
  if (isRelativeWidthMoreThan100) return buildError('Relative widths are allowed up to 100%.');
}

exports.default = widthString;