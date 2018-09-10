const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary AuditEvent.entity.detail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AuditEventEntityDetail',
	description: 'Tagged value pairs for conveying additional information about the entity.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		type: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The type of extra detail provided in the value.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type of extra detail provided in the value.'
		},
		value: {
			type: new GraphQLNonNull(Base64BinaryScalar),
			description: 'The details, base64 encoded. Used to carry bulk information.'
		},
		_value: {
			type: require('./element.schema'),
			description: 'The details, base64 encoded. Used to carry bulk information.'
		}
	})
});
