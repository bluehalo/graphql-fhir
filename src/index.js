const { SERVER_CONFIG, MONGO_CONFIG } = require('./config.js');
const FHIRServer = require('./lib/server.js');

// load environment settings
require('./environment.js');

// Start buliding our server
let server = new FHIRServer(SERVER_CONFIG)
	.configureMiddleware()
	.configurePassport()
	.configureHelmet()
	.enableHealthCheck()
	.setProfileRoutes()
	.setErrorRoutes();

server.initializeDatabaseConnection({
	url: MONGO_CONFIG.connection,
	db_name: MONGO_CONFIG.db_name,
	mongo_options: MONGO_CONFIG.options
}).then(() => {
	server.listen(SERVER_CONFIG.port);
	server.logger.info('FHIR Server listening on localhost:' + SERVER_CONFIG.port);
}).catch(err => {
	server.logger.error('Fatal Error connecting to Mongo.');
});
