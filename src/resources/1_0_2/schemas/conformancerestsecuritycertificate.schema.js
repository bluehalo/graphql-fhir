const CodeScalar = require('../scalars/code.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Conformance.rest.security.certificate Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConformanceRestSecurityCertificate',
	description: 'Certificates associated with security profiles.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		type: {
			type: CodeScalar,
			description: 'Mime type for certificate.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Mime type for certificate.'
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
