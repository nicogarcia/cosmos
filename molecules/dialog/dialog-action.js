'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DialogAction = function DialogAction(label, handler) {
  var appearance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

  _classCallCheck(this, DialogAction);

  this.label = label;
  this.handler = handler;
  this.appearance = appearance;
};

exports.default = DialogAction;