'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apply = exports.resets = undefined;

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _dom = require('./dom');

var recommendedResets = '\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  body {\n    line-height: ' + _cosmosTokens.misc.lineHeight + ';\n  }\n  \n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n\n  /* Our resets */\n  * {\n    box-sizing: border-box;\n  }\n\n  strong, em {\n    font-weight: ' + _cosmosTokens.fonts.weight.bold + ';\n  }\n\n  body, input, textarea, button, select {\n    font-family: ' + _cosmosTokens.fonts.family.text + ';\n    font-weight: ' + _cosmosTokens.fonts.weight.normal + ';\n    font-size: ' + _cosmosTokens.fonts.size.default + ';\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n';

var minimumResets = '\n    * {\n      box-sizing: border-box;\n    }\n    strong,\n    em {\n      font-weight: ' + _cosmosTokens.fonts.weight.bold + ';\n    }\n\n    input,\n    textarea,\n    button,\n    select {\n      font-family: ' + _cosmosTokens.fonts.family.text + ';\n      font-weight: ' + _cosmosTokens.fonts.weight.normal + ';\n      font-size: ' + _cosmosTokens.fonts.size.default + ';\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n';

var resetsDisabled = process && process.env && process.env.COSMOS_DISABLE_RESETS;

var resets = resetsDisabled ? /* We still insert some styles to add missing fonts and keep other things sane 😅 */
minimumResets : recommendedResets;

var apply = function apply() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$applyFn = _ref.applyFn,
      applyFn = _ref$applyFn === undefined ? _dom.insertAtHeadStart : _ref$applyFn;

  return applyFn(resets);
};

exports.resets = resets;
exports.apply = apply;