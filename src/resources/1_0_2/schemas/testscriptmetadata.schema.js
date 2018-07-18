const { GraphQLObjectType, GraphQLList, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary TestScriptMetadata Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptMetadata',
	description: 'The required capability must exist and are assumed to function correctly on the FHIR server being tested.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		link: {
			type: new GraphQLList(require('./testscriptmetadatalink.schema')),
			description: 'A link to the FHIR specification that this test is covering.'
		},
		capability: {
			type: new GraphQLList(new GraphQLNonNull(require('./testscriptmetadatacapability.schema'))),
			description: 'Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.'
		}
	})
});
