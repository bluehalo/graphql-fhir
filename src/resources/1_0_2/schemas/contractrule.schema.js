const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Contract.rule Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContractRule',
	description: 'List of Computable Policy Rule Language Representations of this Contract.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		contentAttachment: {
			type: new GraphQLNonNull(require('./attachment.schema')),
			description: 'Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).'
		},
		contentReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).'
		}
	})
});
