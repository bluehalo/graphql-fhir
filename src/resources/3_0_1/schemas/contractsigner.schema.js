const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ContractSigner Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContractSigner',
	description: 'Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-signer-type
		type: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'Role of this Contract signer, e.g. notary, grantee.'
		},
		party: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Party which is a signator to this Contract.'
		},
		signature: {
			type: new GraphQLList(new GraphQLNonNull(require('./signature.schema'))),
			description: 'Legally binding Contract DSIG signature contents in Base64.'
		}
	})
});
