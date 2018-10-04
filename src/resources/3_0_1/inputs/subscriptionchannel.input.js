const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Subscription.channel Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SubscriptionChannel_Input',
	description: 'Details where to send notifications when resources are received that meet the criteria.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/subscription-channel-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of channel to send notifications on.'
		},
		_type: {
			type: require('./element.input'),
			description: 'The type of channel to send notifications on.'
		},
		endpoint: {
			type: UriScalar,
			description: 'The uri that describes the actual end-point to send messages to.'
		},
		_endpoint: {
			type: require('./element.input'),
			description: 'The uri that describes the actual end-point to send messages to.'
		},
		payload: {
			type: GraphQLString,
			description: 'The mime type to send the payload in - either application/fhir+xml, or application/fhir+json. If the payload is not present, then there is no payload in the notification, just a notification.'
		},
		_payload: {
			type: require('./element.input'),
			description: 'The mime type to send the payload in - either application/fhir+xml, or application/fhir+json. If the payload is not present, then there is no payload in the notification, just a notification.'
		},
		header: {
			type: new GraphQLList(GraphQLString),
			description: 'Additional headers / information to send as part of the notification.'
		},
		_header: {
			type: require('./element.input'),
			description: 'Additional headers / information to send as part of the notification.'
		}
	})
});
