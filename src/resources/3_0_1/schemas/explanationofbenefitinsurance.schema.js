const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExplanationOfBenefitInsurance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitInsurance',
	description: 'Financial instrument by which payment information for health care.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		coverage: {
			type: require('./reference.schema'),
			description: 'Reference to the program or plan identification, underwriter or payor.'
		},
		preAuthRef: {
			type: new GraphQLList(GraphQLString),
			description: 'A list of references from the Insurer to which these services pertain.'
		},
		_preAuthRef: {
			type: require('./element.schema'),
			description: 'A list of references from the Insurer to which these services pertain.'
		}
	})
});
