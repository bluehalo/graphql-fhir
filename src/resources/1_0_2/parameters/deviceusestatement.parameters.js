const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the deviceusestatement query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/DeviceUseStatement-device
	device: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DeviceUseStatement.device',
		description: 'Search by device',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceUseStatement-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DeviceUseStatement.subject',
		description: 'Search by subject - a patient',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceUseStatement-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DeviceUseStatement.subject',
		description: 'Search by subject',
	},
};
