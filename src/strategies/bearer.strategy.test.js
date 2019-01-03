const bearerStrategy = require('./bearer.strategy');
const superagent = require('superagent');

describe('Bearer Strategy Test', () => {
	describe('missing env variables', () => {
		test('should throw an error if the introspectionUrl is missing', () => {
			const { auth } = require('../config').SERVER_CONFIG;
			auth.introspectionUrl = undefined;
			// Setup the arguments for our strategy
			let token = 'somegibberish';
			let done = jest.fn();
			// Invoke the verify function
			bearerStrategy._verify(token, done);
			let maybeErr = done.mock.calls[0][0];
			// We should see an error complaining aobut the inspection url
			expect(maybeErr.message).toContain('INTROSPECTION_URL');
		});

		test('should throw an error if the clientId or clientSecret is missing', () => {
			const { auth } = require('../config').SERVER_CONFIG;
			auth.clientId = undefined;
			auth.clientSecret = undefined;
			auth.introspectionUrl = 'https://www.foo.com/introspection';
			// Setup the arguments for our strategy
			let token = 'somegibberish';
			let done = jest.fn();
			// Invoke the verify function
			bearerStrategy._verify(token, done);
			let maybeErr = done.mock.calls[0][0];
			// We should see an error complaining aobut the inspection url
			expect(maybeErr.message).toContain('CLIENT_ID');
			expect(maybeErr.message).toContain('CLIENT_SECRET');
		});
	});

	describe('valid env setup', () => {
		beforeEach(() => {
			const { auth } = require('../config').SERVER_CONFIG;
			auth.clientId = 'client';
			auth.clientSecret = 'secret';
			auth.introspectionUrl = 'https://www.foo.com/introspection';
			// Reset necessary mocks from superagent
			superagent.__reset();
			superagent.set.mockClear();
			superagent.post.mockClear();
			superagent.send.mockClear();
		});

		test('should send a post request to the introspectionUrl with correct headers and body', () => {
			// Setup the arguments for our strategy
			let token = 'somegibberish';
			let done = jest.fn();
			// Invoke the verify function
			bearerStrategy._verify(token, done);
			// Check the calls
			expect(superagent.set.mock.calls.length).toBe(1);
			expect(superagent.post.mock.calls.length).toBe(1);
			expect(superagent.send.mock.calls.length).toBe(1);
			expect(superagent.set.mock.calls[0][0]).toEqual('content-type');
			expect(superagent.set.mock.calls[0][1]).toEqual(
				'application/x-www-form-urlencoded',
			);
			expect(superagent.post.mock.calls[0][0]).toEqual(
				'https://www.foo.com/introspection',
			);
			expect(superagent.send.mock.calls[0][0]).toEqual({
				token: token,
				client_id: 'client',
				client_secret: 'secret',
			});
		});

		test('should pass an active token to the done callback', async () => {
			// Setup the arguments for our strategy
			let decoded_token = { active: true, value: 'foo' };
			let encryptedToken = 'somegibberish';
			let done = jest.fn();
			// Set some mock results
			superagent.__setResults({ body: decoded_token });
			// Invoke the verify function
			await bearerStrategy._verify(encryptedToken, done);
			// Check that done has been called with null and a decoded token
			expect(done.mock.calls.length).toBe(1);
			expect(done.mock.calls[0][0]).toBeNull();
			expect(done.mock.calls[0][1]).toBe(decoded_token);
		});

		test('should pass an error to the done callback if the token is inactive', async () => {
			// Setup the arguments for our strategy
			let decoded_token = { active: false, value: 'foo' };
			let encryptedToken = 'somegibberish';
			let done = jest.fn();
			// Set some mock results
			superagent.__setResults({ body: decoded_token });
			// Invoke the verify function
			await bearerStrategy._verify(encryptedToken, done);
			// Check that done has been called with null and a decoded token
			expect(done.mock.calls.length).toBe(1);
			expect(done.mock.calls[0][1]).toBeUndefined();
			expect(done.mock.calls[0][0].message).toBe(
				'Unable to retrieve valid token',
			);
		});

		test('should pass an unexpected error to the done callback', async () => {
			// Setup the arguments for our strategy
			let errorMessage = 'Danger Will Robinson';
			let encryptedToken = 'somegibberish';
			let done = jest.fn();
			// Set some mock results
			superagent.__setError(errorMessage);
			// Invoke the verify function
			await bearerStrategy._verify(encryptedToken, done);
			// Check that done has been called with null and a decoded token
			expect(done.mock.calls.length).toBe(1);
			expect(done.mock.calls[0][1]).toBeUndefined();
			expect(done.mock.calls[0][0].message).toBe(errorMessage);
		});
	});
});
