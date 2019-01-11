const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary TestScriptvariable Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptvariable',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_name: {
			type: require('./element.schema.js'),
			description: 'Descriptive name for this variable.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Descriptive name for this variable.',
		},
		_headerField: {
			type: require('./element.schema.js'),
			description:
				'Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.',
		},
		headerField: {
			type: GraphQLString,
			description:
				'Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.',
		},
		_path: {
			type: require('./element.schema.js'),
			description:
				'XPath or JSONPath against the fixture body.  When variables are defined, either headerField must be specified or path, but not both.',
		},
		path: {
			type: GraphQLString,
			description:
				'XPath or JSONPath against the fixture body.  When variables are defined, either headerField must be specified or path, but not both.',
		},
		_sourceId: {
			type: require('./element.schema.js'),
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
