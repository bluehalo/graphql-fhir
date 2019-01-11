const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary Claimitemdetail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Claimitemdetail',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		_sequence: {
			type: require('./element.schema.js'),
			description: 'A service line number.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line number.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActInvoiceGroupCode
		type: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description: 'The type of product or service.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description:
				"If a grouping item then 'GROUP' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.",
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description: 'The number of repetitions of a service or product.',
		},
		unitPrice: {
			type: require('./quantity.schema.js'),
			description:
				'If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.',
		},
		_factor: {
			type: require('./element.schema.js'),
			description:
				'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.',
		},
		factor: {
			type: GraphQLFloat,
			description:
				'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.',
		},
		_points: {
			type: require('./element.schema.js'),
			description:
				'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.',
		},
		points: {
			type: GraphQLFloat,
			description:
				'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.',
		},
		net: {
			type: require('./quantity.schema.js'),
			description:
				'The quantity times the unit price for an additional  service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/udi
		udi: {
			type: require('./coding.schema.js'),
			description:
				'List of Unique Device Identifiers associated with this line item.',
		},
		subDetail: {
			type: new GraphQLList(require('./claimitemdetailsubdetail.schema.js')),
			description: 'Third tier of goods and services.',
		},
	}),
});
