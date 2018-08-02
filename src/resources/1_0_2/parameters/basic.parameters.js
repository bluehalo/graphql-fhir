const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the basic query
 */
module.exports = {
	author: {
		type: GraphQLString,
		description: 'Who created. See http://hl7.org/fhir/SearchParameter/basic-author.'
	},
	patient: {
		type: GraphQLString,
		description: 'Identifies the focus of this resource. See http://hl7.org/fhir/SearchParameter/basic-patient.'
	},
	created: {
		type: DateScalar,
		description: 'When created. See http://hl7.org/fhir/SearchParameter/basic-created.'
	},
	subject: {
		type: GraphQLString,
		description: 'Identifies the focus of this resource. See http://hl7.org/fhir/SearchParameter/basic-subject.'
	},
	code: {
		type: TokenScalar,
		description: 'Kind of Resource. See http://hl7.org/fhir/SearchParameter/basic-code.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Business identifier. See http://hl7.org/fhir/SearchParameter/basic-identifier.'
	}
};
