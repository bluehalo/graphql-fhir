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
 * @summary ExplanationOfBenefititemdetail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefititemdetail_Input',
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
		_sequence: {
			type: require('./element.input.js'),
			description:
				"A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.",
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description:
				"A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.",
		},
		revenue: {
			type: require('./codeableconcept.input.js'),
			description:
				'The type of revenue or cost center providing the product and/or service.',
		},
		category: {
			type: require('./codeableconcept.input.js'),
			description:
				'Code to identify the general type of benefits under which products and services are provided.',
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
		programCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Identifies the program under which this may be recovered.',
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
		udi: {
			type: new GraphQLList(GraphQLString),
			description: 'Unique Device Identifiers associated with this line item.',
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
				require('./explanationofbenefititemdetailsubdetail.input.js'),
			),
			description: 'Third-tier of goods and services.',
		},
	}),
});
