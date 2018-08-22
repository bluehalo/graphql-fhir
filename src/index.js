const { SERVER_CONFIG } = require('./config');
const FHIRServer = require('./lib/server');

// Start buliding our server
let server = new FHIRServer(SERVER_CONFIG)
	.initializeDatabaseConnection()
	.configureMiddleware()
	.configurePassport()
	.configureHelmet()
	.setProfileRoutes()
	.setErrorRoutes();

server.listen(SERVER_CONFIG.port);
server.logger.info('FHIR Server listening on localhost:' + SERVER_CONFIG.port);
