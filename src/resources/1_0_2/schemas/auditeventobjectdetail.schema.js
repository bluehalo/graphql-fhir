const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary AuditEvent.object.detail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AuditEventObjectDetail',
	description: 'Additional Information about the Object.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			type: {
				type: new GraphQLNonNull(GraphQLString),
				description: 'Name of the property.',
			},
			_type: {
				type: require('./element.schema'),
				description: 'Name of the property.',
			},
			value: {
				type: new GraphQLNonNull(Base64BinaryScalar),
				description: 'Property value.',
			},
			_value: {
				type: require('./element.schema'),
				description: 'Property value.',
			},
		}),
});
