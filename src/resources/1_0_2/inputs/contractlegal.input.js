const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ContractLegal Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ContractLegal_Input',
	description: 'List of Legal expressions or representations of this Contract.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		contentAttachment: {
			type: new GraphQLNonNull(require('./attachment.input')),
			description: 'Contract legal text in human renderable form.'
		},
		contentReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Contract legal text in human renderable form.'
		}
	})
});
