const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScriptVariable Schema
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
		headerField: {
			type: GraphQLString,
			description: 'Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.'
		},
		_headerField: {
			type: require('./element.schema'),
			description: 'Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.'
		},
		path: {
			type: GraphQLString,
			description: 'XPath or JSONPath against the fixture body.  When variables are defined, either headerField must be specified or path, but not both.'
		},
		_path: {
			type: require('./element.schema'),
			description: 'XPath or JSONPath against the fixture body.  When variables are defined, either headerField must be specified or path, but not both.'
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
