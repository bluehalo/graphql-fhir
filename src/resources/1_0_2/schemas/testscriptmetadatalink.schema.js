const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScriptMetadataLink Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptMetadataLink',
	description: 'A link to the FHIR specification that this test is covering.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'URL to a particular requirement or feature within the FHIR specification.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'URL to a particular requirement or feature within the FHIR specification.'
		},
		description: {
			type: GraphQLString,
			description: 'Short description of the link.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Short description of the link.'
		}
	})
});
