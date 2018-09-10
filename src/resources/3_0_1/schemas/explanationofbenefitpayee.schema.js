const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExplanationOfBenefit.payee Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitPayee',
	description: 'The party to be reimbursed for the services.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/payeetype
		type: {
			type: require('./codeableconcept.schema'),
			description: 'Type of Party to be reimbursed: Subscriber, provider, other.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-type-link
		resourceType: {
			type: require('./codeableconcept.schema'),
			description: 'organization | patient | practitioner | relatedperson.'
		},
		party: {
			type: require('./reference.schema'),
			description: 'Party to be reimbursed: Subscriber, provider, other.'
		}
	})
});
