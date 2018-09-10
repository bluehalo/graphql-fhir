const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ValueSet.compose.include.filter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetComposeIncludeFilter',
	description: 'Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		property: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code that identifies a property defined in the code system.'
		},
		_property: {
			type: require('./element.schema'),
			description: 'A code that identifies a property defined in the code system.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/filter-operator
		op: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The kind of operation to perform as a part of the filter criteria.'
		},
		_op: {
			type: require('./element.schema'),
			description: 'The kind of operation to perform as a part of the filter criteria.'
		},
		value: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The match value may be either a code defined by the system, or a string value, which is a regex match on the literal string of the property value when the operation is \'regex\', or one of the values (true and false), when the operation is \'exists\'.'
		},
		_value: {
			type: require('./element.schema'),
			description: 'The match value may be either a code defined by the system, or a string value, which is a regex match on the literal string of the property value when the operation is \'regex\', or one of the values (true and false), when the operation is \'exists\'.'
		}
	})
});
