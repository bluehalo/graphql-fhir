const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary AuditEvent.object.detail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEventObjectDetail_Input',
	description: 'Additional Information about the Object.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		type: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Name of the property.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Name of the property.'
		},
		value: {
			type: new GraphQLNonNull(Base64BinaryScalar),
			description: 'Property value.'
		},
		_value: {
			type: require('./element.input'),
			description: 'Property value.'
		}
	})
});
