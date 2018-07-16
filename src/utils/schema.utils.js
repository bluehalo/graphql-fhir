const { coerceValue } = require('graphql/utilities');

/**
 * @name extendSchema
 * @summary Extend Schemas
 * @description Can take a GraphQL Schema or a simple object.
 * This currently only grabs the type, description, and resolve properties.
 * We can add more properties as necessary.
 */
const extendSchema = (...args) => {
	return args.reduce((all, arg) => {
		// extendSchema accepts a schema or a simple json object
		let fields = arg.getFields ? arg.getFields() : arg;
		let properties = Object.getOwnPropertyNames(fields);
		// Iterate over our props and add each field
		properties.forEach(prop => {
			all[prop] = {
				type: fields[prop].type,
				description: fields[prop].description
			};
			// Add a resolve property if it exists
			if (fields[prop].resolve) {
				all[prop].resolve = fields[prop].resolve;
			}
		});
		// Return the object we are building up
		return all;
	}, {});
};

/**
 * @name mapJsonToSchema
 * @summary Coerce JSON to schema values or return errors if value is incorrect
 */
const mapJsonToSchema = (json, graphqlInputObject) =>
	coerceValue(json, graphqlInputObject);

module.exports = {
	extendSchema,
	mapJsonToSchema
};
