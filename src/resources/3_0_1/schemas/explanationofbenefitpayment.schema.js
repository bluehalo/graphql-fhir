const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary ExplanationOfBenefitpayment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitpayment',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ex-paymenttype
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Whether this represents partial or complete payment of the claim.',
		},
		adjustment: {
			type: require('./money.schema.js'),
			description:
				'Adjustment to the payment of this transaction which is not related to adjudication of this transaction.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/payment-adjustment-reason
		adjustmentReason: {
			type: require('./codeableconcept.schema.js'),
			description: 'Reason for the payment adjustment.',
		},
		_date: {
			type: require('./element.schema.js'),
			description: 'Estimated payment date.',
		},
		date: {
			type: DateScalar,
			description: 'Estimated payment date.',
		},
		amount: {
			type: require('./money.schema.js'),
			description: 'Payable less any payment adjustment.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description: 'Payment identifer.',
		},
	}),
});
