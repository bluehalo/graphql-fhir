const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary ClaimResponseitemdetailsubDetailadjudication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseitemdetailsubDetailadjudication',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/adjudication
		code: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description:
				'Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.',
		},
		amount: {
			type: require('./quantity.schema.js'),
			description: 'Monetary amount associated with the code.',
		},
		_value: {
			type: require('./element.schema.js'),
			description:
				'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.',
		},
		value: {
			type: GraphQLFloat,
			description:
				'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.',
		},
	}),
});
