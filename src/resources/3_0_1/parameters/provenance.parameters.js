const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the provenance query
 */
module.exports = {
	entity_ref: {
		type: GraphQLString,
		description: 'Identity of entity (See http://hl7.org/fhir/SearchParameter/Provenance-entity-ref).'
	},
	agent: {
		type: GraphQLString,
		description: 'Who participated (See http://hl7.org/fhir/SearchParameter/Provenance-agent).'
	},
	signature_type: {
		type: TokenScalar,
		description: 'Indication of the reason the entity signed the object(s) (See http://hl7.org/fhir/SearchParameter/Provenance-signature-type).'
	},
	patient: {
		type: GraphQLString,
		description: 'Target Reference(s) (usually version specific) (See http://hl7.org/fhir/SearchParameter/Provenance-patient).'
	},
	start: {
		type: DateScalar,
		description: 'Starting time with inclusive boundary (See http://hl7.org/fhir/SearchParameter/Provenance-start).'
	},
	end: {
		type: DateScalar,
		description: 'End time with inclusive boundary, if not ongoing (See http://hl7.org/fhir/SearchParameter/Provenance-end).'
	},
	location: {
		type: GraphQLString,
		description: 'Where the activity occurred, if relevant (See http://hl7.org/fhir/SearchParameter/Provenance-location).'
	},
	recorded: {
		type: DateScalar,
		description: 'When the activity was recorded / updated (See http://hl7.org/fhir/SearchParameter/Provenance-recorded).'
	},
	agent_role: {
		type: TokenScalar,
		description: 'What the agents role was (See http://hl7.org/fhir/SearchParameter/Provenance-agent-role).'
	},
	entity_id: {
		type: TokenScalar,
		description: 'Identity of entity (See http://hl7.org/fhir/SearchParameter/Provenance-entity-id).'
	},
	target: {
		type: GraphQLString,
		description: 'Target Reference(s) (usually version specific) (See http://hl7.org/fhir/SearchParameter/Provenance-target).'
	}
};
