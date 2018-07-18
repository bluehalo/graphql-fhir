const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ClaimPayee Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimPayee_Input',
	description: 'The party to be reimbursed for the services.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/payeetype
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Type of Party to be reimbursed: Subscriber, provider, other.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ex-payee-resource-type
		resourceType: {
			type: require('./coding.input'),
			description: 'organization | patient | practitioner | relatedperson.'
		},
		party: {
			type: require('./reference.input'),
			description: 'Party to be reimbursed: Subscriber, provider, other.'
		}
	})
});
