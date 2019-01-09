const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the healthcareservice query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/HealthcareService-active
	active: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'HealthcareService.active',
		description: 'The Healthcare Service is currently marked as active',
	},
	// http://hl7.org/fhir/SearchParameter/HealthcareService-characteristic
	characteristic: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'HealthcareService.characteristic',
		description: "One of the HealthcareService's characteristics",
	},
	// http://hl7.org/fhir/SearchParameter/HealthcareService-coverage-area
	coverage_area: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'HealthcareService.coverageArea',
		description: 'Location(s) service is intended for/available to',
	},
	// http://hl7.org/fhir/SearchParameter/HealthcareService-endpoint
	endpoint: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'HealthcareService.endpoint',
		description:
			'Technical endpoints providing access to electronic services operated for the healthcare service',
	},
	// http://hl7.org/fhir/SearchParameter/HealthcareService-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'HealthcareService.identifier',
		description: 'External identifiers for this item',
	},
	// http://hl7.org/fhir/SearchParameter/HealthcareService-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'HealthcareService.location',
		description: 'The location of the Healthcare Service',
	},
	// http://hl7.org/fhir/SearchParameter/HealthcareService-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'HealthcareService.name',
		description: 'A portion of the Healthcare service name',
	},
	// http://hl7.org/fhir/SearchParameter/HealthcareService-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'HealthcareService.providedBy',
		description: 'The organization that provides this Healthcare Service',
	},
	// http://hl7.org/fhir/SearchParameter/HealthcareService-program
	program: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'HealthcareService.program',
		description: 'One of the Programs supported by this HealthcareService',
	},
	// http://hl7.org/fhir/SearchParameter/HealthcareService-service-category
	service_category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'HealthcareService.category',
		description: 'Service Category of the Healthcare Service',
	},
	// http://hl7.org/fhir/SearchParameter/HealthcareService-service-type
	service_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'HealthcareService.type',
		description: 'The type of service provided by this healthcare service',
	},
	// http://hl7.org/fhir/SearchParameter/HealthcareService-specialty
	specialty: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'HealthcareService.specialty',
		description:
			'The specialty of the service provided by this healthcare service',
	},
};
