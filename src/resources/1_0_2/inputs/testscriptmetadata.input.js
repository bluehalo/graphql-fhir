const { GraphQLInputObjectType, GraphQLList, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScriptMetadata Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptMetadata_Input',
	description: 'The required capability must exist and are assumed to function correctly on the FHIR server being tested.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		link: {
			type: new GraphQLList(require('./testscriptmetadatalink.input')),
			description: 'A link to the FHIR specification that this test is covering.'
		},
		capability: {
			type: new GraphQLList(new GraphQLNonNull(require('./testscriptmetadatacapability.input'))),
			description: 'Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.'
		}
	})
});
