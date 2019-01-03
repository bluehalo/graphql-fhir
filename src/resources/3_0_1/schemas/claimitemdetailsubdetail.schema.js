const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLFloat } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Claim.item.detail.subDetail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimItemDetailSubDetail',
	description: 'Third tier of goods and services.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line number.'
		},
		_sequence: {
			type: require('./element.schema'),
			description: 'A service line number.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ex-revenue-center
		revenue: {
			type: require('./codeableconcept.schema'),
			description: 'The type of reveneu or cost center providing the product and/or service.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		category: {
			type: require('./codeableconcept.schema'),
			description: 'Health Care Service Type Codes  to identify the classification of service or benefits.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: require('./codeableconcept.schema'),
			description: 'A code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/claim-modifiers
		modifier: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ex-program-code
		programCode: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.'
		},
		quantity: {
			type: require('./quantity.schema'),
			description: 'The number of repetitions of a service or product.'
		},
		unitPrice: {
			type: require('./money.schema'),
			description: 'The fee for an addittional service or product or charge.'
		},
		factor: {
			type: GraphQLFloat,
			description: 'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		_factor: {
			type: require('./element.schema'),
			description: 'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		net: {
			type: require('./money.schema'),
			description: 'The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.'
		},
		udi: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'List of Unique Device Identifiers associated with this line item.'
		}
	})
});
