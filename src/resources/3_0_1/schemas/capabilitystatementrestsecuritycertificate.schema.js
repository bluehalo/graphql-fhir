const CodeScalar = require('../scalars/code.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CapabilityStatementRestSecurityCertificate Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementRestSecurityCertificate',
	description: 'Certificates associated with security profiles.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		type: {
			type: CodeScalar,
			description: 'Mime type for a certificate.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Mime type for a certificate.'
		},
		blob: {
			type: Base64BinaryScalar,
			description: 'Actual certificate.'
		},
		_blob: {
			type: require('./element.schema'),
			description: 'Actual certificate.'
		}
	})
});
