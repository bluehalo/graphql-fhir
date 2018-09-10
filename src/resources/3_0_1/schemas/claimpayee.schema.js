const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Claim.payee Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimPayee',
	description: 'The party to be reimbursed for the services.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/payeetype
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Type of Party to be reimbursed: Subscriber, provider, other.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ex-payee-resource-type
		resourceType: {
			type: require('./coding.schema'),
			description: 'organization | patient | practitioner | relatedperson.'
		},
		party: {
			type: require('./reference.schema'),
			description: 'Party to be reimbursed: Subscriber, provider, other.'
		}
	})
});
