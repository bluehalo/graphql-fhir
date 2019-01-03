const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the auditevent query
 */
module.exports = {
	date: {
		type: DateScalar,
		description:
			'Time when the event occurred on source (See http://hl7.org/fhir/SearchParameter/AuditEvent-date).',
	},
	entity_type: {
		type: TokenScalar,
		description:
			'Type of entity involved (See http://hl7.org/fhir/SearchParameter/AuditEvent-entity-type).',
	},
	agent: {
		type: GraphQLString,
		description:
			'Direct reference to resource (See http://hl7.org/fhir/SearchParameter/AuditEvent-agent).',
	},
	address: {
		type: GraphQLString,
		description:
			'Identifier for the network access point of the user device (See http://hl7.org/fhir/SearchParameter/AuditEvent-address).',
	},
	entity_role: {
		type: TokenScalar,
		description:
			'What role the entity played (See http://hl7.org/fhir/SearchParameter/AuditEvent-entity-role).',
	},
	source: {
		type: TokenScalar,
		description:
			'The identity of source detecting the event (See http://hl7.org/fhir/SearchParameter/AuditEvent-source).',
	},
	type: {
		type: TokenScalar,
		description:
			'Type/identifier of event (See http://hl7.org/fhir/SearchParameter/AuditEvent-type).',
	},
	altid: {
		type: TokenScalar,
		description:
			'Alternative User id e.g. authentication (See http://hl7.org/fhir/SearchParameter/AuditEvent-altid).',
	},
	site: {
		type: TokenScalar,
		description:
			'Logical source location within the enterprise (See http://hl7.org/fhir/SearchParameter/AuditEvent-site).',
	},
	agent_name: {
		type: GraphQLString,
		description:
			'Human-meaningful name for the agent (See http://hl7.org/fhir/SearchParameter/AuditEvent-agent-name).',
	},
	entity_name: {
		type: GraphQLString,
		description:
			'Descriptor for entity (See http://hl7.org/fhir/SearchParameter/AuditEvent-entity-name).',
	},
	subtype: {
		type: TokenScalar,
		description:
			'More specific type/id for the event (See http://hl7.org/fhir/SearchParameter/AuditEvent-subtype).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Direct reference to resource (See http://hl7.org/fhir/SearchParameter/AuditEvent-patient).',
	},
	action: {
		type: TokenScalar,
		description:
			'Type of action performed during the event (See http://hl7.org/fhir/SearchParameter/AuditEvent-action).',
	},
	agent_role: {
		type: TokenScalar,
		description:
			'Agent role in the event (See http://hl7.org/fhir/SearchParameter/AuditEvent-agent-role).',
	},
	user: {
		type: TokenScalar,
		description:
			'Unique identifier for the user (See http://hl7.org/fhir/SearchParameter/AuditEvent-user).',
	},
	entity: {
		type: GraphQLString,
		description:
			'Specific instance of resource (See http://hl7.org/fhir/SearchParameter/AuditEvent-entity).',
	},
	entity_id: {
		type: TokenScalar,
		description:
			'Specific instance of object (See http://hl7.org/fhir/SearchParameter/AuditEvent-entity-id).',
	},
	outcome: {
		type: TokenScalar,
		description:
			'Whether the event succeeded or failed (See http://hl7.org/fhir/SearchParameter/AuditEvent-outcome).',
	},
	policy: {
		type: UriScalar,
		description:
			'Policy that authorized event (See http://hl7.org/fhir/SearchParameter/AuditEvent-policy).',
	},
};
