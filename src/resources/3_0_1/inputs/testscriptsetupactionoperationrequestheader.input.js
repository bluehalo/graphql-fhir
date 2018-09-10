const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScript.setup.action.operation.requestHeader Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptSetupActionOperationRequestHeader_Input',
	description: 'Header elements would be used to set HTTP headers.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		field: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The HTTP header field e.g. \'Accept\'.'
		},
		_field: {
			type: require('./element.input'),
			description: 'The HTTP header field e.g. \'Accept\'.'
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value of the header e.g. \'application/fhir+xml\'.'
		},
		_value: {
			type: require('./element.input'),
			description: 'The value of the header e.g. \'application/fhir+xml\'.'
		}
	})
});
