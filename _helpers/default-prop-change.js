'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultPropChangeWarning;
function defaultPropChangeWarning(Component, propName, currentValue, futureDefault, version) {
  var componentName = Component.constructor.name;
  var currentDefault = Component.defaultProps[propName];
  var currentValueIsSet = typeof currentValue !== 'undefined';
  if (currentDefault === futureDefault || currentValueIsSet) return;

  var warning = '\n\tThe prop \'' + propName + '\' of the ' + componentName + ' component will change from \'' + currentDefault + '\' to \'' + futureDefault + '\' on version ' + version + ' of Cosmos.\n\tPlease, manually set your desired value for the prop now to avoid unexpected changes when you upgrade.\n\t';
  console.warn(warning);
}