const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the deviceuserequest query
 */
module.exports = {
	patient: {
		type: GraphQLString,
		description:
			'Search by subject - a patient (See http://hl7.org/fhir/SearchParameter/deviceuserequest-patient).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Search by subject (See http://hl7.org/fhir/SearchParameter/deviceuserequest-subject).',
	},
	device: {
		type: GraphQLString,
		description:
			'Device requested (See http://hl7.org/fhir/SearchParameter/deviceuserequest-device).',
	},
};
