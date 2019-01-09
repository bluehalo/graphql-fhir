const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the organizationaffiliation query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-active
	active: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OrganizationAffiliation.active',
		description:
			'Whether this organization affiliation record is in active use',
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'OrganizationAffiliation.period',
		description:
			'The period during which the participatingOrganization is affiliated with the primary organization',
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-email
	email: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "OrganizationAffiliation.telecom[system/@value='email']",
		description: 'A value in an email contact',
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-endpoint
	endpoint: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'OrganizationAffiliation.endpoint',
		description:
			'Technical endpoints providing access to services operated for this role',
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OrganizationAffiliation.identifier',
		description: "An organization affiliation's Identifier",
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'OrganizationAffiliation.location',
		description: 'The location(s) at which the role occurs',
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-network
	network: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'OrganizationAffiliation.network',
		description:
			"Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined)",
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-participating-organization
	participating_organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'OrganizationAffiliation.participatingOrganization',
		description:
			'The organization that provides services to the primary organization',
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-phone
	phone: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "OrganizationAffiliation.telecom[system/@value='phone']",
		description: 'A value in a phone contact',
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-primary-organization
	primary_organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'OrganizationAffiliation.organization',
		description:
			'The organization that receives the services from the participating organization',
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-role
	role: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OrganizationAffiliation.code',
		description: 'Definition of the role the participatingOrganization plays',
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-service
	service: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'OrganizationAffiliation.healthcareService',
		description: 'Healthcare services provided through the role',
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-specialty
	specialty: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OrganizationAffiliation.specialty',
		description:
			'Specific specialty of the participatingOrganization in the context of the role',
	},
	// http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-telecom
	telecom: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OrganizationAffiliation.telecom',
		description: 'The value in any kind of contact',
	},
};
