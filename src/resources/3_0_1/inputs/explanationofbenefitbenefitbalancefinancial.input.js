const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExplanationOfBenefit.benefitBalance.financial Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitBenefitBalanceFinancial_Input',
	description: 'Benefits Used to date.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-type
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Deductable, visits, benefit amount.'
		},
		allowedUnsignedInt: {
			type: UnsignedIntScalar,
			description: 'Benefits allowed.'
		},
		_allowedUnsignedInt: {
			type: require('./element.input'),
			description: 'Benefits allowed.'
		},
		allowedString: {
			type: GraphQLString,
			description: 'Benefits allowed.'
		},
		_allowedString: {
			type: require('./element.input'),
			description: 'Benefits allowed.'
		},
		allowedMoney: {
			type: require('./money.input'),
			description: 'Benefits allowed.'
		},
		usedUnsignedInt: {
			type: UnsignedIntScalar,
			description: 'Benefits used.'
		},
		_usedUnsignedInt: {
			type: require('./element.input'),
			description: 'Benefits used.'
		},
		usedMoney: {
			type: require('./money.input'),
			description: 'Benefits used.'
		}
	})
});
