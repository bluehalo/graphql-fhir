const CodeScalar = require('../scalars/code.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let SubscriptionResourceType = new GraphQLEnumType({
	name: 'SubscriptionResourceType',
	values: {
		Subscription: { value: 'Subscription' }
	}
});

/**
 * @name exports
 * @summary Subscription Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Subscription',
	description: 'Base StructureDefinition for Subscription Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(SubscriptionResourceType),
			description: 'Type of this resource'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/subscription-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the subscription, which marks the server state for managing the subscription.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the subscription, which marks the server state for managing the subscription.'
		},
		contact: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.'
		},
		end: {
			type: InstantScalar,
			description: 'The time for the server to turn the subscription off.'
		},
		_end: {
			type: require('./element.schema'),
			description: 'The time for the server to turn the subscription off.'
		},
		reason: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A description of why this subscription is defined.'
		},
		_reason: {
			type: require('./element.schema'),
			description: 'A description of why this subscription is defined.'
		},
		criteria: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The rules that the server should use to determine when to generate notifications for this subscription.'
		},
		_criteria: {
			type: require('./element.schema'),
			description: 'The rules that the server should use to determine when to generate notifications for this subscription.'
		},
		error: {
			type: GraphQLString,
			description: 'A record of the last error that occurred when the server processed a notification.'
		},
		_error: {
			type: require('./element.schema'),
			description: 'A record of the last error that occurred when the server processed a notification.'
		},
		channel: {
			type: new GraphQLNonNull(require('./subscriptionchannel.schema')),
			description: 'Details where to send notifications when resources are received that meet the criteria.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/subscription-tag
		tag: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'A tag to add to any resource that matches the criteria, after the subscription is processed.'
		}
	})
});
