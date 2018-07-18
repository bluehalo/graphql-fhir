const { GraphQLInputObjectType, GraphQLNonNull, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ClaimResponseItemAdjudication Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponseItemAdjudication_Input',
	description: 'The adjudication results.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication
		category: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication-reason
		reason: {
			type: require('./codeableconcept.input'),
			description: 'Adjudication reason such as limit reached.'
		},
		amount: {
			type: require('./money.input'),
			description: 'Monetary amount associated with the code.'
		},
		value: {
			type: GraphQLFloat,
			description: 'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.'
		},
		_value: {
			type: require('./element.input'),
			description: 'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.'
		}
	})
});
