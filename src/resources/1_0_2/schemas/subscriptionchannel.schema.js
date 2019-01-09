const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Subscriptionchannel Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Subscriptionchannel',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_type: {
			type: require('./element.schema.js'),
			description: 'The type of channel to send notifications on.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/subscription-channel-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of channel to send notifications on.',
		},
		_endpoint: {
			type: require('./element.schema.js'),
			description:
				'The uri that describes the actual end-point to send messages to.',
		},
		endpoint: {
			type: UriScalar,
			description:
				'The uri that describes the actual end-point to send messages to.',
		},
		_payload: {
			type: require('./element.schema.js'),
			description:
				'The mime type to send the payload in - either application/xml+fhir, or application/json+fhir. If the mime type is blank, then there is no payload in the notification, just a notification.',
		},
		payload: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The mime type to send the payload in - either application/xml+fhir, or application/json+fhir. If the mime type is blank, then there is no payload in the notification, just a notification.',
		},
		_header: {
			type: require('./element.schema.js'),
			description:
				'Additional headers / information to send as part of the notification.',
		},
		header: {
			type: GraphQLString,
			description:
				'Additional headers / information to send as part of the notification.',
		},
	}),
});
