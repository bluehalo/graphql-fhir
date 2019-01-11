const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MedicationRequestsubstitution Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationRequestsubstitution_Input',
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
		_allowed: {
			type: require('./element.input.js'),
			description:
				'True if the prescriber allows a different drug to be dispensed from what was prescribed.',
		},
		allowed: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'True if the prescriber allows a different drug to be dispensed from what was prescribed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-SubstanceAdminSubstitutionReason
		reason: {
			type: require('./codeableconcept.input.js'),
			description:
				'Indicates the reason for the substitution, or why substitution must or must not be performed.',
		},
	}),
});
