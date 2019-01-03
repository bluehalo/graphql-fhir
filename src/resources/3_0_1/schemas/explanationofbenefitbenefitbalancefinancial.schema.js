const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ExplanationOfBenefit.benefitBalance.financial Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitBenefitBalanceFinancial',
	description: 'Benefits Used to date.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-type
			type: {
				type: new GraphQLNonNull(require('./codeableconcept.schema')),
				description: 'Deductable, visits, benefit amount.',
			},
			allowedUnsignedInt: {
				type: UnsignedIntScalar,
				description: 'Benefits allowed.',
			},
			_allowedUnsignedInt: {
				type: require('./element.schema'),
				description: 'Benefits allowed.',
			},
			allowedString: {
				type: GraphQLString,
				description: 'Benefits allowed.',
			},
			_allowedString: {
				type: require('./element.schema'),
				description: 'Benefits allowed.',
			},
			allowedMoney: {
				type: require('./money.schema'),
				description: 'Benefits allowed.',
			},
			usedUnsignedInt: {
				type: UnsignedIntScalar,
				description: 'Benefits used.',
			},
			_usedUnsignedInt: {
				type: require('./element.schema'),
				description: 'Benefits used.',
			},
			usedMoney: {
				type: require('./money.schema'),
				description: 'Benefits used.',
			},
		}),
});
