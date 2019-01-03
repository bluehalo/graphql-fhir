const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Contract.signer Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ContractSigner_Input',
	description: 'Party signing this Contract.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-signer-type
			type: {
				type: new GraphQLNonNull(require('./coding.input')),
				description: 'Role of this Contract signer, e.g. notary, grantee.',
			},
			party: {
				type: new GraphQLNonNull(require('./reference.input')),
				description: 'Party which is a signator to this Contract.',
			},
			signature: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'Legally binding Contract DSIG signature contents in Base64.',
			},
			_signature: {
				type: require('./element.input'),
				description:
					'Legally binding Contract DSIG signature contents in Base64.',
			},
		}),
});
