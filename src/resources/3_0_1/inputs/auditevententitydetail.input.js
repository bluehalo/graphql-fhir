const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary AuditEvent.entity.detail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEventEntityDetail_Input',
	description: 'Tagged value pairs for conveying additional information about the entity.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		type: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The type of extra detail provided in the value.'
		},
		_type: {
			type: require('./element.input'),
			description: 'The type of extra detail provided in the value.'
		},
		value: {
			type: new GraphQLNonNull(Base64BinaryScalar),
			description: 'The details, base64 encoded. Used to carry bulk information.'
		},
		_value: {
			type: require('./element.input'),
			description: 'The details, base64 encoded. Used to carry bulk information.'
		}
	})
});
