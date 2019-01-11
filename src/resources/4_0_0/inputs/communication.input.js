const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Communication Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Communication_Input',
	description:
		'An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Communication_Enum_input',
					values: { Communication: { value: 'Communication' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Business identifiers assigned to this communication by the performer or other systems which remain constant as the resource is updated and propagates from server to server.',
		},
		_instantiatesCanonical: {
			type: require('./element.input.js'),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.',
		},
		instantiatesCanonical: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.',
		},
		_instantiatesUri: {
			type: require('./element.input.js'),
			description:
				'The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.',
		},
		instantiatesUri: {
			type: new GraphQLList(UriScalar),
			description:
				'The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.',
		},
		basedOn: {
			type: new GraphQLList(GraphQLString),
			description:
				'An order, proposal or plan fulfilled in whole or in part by this Communication.',
		},
		partOf: {
			type: new GraphQLList(GraphQLString),
			description: 'Part of this action.',
		},
		inResponseTo: {
			type: new GraphQLList(GraphQLString),
			description:
				'Prior communication that this communication is in response to.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the transmission.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the transmission.',
		},
		statusReason: {
			type: require('./codeableconcept.input.js'),
			description:
				'Captures the reason for the current state of the Communication.',
		},
		category: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The type of message conveyed such as alert, notification, reminder, instruction, etc.',
		},
		_priority: {
			type: require('./element.input.js'),
			description:
				'Characterizes how quickly the planned or in progress communication must be addressed. Includes concepts such as stat, urgent, routine.',
		},
		priority: {
			type: CodeScalar,
			description:
				'Characterizes how quickly the planned or in progress communication must be addressed. Includes concepts such as stat, urgent, routine.',
		},
		medium: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A channel that was used for this communication (e.g. email, fax).',
		},
		subject: {
			type: GraphQLString,
			description:
				'The patient or group that was the focus of this communication.',
		},
		topic: {
			type: require('./codeableconcept.input.js'),
			description:
				'Description of the purpose/content, similar to a subject line in an email.',
		},
		about: {
			type: new GraphQLList(GraphQLString),
			description:
				'Other resources that pertain to this communication and to which this communication should be associated.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'The Encounter during which this Communication was created or to which the creation of this record is tightly associated.',
		},
		_sent: {
			type: require('./element.input.js'),
			description: 'The time when this communication was sent.',
		},
		sent: {
			type: DateTimeScalar,
			description: 'The time when this communication was sent.',
		},
		_received: {
			type: require('./element.input.js'),
			description:
				'The time when this communication arrived at the destination.',
		},
		received: {
			type: DateTimeScalar,
			description:
				'The time when this communication arrived at the destination.',
		},
		recipient: {
			type: new GraphQLList(GraphQLString),
			description:
				'The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the communication. If receipts need to be tracked by an individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either receipts are not tracked (e.g. a mass mail-out) or a receipt is captured in aggregate (all emails confirmed received by a particular time).',
		},
		sender: {
			type: GraphQLString,
			description:
				'The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'The reason or justification for the communication.',
		},
		reasonReference: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates another resource whose existence justifies this communication.',
		},
		payload: {
			type: new GraphQLList(require('./communicationpayload.input.js')),
			description:
				'Text, attachment(s), or resource(s) that was communicated to the recipient.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Additional notes or commentary about the communication by the sender, receiver or other interested parties.',
		},
	}),
});
