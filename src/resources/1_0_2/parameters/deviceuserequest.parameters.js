const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the deviceuserequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/DeviceUseRequest-device
	device: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DeviceUseRequest.device',
		description: 'Device requested',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceUseRequest-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DeviceUseRequest.subject',
		description: 'Search by subject - a patient',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceUseRequest-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DeviceUseRequest.subject',
		description: 'Search by subject',
	},
};
