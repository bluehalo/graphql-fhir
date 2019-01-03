const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Claim.payee Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimPayee',
	description: 'The party to be reimbursed for the services.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/payeetype
			type: {
				type: require('./coding.schema'),
				description: 'Party to be reimbursed: Subscriber, provider, other.',
			},
			provider: {
				type: require('./reference.schema'),
				description:
					'The provider who is to be reimbursed for the claim (the party to whom any benefit is assigned).',
			},
			organization: {
				type: require('./reference.schema'),
				description:
					'The organization who is to be reimbursed for the claim (the party to whom any benefit is assigned).',
			},
			person: {
				type: require('./reference.schema'),
				description:
					'The person other than the subscriber who is to be reimbursed for the claim (the party to whom any benefit is assigned).',
			},
		}),
});
