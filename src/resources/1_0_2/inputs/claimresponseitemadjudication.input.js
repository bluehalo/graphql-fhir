const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary ClaimResponseitemadjudication Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponseitemadjudication_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/adjudication
		code: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description:
				'Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.',
		},
		amount: {
			type: require('./quantity.input.js'),
			description: 'Monetary amount associated with the code.',
		},
		_value: {
			type: require('./element.input.js'),
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
