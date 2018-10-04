const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Contract.signer Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ContractSigner_Input',
	description: 'Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-signer-type
		type: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'Role of this Contract signer, e.g. notary, grantee.'
		},
		party: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Party which is a signator to this Contract.'
		},
		signature: {
			type: new GraphQLList(new GraphQLNonNull(require('./signature.input'))),
			description: 'Legally binding Contract DSIG signature contents in Base64.'
		}
	})
});
