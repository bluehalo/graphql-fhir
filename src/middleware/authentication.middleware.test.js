const authenticationMiddleware = require('./authentication.middleware');
const noopMiddleware = require('./noop.middleware');
const passport = require('passport');

// Mock config for authentication
let authServer = {
	config: {
		auth: {
			name: 'test',
			passportOptions: {
				session: false,
			},
		},
	},
	env: {
		AUTHENTICATION: true,
	},
};

// Mock config for no authentication
let noAuthServer = {
	env: {
		AUTHENTICATION: false,
	},
};

describe('Authentication Middleware Test', () => {
	test('should return noop middleware when no server configuration is provided ', () => {
		let middleware = authenticationMiddleware();
		expect(middleware).toBe(noopMiddleware);
	});

	test('should return noop middleware when authentication is disabled', () => {
		let middleware = authenticationMiddleware(noAuthServer);
		expect(middleware).toBe(noopMiddleware);
	});

	test('should call passport.authenticate when authentication is enabled', () => {
		let middleware = authenticationMiddleware(authServer);
		let mock = passport.authenticate.mock;

		expect(middleware).not.toBe(noopMiddleware);
		expect(mock.calls.length).toBe(1);
		expect(mock.calls[0][0]).toBe(authServer.config.auth.name);
		expect(mock.calls[0][1]).toBe(authServer.config.auth.passportOptions);
	});
});
