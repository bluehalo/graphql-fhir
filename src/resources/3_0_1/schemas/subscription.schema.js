const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary Subscription Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Subscription',
	description: 'Base StructureDefinition for Subscription Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Subscription_Enum_schema',
					values: { Subscription: { value: 'Subscription' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The status of the subscription, which marks the server state for managing the subscription.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/subscription-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of the subscription, which marks the server state for managing the subscription.',
		},
		contact: {
			type: new GraphQLList(require('./contactpoint.schema.js')),
			description:
				'Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.',
		},
		_end: {
			type: require('./element.schema.js'),
			description: 'The time for the server to turn the subscription off.',
		},
		end: {
			type: InstantScalar,
			description: 'The time for the server to turn the subscription off.',
		},
		_reason: {
			type: require('./element.schema.js'),
			description: 'A description of why this subscription is defined.',
		},
		reason: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A description of why this subscription is defined.',
		},
		_criteria: {
			type: require('./element.schema.js'),
			description:
				'The rules that the server should use to determine when to generate notifications for this subscription.',
		},
		criteria: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The rules that the server should use to determine when to generate notifications for this subscription.',
		},
		_error: {
			type: require('./element.schema.js'),
			description:
				'A record of the last error that occurred when the server processed a notification.',
		},
		error: {
			type: GraphQLString,
			description:
				'A record of the last error that occurred when the server processed a notification.',
		},
		channel: {
			type: new GraphQLNonNull(require('./subscriptionchannel.schema.js')),
			description:
				'Details where to send notifications when resources are received that meet the criteria.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/subscription-tag
		tag: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'A tag to add to any resource that matches the criteria, after the subscription is processed.',
		},
	}),
});
