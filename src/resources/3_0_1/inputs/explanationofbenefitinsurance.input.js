const { GraphQLInputObjectType, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ExplanationOfBenefitInsurance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitInsurance_Input',
	description: 'Financial instrument by which payment information for health care.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		coverage: {
			type: require('./reference.input'),
			description: 'Reference to the program or plan identification, underwriter or payor.'
		},
		preAuthRef: {
			type: new GraphQLList(GraphQLString),
			description: 'A list of references from the Insurer to which these services pertain.'
		},
		_preAuthRef: {
			type: require('./element.input'),
			description: 'A list of references from the Insurer to which these services pertain.'
		}
	})
});
