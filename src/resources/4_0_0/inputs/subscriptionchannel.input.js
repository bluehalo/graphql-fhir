const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UrlScalar = require('../scalars/url.scalar.js');

/**
 * @name exports
 * @summary Subscriptionchannel Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Subscriptionchannel_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_type: {
			type: require('./element.input.js'),
			description: 'The type of channel to send notifications on.',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of channel to send notifications on.',
		},
		_endpoint: {
			type: require('./element.input.js'),
			description:
				'The url that describes the actual end-point to send messages to.',
		},
		endpoint: {
			type: UrlScalar,
			description:
				'The url that describes the actual end-point to send messages to.',
		},
		_payload: {
			type: require('./element.input.js'),
			description:
				"The mime type to send the payload in - either application/fhir+xml, or application/fhir+json. If the payload is not present, then there is no payload in the notification, just a notification. The mime type 'text/plain' may also be used for Email and SMS subscriptions.",
		},
		payload: {
			type: CodeScalar,
			description:
				"The mime type to send the payload in - either application/fhir+xml, or application/fhir+json. If the payload is not present, then there is no payload in the notification, just a notification. The mime type 'text/plain' may also be used for Email and SMS subscriptions.",
		},
		_header: {
			type: require('./element.input.js'),
			description:
				'Additional headers / information to send as part of the notification.',
		},
		header: {
			type: new GraphQLList(GraphQLString),
			description:
				'Additional headers / information to send as part of the notification.',
		},
	}),
});
