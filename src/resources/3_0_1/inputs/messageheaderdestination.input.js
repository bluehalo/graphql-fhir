const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary MessageHeader.destination Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MessageHeaderDestination_Input',
	description: 'The destination application which the message is intended for.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: GraphQLString,
			description: 'Human-readable name for the target system.'
		},
		_name: {
			type: require('./element.input'),
			description: 'Human-readable name for the target system.'
		},
		target: {
			type: require('./reference.input'),
			description: 'Identifies the target end system in situations where the initial message transmission is to an intermediary system.'
		},
		endpoint: {
			type: new GraphQLNonNull(UriScalar),
			description: 'Indicates where the message should be routed to.'
		},
		_endpoint: {
			type: require('./element.input'),
			description: 'Indicates where the message should be routed to.'
		}
	})
});
