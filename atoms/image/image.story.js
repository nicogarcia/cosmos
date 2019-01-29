'use strict';

var _templateObject = _taggedTemplateLiteral(['\n  width: 150px;\n  height: 150px;\n  outline: 1px solid black;\n'], ['\n  width: 150px;\n  height: 150px;\n  outline: 1px solid black;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 150px;\n  height: 200px;\n'], ['\n  width: 150px;\n  height: 200px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 200px;\n  height: 150px;\n'], ['\n  width: 200px;\n  height: 150px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 100px;\n  height: 70px;\n'], ['\n  width: 100px;\n  height: 70px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width: 400px;\n  height: 200px;\n'], ['\n  width: 400px;\n  height: 200px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _react3.storiesOf)('Image', module).add('Image svg', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Image SVG' },
    _react2.default.createElement(_.Image, {
      source: 'https://cdn.auth0.com/website/press/resources/webtask-logo.svg',
      alt: 'webtask logo'
    })
  );
});

(0, _react3.storiesOf)('Image', module).add('Image data:url', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Image from data:url source' },
    _react2.default.createElement(_.Image, {
      alt: 'Webtask logo from data:url source',
      source: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY1IiBoZWlnaHQ9Ijg3IiB2aWV3Qm94PSIwIDAgMjY1IDg3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT53ZWJ0YXNrXzAxPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik04Ni4xMDYgODYuMjg4SC4yNTNWLjU0MWg4NS44NTN2ODUuNzQ3eiIgZmlsbD0iIzVGMzIzNyIvPjxwYXRoIGQ9Ik04Ni4xMDYgODYuMjg4SDE3LjQyNFYxNy42OWg2OC42ODJ2NjguNTk4eiIgZmlsbD0iI0U1NkU2MiIvPjxwYXRoIGQ9Ik02OC45MzUgNjkuMTM5SDE3LjQyNFYxNy42OWg1MS41MTF2NTEuNDV6IiBmaWxsPSIjRUQ5NTVCIi8+PHBhdGggZD0iTTY4LjkzNSA2OS4xMzloLTM0LjM0di0zNC4zaDM0LjM0djM0LjN6IiBmaWxsPSIjRjlFODYyIi8+PHBhdGggZD0iTTUxLjc2NSA1MS45OWgtMTcuMTdWMzQuODRoMTcuMTd2MTcuMTV6IiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTEyOS4wNDYgNDMuNTQxaC0uMTI4Yy0uMjk2IDEuMzU0LTMuNTU3IDE0LjMzOC0zLjk4IDE2LjAzaC01LjA0YTIzNzEuMTM2IDIzNzEuMTM2IDAgMCAwLTUuMjA4LTIyLjI0N2g0LjQwNGMuNTA4IDIuMjg1IDMuMjE4IDE1LjY1IDMuNjQyIDE4LjE0NGguMTI3Yy0uMDQyLS4wNDIgMi43NTItMTEuNzU3IDQuMzE5LTE4LjE0NGgzLjk4Yy41OTQgMi4yODUgMy44OTcgMTUuNjA3IDQuMzYzIDE4LjE0NGguMTI3Yy0uMDQzIDAgMi4zNy0xMS43NTcgMy42ODMtMTguMTQ0aDMuOTM5Yy0xLjY5NCA3LjQ0NC0zLjM0NiAxNC44NDUtNS4wODIgMjIuMjQ3aC01LjI1MWMtLjM4LTEuNjA3LTMuNDcyLTEzLjcwMy0zLjg5NS0xNi4wM20yOS45ODEgMy4xNzJ2LTEuNDM3YzAtMy4xNzItMS4xMDEtNS4xNi00LjAyMy01LjE2LTIuNTgzIDAtNC4xMDggMS45ODgtNC4xMDggNi41OTdoOC4xM3ptNC41NzMgMi44MzRoLTEyLjc0NmMwIDQuNDQxIDEuNDgyIDYuODEgNS4yOTMgNi44MWg2LjUyMnYyLjU4Yy0xLjk0OC41MDctNC40NDcuOTcyLTYuOTQ1Ljk3Mi01LjU5IDAtOS40ODUtMy41OTUtOS40ODUtMTEuNTg4IDAtOC4xNjMgMy45MzctMTEuMzM1IDguOTM1LTExLjMzNSA1LjIwOCAwIDguNDI2IDIuOTYgOC40MjYgMTEuMjkzdjEuMjY4em0xMy41MDktOS4wMDhoLTMuNjg1djE1LjgxOGgzLjcyN2MzLjUxNSAwIDUuMTI0LTIuNTM4IDUuMTI0LTguMDM2IDAtNS4zMy0xLjY1Mi03Ljc4Mi01LjE2Ni03Ljc4MnptLTMuNjg1LTYuODUyYzAgMS4yMjcgMCAyLjUzNy0uMDQxIDMuNzY0aC4wODRjLjk3NC0uMjExIDIuODM3LS40NjUgNC4yMzUtLjQ2NSA0LjU3MyAwIDkuMzE2IDIuNzA3IDkuMzE2IDExLjMzNSAwIDcuOTA5LTMuOTM5IDExLjU4OC0xMC4yOSAxMS41ODgtMi43NTMgMC01LjEyNC0uNDY1LTcuNzA3LS45NzJWMjYuOTJoNC40MDN2Ni43Njd6bTIxLjQ3MS0zLjM0MWgyLjYyNXY2Ljk3OGg1LjUwNXYzLjIxNWgtNS41MDV2MTIuODU3YzAgMS42NS43NjIgMi45NiAyLjc5NSAyLjk2aDIuODM3djIuNThjLTEuNjUxLjU5My0zLjMwMi45NzMtNS4xNjYuOTczLTIuMzcxIDAtNC44Ny0xLjE4NC00Ljg3LTUuMzI5VjQwLjU0aC0yLjk2NHYtMy4yMTVoMy4zNDZsMS4zOTctNi45Nzh6bTIzLjQ2IDE4LjM1NWwtNC41MzIuODA0Yy0yLjI0My4zOC0yLjk2NCAxLjQ4LTIuOTY0IDMuNzY0IDAgMi4xNTcgMS4xODYgMy40MjYgMy4xMzQgMy40MjYgMS4zNTUgMCAyLjU4My0uMjUzIDQuMzYyLS44MDN2LTcuMTl6bS0xMS45ODQgNC42MWMwLTMuODQ4IDIuNDE0LTUuOTYzIDYuOTg3LTYuNTk4bDQuOTk3LS42NzZ2LTIuNDk1YzAtMi4xNTgtMS4wNTktMy4wMDMtMy42LTMuMDAzaC02Ljc3NXYtMi42NjVjMi4wNzUtLjUwNyA0Ljc4NS0uODg4IDcuMTU2LS44ODggNC45OTcgMCA3LjYyMyAyLjYyMiA3LjYyMyA3LjE5VjU5LjU3aC0zLjQ3M2wtLjM4LTEuNTIzaC0uMDg1Yy0uODkuNTkzLTMuMzg4IDEuODE5LTYuMjI1IDEuODE5LTQuMTA4IDAtNi4yMjUtMi41OC02LjIyNS02LjU1NXptMzUuNjU1LS4yMTFjMCAzLjc2NC0yLjcxIDYuODEtNy42MjMgNi44MS0yLjIwMiAwLTQuMzE5LS4zMzktNi4wMTItLjg0NnYtMi43MDdoNi4yMjRjMS44NjQgMCAzLjE3Ni0xLjAxNSAzLjE3Ni0yLjUzOCAwLTQuMTAyLTkuOTA5LTMuNTEtOS45MDktMTAuNzQzIDAtMy4zNDEgMi40MTQtNi4wOSA3LjMyNi02LjA5IDEuOTA1IDAgNC4wMjMuMzggNS40Mi44MDR2Mi43NDloLTUuODQ0Yy0xLjgyIDAtMi43OTQuNzYtMi43OTQgMi4wNzIgMCAzLjkzMyAxMC4wMzYgMy41OTUgMTAuMDM2IDEwLjQ5bTkuNTI4LTUuMzcybDguMDQ1LTEwLjQwNWg1LjA4MmwtOC4wNDYgMTAuNDA1IDguMDQ2IDExLjg0MmgtNS4yNTFsLTcuODc2LTExLjg0MnptLS4yOTcgMTEuODQyaC00LjQwNHYtMzIuNjVoNC40MDR2MzIuNjV6IiBmaWxsPSIjNUYzMjM3Ii8+PC9nPjwvc3ZnPg=='
    })
  );
});

(0, _react3.storiesOf)('Image', module).add('Image bitmap', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Image Bitmap' },
    _react2.default.createElement(_.Image, {
      source: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80',
      alt: 'The cosmos'
    })
  );
});

(0, _react3.storiesOf)('Image', module).add('Image large and text', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Image (large) and text' },
    _react2.default.createElement(
      _.Paragraph,
      null,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique nec sapien eget vestibulum. Donec tincidunt vel felis eget vestibulum. Aliquam viverra magna elit, nec hendrerit lorem rhoncus nec. Nam fringilla elit a maximus faucibus. Nullam porttitor purus non sapien dictum, faucibus viverra arcu malesuada. Nunc sagittis eget elit sit amet tempor. Sed at ultricies orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eget nibh cursus, sollicitudin tellus vel, mollis justo. Integer efficitur metus nisi, eu maximus velit pellentesque at. Pellentesque magna risus, facilisis ac odio quis, accumsan egestas tortor. Aliquam commodo scelerisque justo, et feugiat libero ullamcorper eget. Nulla consectetur mollis elit sit amet auctor.',
      ' '
    ),
    _react2.default.createElement(_.Image, {
      alt: 'The cosmos',
      source: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2257&h=1200&q=80'
    }),
    _react2.default.createElement(
      _.Paragraph,
      null,
      'Phasellus pharetra mattis lacus, vitae ultrices nisl interdum eu. Nulla facilisi. Donec et faucibus lorem. Quisque sit amet tortor consectetur, volutpat neque non, congue justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim egestas, rhoncus arcu nec, fringilla lacus. In dictum orci risus, nec malesuada tellus tristique volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    )
  );
});

(0, _react3.storiesOf)('Image', module).add('Image small and text', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Image (large) and text' },
    _react2.default.createElement(
      _.Paragraph,
      null,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique nec sapien eget vestibulum. Donec tincidunt vel felis eget vestibulum. Aliquam viverra magna elit, nec hendrerit lorem rhoncus nec. Nam fringilla elit a maximus faucibus. Nullam porttitor purus non sapien dictum, faucibus viverra arcu malesuada. Nunc sagittis eget elit sit amet tempor. Sed at ultricies orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eget nibh cursus, sollicitudin tellus vel, mollis justo. Integer efficitur metus nisi, eu maximus velit pellentesque at. Pellentesque magna risus, facilisis ac odio quis, accumsan egestas tortor. Aliquam commodo scelerisque justo, et feugiat libero ullamcorper eget. Nulla consectetur mollis elit sit amet auctor.',
      ' '
    ),
    _react2.default.createElement(_.Image, {
      alt: 'The moon',
      source: 'https://images.unsplash.com/photo-1479233270217-77d99c494c4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=300&q=80'
    }),
    _react2.default.createElement(
      _.Paragraph,
      null,
      'Phasellus pharetra mattis lacus, vitae ultrices nisl interdum eu. Nulla facilisi. Donec et faucibus lorem. Quisque sit amet tortor consectetur, volutpat neque non, congue justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim egestas, rhoncus arcu nec, fringilla lacus. In dictum orci risus, nec malesuada tellus tristique volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    )
  );
});

(0, _react3.storiesOf)('Image', module).add('responsive images', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Responsive images' },
    _react2.default.createElement(
      'div',
      {
        style: {
          width: '200px',
          outline: '1px solid black'
        }
      },
      _react2.default.createElement(_.Image, {
        alt: 'The cosmos',
        source: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2257&h=1200&q=80'
      })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      {
        style: {
          width: '100%',
          outline: '1px solid black'
        }
      },
      _react2.default.createElement(_.Image, {
        alt: 'The cosmos',
        source: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2257&h=1200&q=80'
      })
    )
  );
});

(0, _react3.storiesOf)('Image', module).add('non responsive images', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Non responsive images' },
    _react2.default.createElement(
      'div',
      {
        style: {
          width: '100%',
          outline: '1px solid black'
        }
      },
      _react2.default.createElement(_.Image, {
        disableResponsive: true,
        alt: 'The cosmos',
        source: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2257&h=1200&q=80'
      })
    )
  );
});

(0, _react3.storiesOf)('Image', module).add('declared dimensions', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Declared dimensions' },
    _react2.default.createElement(_.Image, {
      alt: 'Astronaut',
      source: 'https://images.unsplash.com/photo-1526572202046-8b87644dce4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      height: '400px',
      width: '300px'
    })
  );
});

var Box = _styled2.default.div(_templateObject);

var BoxPortrait = (0, _styled2.default)(Box)(_templateObject2);
var BoxLandscape = (0, _styled2.default)(Box)(_templateObject3);

var BoxLandscapeSmall = (0, _styled2.default)(BoxLandscape)(_templateObject4);

var BoxLandscapeLarge = (0, _styled2.default)(BoxLandscape)(_templateObject5);

(0, _react3.storiesOf)('Image', module).add('fitted images', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Fitted image' },
    _react2.default.createElement(
      _storyHelpers.Stack,
      { align: 'space-between' },
      _react2.default.createElement(
        Box,
        null,
        _react2.default.createElement(_.Image, {
          width: '150px',
          height: '150px',
          fit: 'contain',
          alt: 'Portrait image - Contain',
          source: 'https://images.unsplash.com/photo-1505851543971-19811a8f4c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
        })
      ),
      _react2.default.createElement(
        Box,
        null,
        _react2.default.createElement(_.Image, {
          alt: 'Landscape image - Contain',
          width: '150px',
          height: '150px',
          fit: 'contain',
          source: 'https://images.unsplash.com/photo-1526572202046-8b87644dce4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        })
      ),
      _react2.default.createElement(
        Box,
        null,
        _react2.default.createElement(_.Image, {
          alt: 'Portrait image - Cover',
          fit: 'cover',
          width: '150px',
          height: '150px',
          source: 'https://images.unsplash.com/photo-1505851543971-19811a8f4c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
        })
      ),
      _react2.default.createElement(
        Box,
        null,
        _react2.default.createElement(_.Image, {
          alt: 'Landscape image - Cover',
          fit: 'cover',
          width: '150px',
          height: '150px',
          source: 'https://images.unsplash.com/photo-1526572202046-8b87644dce4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        })
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _storyHelpers.Stack,
      null,
      _react2.default.createElement(
        BoxLandscapeLarge,
        null,
        _react2.default.createElement(_.Image, {
          alt: 'Scale down - Image is smaller than container',
          fit: 'scale-down',
          width: '100%',
          height: '100%',
          source: 'https://images.unsplash.com/photo-1526572202046-8b87644dce4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
        })
      ),
      _react2.default.createElement(
        BoxLandscapeSmall,
        null,
        _react2.default.createElement(_.Image, {
          alt: 'Scale down - Container is smaller than image',
          fit: 'scale-down',
          width: '100%',
          height: '100%',
          source: 'https://images.unsplash.com/photo-1526572202046-8b87644dce4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
        })
      )
    )
  );
});

(0, _react3.storiesOf)('Image', module).add('fitted logos', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Fitted logos' },
    _react2.default.createElement(
      _storyHelpers.Stack,
      { align: 'space-between' },
      _react2.default.createElement(
        BoxLandscapeSmall,
        null,
        _react2.default.createElement(_.Image, {
          height: '100%',
          width: '100%',
          fit: 'contain',
          alt: 'Webtask logo',
          source: 'https://cdn.auth0.com/website/press/resources/webtask-logo.svg'
        })
      ),
      _react2.default.createElement(
        BoxLandscapeSmall,
        null,
        _react2.default.createElement(_.Image, {
          fit: 'contain',
          height: '70px',
          width: '100%',
          alt: 'Sharelock logo',
          source: 'https://images.ctfassets.net/kbkgmx9upatd/2WYJNVchLWyqaWWmWw4You/6f73fede65925693bd2f8c63c516cd3c/about-_sharelock.svg'
        })
      ),
      _react2.default.createElement(
        BoxLandscapeSmall,
        null,
        _react2.default.createElement(_.Image, {
          fit: 'contain',
          height: '70px',
          width: '100%',
          alt: 'SAML logo',
          source: 'https://images.ctfassets.net/kbkgmx9upatd/6eMje9QPF6qAgwCKESG6wc/b210dd6ce9e2959c16cde0b0bfc4af56/about-saml.svg'
        })
      ),
      _react2.default.createElement(
        BoxLandscapeSmall,
        null,
        _react2.default.createElement(_.Image, {
          fit: 'contain',
          height: '70px',
          width: '100%',
          alt: 'Simple Keychain logo',
          source: 'https://images.ctfassets.net/kbkgmx9upatd/3R1xQfwX2McUCaG6AWcacM/baa2e5aea1ea6ad453cdc81169b1409d/about-simplekeychain.svg'
        })
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _storyHelpers.Stack,
      { align: 'space-between' },
      _react2.default.createElement(
        BoxPortrait,
        null,
        _react2.default.createElement(_.Image, {
          fit: 'contain',
          width: '100%',
          alt: 'Webtask logo',
          source: 'https://cdn.auth0.com/website/press/resources/webtask-logo.svg'
        })
      ),
      _react2.default.createElement(
        BoxPortrait,
        null,
        _react2.default.createElement(_.Image, {
          fit: 'contain',
          height: '100%',
          width: '100%',
          alt: 'Webtask logo',
          source: 'https://cdn.auth0.com/website/press/resources/webtask-logo.svg'
        })
      ),
      _react2.default.createElement(
        BoxLandscape,
        null,
        _react2.default.createElement(_.Image, {
          fit: 'contain',
          height: '100%',
          alt: 'SAML logo',
          source: 'https://images.ctfassets.net/kbkgmx9upatd/6eMje9QPF6qAgwCKESG6wc/b210dd6ce9e2959c16cde0b0bfc4af56/about-saml.svg'
        })
      ),
      _react2.default.createElement(
        BoxLandscape,
        null,
        _react2.default.createElement(_.Image, {
          fit: 'contain',
          width: '100%',
          height: '100%',
          alt: 'SAML logo',
          source: 'https://images.ctfassets.net/kbkgmx9upatd/6eMje9QPF6qAgwCKESG6wc/b210dd6ce9e2959c16cde0b0bfc4af56/about-saml.svg'
        })
      )
    )
  );
});