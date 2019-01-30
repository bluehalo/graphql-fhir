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
We expose a couple of different options for configuring the server. You can change what features are enabled by altering how the server is built in `src/index.js`, or you can modify the default server configurations in `src/config.js` which are outlined below.

### In `src/config.js`

#### `VERSION`
You can configure which version you want to support here. The values should never be too generic, like DSTU2 for example, rather they should be very specific, like 1_0_2. We used underscores instead of dots since we use this value for url's, directories, and JSON properties. Default supports DSTU2 (1_0_2) and STU3 (3_0_1).

#### `SERVER_CONFIG`
- **defaultVersion** - This is the default version of a resource to fall back on. This is mostly used for the case of an internal server error or a 404 error. Since we cannot reliably determine which version the request was intended for (without inspecting headers), we use this to know which version of an OperationOutcome to respond with.
- **port** - Port the server will listen on for incoming connections. Default is 3000.
- **logging** - Place to put logging configurations. Currently only level is allowed, but we intend to add more in the future. You can also customize the logger in `src/lib/logger` to add support for whatever you need.
- **auth** - Various configurations for authentication.
	- **name** - Name of the strategy to use for passport
	- **strategy** - Path to your strategy
	- **passportOptions** - Options object passed directly into passport.

#### `DATE_CONFIG`
Be careful when modifying any of these, this is for formatting dates coming in and out of the server via GraphQL. Whatever format you change this to needs to be compatible with the structure definitions hosted on FHIR's website.

- **dateFormat** - Used in custom scalars for formatting date strings.
- **timeFormat** - Used in custom scalars for formatting time strings.
- **dateTimeFormat** - Used in custom scalars for formatting date time strings.

#### `RESOURCE_CONFIG`
This should not be modified, it is used by the server to discover profiles and their capabilities.

## Authentication
Authentication is implemented based on the [SMART App Authorization Guide](http://docs.smarthealthit.org/authorization/) and enabled by default. For your convenience, the graphiql endpoint does not use auth and is only enabled during development mode which will make it much easier for local testing. 

The way it works is our server will parse the bearer token from headers and then send the token back to the introspection url along with the client id and client secret to validate the token. If the token is valid, the scopes will be used to validate access to all resources.  For example, let's say Joe logs in to some app that uses this server as a backend. He authenticates with the application and then tries to load up a dashboard full of data. When the request comes to this server, we will take the token provided by the app, validate it, then check the scopes associated with it before returning any data. If Joe has enough scope to view the resources requested, they will be returned, otherwise, an insufficient scope error will be returned.

To set all this up in our server, you only need to define a few environment variables. However, you will need a valid auth server with an introspection endpoint available. This must be used to prevent someone from resigning a token after modifying it or some other man in the middle type attacks. We already wrote our own bearer strategy, [https://github.com/Asymmetrik/phx-tools/tree/master/packages/sof-strategy](https://github.com/Asymmetrik/phx-tools/tree/master/packages/sof-strategy), that will utilize the introspection endpoint. You can use it, customize it, or add your own passport strategies (writing your own requires more customization). The three environment variables you need to define are `CLIENT_ID`, `CLIENT_SECRET`, and `INTROSPECTION_URL`.

That's it. Remember authentication is enabled by default and will throw an error if you attempt to query the graphql endpoint without setting those three environment variables. If you want to disable auth completely, see below.

### Disabling Authentication
There are two things you will need to do to if you want to disable authentication. We are using [https://github.com/Asymmetrik/phx-tools/tree/master/packages/sof-strategy](https://github.com/Asymmetrik/phx-tools/tree/master/packages/sof-strategy) and [https://github.com/Asymmetrik/phx-tools/tree/master/packages/sof-graphql-invariant](https://github.com/Asymmetrik/phx-tools/tree/master/packages/sof-graphql-invariant).

To disable the strategy, just remove the name or strategy from `src/config.js` under the `SERVER_CONFIG.auth` property or remove the `configurePassport` call in `src/index.js`. This enables the authentication piece.

To disable the scope invariant, or the authorization piece, change the feature flags in `src/environment.js` for the environment you want to disable it in from true to false. For example, change `process.env.SOF_AUTHENTICATION = true;` to `process.env.SOF_AUTHENTICATION = false;`. This tells the scopeInvariantResolver to not do any scope checking, which only works if SMART is enabled.

## Resolvers
You can read a little bit about GraphQL resolvers on  [graphql.org](https://graphql.org/learn/execution/#root-fields-resolvers). Resolvers are where you return data back for the API and it needs to be in the correct format. GraphQL will attempt to coerce data types being resolved when possible, but if you return an invalid property, it will throw an error. You can return an object, array of objects, promise, or an array or promises and GraphQL will just handle it. All of the resolvers are located in `src/resources/{version}/profiles/{profile_name}/resolver.js`.

All of the resolver's contain stubs that just need to be filled in, so all you need to do is start writing queries and returning FHIR resources. Here is a very trivial example of reading a patient from a local filesystem and returning it via a graphql resolver.

```javascript
// In src/resources/3_0_1/profiles/patient/resolver.js
module.exports.getPatient = function getPatient (root, args, ctx, info) {
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

module.exports.getPatient = function getPatient (root, args, ctx, info) {
  let db = ctx.server.db;
  let version = ctx.version;
  let logger = ctx.server.logger;

  return new Promise((resolve, reject) => {
    // Query MongoDB
    db.patients.findOne({ _id: args._id }, (err, patient) => {
      // Errors need to be formatted in a specific way, you can see more
      // of en explanation on this in the Error handling section below
      if (err) {
        logger.error(err);
        let error = errorUtils.internal(version, err.message);
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
By default, we support almost all the resources from R4(4.0.0), STU3(3.0.1), and DSTU2(1.0.2). Since most teams will not need to support all the resources for all three versions, we make it very easy to disable resources or even entire versions. Furthermore, you can disable operations at the resource level incase you only want to support read or something similar.

### Version configuration
To configure which version you want to support, add/remove a value to the `VERSION` constant in `src/config.js`. You just need to make sure you have a corresponding set of resources in `src/resources`. So if you only want to support R4, just remove the `1_0_2` and `3_0_1` entries.

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

## Metadata Query
You can't perform metadata queries and get back capability statements like you would in a standard REST FHIR server. What you can do is use introspection queries to ask the server to describe all or some of it's schemas, queries, and/or mutations. In fact, this is what the graphiql endpoint does for you and how it generates the interactive documentation ([http://localhost:3000/3_0_1/$graphiql](http://localhost:3000/3_0_1/$graphiql)). While Graphiql is a nice tool for the developer to explore the API he is building, it is not often exposed in production and other developers will need to introspect your api through other means. This typically requires a GET or POST request to the graphql server with a `__type` or `__schema` query. Below you will find some examples of a couple of different queries and even a snippet for generating a graphql schema file for the relay compiler (If you are using relay modern on the front end).

**NOTE**: All these examples are providing the query string to use, not the full request. Your request should include this as a query argument, e.g. `query=<query string here>`.

List all queries:

```graphql
{
  __type(name:"Query"){
    name
    kind
    fields{
      name
    }
  }
}
```

List all mutations:

```graphql
{
  __type(name:"Mutation"){
    name
    kind
    fields{
      name
    }
  }  
}
```

For a more complete list which include's all their arguments and return fields, try this (for our example server, this returns almost 50,000 lines of JSON):

```graphql
query TypeIntrospectionQuery{
  # Can also use __type(name:"Mutation"){ 
  __type(name:"Query"){
    kind
    name
    description
    fields(includeDeprecated:true){
      name
      description
      args{
        ...InputValue
      }
      type{
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    enumValues{
      name
      description
      isDeprecated
      deprecationReason
    }
    inputFields{
      ...InputValue
    }
    interfaces{
      ...TypeRef
    }
    possibleTypes{
      ...TypeRef
    }
  }
}

fragment InputValue on __InputValue {
  name
  description
  type { ...TypeRef }
  defaultValue
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}
```

Finally, here is a little snippet for how to query and generate a graphql schema file for relay, written in javascript. You can use this to generate types or introspect the entire endpoint in one go. Note, for a fully implemented FHIR server, the generated file will be close to 100,000 lines.

```javascript
// requires graphql to be installed via yarn add graphql
const {
  introspectionQuery,
  buildClientSchema,
  printSchema
} = require('graphql/utilities');
// requires node-fetch to be installed via yarn add node-fetch
const fetch = require('node-fetch');
const fs = require('fs');
// Change the url to the GraphQL url
fetch('http://localhost:3000/3_0_1/$graphiql', {
  headers: {
    'content-type': 'application/json',
    'accept': 'application/json'
  },
  body: JSON.stringify({ query: introspectionQuery }),
  method: 'POST'
})
.then(response => response.json())
.then(response => {
  let schema = printSchema(buildClientSchema(response.data));
  fs.writeFileSync('fhir-3_0_1.graphql', schema);
})
.catch(err => console.error('Unable to generate schema'))
```

## Querying a Union
When you query any of the list resources, the return format is a bundle-like resource, which can contain one of many types of resources. In GraphQL, these are called unions and GraphQL has a unique way to query against unions using fragments (currently only a ResourceList type will be a union in this repo). When you ask for a `Bundle.entry[n].resource`, you have to tell GraphQL which type of resource the fields you want belong to. Here is an example GraphQL query on a PatientList:

```graphql
{
  PatientList(gender:"male",name:"Joe"){
    entry {
      resource {
        ... on Patient {
          resourceType
          id
          gender
          name { given }
        }
      }
    }
  }
}
```

Since PatientList returns a bundle, we ask for the `entry` property in the bundle which is an array of objects that contains a `resource` property. This resource property is a `ResourceList` type so when querying it you need to use fragments, otherwise, you cannot get properties from the resource. See [https://graphql.org/learn/schema/#union-types](https://graphql.org/learn/schema/#union-types) for more information on Union types.
