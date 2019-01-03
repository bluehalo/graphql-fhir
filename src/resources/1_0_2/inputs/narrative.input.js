const CodeScalar = require('../scalars/code.scalar');
const XhtmlScalar = require('../scalars/xhtml.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Narrative Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Narrative_Input',
	description: 'Base StructureDefinition for Narrative Type.',
	fields: () => extendSchema(require('./element.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/narrative-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the narrative - whether it\'s entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the narrative - whether it\'s entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.'
		},
		div: {
			type: new GraphQLNonNull(XhtmlScalar),
			description: 'The actual narrative content, a stripped down version of XHTML.'
		},
		_div: {
			type: require('./element.input'),
			description: 'The actual narrative content, a stripped down version of XHTML.'
		}
	})
});
