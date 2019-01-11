const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary ClaimmissingTeeth Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimmissingTeeth_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/teeth
		tooth: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description: 'The code identifying which tooth is missing.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/missing-tooth-reason
		reason: {
			type: require('./coding.input.js'),
			description: 'Missing reason may be: E-extraction, O-other.',
		},
		_extractionDate: {
			type: require('./element.input.js'),
			description:
				'The date of the extraction either known from records or patient reported estimate.',
		},
		extractionDate: {
			type: DateScalar,
			description:
				'The date of the extraction either known from records or patient reported estimate.',
		},
	}),
});
