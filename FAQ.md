Frequently Asked Questions
==========================

## Commands
There are four commands defined in the package.json you can run via yarn or npm. They are as follows:

#### `start`
This starts the server with no special flags. This will eventually become the default way to start the server in production mode.

#### `nodemon`
This starts the server in a 'development' mode. It will watch all the files in the `src` directory and restart on any changes. You can see and tweak the nodemon configurations in `src/scripts/nodemon`.

#### `test`
This runs `node src/scripts/test --env=jsdom`. We are using [jest](https://jestjs.io/) as our test framework. By default, it runs in watch mode unless you call it with the coverage flag (`yarn test --coverage`). Any valid jest argument can be passed through when invoking with yarn. You can configure the test script if you like at `src/scripts/test.js`.

#### `lint`
This runs eslint once on all files matching `src/**/*.js`.

## Server configuration

## Authentication

## Resolvers
You can read a little bit about GraphQL resolvers on  [graphql.org](https://graphql.org/learn/execution/#root-fields-resolvers). Resolvers are where you return data back for the API and it needs to be in the correct format. GraphQL will attempt to coerce data types being resolved when possible, but if you return an invalid property, it will throw an error. You can return an object, array of objects, promise, or an array or promises and GraphQL will just handle it. All of the resolvers are located in `src/resources/{version}/profiles/{profile_name}/resolver.js`.

All of the resolver's contain stubs that just need to be filled in, so all you need to do is start writing queries and returning FHIR resources. Here is a very trivial example of reading a patient from a local filesystem and returning it via a graphql resolver.

```javascript
// In src/resources/3_0_1/profiles/patient/resolver.js
module.exports.patientResolver = function patientResolver (root, args, ctx, info) {
	// This is not very realistic, but just giving you a simple idea of how
	// this works
	let id = args._id;
	let path = `patients/${id}.json`;
	// If we did this synchronously
	return require(path);
	// If we wanted to do this asynchronously
	return new Promise((resolve, reject) {
		let patient;
		try {
			patient = require(path);
		} catch (err) {
			let error = errorUtils.internal(ctx.version, 'Patient not found');
			return reject(errorUtils.formatErrorForGraphQL(error));
		}
		return resolve(patient);
	});
}
```

## Connecting to a Database
Theoretically we support any database that is supported via node.js. If there is a node module that can connect to it, then we can support it. Connecting to a database will require a few steps to get up and running (don't worry, there is a description of the steps below with some example code connecting to MongoDB).

First, you will need to implement the `initializeDatabaseConnection` method in `src/lib/server`. This needs to establish a connection and store the client somewhere. This can be asynchronous or synchronous, it doesn't really matter. You just need to use it correctly in the next step.

```javascript
const { MongoClient } = require('mongodb');

class Server {
	initializeDatabaseConnection(options ={}) {
		// Connecting to Mongo is async
		// Let's handle this with a promise
		return new Promise((resolve, reject) => {
			let {
				url,
				db_name,
				mongo_options
			} = options;
			
			MongoClient.connect(url, mongo_options, (err, client) => {
				if (err) return reject(err);
				// Store the client and db on the server instance,
				// the server instance is passed into the resolvers
				// so it will make accessing this later a breeze
				this.client = client;
				this.db = client.db(db_name);
				return resolve();
			});
		});
	}
}
```

Next, in `src/index.js`, initialize the connection before starting your server. Once you have connected, you can call the `server.listen` method to start listening for requests.

```javascript
const { SERVER_CONFIG } = require('./config');
const FHIRServer = require('./lib/server');

// Start buliding our server
let server = new FHIRServer(SERVER_CONFIG)
	.configureMiddleware()
	.configurePassport()
	.configureHelmet()
	.setProfileRoutes()
	.setErrorRoutes();
	
server.initializeDatabaseConnection({
	url: 'mongodb://' + mongo_hostname,
	db_name: 'my_mongo_database_name',
	mongo_options: { auto_reconnect: true }
}).then(() => {
	server.listen(SERVER_CONFIG.port);
	server.logger.info('FHIR Server listening on localhost:' + SERVER_CONFIG.port);
}).catch(err => {
	server.logger.error('Fatal Error connecting to Mongo.');
});
```

Finally, grab the connnection or client in your resolvers so you can start working with your database. Depending how you stored the connection/client in the first step, the implementation here may change slightly. For example, here is what it might look like in a 3.0.1 patient resolver.

```javascript
// In src/resources/3_0_1/profiles/patient/resolver.js
const errorUtils = require('../../../../utils/error.utils'); 

module.exports.patientResolver = function patientResolver (root, args, ctx, info) {
	let db = ctx.server.db;
	let version = ctx.version;
	let logger = ctx.server.logger;

	return new Promise((resolve, reject) => {
		// Query MongoDB
		db.findOne({ _id: args._id }, (err, patient) => {
			// Errors need to be formatted in a specific way, you can see more
			// of en explanation on this in the Error handling section below
			if (err) {
				let error = errorUtils.internal(version, err.message);
				logger.error(error);
				reject(errorUtils.formatErrorForGraphQL(error));
			} else {
				resolve(patient);
			}
		});
	});
}
```

That's it! Now you can start writing queries for all your profiles. If you have any more questions feel free to open an issue and tag it with the 'Question' label.

## Error handling
In general, errors should be handled as described in the [Using GraphQL with FHIR](https://build.fhir.org/graphql.html#errors) documentation. In `graphql-fhir` we have already integrated this into our `express` server and the `express-graphql` middleware.

If an unexpected server error or a 404 error happens, the logger logs the event, and the appropriate header(`application/fhir+json`) and response code are sent along with an OperationOutcome. These errors happen outside of the GraphQL middleware which is why we return them as standard OperationOutcome's with the normal headers and response codes.

If an unexpected error happens within the GraphQL middleware, they are logged and wrapped in an OperationOutcome and eventually passed back via GraphQL's errors property, with the OperationOutcome as a resource in the response. If you need to throw an error for any reason, we provide error utilities to help generate an operation outcome and format it for GraphQL. For example, let's say your database connection is temporarily down, in your resolver, you could do something like the following:

```javascript
// Error utils are located in src/utils/error.utils. Depending where
// you are requiring this from, you may need to change the path
const errorUtils = require('../../../../utils/error.utils');

// Provide the version in form 3_0_1 or 1_0_2 so we can create
// the OperationOutcome for the specific version.
let error = errorUtils.internal(version, 'Database connection down');
// Return this or resolve this in your resolvers and GraphQL
// will display it just as you see in the FHIR documentation
let graphqlError = errorUtils.formatErrorForGraphQL(error);
```

We also allow for partial error handling, so you can reject things in one resolver and pass back data in another. For example, let's say a user asks for a patient and an observation, but their account scopes only allow them to read patient records. This means you do not need to reject the entire request, just the parts they are not allowed to access (NOTE: the scope scenario just described is already handled for you automatically if authentication is enabled). In this case, they would see the following response:

```javascript
{
	"errors": [{
		"path": [ "Observation" ],
		"message": "You do not have sufficient scope for read access on this Observation resource.",
		"locations": [{
			"line": 1,
			"column": 32
		}],
		"extensions": {
			"resource": {
				"resourceType": "OperationOutcome",
				"issue": [{
					"severity": "error",
					"code": "forbidden",
					"diagnostics": "You do not have sufficient scope for read access on this Observation resource."
				}]
			}
		}
	}],
  "data": {
		"Patient": {
			"id": "123456789"
		},
		"Observation": null
	}
}
```

## Resource configuration
By default, we support almost all the resources from STU3(3.0.1) and DSTU2(1.0.2). We allow you to turn on or off entire versions very easily. We also allow you to turn off individual profiles or even capabilities within a profile if you desire.

To configure which version you want to support, add/remove a value to the `VERSION` constant in `src/config.js`. You just need to make sure you have a corresponding set of resources in `src/resources`.

In order to explain how to configure a specific profile, let's walk through an example of configuring the patient profile and completely disabling the observation profile for version 1.0.2.

First, let's disable the observation profile. There is two ways you can do this. The quickest is just delete the directory at `src/resources/1_0_2/profiles/observation`. We use globs to discover and enable profiles so by removing this, our server will not be able to discover it and it will not be available in the server. Option number two does not involve deleting it, which may be better if you just need to disable it temporarily. Go to `src/resources/1_0_2/profiles/observation/index.js` and comment out the entire file. This way you can re-enable it later by simply uncommenting it.

Now let's customize the patient profile. Go to `src/resources/1_0_2/profiles/patient/index.js`. There are three top level properties in the exports of these files, `query`, `mutation`, `instance_query`. You can comment out individual properties to disable support for those capabilities. For example:

```javascript
module.exports = {
	query: {
		// Allow individual patient query
		Patient: PatientQuery,
		// Don't allow multiple patient query
		// PatientList: PatientListQuery
	},
	mutation: {
		// Allow create and update
		PatientCreate: PatientCreateMutation,
		PatientUpdate: PatientUpdateMutation,
		// Don't allow delete
		// PatientDelete: PatientDeleteMutation
	},
	// We don't want to support this at all, so we'll comment
	// out the whole thing, this is for /1_0_2/Patient/:id/$graphql
	// instance_query: {
	// 	name: 'Patient',
	// 	path: '/1_0_2/Patient/:id',
	// 	query: PatientInstanceQuery
	// }
};
```

All profiles are the same and can be customized in the same manner.
