'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pixelCalc = require('../../_helpers/pixel-calc');

var getLayoutValues = function getLayoutValues(layout) {
  var formWidth = void 0,
      labelWidth = void 0,
      contentWidth = void 0;

  if (layout === 'label-on-left') {
    formWidth = '625px';
    labelWidth = (0, _pixelCalc.multiply)(formWidth, 0.35);
    contentWidth = (0, _pixelCalc.subtract)(formWidth, labelWidth);
  } else if (layout === 'label-on-top') {
    formWidth = labelWidth = contentWidth = 'auto';
  }

  return { formWidth: formWidth, labelWidth: labelWidth, contentWidth: contentWidth };
};

exports.default = getLayoutValues;