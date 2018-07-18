const { GraphQLObjectType, GraphQLNonNull, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ExplanationOfBenefitItemAdjudication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitItemAdjudication',
	description: 'The adjudications results.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication
		category: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Code indicating: Co-Pay, deductable, elegible, benefit, tax, etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication-reason
		reason: {
			type: require('./codeableconcept.schema'),
			description: 'Adjudication reason such as limit reached.'
		},
		amount: {
			type: require('./money.schema'),
			description: 'Monitory amount associated with the code.'
		},
		value: {
			type: GraphQLFloat,
			description: 'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.'
		},
		_value: {
			type: require('./element.schema'),
			description: 'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.'
		}
	})
});
