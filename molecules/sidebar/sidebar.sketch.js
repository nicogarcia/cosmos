'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Sidebar', module).add('default', function () {
  return _react2.default.createElement(
    _.Sidebar,
    null,
    _react2.default.createElement(_.Sidebar.Link, { icon: 'dashboard', label: 'Dashboard', url: '/manage' }),
    _react2.default.createElement(_.Sidebar.Link, { icon: 'clients', label: 'Clients', url: '/manage/clients' }),
    _react2.default.createElement(_.Sidebar.Link, { icon: 'apis', label: 'APIs', url: '/manage/apis' }),
    _react2.default.createElement(_.Sidebar.Link, { icon: 'sso-integrations', label: 'SSO Integrations', url: '/manage/sso-integrations' }),
    _react2.default.createElement(
      _.Sidebar.LinkGroup,
      { icon: 'connections', label: 'Connections' },
      _react2.default.createElement(_.Sidebar.Link, { label: 'Database', url: '/manage/connections/database' }),
      _react2.default.createElement(_.Sidebar.Link, { label: 'Social', url: '/manage/connections/social' }),
      _react2.default.createElement(_.Sidebar.Link, { label: 'Enterprise', url: '/manage/connections/enterprise' }),
      _react2.default.createElement(_.Sidebar.Link, { label: 'Passwordless', url: '/manage/connections/passwordless' })
    ),
    _react2.default.createElement(_.Sidebar.Link, { icon: 'users', label: 'Users', url: '/manage/users' }),
    _react2.default.createElement(_.Sidebar.Link, { icon: 'rules', label: 'Rules', url: '/manage/rules' }),
    _react2.default.createElement(_.Sidebar.Link, { icon: 'hooks', label: 'Hooks', url: '/manage/hooks' }),
    _react2.default.createElement(_.Sidebar.Link, { icon: 'multifactor', label: 'Multifactor Auth', url: '/manage/guardian' }),
    _react2.default.createElement(_.Sidebar.Link, { icon: 'hosted-pages', label: 'Hosted Pages', url: '/manage/login_page' }),
    _react2.default.createElement(
      _.Sidebar.LinkGroup,
      { icon: 'emails', label: 'Emails' },
      _react2.default.createElement(_.Sidebar.Link, { label: 'Templates', url: '/manage/emails' }),
      _react2.default.createElement(_.Sidebar.Link, { label: 'Provider', url: '/manage/emails/provider' })
    ),
    _react2.default.createElement(_.Sidebar.Link, { icon: 'logs', label: 'Logs', url: '/manage/logs' }),
    _react2.default.createElement(_.Sidebar.Link, { icon: 'anomaly-detection', label: 'Anomaly Detection', url: '/manage/anomaly' }),
    _react2.default.createElement(_.Sidebar.Link, { icon: 'extensions', label: 'Extensions', url: '/manage/extensions' })
  );
});