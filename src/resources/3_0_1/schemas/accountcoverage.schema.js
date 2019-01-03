const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Account.coverage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AccountCoverage',
	description: 'The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		coverage: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The party(s) that are responsible for payment (or part of) of charges applied to this account (including self-pay).  A coverage may only be resposible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.'
		},
		priority: {
			type: PositiveIntScalar,
			description: 'The priority of the coverage in the context of this account.'
		},
		_priority: {
			type: require('./element.schema'),
			description: 'The priority of the coverage in the context of this account.'
		}
	})
});
