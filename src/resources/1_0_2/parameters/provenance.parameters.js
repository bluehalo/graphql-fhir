const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the provenance query
 */
module.exports = {
	sigtype: {
		type: TokenScalar,
		description: 'Indication of the reason the entity signed the object(s). See http://hl7.org/fhir/SearchParameter/provenance-sigtype.'
	},
	patient: {
		type: GraphQLString,
		description: 'Target Reference(s) (usually version specific). See http://hl7.org/fhir/SearchParameter/provenance-patient.'
	},
	location: {
		type: GraphQLString,
		description: 'Where the activity occurred, if relevant. See http://hl7.org/fhir/SearchParameter/provenance-location.'
	},
	start: {
		type: DateScalar,
		description: 'Starting time with inclusive boundary. See http://hl7.org/fhir/SearchParameter/provenance-start.'
	},
	entity: {
		type: UriScalar,
		description: 'Identity of entity. See http://hl7.org/fhir/SearchParameter/provenance-entity.'
	},
	userid: {
		type: TokenScalar,
		description: 'Authorization-system identifier for the agent. See http://hl7.org/fhir/SearchParameter/provenance-userid.'
	},
	target: {
		type: GraphQLString,
		description: 'Target Reference(s) (usually version specific). See http://hl7.org/fhir/SearchParameter/provenance-target.'
	},
	agent: {
		type: GraphQLString,
		description: 'Individual, device or organization playing role. See http://hl7.org/fhir/SearchParameter/provenance-agent.'
	},
	entitytype: {
		type: TokenScalar,
		description: 'The type of resource in this entity. See http://hl7.org/fhir/SearchParameter/provenance-entitytype.'
	},
	end: {
		type: DateScalar,
		description: 'End time with inclusive boundary, if not ongoing. See http://hl7.org/fhir/SearchParameter/provenance-end.'
	}
};
