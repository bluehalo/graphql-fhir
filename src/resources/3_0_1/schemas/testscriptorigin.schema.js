const { GraphQLObjectType, GraphQLNonNull, GraphQLInt } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary TestScript.origin Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptOrigin',
	description:
		'An abstract server used in operations within this test script in the origin element.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			index: {
				type: new GraphQLNonNull(GraphQLInt),
				description:
					'Abstract name given to an origin server in this test script.  The name is provided as a number starting at 1.',
			},
			_index: {
				type: require('./element.schema'),
				description:
					'Abstract name given to an origin server in this test script.  The name is provided as a number starting at 1.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/testscript-profile-origin-types
			profile: {
				type: new GraphQLNonNull(require('./coding.schema')),
				description: 'The type of origin profile the test system supports.',
			},
		}),
});
