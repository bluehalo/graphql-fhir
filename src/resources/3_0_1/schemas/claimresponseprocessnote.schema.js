const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimResponse.processNote Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseProcessNote',
	description: 'Note text.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		number: {
			type: PositiveIntScalar,
			description: 'An integer associated with each note which may be referred to from each service line item.'
		},
		_number: {
			type: require('./element.schema'),
			description: 'An integer associated with each note which may be referred to from each service line item.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/note-type
		type: {
			type: require('./codeableconcept.schema'),
			description: 'The note purpose: Print/Display.'
		},
		text: {
			type: GraphQLString,
			description: 'The note text.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'The note text.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: require('./codeableconcept.schema'),
			description: 'The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. \'en\' for English, or \'en-US\' for American English versus \'en-EN\' for England English.'
		}
	})
});
