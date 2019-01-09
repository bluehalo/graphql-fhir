const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Expression Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Expression',
	description:
		'Base StructureDefinition for Expression Type: A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'A brief, natural language description of the condition that effectively communicates the intended semantics.',
		},
		description: {
			type: GraphQLString,
			description:
				'A brief, natural language description of the condition that effectively communicates the intended semantics.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.',
		},
		name: {
			type: IdScalar,
			description:
				'A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The media type of the language for the expression.',
		},
		language: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The media type of the language for the expression.',
		},
		_expression: {
			type: require('./element.schema.js'),
			description:
				'An expression in the specified language that returns a value.',
		},
		expression: {
			type: GraphQLString,
			description:
				'An expression in the specified language that returns a value.',
		},
		_reference: {
			type: require('./element.schema.js'),
			description: 'A URI that defines where the expression is found.',
		},
		reference: {
			type: UriScalar,
			description: 'A URI that defines where the expression is found.',
		},
	}),
});
