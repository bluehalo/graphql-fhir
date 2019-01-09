const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

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
		xpath: 'Provenance.agent.actor',
		description: 'Individual, device or organization playing role',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-end
	end: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Provenance.period.end',
		description: 'End time with inclusive boundary, if not ongoing',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-entity
	entity: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Provenance.entity.reference',
		description: 'Identity of entity',
	},
	// http://hl7.org/fhir/SearchParameter/Provenance-entitytype
	entitytype: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Provenance.entity.type',
		description: 'The type of resource in this entity',
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
	// http://hl7.org/fhir/SearchParameter/Provenance-sigtype
	sigtype: {
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
	// http://hl7.org/fhir/SearchParameter/Provenance-userid
	userid: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Provenance.agent.userId',
		description: 'Authorization-system identifier for the agent',
	},
};
