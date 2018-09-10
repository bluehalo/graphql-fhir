const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary EligibilityResponse.insurance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EligibilityResponseInsurance',
	description: 'The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		coverage: {
			type: require('./reference.schema'),
			description: 'A suite of updated or additional Coverages from the Insurer.'
		},
		contract: {
			type: require('./reference.schema'),
			description: 'The contract resource which may provide more detailed information.'
		},
		benefitBalance: {
			type: new GraphQLList(require('./eligibilityresponseinsurancebenefitbalance.schema')),
			description: 'Benefits and optionally current balances by Category.'
		}
	})
});
