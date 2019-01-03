const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary NutritionOrder.enteralFormula.administration Schema
 */
module.exports = new GraphQLObjectType({
	name: 'NutritionOrderEnteralFormulaAdministration',
	description:
		'Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			schedule: {
				type: require('./timing.schema'),
				description:
					'The time period and frequency at which the enteral formula should be delivered to the patient.',
			},
			quantity: {
				type: require('./quantity.schema'),
				description:
					'The volume of formula to provide to the patient per the specified administration schedule.',
			},
			rateQuantity: {
				type: require('./quantity.schema'),
				description:
					'The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.',
			},
			rateRatio: {
				type: require('./ratio.schema'),
				description:
					'The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.',
			},
		}),
});
