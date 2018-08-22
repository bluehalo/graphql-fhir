const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the basic query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'Business identifier. See http://hl7.org/fhir/SearchParameter/Basic-identifier.'
	},
	code: {
		type: TokenScalar,
		description: 'Kind of Resource. See http://hl7.org/fhir/SearchParameter/Basic-code.'
	},
	subject: {
		type: GraphQLString,
		description: 'Identifies the focus of this resource. See http://hl7.org/fhir/SearchParameter/Basic-subject.'
	},
	created: {
		type: DateScalar,
		description: 'When created. See http://hl7.org/fhir/SearchParameter/Basic-created.'
	},
	patient: {
		type: GraphQLString,
		description: 'Identifies the focus of this resource. See http://hl7.org/fhir/SearchParameter/Basic-patient.'
	},
	author: {
		type: GraphQLString,
		description: 'Who created. See http://hl7.org/fhir/SearchParameter/Basic-author.'
	}
};
