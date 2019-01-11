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
		xpath: 'AuditEvent.action',
		description: 'Type of action performed during the event',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-address
	address: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'AuditEvent.agent.network.address',
		description: 'Identifier for the network access point of the user device',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-agent
	agent: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AuditEvent.agent.reference',
		description: 'Direct reference to resource',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-agent-name
	agent_name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'AuditEvent.agent.name',
		description: 'Human-meaningful name for the agent',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-agent-role
	agent_role: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.agent.role',
		description: 'Agent role in the event',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-altid
	altid: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.agent.altId',
		description: 'Alternative User id e.g. authentication',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'AuditEvent.recorded',
		description: 'Time when the event occurred on source',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-entity
	entity: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AuditEvent.entity.reference',
		description: 'Specific instance of resource',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-entity-id
	entity_id: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.entity.identifier',
		description: 'Specific instance of object',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-entity-name
	entity_name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'AuditEvent.entity.name',
		description: 'Descriptor for entity',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-entity-role
	entity_role: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.entity.role',
		description: 'What role the entity played',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-entity-type
	entity_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.entity.type',
		description: 'Type of entity involved',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-outcome
	outcome: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.outcome',
		description: 'Whether the event succeeded or failed',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AuditEvent.agent.reference',
		description: 'Direct reference to resource',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-policy
	policy: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'AuditEvent.agent.policy',
		description: 'Policy that authorized event',
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
		xpath: 'AuditEvent.subtype',
		description: 'More specific type/id for the event',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.type',
		description: 'Type/identifier of event',
	},
	// http://hl7.org/fhir/SearchParameter/AuditEvent-user
	user: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AuditEvent.agent.userId',
		description: 'Unique identifier for the user',
	},
};
