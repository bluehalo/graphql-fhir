const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Claim.payee Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimPayee_Input',
	description: 'The party to be reimbursed for the services.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/payeetype
		type: {
			type: require('./coding.input'),
			description: 'Party to be reimbursed: Subscriber, provider, other.'
		},
		provider: {
			type: require('./reference.input'),
			description: 'The provider who is to be reimbursed for the claim (the party to whom any benefit is assigned).'
		},
		organization: {
			type: require('./reference.input'),
			description: 'The organization who is to be reimbursed for the claim (the party to whom any benefit is assigned).'
		},
		person: {
			type: require('./reference.input'),
			description: 'The person other than the subscriber who is to be reimbursed for the claim (the party to whom any benefit is assigned).'
		}
	})
});
