const { Strategy } = require('passport-http-bearer');
const { auth } = require('../config').SERVER_CONFIG;
const superagent = require('superagent');

module.exports = new Strategy(function bearer (token, done) {
	// If we do not have a valid instrospection url, we cannot use this strategy
	if (!auth.introspectionUrl) {
		let errorMessage = 'No introspection endpoint provided. The server cannot';
		errorMessage += ' use the bearer strategy without an introspection url.';
		errorMessage += ' Please define a INTROSPECTION_URL environment variable.';
		return done(new Error(errorMessage));
	}

	if (!auth.clientId || !auth.clientSecret) {
		let errorMessage = 'No clientId and clientSecret were provided. You cannot';
		errorMessage += ' use the bearer strategy without these. Please define a';
		errorMessage += ' CLIENT_ID and CLIENT_SECRET environment variable.';
		return done(new Error(errorMessage));
	}

	return superagent
		.post(auth.introspectionUrl)
		.set('content-type', 'application/x-www-form-urlencoded')
		.send({
			token: token,
			client_id: auth.clientId,
			client_secret: auth.clientSecret
		})
		.then(res => {
			let decoded = res.body;
			if (decoded.active) {
				return done(null, decoded);
			} else {
				return done(new Error('Unable to retrieve valid token'));
			}
		})
		.catch(err => done(err));
});
