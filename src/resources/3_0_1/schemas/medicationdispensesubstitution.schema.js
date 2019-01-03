const { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary MedicationDispense.substitution Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationDispenseSubstitution',
	description: 'Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		wasSubstituted: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'True if the dispenser dispensed a different drug or product from what was prescribed.'
		},
		_wasSubstituted: {
			type: require('./element.schema'),
			description: 'True if the dispenser dispensed a different drug or product from what was prescribed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActSubstanceAdminSubstitutionCode
		type: {
			type: require('./codeableconcept.schema'),
			description: 'A code signifying whether a different drug was dispensed from what was prescribed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-SubstanceAdminSubstitutionReason
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
