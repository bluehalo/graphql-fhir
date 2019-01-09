const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveInt.scalar.js');
const DateTimeScalar = require('../scalars/dateTime.scalar.js');

/**
 * @name exports
 * @summary ExplanationOfBenefitprocedure Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitprocedure_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
		_sequence: {
			type: require('./element.input.js'),
			description:
				'Sequence of procedures which serves to order and provide a link.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description:
				'Sequence of procedures which serves to order and provide a link.',
		},
		_date: {
			type: require('./element.input.js'),
			description: 'Date and optionally time the procedure was performed .',
		},
		date: {
			type: DateTimeScalar,
			description: 'Date and optionally time the procedure was performed .',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/icd-10-procedures
		procedureCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description: 'The procedure code.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/icd-10-procedures
		procedureReference: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The procedure code.',
		},
	}),
});
