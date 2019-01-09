const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ParameterDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ParameterDefinition',
	description: 'Base StructureDefinition for ParameterDefinition Type',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/operation-parameter-use
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/all-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of the parameter.',
		},
		profile: {
			type: new GraphQLUnionType({
				name: 'ParameterDefinitionprofile_profile_Union',
				description:
					'If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.',
				types: () => [require('./structuredefinition.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'StructureDefinition') {
						return require('./structuredefinition.schema.js');
					}
				},
			}),
			description:
				'If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.',
		},
	}),
});
