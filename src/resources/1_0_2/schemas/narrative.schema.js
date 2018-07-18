const CodeScalar = require('../scalars/code.scalar');
const XhtmlScalar = require('../scalars/xhtml.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Narrative Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Narrative',
	description: 'Base StructureDefinition for Narrative Type.',
	fields: () => extendSchema({
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/narrative-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the narrative - whether it\'s entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the narrative - whether it\'s entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.'
		},
		div: {
			type: new GraphQLNonNull(XhtmlScalar),
			description: 'The actual narrative content, a stripped down version of XHTML.'
		},
		_div: {
			type: require('./element.schema'),
			description: 'The actual narrative content, a stripped down version of XHTML.'
		}
	})
});
