const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLFloat, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Quantity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Quantity_Input',
	description: 'Base StructureDefinition for Quantity Type.',
	fields: () => extendSchema({
		value: {
			type: GraphQLFloat,
			description: 'The value of the measured amount. The value includes an implicit precision in the presentation of the value.'
		},
		_value: {
			type: require('./element.input'),
			description: 'The value of the measured amount. The value includes an implicit precision in the presentation of the value.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/quantity-comparator
		comparator: {
			type: CodeScalar,
			description: 'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \'<\' , then the real value is < stated value.'
		},
		_comparator: {
			type: require('./element.input'),
			description: 'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \'<\' , then the real value is < stated value.'
		},
		unit: {
			type: GraphQLString,
			description: 'A human-readable form of the unit.'
		},
		_unit: {
			type: require('./element.input'),
			description: 'A human-readable form of the unit.'
		},
		system: {
			type: UriScalar,
			description: 'The identification of the system that provides the coded form of the unit.'
		},
		_system: {
			type: require('./element.input'),
			description: 'The identification of the system that provides the coded form of the unit.'
		},
		code: {
			type: CodeScalar,
			description: 'A computer processable form of the unit in some unit representation system.'
		},
		_code: {
			type: require('./element.input'),
			description: 'A computer processable form of the unit in some unit representation system.'
		}
	})
});
