const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary AccountCoverage Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AccountCoverage_Input',
	description: 'The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		coverage: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The party(s) that are responsible for payment (or part of) of charges applied to this account (including self-pay).  A coverage may only be resposible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.'
		},
		priority: {
			type: PositiveIntScalar,
			description: 'The priority of the coverage in the context of this account.'
		},
		_priority: {
			type: require('./element.input'),
			description: 'The priority of the coverage in the context of this account.'
		}
	})
});
