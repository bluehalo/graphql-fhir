const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScript.metadata.link Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptMetadataLink_Input',
	description: 'A link to the FHIR specification that this test is covering.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'URL to a particular requirement or feature within the FHIR specification.'
		},
		_url: {
			type: require('./element.input'),
			description: 'URL to a particular requirement or feature within the FHIR specification.'
		},
		description: {
			type: GraphQLString,
			description: 'Short description of the link.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Short description of the link.'
		}
	})
});
