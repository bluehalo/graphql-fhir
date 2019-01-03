const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary MedicationOrder.substitution Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationOrderSubstitution',
	description:
		"Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen, and in others it does not matter. This block explains the prescriber's intent. If nothing is specified substitution may be done.",
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActSubstanceAdminSubstitutionCode
			type: {
				type: new GraphQLNonNull(require('./codeableconcept.schema')),
				description:
					'A code signifying whether a different drug should be dispensed from what was prescribed.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-SubstanceAdminSubstitutionReason
			reason: {
				type: require('./codeableconcept.schema'),
				description:
					'Indicates the reason for the substitution, or why substitution must or must not be performed.',
			},
		}),
});
