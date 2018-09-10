const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Bundle.entry.search Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'BundleEntrySearch_Input',
	description: 'Information about the search process that lead to the creation of this entry.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/search-entry-mode
		mode: {
			type: CodeScalar,
			description: 'Why this entry is in the result set - whether it\'s included as a match or because of an _include requirement.'
		},
		_mode: {
			type: require('./element.input'),
			description: 'Why this entry is in the result set - whether it\'s included as a match or because of an _include requirement.'
		},
		score: {
			type: GraphQLFloat,
			description: 'When searching, the server\'s search ranking score for the entry.'
		},
		_score: {
			type: require('./element.input'),
			description: 'When searching, the server\'s search ranking score for the entry.'
		}
	})
});
