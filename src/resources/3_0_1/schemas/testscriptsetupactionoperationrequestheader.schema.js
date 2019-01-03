const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary TestScript.setup.action.operation.requestHeader Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptSetupActionOperationRequestHeader',
	description: 'Header elements would be used to set HTTP headers.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		field: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The HTTP header field e.g. \'Accept\'.'
		},
		_field: {
			type: require('./element.schema'),
			description: 'The HTTP header field e.g. \'Accept\'.'
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value of the header e.g. \'application/fhir+xml\'.'
		},
		_value: {
			type: require('./element.schema'),
			description: 'The value of the header e.g. \'application/fhir+xml\'.'
		}
	})
});
