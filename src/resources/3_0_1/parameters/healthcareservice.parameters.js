const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the healthcareservice query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'External identifiers for this item. See http://hl7.org/fhir/SearchParameter/HealthcareService-identifier.'
	},
	endpoint: {
		type: GraphQLString,
		description: 'Technical endpoints providing access to services operated for the location. See http://hl7.org/fhir/SearchParameter/HealthcareService-endpoint.'
	},
	organization: {
		type: GraphQLString,
		description: 'The organization that provides this Healthcare Service. See http://hl7.org/fhir/SearchParameter/HealthcareService-organization.'
	},
	name: {
		type: GraphQLString,
		description: 'A portion of the Healthcare service name. See http://hl7.org/fhir/SearchParameter/HealthcareService-name.'
	},
	programname: {
		type: GraphQLString,
		description: 'One of the Program Names serviced by this HealthcareService. See http://hl7.org/fhir/SearchParameter/HealthcareService-programname.'
	},
	active: {
		type: TokenScalar,
		description: 'The Healthcare Service is currently marked as active. See http://hl7.org/fhir/SearchParameter/HealthcareService-active.'
	},
	location: {
		type: GraphQLString,
		description: 'The location of the Healthcare Service. See http://hl7.org/fhir/SearchParameter/HealthcareService-location.'
	},
	category: {
		type: TokenScalar,
		description: 'Service Category of the Healthcare Service. See http://hl7.org/fhir/SearchParameter/HealthcareService-category.'
	},
	type: {
		type: TokenScalar,
		description: 'The type of service provided by this healthcare service. See http://hl7.org/fhir/SearchParameter/HealthcareService-type.'
	},
	characteristic: {
		type: TokenScalar,
		description: 'One of the HealthcareService\'s characteristics. See http://hl7.org/fhir/SearchParameter/HealthcareService-characteristic.'
	}
};
