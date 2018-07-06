// Force the environment variables into the correct format first
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

const jest = require('jest');
const args = process.argv.slice(2);

// If this is not in CI or we are not generating coverage, add a watchAll argument
if (!process.env.CI && args.indexOf('--coverage') < 0) {
	args.push('--watchAll');
}

jest.run(args);
