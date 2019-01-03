const { GraphQLObjectType, GraphQLNonNull, GraphQLFloat } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ClaimResponse.item.detail.adjudication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseItemDetailAdjudication',
	description: 'The adjudications results.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication
			code: {
				type: new GraphQLNonNull(require('./coding.schema')),
				description:
					'Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.',
			},
			amount: {
				type: require('./quantity.schema'),
				description: 'Monetary amount associated with the code.',
			},
			value: {
				type: GraphQLFloat,
				description:
					'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.',
			},
			_value: {
				type: require('./element.schema'),
				description:
					'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.',
			},
		}),
});
