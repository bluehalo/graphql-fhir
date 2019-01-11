const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary RequestGroupactioncondition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'RequestGroupactioncondition_Input',
	description: '',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_kind: {
			type: require('./element.input.js'),
			description: 'The kind of condition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/action-condition-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The kind of condition.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'A brief, natural language description of the condition that effectively communicates the intended semantics.',
		},
		description: {
			type: GraphQLString,
			description:
				'A brief, natural language description of the condition that effectively communicates the intended semantics.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The media type of the language for the expression.',
		},
		language: {
			type: GraphQLString,
			description: 'The media type of the language for the expression.',
		},
		_expression: {
			type: require('./element.input.js'),
			description:
				'An expression that returns true or false, indicating whether or not the condition is satisfied.',
		},
		expression: {
			type: GraphQLString,
			description:
				'An expression that returns true or false, indicating whether or not the condition is satisfied.',
		},
	}),
});
