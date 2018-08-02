const { GraphQLInputObjectType, GraphQLNonNull, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationRequestSubstitution Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationRequestSubstitution_Input',
	description: 'Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen. This block explains the prescriber\'s intent. If nothing is specified substitution may be done.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		allowed: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'True if the prescriber allows a different drug to be dispensed from what was prescribed.'
		},
		_allowed: {
			type: require('./element.input'),
			description: 'True if the prescriber allows a different drug to be dispensed from what was prescribed.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-SubstanceAdminSubstitutionReason
		reason: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the reason for the substitution, or why substitution must or must not be performed.'
		}
	})
});
