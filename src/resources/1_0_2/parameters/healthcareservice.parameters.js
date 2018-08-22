const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the healthcareservice query
 */
module.exports = {
	servicecategory: {
		type: TokenScalar,
		description: 'Service Category of the Healthcare Service. See http://hl7.org/fhir/SearchParameter/healthcareservice-servicecategory.'
	},
	organization: {
		type: GraphQLString,
		description: 'The organization that provides this Healthcare Service. See http://hl7.org/fhir/SearchParameter/healthcareservice-organization.'
	},
	servicetype: {
		type: TokenScalar,
		description: 'The type of service provided by this healthcare service. See http://hl7.org/fhir/SearchParameter/healthcareservice-servicetype.'
	},
	location: {
		type: GraphQLString,
		description: 'The location of the Healthcare Service. See http://hl7.org/fhir/SearchParameter/healthcareservice-location.'
	},
	name: {
		type: GraphQLString,
		description: 'A portion of the Healthcare service name. See http://hl7.org/fhir/SearchParameter/healthcareservice-name.'
	},
	programname: {
		type: GraphQLString,
		description: 'One of the Program Names serviced by this HealthcareService. See http://hl7.org/fhir/SearchParameter/healthcareservice-programname.'
	},
	characteristic: {
		type: TokenScalar,
		description: 'One of the HealthcareService\'s characteristics. See http://hl7.org/fhir/SearchParameter/healthcareservice-characteristic.'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifiers for this item. See http://hl7.org/fhir/SearchParameter/healthcareservice-identifier.'
	}
};
