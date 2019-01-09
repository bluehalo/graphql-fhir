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
 * @summary OperationDefinitionparameter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'OperationDefinitionparameter',
	description: '',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_name: {
			type: require('./element.schema.js'),
			description: 'The name of used to identify the parameter.',
		},
		name: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The name of used to identify the parameter.',
		},
		_use: {
			type: require('./element.schema.js'),
			description: 'Whether this is an input or an output parameter.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/operation-parameter-use
		use: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether this is an input or an output parameter.',
		},
		_min: {
			type: require('./element.schema.js'),
			description:
				'The minimum number of times this parameter SHALL appear in the request or response.',
		},
		min: {
			type: new GraphQLNonNull(GraphQLInt),
			description:
				'The minimum number of times this parameter SHALL appear in the request or response.',
		},
		_max: {
			type: require('./element.schema.js'),
			description:
				'The maximum number of times this element is permitted to appear in the request or response.',
		},
		max: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The maximum number of times this element is permitted to appear in the request or response.',
		},
		_documentation: {
			type: require('./element.schema.js'),
			description: 'Describes the meaning or use of this parameter.',
		},
		documentation: {
			type: GraphQLString,
			description: 'Describes the meaning or use of this parameter.',
		},
		_type: {
			type: require('./element.schema.js'),
			description: 'The type for this parameter.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/all-types
		type: {
			type: CodeScalar,
			description: 'The type for this parameter.',
		},
		_searchType: {
			type: require('./element.schema.js'),
			description:
				"How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-param-type
		searchType: {
			type: CodeScalar,
			description:
				"How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.",
		},
		profile: {
			type: new GraphQLUnionType({
				name: 'OperationDefinitionparameterprofile_profile_Union',
				description:
					'A profile the specifies the rules that this parameter must conform to.',
				types: () => [require('./structuredefinition.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'StructureDefinition') {
						return require('./structuredefinition.schema.js');
					}
				},
			}),
			description:
				'A profile the specifies the rules that this parameter must conform to.',
		},
		binding: {
			type: require('./operationdefinitionparameterbinding.schema.js'),
			description:
				'Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).',
		},
	}),
});
