const {
	GraphQLString,
	GraphQLList,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Money Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Money_Input',
	description: 'Base StructureDefinition for Money Type',
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
		_value: {
			type: require('./element.input.js'),
			description:
				'The value of the measured amount. The value includes an implicit precision in the presentation of the value.',
		},
		value: {
			type: GraphQLFloat,
			description:
				'The value of the measured amount. The value includes an implicit precision in the presentation of the value.',
		},
		_comparator: {
			type: require('./element.input.js'),
			description:
				"How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is '<' , then the real value is < stated value.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/quantity-comparator
		comparator: {
			type: CodeScalar,
			description:
				"How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is '<' , then the real value is < stated value.",
		},
		_unit: {
			type: require('./element.input.js'),
			description: 'A human-readable form of the unit.',
		},
		unit: {
			type: GraphQLString,
			description: 'A human-readable form of the unit.',
		},
		_system: {
			type: require('./element.input.js'),
			description:
				'The identification of the system that provides the coded form of the unit.',
		},
		system: {
			type: UriScalar,
			description:
				'The identification of the system that provides the coded form of the unit.',
		},
		_code: {
			type: require('./element.input.js'),
			description:
				'A computer processable form of the unit in some unit representation system.',
		},
		code: {
			type: CodeScalar,
			description:
				'A computer processable form of the unit in some unit representation system.',
		},
	}),
});
