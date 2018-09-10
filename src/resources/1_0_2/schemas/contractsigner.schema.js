const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Contract.signer Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContractSigner',
	description: 'Party signing this Contract.',
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
			type: new GraphQLNonNull(GraphQLString),
			description: 'Legally binding Contract DSIG signature contents in Base64.'
		},
		_signature: {
			type: require('./element.schema'),
			description: 'Legally binding Contract DSIG signature contents in Base64.'
		}
	})
});
