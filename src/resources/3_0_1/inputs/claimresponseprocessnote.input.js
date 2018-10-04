const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimResponse.processNote Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponseProcessNote_Input',
	description: 'Note text.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		number: {
			type: PositiveIntScalar,
			description: 'An integer associated with each note which may be referred to from each service line item.'
		},
		_number: {
			type: require('./element.input'),
			description: 'An integer associated with each note which may be referred to from each service line item.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/note-type
		type: {
			type: require('./codeableconcept.input'),
			description: 'The note purpose: Print/Display.'
		},
		text: {
			type: GraphQLString,
			description: 'The note text.'
		},
		_text: {
			type: require('./element.input'),
			description: 'The note text.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: require('./codeableconcept.input'),
			description: 'The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. \'en\' for English, or \'en-US\' for American English versus \'en-EN\' for England English.'
		}
	})
});
