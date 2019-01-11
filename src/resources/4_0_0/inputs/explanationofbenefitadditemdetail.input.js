const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ExplanationOfBenefitaddItemdetail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitaddItemdetail_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		productOrService: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.',
		},
		modifier: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Item typification or modifiers codes to convey additional context for the product or service.',
		},
		quantity: {
			type: require('./quantity.input.js'),
			description: 'The number of repetitions of a service or product.',
		},
		unitPrice: {
			type: require('./money.input.js'),
			description:
				'If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.',
		},
		_factor: {
			type: require('./element.input.js'),
			description:
				'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.',
		},
		factor: {
			type: GraphQLFloat,
			description:
				'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.',
		},
		net: {
			type: require('./money.input.js'),
			description:
				'The quantity times the unit price for an additional service or product or charge.',
		},
		_noteNumber: {
			type: require('./element.input.js'),
			description:
				'The numbers associated with notes below which apply to the adjudication of this item.',
		},
		noteNumber: {
			type: new GraphQLList(PositiveIntScalar),
			description:
				'The numbers associated with notes below which apply to the adjudication of this item.',
		},
		subDetail: {
			type: new GraphQLList(
				require('./explanationofbenefitadditemdetailsubdetail.input.js'),
			),
			description:
				'The third-tier service adjudications for payor added services.',
		},
	}),
});
