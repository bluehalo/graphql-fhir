const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary OperationDefinitionparameter Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OperationDefinitionparameter_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_name: {
			type: require('./element.input.js'),
			description: 'The name of used to identify the parameter.',
		},
		name: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The name of used to identify the parameter.',
		},
		_use: {
			type: require('./element.input.js'),
			description: 'Whether this is an input or an output parameter.',
		},
		use: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether this is an input or an output parameter.',
		},
		_min: {
			type: require('./element.input.js'),
			description:
				'The minimum number of times this parameter SHALL appear in the request or response.',
		},
		min: {
			type: new GraphQLNonNull(GraphQLInt),
			description:
				'The minimum number of times this parameter SHALL appear in the request or response.',
		},
		_max: {
			type: require('./element.input.js'),
			description:
				'The maximum number of times this element is permitted to appear in the request or response.',
		},
		max: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The maximum number of times this element is permitted to appear in the request or response.',
		},
		_documentation: {
			type: require('./element.input.js'),
			description: 'Describes the meaning or use of this parameter.',
		},
		documentation: {
			type: GraphQLString,
			description: 'Describes the meaning or use of this parameter.',
		},
		_type: {
			type: require('./element.input.js'),
			description: 'The type for this parameter.',
		},
		type: {
			type: CodeScalar,
			description: 'The type for this parameter.',
		},
		_targetProfile: {
			type: require('./element.input.js'),
			description:
				"Used when the type is 'Reference' or 'canonical', and identifies a profile structure or implementation Guide that applies to the target of the reference this parameter refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.",
		},
		targetProfile: {
			type: new GraphQLList(CanonicalScalar),
			description:
				"Used when the type is 'Reference' or 'canonical', and identifies a profile structure or implementation Guide that applies to the target of the reference this parameter refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.",
		},
		_searchType: {
			type: require('./element.input.js'),
			description:
				"How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.",
		},
		searchType: {
			type: CodeScalar,
			description:
				"How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.",
		},
		binding: {
			type: require('./operationdefinitionparameterbinding.input.js'),
			description:
				'Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).',
		},
		referencedFrom: {
			type: new GraphQLList(
				require('./operationdefinitionparameterreferencedfrom.input.js'),
			),
			description:
				'Identifies other resource parameters within the operation invocation that are expected to resolve to this resource.',
		},
	}),
});
