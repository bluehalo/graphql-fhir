const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary RequestGroupActionCondition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RequestGroupActionCondition',
	description: 'An expression that describes applicability criteria, or start/stop conditions for the action.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/action-condition-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The kind of condition.'
		},
		_kind: {
			type: require('./element.schema'),
			description: 'The kind of condition.'
		},
		description: {
			type: GraphQLString,
			description: 'A brief, natural language description of the condition that effectively communicates the intended semantics.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A brief, natural language description of the condition that effectively communicates the intended semantics.'
		},
		language: {
			type: GraphQLString,
			description: 'The media type of the language for the expression.'
		},
		_language: {
			type: require('./element.schema'),
			description: 'The media type of the language for the expression.'
		},
		expression: {
			type: GraphQLString,
			description: 'An expression that returns true or false, indicating whether or not the condition is satisfied.'
		},
		_expression: {
			type: require('./element.schema'),
			description: 'An expression that returns true or false, indicating whether or not the condition is satisfied.'
		}
	})
});
