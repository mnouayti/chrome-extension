# Auth0 - Chrome Extension Sample

This sample demonstrates how to add authentication to a Chrome extension with Auth0. It uses Auth0's hosted Lock widget with Chrome's `launchWebAuthFlow`.

For detailed instructions on integrating Auth0 in a Chrome extension, see the [full documentation](https://auth0.com/docs/quickstart/native/chrome).

Chrome extensions are packaged as `.crx` files for distribution but may be loaded "unpacked" for development. For more information on how to load an unpacked extension, see the [Chrome extension docs](https://developer.chrome.com/extensions/getstarted#unpacked).

## Running the Sample

### Sign Up for Auth0

If you haven't already done so, [sign up](https://auth0.com/signup) for your free Auth0 account and create an application in the dashboard. Find the **domain** and **client ID** from your app settings, as these will be required to integrate Auth0 in your Chrome extension.

When loading your application as an unpacked extension, a unique ID will be generated for it. You must whitelist your callback URL (the URL that Auth0 will return to once authentication is complete) and the allowed origin URL.

In the **Allowed Callback URLs** section, whitelist your callback URL.

```bash
https://<YOUR_APP_ID>.chromiumapp.org/auth0
```

In the **Allowed Origins** section, whitelist your chrome extension as an origin.

```bash
chrome-extension://<YOUR_APP_ID>
```

### Add Your Application Keys

Rename `env.js.example` to `env.js` and provide your Auth0 credentials.

```js
window.env = {
  AUTH0_DOMAIN: 'YOUR_AUTH0_DOMAIN',
  AUTH0_CLIENT_ID: 'YOUR_AUTH0_CLIENT_ID',
};
```

### Install the Dependencies

Install the dependencies with npm by running:

```bash
npm install
```

### Load the Unpacked Extension

For testing purposes, Chrome allows you to load unpacked extensions from anywhere on your computer. Navigate to `chrome://extensions` in the URL bar and load the project as an unpacked extension.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.
