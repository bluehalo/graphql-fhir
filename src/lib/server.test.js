jest.dontMock('express-graphql');
jest.dontMock('superagent');

const examplePatient = require('../../__fixtures__/patient-example.json');
const serverTests = require('../../__fixtures__/server-tests.json');
const { SERVER_CONFIG } = require('../config.js');
const FHIRServer = require('./server.js');
const superagent = require('superagent');
const path = require('path');
// This resolver will need to mock the get patient call to work correctly
// since this is a facade server
const patientResolver = require('../resources/4_0_0/profiles/patient/resolver.js');

// Gran the specific tests we need to use
let instanceTests = serverTests['instance-tests'];
let rootTests = serverTests['root-tests'];

// Create a mock config for setting the routes to initialize, this will help
// the tests run faster
let profileConfig = {
	resourceConfig: {
		profilesRelativePath: 'profiles/patient/register.js',
		resourceBase: 'resources',
	},
	versionConfig: {
		'4_0_0': '4_0_0'
	},
};

// Base url for all tests
let baseUrl = `localhost:${SERVER_CONFIG.port}/4_0_0`;

// Variables to be used in cleanup
let originalGetPatientInstance,
		originalGetPatient,
		server;

describe('Server Tests', () => {
	// Setup some mocks, our environment, and the server
	beforeAll(done => {
		// load environment settings
		require('../environment.js');
		// Mock the resolver
		originalGetPatientInstance = patientResolver.getPatientInstance;
		originalGetPatient = patientResolver.getPatient;
		patientResolver.getPatientInstance = () => examplePatient;
		patientResolver.getPatient = () => examplePatient;
		// Setup the server
		server = new FHIRServer(SERVER_CONFIG)
			.initializeDatabaseConnection()
			.configureMiddleware()
			.configureHelmet()
			.enableHealthCheck()
			.setProfileRoutes(profileConfig)
			.setErrorRoutes()
			.listen(SERVER_CONFIG.port, done);
	});

	// Close the server connection when the tests are complete
	afterAll(done => {
		// Restore any temp mocks
		patientResolver.getPatientInstance = originalGetPatientInstance;
		patientResolver.getPatient = originalGetPatient;
		// Cleanup the server connection
		server.close(done);
	});

	test(instanceTests.simple.description, async () => {
		expect.assertions(1);
		let results = await superagent
			.get(path.posix.join(baseUrl, instanceTests.simple.url))
			.then(res => res.body);

		expect(results).toMatchObject(instanceTests.simple.output);
	});

	test(rootTests.simple.description, async () => {
		expect.assertions(1);
		let results = await superagent
			.get(path.posix.join(baseUrl, rootTests.simple.url))
			.then(res => res.body);

		expect(results).toMatchObject(rootTests.simple.output);
	});

});
