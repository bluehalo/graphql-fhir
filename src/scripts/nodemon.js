const nodemon = require('nodemon');
const logger = require('../lib/winston')({ level: 'debug' });

nodemon({
	ignore: ['node_modules'],
	script: 'src/index',
	ext: 'js json',
	verbose: true,
	watch: ['src/**/*.js'],
	env: process.env,
});

nodemon
	.on('restart', (files) => {
		logger.verbose(`Nodemon restarting because ${files.join(',')} changed.`);
	})
	.on('crash', () => {
		logger.error('Nodemon crashed. Waiting for changes to restart.');
	});

// Make sure the process is killed when hitting ctrl + c
process.once('SIGINT', () => {
	nodemon.once('exit', () => {
		logger.info('Exiting Nodemon.');
		process.exit();
	});
});
