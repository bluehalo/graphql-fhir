const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let CommunicationResourceInputType = new GraphQLEnumType({
	name: 'CommunicationResourceInputType',
	values: {
		Communication: { value: 'Communication' }
	}
});

/**
 * @name exports
 * @summary Communication Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Communication_Input',
	description: 'Base StructureDefinition for Communication Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(CommunicationResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifiers associated with this Communication that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		definition: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A protocol, guideline, or other definition that was adhered to in whole or in part by this communication event.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.input')),
			description: 'An order, proposal or plan fulfilled in whole or in part by this Communication.'
		},
		partOf: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Part of this action.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/event-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the transmission.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the transmission.'
		},
		notDone: {
			type: GraphQLBoolean,
			description: 'If true, indicates that the described communication event did not actually occur.'
		},
		_notDone: {
			type: require('./element.input'),
			description: 'If true, indicates that the described communication event did not actually occur.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/communication-not-done-reason
		notDoneReason: {
			type: require('./codeableconcept.input'),
			description: 'Describes why the communication event did not occur in coded and/or textual form.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/communication-category
		category: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The type of message conveyed such as alert, notification, reminder, instruction, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ParticipationMode
		medium: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A channel that was used for this communication (e.g. email, fax).'
		},
		subject: {
			type: require('./reference.input'),
			description: 'The patient or group that was the focus of this communication.'
		},
		recipient: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).'
		},
		topic: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The resources which were responsible for or related to producing this communication.'
		},
		context: {
			type: require('./reference.input'),
			description: 'The encounter within which the communication was sent.'
		},
		sent: {
			type: DateTimeScalar,
			description: 'The time when this communication was sent.'
		},
		_sent: {
			type: require('./element.input'),
			description: 'The time when this communication was sent.'
		},
		received: {
			type: DateTimeScalar,
			description: 'The time when this communication arrived at the destination.'
		},
		_received: {
			type: require('./element.input'),
			description: 'The time when this communication arrived at the destination.'
		},
		sender: {
			type: require('./reference.input'),
			description: 'The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The reason or justification for the communication.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Indicates another resource whose existence justifies this communication.'
		},
		payload: {
			type: new GraphQLList(require('./communicationpayload.input')),
			description: 'Text, attachment(s), or resource(s) that was communicated to the recipient.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Additional notes or commentary about the communication by the sender, receiver or other interested parties.'
		}
	})
});
