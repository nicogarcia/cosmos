'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = avatarUrl;
var md5 = require('md5');

var initialsAvatar = function initialsAvatar(initials) {
  return encodeURIComponent('https://cdn.auth0.com/avatars/' + initials + '.png');
};

var urlTemplate = function urlTemplate(hash, initials, size) {
  return 'https://s.gravatar.com/avatar/' + hash + '?s=' + size + '&r=pg&d=' + initialsAvatar(initials);
};

function avatarUrl(image, email, initials) {
  var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 480;

  if (image) return image;

  var hash = md5(email.toLowerCase());
  return urlTemplate(hash, initials.toLowerCase(), size);
}