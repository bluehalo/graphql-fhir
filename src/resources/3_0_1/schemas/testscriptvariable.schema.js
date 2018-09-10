const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScript.variable Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptVariable',
	description: 'Variable is set based either on element value in response body or on header field value in the response headers.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Descriptive name for this variable.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'Descriptive name for this variable.'
		},
		defaultValue: {
			type: GraphQLString,
			description: 'A default, hard-coded, or user-defined value for this variable.'
		},
		_defaultValue: {
			type: require('./element.schema'),
			description: 'A default, hard-coded, or user-defined value for this variable.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the variable and its purpose.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the variable and its purpose.'
		},
		expression: {
			type: GraphQLString,
			description: 'The fluentpath expression to evaluate against the fixture body. When variables are defined, only one of either expression, headerField or path must be specified.'
		},
		_expression: {
			type: require('./element.schema'),
			description: 'The fluentpath expression to evaluate against the fixture body. When variables are defined, only one of either expression, headerField or path must be specified.'
		},
		headerField: {
			type: GraphQLString,
			description: 'Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.'
		},
		_headerField: {
			type: require('./element.schema'),
			description: 'Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.'
		},
		hint: {
			type: GraphQLString,
			description: 'Displayable text string with hint help information to the user when entering a default value.'
		},
		_hint: {
			type: require('./element.schema'),
			description: 'Displayable text string with hint help information to the user when entering a default value.'
		},
		path: {
			type: GraphQLString,
			description: 'XPath or JSONPath to evaluate against the fixture body.  When variables are defined, only one of either expression, headerField or path must be specified.'
		},
		_path: {
			type: require('./element.schema'),
			description: 'XPath or JSONPath to evaluate against the fixture body.  When variables are defined, only one of either expression, headerField or path must be specified.'
		},
		sourceId: {
			type: IdScalar,
			description: 'Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.'
		},
		_sourceId: {
			type: require('./element.schema'),
			description: 'Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.'
		}
	})
});
