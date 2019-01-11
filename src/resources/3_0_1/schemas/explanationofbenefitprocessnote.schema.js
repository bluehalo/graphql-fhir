const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ExplanationOfBenefitprocessNote Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitprocessNote',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_number: {
			type: require('./element.schema.js'),
			description:
				'An integer associated with each note which may be referred to from each service line item.',
		},
		number: {
			type: PositiveIntScalar,
			description:
				'An integer associated with each note which may be referred to from each service line item.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/note-type
		type: {
			type: require('./codeableconcept.schema.js'),
			description: 'The note purpose: Print/Display.',
		},
		_text: {
			type: require('./element.schema.js'),
			description: 'The note text.',
		},
		text: {
			type: GraphQLString,
			description: 'The note text.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: require('./codeableconcept.schema.js'),
			description:
				"The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. 'en' for English, or 'en-US' for American English versus 'en-EN' for England English.",
		},
	}),
});
