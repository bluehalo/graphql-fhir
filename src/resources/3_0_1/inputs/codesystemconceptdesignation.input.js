const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CodeSystem.concept.designation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CodeSystemConceptDesignation_Input',
	description: 'Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The language this designation is defined for.'
		},
		_language: {
			type: require('./element.input'),
			description: 'The language this designation is defined for.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/designation-use
		use: {
			type: require('./coding.input'),
			description: 'A code that details how this designation would be used.'
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The text value for this designation.'
		},
		_value: {
			type: require('./element.input'),
			description: 'The text value for this designation.'
		}
	})
});
