const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the nutritionorder query
 */
module.exports = {
	patient: {
		type: GraphQLString,
		description: 'The identity of the person who requires the diet, formula or nutritional supplement. See http://hl7.org/fhir/SearchParameter/nutritionorder-patient.'
	},
	status: {
		type: TokenScalar,
		description: 'Status of the nutrition order. See http://hl7.org/fhir/SearchParameter/nutritionorder-status.'
	},
	supplement: {
		type: TokenScalar,
		description: 'Type of supplement product requested. See http://hl7.org/fhir/SearchParameter/nutritionorder-supplement.'
	},
	oraldiet: {
		type: TokenScalar,
		description: 'Type of diet that can be consumed orally (i.e., take via the mouth). See http://hl7.org/fhir/SearchParameter/nutritionorder-oraldiet.'
	},
	provider: {
		type: GraphQLString,
		description: 'The identify of the provider who placed the nutrition order. See http://hl7.org/fhir/SearchParameter/nutritionorder-provider.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Return nutrition orders with this encounter identifier. See http://hl7.org/fhir/SearchParameter/nutritionorder-encounter.'
	},
	datetime: {
		type: DateScalar,
		description: 'Return nutrition orders requested on this date. See http://hl7.org/fhir/SearchParameter/nutritionorder-datetime.'
	},
	additive: {
		type: TokenScalar,
		description: 'Type of module component to add to the feeding. See http://hl7.org/fhir/SearchParameter/nutritionorder-additive.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Return nutrition orders with this external identifier. See http://hl7.org/fhir/SearchParameter/nutritionorder-identifier.'
	},
	formula: {
		type: TokenScalar,
		description: 'Type of enteral or infant formula. See http://hl7.org/fhir/SearchParameter/nutritionorder-formula.'
	}
};
