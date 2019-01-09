const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary ParameterDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ParameterDefinition',
	description:
		'Base StructureDefinition for ParameterDefinition Type: The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.',
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
		_name: {
			type: require('./element.schema.js'),
			description:
				'The name of the parameter used to allow access to the value of the parameter in evaluation contexts.',
		},
		name: {
			type: CodeScalar,
			description:
				'The name of the parameter used to allow access to the value of the parameter in evaluation contexts.',
		},
		_use: {
			type: require('./element.schema.js'),
			description: 'Whether the parameter is input or output for the module.',
		},
		use: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether the parameter is input or output for the module.',
		},
		_min: {
			type: require('./element.schema.js'),
			description:
				'The minimum number of times this parameter SHALL appear in the request or response.',
		},
		min: {
			type: GraphQLInt,
			description:
				'The minimum number of times this parameter SHALL appear in the request or response.',
		},
		_max: {
			type: require('./element.schema.js'),
			description:
				'The maximum number of times this element is permitted to appear in the request or response.',
		},
		max: {
			type: GraphQLString,
			description:
				'The maximum number of times this element is permitted to appear in the request or response.',
		},
		_documentation: {
			type: require('./element.schema.js'),
			description:
				'A brief discussion of what the parameter is for and how it is used by the module.',
		},
		documentation: {
			type: GraphQLString,
			description:
				'A brief discussion of what the parameter is for and how it is used by the module.',
		},
		_type: {
			type: require('./element.schema.js'),
			description: 'The type of the parameter.',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of the parameter.',
		},
		_profile: {
			type: require('./element.schema.js'),
			description:
				'If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.',
		},
		profile: {
			type: CanonicalScalar,
			description:
				'If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.',
		},
	}),
});
