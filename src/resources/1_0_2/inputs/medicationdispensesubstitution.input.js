const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary MedicationDispense.substitution Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationDispenseSubstitution_Input',
	description:
		'Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActSubstanceAdminSubstitutionCode
			type: {
				type: new GraphQLNonNull(require('./codeableconcept.input')),
				description:
					'A code signifying whether a different drug was dispensed from what was prescribed.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-SubstanceAdminSubstitutionReason
			reason: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'Indicates the reason for the substitution of (or lack of substitution) from what was prescribed.',
			},
			responsibleParty: {
				type: new GraphQLList(require('./reference.input')),
				description:
					'The person or organization that has primary responsibility for the substitution.',
			},
		}),
});
