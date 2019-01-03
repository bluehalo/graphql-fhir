const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let CommunicationResourceType = new GraphQLEnumType({
	name: 'CommunicationResourceType',
	values: {
		Communication: { value: 'Communication' }
	}
});

/**
 * @name exports
 * @summary Communication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Communication',
	description: 'Base StructureDefinition for Communication Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(CommunicationResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifiers associated with this Communication that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		category: {
			type: require('./codeableconcept.schema'),
			description: 'The type of message conveyed such as alert, notification, reminder, instruction, etc.'
		},
		sender: {
			type: require('./reference.schema'),
			description: 'The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.'
		},
		recipient: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).'
		},
		payload: {
			type: new GraphQLList(require('./communicationpayload.schema')),
			description: 'Text, attachment(s), or resource(s) that was communicated to the recipient.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ParticipationMode
		medium: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A channel that was used for this communication (e.g. email, fax).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/communication-status
		status: {
			type: CodeScalar,
			description: 'The status of the transmission.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the transmission.'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'The encounter within which the communication was sent.'
		},
		sent: {
			type: DateTimeScalar,
			description: 'The time when this communication was sent.'
		},
		_sent: {
			type: require('./element.schema'),
			description: 'The time when this communication was sent.'
		},
		received: {
			type: DateTimeScalar,
			description: 'The time when this communication arrived at the destination.'
		},
		_received: {
			type: require('./element.schema'),
			description: 'The time when this communication arrived at the destination.'
		},
		reason: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The reason or justification for the communication.'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'The patient who was the focus of this communication.'
		},
		requestDetail: {
			type: require('./reference.schema'),
			description: 'The communication request that was responsible for producing this communication.'
		}
	})
});
