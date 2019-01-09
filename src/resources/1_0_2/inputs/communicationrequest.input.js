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
const DateTimeScalar = require('../scalars/dateTime.scalar.js');

/**
 * @name exports
 * @summary CommunicationRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CommunicationRequest_Input',
	description: 'Base StructureDefinition for CommunicationRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'CommunicationRequest_Enum_input',
					values: { CommunicationRequest: { value: 'CommunicationRequest' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
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
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be autogenerated, if needed, by CDS system. Does not need to be the actual ID of the source system.',
		},
		category: {
			type: require('./codeableconcept.input.js'),
			description:
				'The type of message to be sent such as alert, notification, reminder, instruction, etc.',
		},
		sender: {
			type: GraphQLString,
			description:
				'The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.',
		},
		recipient: {
			type: new GraphQLList(GraphQLString),
			description:
				'The entity (e.g. person, organization, clinical information system, or device) which is the intended target of the communication.',
		},
		payload: {
			type: new GraphQLList(require('./communicationrequestpayload.input.js')),
			description:
				'Text, attachment(s), or resource(s) to be communicated to the recipient.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ParticipationMode
		medium: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A channel that was used for this communication (e.g. email, fax).',
		},
		requester: {
			type: GraphQLString,
			description:
				'The responsible person who authorizes this order, e.g. physician. This may be different than the author of the order statement, e.g. clerk, who may have entered the statement into the order entry application.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the proposal or order.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/communication-request-status
		status: {
			type: CodeScalar,
			description: 'The status of the proposal or order.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'The encounter within which the communication request was created.',
		},
		_scheduledDateTime: {
			type: require('./element.input.js'),
			description: 'The time when this communication is to occur.',
		},
		scheduledDateTime: {
			type: DateTimeScalar,
			description: 'The time when this communication is to occur.',
		},
		scheduledPeriod: {
			type: require('./period.input.js'),
			description: 'The time when this communication is to occur.',
		},
		reason: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'The reason or justification for the communication request.',
		},
		_requestedOn: {
			type: require('./element.input.js'),
			description: 'The time when the request was made.',
		},
		requestedOn: {
			type: DateTimeScalar,
			description: 'The time when the request was made.',
		},
		subject: {
			type: GraphQLString,
			description:
				'The patient who is the focus of this communication request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-priority
		priority: {
			type: require('./codeableconcept.input.js'),
			description:
				'Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.',
		},
	}),
});
