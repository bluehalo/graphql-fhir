const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary MedicationDispensesubstitution Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationDispensesubstitution_Input',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActSubstanceAdminSubstitutionCode
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'A code signifying whether a different drug was dispensed from what was prescribed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-SubstanceAdminSubstitutionReason
		reason: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Indicates the reason for the substitution of (or lack of substitution) from what was prescribed.',
		},
		responsibleParty: {
			type: new GraphQLList(GraphQLString),
			description:
				'The person or organization that has primary responsibility for the substitution.',
		},
	}),
});
