const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the deviceusestatement query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description:
			'Search by identifier (See http://hl7.org/fhir/SearchParameter/DeviceUseStatement-identifier).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Search by subject (See http://hl7.org/fhir/SearchParameter/DeviceUseStatement-subject).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Search by subject - a patient (See http://hl7.org/fhir/SearchParameter/clinical-patient).',
	},
	device: {
		type: GraphQLString,
		description:
			'Search by device (See http://hl7.org/fhir/SearchParameter/DeviceUseStatement-device).',
	},
};
