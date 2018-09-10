const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the auditevent query
 */
module.exports = {
	site: {
		type: TokenScalar,
		description: 'Logical source location within the enterprise (See http://hl7.org/fhir/SearchParameter/auditevent-site).'
	},
	desc: {
		type: GraphQLString,
		description: 'Instance-specific descriptor for Object (See http://hl7.org/fhir/SearchParameter/auditevent-desc).'
	},
	type: {
		type: TokenScalar,
		description: 'Type/identifier of event (See http://hl7.org/fhir/SearchParameter/auditevent-type).'
	},
	date: {
		type: DateScalar,
		description: 'Time when the event occurred on source (See http://hl7.org/fhir/SearchParameter/auditevent-date).'
	},
	reference: {
		type: GraphQLString,
		description: 'Specific instance of resource (e.g. versioned) (See http://hl7.org/fhir/SearchParameter/auditevent-reference).'
	},
	identity: {
		type: TokenScalar,
		description: 'Specific instance of object (e.g. versioned) (See http://hl7.org/fhir/SearchParameter/auditevent-identity).'
	},
	patient: {
		type: GraphQLString,
		description: 'Direct reference to resource (See http://hl7.org/fhir/SearchParameter/auditevent-patient).'
	},
	altid: {
		type: TokenScalar,
		description: 'Alternative User id e.g. authentication (See http://hl7.org/fhir/SearchParameter/auditevent-altid).'
	},
	source: {
		type: TokenScalar,
		description: 'The identity of source detecting the event (See http://hl7.org/fhir/SearchParameter/auditevent-source).'
	},
	address: {
		type: TokenScalar,
		description: 'Identifier for the network access point of the user device (See http://hl7.org/fhir/SearchParameter/auditevent-address).'
	},
	subtype: {
		type: TokenScalar,
		description: 'More specific type/id for the event (See http://hl7.org/fhir/SearchParameter/auditevent-subtype).'
	},
	name: {
		type: GraphQLString,
		description: 'Human-meaningful name for the user (See http://hl7.org/fhir/SearchParameter/auditevent-name).'
	},
	action: {
		type: TokenScalar,
		description: 'Type of action performed during the event (See http://hl7.org/fhir/SearchParameter/auditevent-action).'
	},
	participant: {
		type: GraphQLString,
		description: 'Direct reference to resource (See http://hl7.org/fhir/SearchParameter/auditevent-participant).'
	},
	policy: {
		type: UriScalar,
		description: 'Policy that authorized event (See http://hl7.org/fhir/SearchParameter/auditevent-policy).'
	},
	object_type: {
		type: TokenScalar,
		description: 'Type of object involved (See http://hl7.org/fhir/SearchParameter/auditevent-object-type).'
	},
	user: {
		type: TokenScalar,
		description: 'Unique identifier for the user (See http://hl7.org/fhir/SearchParameter/auditevent-user).'
	}
};
