const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExplanationOfBenefit.related Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitRelated_Input',
	description: 'Other claims which are related to this claim such as prior claim versions or for related services.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		claim: {
			type: require('./reference.input'),
			description: 'Other claims which are related to this claim such as prior claim versions or for related services.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/related-claim-relationship
		relationship: {
			type: require('./codeableconcept.input'),
			description: 'For example prior or umbrella.'
		},
		reference: {
			type: require('./identifier.input'),
			description: 'An alternate organizational reference to the case or file to which this particular claim pertains - eg Property/Casualy insurer claim # or Workers Compensation case # .'
		}
	})
});
