const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the deviceusestatement query
 */
module.exports = {
	patient: {
		type: GraphQLString,
		description: 'Search by subject - a patient (See http://hl7.org/fhir/SearchParameter/deviceusestatement-patient).'
	},
	subject: {
		type: GraphQLString,
		description: 'Search by subject (See http://hl7.org/fhir/SearchParameter/deviceusestatement-subject).'
	},
	device: {
		type: GraphQLString,
		description: 'Search by device (See http://hl7.org/fhir/SearchParameter/deviceusestatement-device).'
	}
};
