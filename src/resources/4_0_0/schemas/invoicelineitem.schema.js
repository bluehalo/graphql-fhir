const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary InvoicelineItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'InvoicelineItem',
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
		_sequence: {
			type: require('./element.schema.js'),
			description: 'Sequence in which the items appear on the invoice.',
		},
		sequence: {
			type: PositiveIntScalar,
			description: 'Sequence in which the items appear on the invoice.',
		},
		chargeItemReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'InvoicelineItemchargeItemReference_chargeItemReference_Union',
					description:
						'The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.',
					types: () => [require('./chargeitem.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'ChargeItem') {
							return require('./chargeitem.schema.js');
						}
					},
				}),
			),
			description:
				'The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.',
		},
		chargeItemCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.',
		},
		priceComponent: {
			type: new GraphQLList(
				require('./invoicelineitempricecomponent.schema.js'),
			),
			description:
				'The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.',
		},
	}),
});
