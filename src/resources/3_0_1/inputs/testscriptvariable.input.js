const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary TestScriptvariable Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptvariable_Input',
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
		_name: {
			type: require('./element.input.js'),
			description: 'Descriptive name for this variable.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Descriptive name for this variable.',
		},
		_defaultValue: {
			type: require('./element.input.js'),
			description:
				'A default, hard-coded, or user-defined value for this variable.',
		},
		defaultValue: {
			type: GraphQLString,
			description:
				'A default, hard-coded, or user-defined value for this variable.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'A free text natural language description of the variable and its purpose.',
		},
		description: {
			type: GraphQLString,
			description:
				'A free text natural language description of the variable and its purpose.',
		},
		_expression: {
			type: require('./element.input.js'),
			description:
				'The fluentpath expression to evaluate against the fixture body. When variables are defined, only one of either expression, headerField or path must be specified.',
		},
		expression: {
			type: GraphQLString,
			description:
				'The fluentpath expression to evaluate against the fixture body. When variables are defined, only one of either expression, headerField or path must be specified.',
		},
		_headerField: {
			type: require('./element.input.js'),
			description:
				'Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.',
		},
		headerField: {
			type: GraphQLString,
			description:
				'Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.',
		},
		_hint: {
			type: require('./element.input.js'),
			description:
				'Displayable text string with hint help information to the user when entering a default value.',
		},
		hint: {
			type: GraphQLString,
			description:
				'Displayable text string with hint help information to the user when entering a default value.',
		},
		_path: {
			type: require('./element.input.js'),
			description:
				'XPath or JSONPath to evaluate against the fixture body.  When variables are defined, only one of either expression, headerField or path must be specified.',
		},
		path: {
			type: GraphQLString,
			description:
				'XPath or JSONPath to evaluate against the fixture body.  When variables are defined, only one of either expression, headerField or path must be specified.',
		},
		_sourceId: {
			type: require('./element.input.js'),
			description:
				'Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.',
		},
		sourceId: {
			type: IdScalar,
			description:
				'Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.',
		},
	}),
});
