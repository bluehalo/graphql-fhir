const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary MessageHeader.destination Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageHeaderDestination',
	description: 'The destination application which the message is intended for.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: GraphQLString,
			description: 'Human-readable name for the target system.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'Human-readable name for the target system.'
		},
		target: {
			type: require('./reference.schema'),
			description: 'Identifies the target end system in situations where the initial message transmission is to an intermediary system.'
		},
		endpoint: {
			type: new GraphQLNonNull(UriScalar),
			description: 'Indicates where the message should be routed to.'
		},
		_endpoint: {
			type: require('./element.schema'),
			description: 'Indicates where the message should be routed to.'
		}
	})
});
