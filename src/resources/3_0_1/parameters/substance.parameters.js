const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the substance query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'Unique identifier for the substance. See http://hl7.org/fhir/SearchParameter/Substance-identifier.'
	},
	container_identifier: {
		type: TokenScalar,
		description: 'Identifier of the package/container. See http://hl7.org/fhir/SearchParameter/Substance-container-identifier.'
	},
	code: {
		type: TokenScalar,
		description: 'The code of the substance or ingredient. See http://hl7.org/fhir/SearchParameter/Substance-code.'
	},
	quantity: {
		type: GraphQLString,
		description: 'Amount of substance in the package. See http://hl7.org/fhir/SearchParameter/Substance-quantity.'
	},
	substance_reference: {
		type: GraphQLString,
		description: 'A component of the substance. See http://hl7.org/fhir/SearchParameter/Substance-substance-reference.'
	},
	expiry: {
		type: DateScalar,
		description: 'Expiry date of package or container of substance. See http://hl7.org/fhir/SearchParameter/Substance-expiry.'
	},
	category: {
		type: TokenScalar,
		description: 'The category of the substance. See http://hl7.org/fhir/SearchParameter/Substance-category.'
	},
	status: {
		type: TokenScalar,
		description: 'active | inactive | entered-in-error. See http://hl7.org/fhir/SearchParameter/Substance-status.'
	}
};
