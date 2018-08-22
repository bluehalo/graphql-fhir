const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimItemDetailSubDetail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimItemDetailSubDetail_Input',
	description: 'Third tier of goods and services.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line number.'
		},
		_sequence: {
			type: require('./element.input'),
			description: 'A service line number.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActInvoiceGroupCode
		type: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The type of product or service.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The fee for an additional  service or product or charge.'
		},
		quantity: {
			type: require('./quantity.input'),
			description: 'The number of repetitions of a service or product.'
		},
		unitPrice: {
			type: require('./quantity.input'),
			description: 'The fee for an additional  service or product or charge.'
		},
		factor: {
			type: GraphQLFloat,
			description: 'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		_factor: {
			type: require('./element.input'),
			description: 'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		points: {
			type: GraphQLFloat,
			description: 'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.'
		},
		_points: {
			type: require('./element.input'),
			description: 'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.'
		},
		net: {
			type: require('./quantity.input'),
			description: 'The quantity times the unit price for an additional  service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/udi
		udi: {
			type: require('./coding.input'),
			description: 'List of Unique Device Identifiers associated with this line item.'
		}
	})
});
