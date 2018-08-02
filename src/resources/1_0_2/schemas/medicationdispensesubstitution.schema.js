const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationDispenseSubstitution Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationDispenseSubstitution',
	description: 'Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActSubstanceAdminSubstitutionCode
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'A code signifying whether a different drug was dispensed from what was prescribed.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-SubstanceAdminSubstitutionReason
		reason: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Indicates the reason for the substitution of (or lack of substitution) from what was prescribed.'
		},
		responsibleParty: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The person or organization that has primary responsibility for the substitution.'
		}
	})
});
