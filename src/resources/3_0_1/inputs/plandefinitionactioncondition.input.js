const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PlanDefinition.action.condition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PlanDefinitionActionCondition_Input',
	description: 'An expression that describes applicability criteria, or start/stop conditions for the action.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/action-condition-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The kind of condition.'
		},
		_kind: {
			type: require('./element.input'),
			description: 'The kind of condition.'
		},
		description: {
			type: GraphQLString,
			description: 'A brief, natural language description of the condition that effectively communicates the intended semantics.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A brief, natural language description of the condition that effectively communicates the intended semantics.'
		},
		language: {
			type: GraphQLString,
			description: 'The media type of the language for the expression.'
		},
		_language: {
			type: require('./element.input'),
			description: 'The media type of the language for the expression.'
		},
		expression: {
			type: GraphQLString,
			description: 'An expression that returns true or false, indicating whether or not the condition is satisfied.'
		},
		_expression: {
			type: require('./element.input'),
			description: 'An expression that returns true or false, indicating whether or not the condition is satisfied.'
		}
	})
});
