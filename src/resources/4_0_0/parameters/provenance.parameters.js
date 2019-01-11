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
		xpath: 'Provenance.agent.who',
		description: 'Who participated',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-agent-role
	agent_role: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Provenance.agent.role',
		description: 'What the agents role was',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-agent-type
	agent_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Provenance.agent.type',
		description: 'How the agent participated',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-entity
	entity: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Provenance.entity.what',
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
	// http://hl7.org/fhir/SearchParameter/Provenance-target
	target: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Provenance.target',
		description: 'Target Reference(s) (usually version specific)',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-when
	when: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Provenance.occurredDateTime',
		description: 'When the activity occurred',
	},
};
