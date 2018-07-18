const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ClaimItemDetailSubDetail Schema
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
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActInvoiceGroupCode
		type: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'The type of product or service.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'The fee for an additional  service or product or charge.'
		},
		quantity: {
			type: require('./quantity.schema'),
			description: 'The number of repetitions of a service or product.'
		},
		unitPrice: {
			type: require('./quantity.schema'),
			description: 'The fee for an additional  service or product or charge.'
		},
		factor: {
			type: GraphQLFloat,
			description: 'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		_factor: {
			type: require('./element.schema'),
			description: 'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		points: {
			type: GraphQLFloat,
			description: 'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.'
		},
		_points: {
			type: require('./element.schema'),
			description: 'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.'
		},
		net: {
			type: require('./quantity.schema'),
			description: 'The quantity times the unit price for an additional  service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/udi
		udi: {
			type: require('./coding.schema'),
			description: 'List of Unique Device Identifiers associated with this line item.'
		}
	})
});
