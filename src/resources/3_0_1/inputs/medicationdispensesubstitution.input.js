const { GraphQLInputObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationDispenseSubstitution Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationDispenseSubstitution_Input',
	description: 'Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		wasSubstituted: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'True if the dispenser dispensed a different drug or product from what was prescribed.'
		},
		_wasSubstituted: {
			type: require('./element.input'),
			description: 'True if the dispenser dispensed a different drug or product from what was prescribed.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActSubstanceAdminSubstitutionCode
		type: {
			type: require('./codeableconcept.input'),
			description: 'A code signifying whether a different drug was dispensed from what was prescribed.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-SubstanceAdminSubstitutionReason
		reason: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Indicates the reason for the substitution of (or lack of substitution) from what was prescribed.'
		},
		responsibleParty: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The person or organization that has primary responsibility for the substitution.'
		}
	})
});
