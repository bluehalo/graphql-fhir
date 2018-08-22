const { GraphQLObjectType, GraphQLNonNull, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimResponseItemAdjudication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseItemAdjudication',
	description: 'The adjudication results.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication
		category: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication-reason
		reason: {
			type: require('./codeableconcept.schema'),
			description: 'Adjudication reason such as limit reached.'
		},
		amount: {
			type: require('./money.schema'),
			description: 'Monetary amount associated with the code.'
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
