const { SERVER_CONFIG } = require('./config.js');
const FHIRServer = require('./lib/server.js');

// load environment settings
require('./environment.js');

// Start buliding our server
let server = new FHIRServer(SERVER_CONFIG)
	.initializeDatabaseConnection()
	.configureMiddleware()
	.configurePassport()
	.configureHelmet()
	.enableHealthCheck()
	.setProfileRoutes()
	.setErrorRoutes();

server.listen(SERVER_CONFIG.port);
server.logger.info('FHIR Server listening on localhost:' + SERVER_CONFIG.port);
