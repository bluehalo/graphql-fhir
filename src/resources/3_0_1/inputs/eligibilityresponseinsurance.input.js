const { GraphQLInputObjectType, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary EligibilityResponse.insurance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EligibilityResponseInsurance_Input',
	description: 'The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		coverage: {
			type: require('./reference.input'),
			description: 'A suite of updated or additional Coverages from the Insurer.'
		},
		contract: {
			type: require('./reference.input'),
			description: 'The contract resource which may provide more detailed information.'
		},
		benefitBalance: {
			type: new GraphQLList(require('./eligibilityresponseinsurancebenefitbalance.input')),
			description: 'Benefits and optionally current balances by Category.'
		}
	})
});
