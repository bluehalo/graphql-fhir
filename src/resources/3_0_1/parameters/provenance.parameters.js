const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the provenance query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Provenance-agent
	agent: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Provenance.agent.whoUri',
		description: 'Who participated',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-agent-role
	agent_role: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Provenance.agent.role',
		description: 'What the agents role was',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-end
	end: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Provenance.period.end',
		description: 'End time with inclusive boundary, if not ongoing',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-entity-id
	entity_id: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Provenance.entity.whatIdentifier',
		description: 'Identity of entity',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-entity-ref
	entity_ref: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Provenance.entity.whatReference',
		description: 'Identity of entity',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Provenance.location',
		description: 'Where the activity occurred, if relevant',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Provenance.target',
		description: 'Target Reference(s) (usually version specific)',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-recorded
	recorded: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Provenance.recorded',
		description: 'When the activity was recorded / updated',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-signature-type
	signature_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Provenance.signature.type',
		description: 'Indication of the reason the entity signed the object(s)',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-start
	start: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Provenance.period.start',
		description: 'Starting time with inclusive boundary',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-target
	target: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Provenance.target',
		description: 'Target Reference(s) (usually version specific)',
	},
};
