const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the procedurerequest query
 */
module.exports = {
	orderer: {
		type: GraphQLString,
		description: 'Who made request. See http://hl7.org/fhir/SearchParameter/procedurerequest-orderer.'
	},
	patient: {
		type: GraphQLString,
		description: 'Search by subject - a patient. See http://hl7.org/fhir/SearchParameter/procedurerequest-patient.'
	},
	subject: {
		type: GraphQLString,
		description: 'Search by subject. See http://hl7.org/fhir/SearchParameter/procedurerequest-subject.'
	},
	performer: {
		type: GraphQLString,
		description: 'Who should perform the procedure. See http://hl7.org/fhir/SearchParameter/procedurerequest-performer.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Encounter request created during. See http://hl7.org/fhir/SearchParameter/procedurerequest-encounter.'
	},
	identifier: {
		type: TokenScalar,
		description: 'A unique identifier of the Procedure Request. See http://hl7.org/fhir/SearchParameter/procedurerequest-identifier.'
	}
};
