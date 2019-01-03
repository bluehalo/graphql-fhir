const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Contract.legal Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ContractLegal_Input',
	description: 'List of Legal expressions or representations of this Contract.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			contentAttachment: {
				type: new GraphQLNonNull(require('./attachment.input')),
				description: 'Contract legal text in human renderable form.',
			},
			contentReference: {
				type: new GraphQLNonNull(require('./reference.input')),
				description: 'Contract legal text in human renderable form.',
			},
		}),
});
