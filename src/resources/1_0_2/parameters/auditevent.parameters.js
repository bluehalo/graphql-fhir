const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the auditevent query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/AuditEvent-action
	action: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.event.action',
		description: 'Type of action performed during the event',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-address
	address: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.participant.network.address',
		description: 'Identifier for the network access point of the user device',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-altid
	altid: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.participant.altId',
		description: 'Alternative User id e.g. authentication',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'AuditEvent.event.dateTime',
		description: 'Time when the event occurred on source',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-desc
	desc: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'AuditEvent.object.name',
		description: 'Instance-specific descriptor for Object',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-identity
	identity: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.object.identifier',
		description: 'Specific instance of object (e.g. versioned)',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'AuditEvent.participant.name',
		description: 'Human-meaningful name for the user',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-object-type
	object_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.object.type',
		description: 'Type of object involved',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-participant
	participant: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AuditEvent.participant.reference',
		description: 'Direct reference to resource',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AuditEvent.participant.reference',
		description: 'Direct reference to resource',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-policy
	policy: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'AuditEvent.participant.policy',
		description: 'Policy that authorized event',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-reference
	reference: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AuditEvent.object.reference',
		description: 'Specific instance of resource (e.g. versioned)',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-site
	site: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.source.site',
		description: 'Logical source location within the enterprise',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-source
	source: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.source.identifier',
		description: 'The identity of source detecting the event',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-subtype
	subtype: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.event.subtype',
		description: 'More specific type/id for the event',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.event.type',
		description: 'Type/identifier of event',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-user
	user: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.participant.userId',
		description: 'Unique identifier for the user',
	},
};
