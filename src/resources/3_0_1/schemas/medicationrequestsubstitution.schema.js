const { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationRequestSubstitution Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationRequestSubstitution',
	description: 'Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen. This block explains the prescriber\'s intent. If nothing is specified substitution may be done.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		allowed: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'True if the prescriber allows a different drug to be dispensed from what was prescribed.'
		},
		_allowed: {
			type: require('./element.schema'),
			description: 'True if the prescriber allows a different drug to be dispensed from what was prescribed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-SubstanceAdminSubstitutionReason
		reason: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates the reason for the substitution, or why substitution must or must not be performed.'
		}
	})
});
