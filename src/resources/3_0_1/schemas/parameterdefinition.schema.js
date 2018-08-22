const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ParameterDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ParameterDefinition',
	description: 'Base StructureDefinition for ParameterDefinition Type.',
	fields: () => extendSchema(require('./element.schema'), {
		name: {
			type: CodeScalar,
			description: 'The name of the parameter used to allow access to the value of the parameter in evaluation contexts.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'The name of the parameter used to allow access to the value of the parameter in evaluation contexts.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/operation-parameter-use
		use: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether the parameter is input or output for the module.'
		},
		_use: {
			type: require('./element.schema'),
			description: 'Whether the parameter is input or output for the module.'
		},
		min: {
			type: GraphQLInt,
			description: 'The minimum number of times this parameter SHALL appear in the request or response.'
		},
		_min: {
			type: require('./element.schema'),
			description: 'The minimum number of times this parameter SHALL appear in the request or response.'
		},
		max: {
			type: GraphQLString,
			description: 'The maximum number of times this element is permitted to appear in the request or response.'
		},
		_max: {
			type: require('./element.schema'),
			description: 'The maximum number of times this element is permitted to appear in the request or response.'
		},
		documentation: {
			type: GraphQLString,
			description: 'A brief discussion of what the parameter is for and how it is used by the module.'
		},
		_documentation: {
			type: require('./element.schema'),
			description: 'A brief discussion of what the parameter is for and how it is used by the module.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/all-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of the parameter.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type of the parameter.'
		},
		profile: {
			type: require('./reference.schema'),
			description: 'If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.'
		}
	})
});
