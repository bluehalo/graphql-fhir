const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CodeSystemFilter Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CodeSystemFilter_Input',
	description: 'A filter that can be used in a value set compose statement when selecting concepts using a filter.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The code that identifies this filter when it is used in the instance.'
		},
		_code: {
			type: require('./element.input'),
			description: 'The code that identifies this filter when it is used in the instance.'
		},
		description: {
			type: GraphQLString,
			description: 'A description of how or why the filter is used.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A description of how or why the filter is used.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/filter-operator
		operator: {
			type: new GraphQLList(new GraphQLNonNull(CodeScalar)),
			description: 'A list of operators that can be used with the filter.'
		},
		_operator: {
			type: require('./element.input'),
			description: 'A list of operators that can be used with the filter.'
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A description of what the value for the filter should be.'
		},
		_value: {
			type: require('./element.input'),
			description: 'A description of what the value for the filter should be.'
		}
	})
});
