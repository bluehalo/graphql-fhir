const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary PaymentReconciliationdetail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PaymentReconciliationdetail_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/payment-type
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'Code to indicate the nature of the payment, adjustment, funds advance, etc.',
		},
		request: {
			type: GraphQLString,
			description: 'The claim or financial resource.',
		},
		response: {
			type: GraphQLString,
			description: 'The claim response resource.',
		},
		submitter: {
			type: GraphQLString,
			description:
				'The Organization which submitted the claim or financial transaction.',
		},
		payee: {
			type: GraphQLString,
			description: 'The organization which is receiving the payment.',
		},
		_date: {
			type: require('./element.input.js'),
			description: 'The date of the invoice or financial resource.',
		},
		date: {
			type: DateScalar,
			description: 'The date of the invoice or financial resource.',
		},
		amount: {
			type: require('./money.input.js'),
			description: 'Amount paid for this detail.',
		},
	}),
});
