const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary ClaimResponsepayment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponsepayment',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Whether this represents partial or complete payment of the benefits payable.',
		},
		adjustment: {
			type: require('./money.schema.js'),
			description:
				"Total amount of all adjustments to this payment included in this transaction which are not related to this claim's adjudication.",
		},
		adjustmentReason: {
			type: require('./codeableconcept.schema.js'),
			description: 'Reason for the payment adjustment.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'Estimated date the payment will be issued or the actual issue date of payment.',
		},
		date: {
			type: DateScalar,
			description:
				'Estimated date the payment will be issued or the actual issue date of payment.',
		},
		amount: {
			type: new GraphQLNonNull(require('./money.schema.js')),
			description: 'Benefits payable less any payment adjustment.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description: "Issuer's unique identifier for the payment instrument.",
		},
	}),
});
