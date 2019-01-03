const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLFloat, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Quantity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Quantity',
	description: 'Base StructureDefinition for Quantity Type.',
	fields: () => extendSchema(require('./element.schema'), {
		value: {
			type: GraphQLFloat,
			description: 'The value of the measured amount. The value includes an implicit precision in the presentation of the value.'
		},
		_value: {
			type: require('./element.schema'),
			description: 'The value of the measured amount. The value includes an implicit precision in the presentation of the value.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/quantity-comparator
		comparator: {
			type: CodeScalar,
			description: 'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \'<\' , then the real value is < stated value.'
		},
		_comparator: {
			type: require('./element.schema'),
			description: 'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \'<\' , then the real value is < stated value.'
		},
		unit: {
			type: GraphQLString,
			description: 'A human-readable form of the unit.'
		},
		_unit: {
			type: require('./element.schema'),
			description: 'A human-readable form of the unit.'
		},
		system: {
			type: UriScalar,
			description: 'The identification of the system that provides the coded form of the unit.'
		},
		_system: {
			type: require('./element.schema'),
			description: 'The identification of the system that provides the coded form of the unit.'
		},
		code: {
			type: CodeScalar,
			description: 'A computer processable form of the unit in some unit representation system.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'A computer processable form of the unit in some unit representation system.'
		}
	})
});
