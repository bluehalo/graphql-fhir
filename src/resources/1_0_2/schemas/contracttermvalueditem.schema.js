const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ContractTermValuedItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContractTermValuedItem',
	description: 'Contract Provision Valued Item List.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		entityCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Specific type of Contract Provision Valued Item that may be priced.'
		},
		entityReference: {
			type: require('./reference.schema'),
			description: 'Specific type of Contract Provision Valued Item that may be priced.'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'Identifies a Contract Provision Valued Item instance.'
		},
		effectiveTime: {
			type: DateTimeScalar,
			description: 'Indicates the time during which this Contract Term ValuedItem information is effective.'
		},
		_effectiveTime: {
			type: require('./element.schema'),
			description: 'Indicates the time during which this Contract Term ValuedItem information is effective.'
		},
		quantity: {
			type: require('./quantity.schema'),
			description: 'Specifies the units by which the Contract Provision Valued Item is measured or counted, and quantifies the countable or measurable Contract Term Valued Item instances.'
		},
		unitPrice: {
			type: require('./quantity.schema'),
			description: 'A Contract Provision Valued Item unit valuation measure.'
		},
		factor: {
			type: GraphQLFloat,
			description: 'A real number that represents a multiplier used in determining the overall value of the Contract Provision Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		_factor: {
			type: require('./element.schema'),
			description: 'A real number that represents a multiplier used in determining the overall value of the Contract Provision Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		points: {
			type: GraphQLFloat,
			description: 'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Provision Valued Item delivered. The concept of Points allows for assignment of point values for a Contract ProvisionValued Item, such that a monetary amount can be assigned to each point.'
		},
		_points: {
			type: require('./element.schema'),
			description: 'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Provision Valued Item delivered. The concept of Points allows for assignment of point values for a Contract ProvisionValued Item, such that a monetary amount can be assigned to each point.'
		},
		net: {
			type: require('./quantity.schema'),
			description: 'Expresses the product of the Contract Provision Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.'
		}
	})
});
