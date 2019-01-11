const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary TerminologyCapabilitiescodeSystemversion Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TerminologyCapabilitiescodeSystemversion_Input',
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
		_code: {
			type: require('./element.input.js'),
			description:
				'For version-less code systems, there should be a single version with no identifier.',
		},
		code: {
			type: GraphQLString,
			description:
				'For version-less code systems, there should be a single version with no identifier.',
		},
		_isDefault: {
			type: require('./element.input.js'),
			description: 'If this is the default version for this code system.',
		},
		isDefault: {
			type: GraphQLBoolean,
			description: 'If this is the default version for this code system.',
		},
		_compositional: {
			type: require('./element.input.js'),
			description:
				'If the compositional grammar defined by the code system is supported.',
		},
		compositional: {
			type: GraphQLBoolean,
			description:
				'If the compositional grammar defined by the code system is supported.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'Language Displays supported.',
		},
		language: {
			type: new GraphQLList(CodeScalar),
			description: 'Language Displays supported.',
		},
		filter: {
			type: new GraphQLList(
				require('./terminologycapabilitiescodesystemversionfilter.input.js'),
			),
			description: 'Filter Properties supported.',
		},
		_property: {
			type: require('./element.input.js'),
			description: 'Properties supported for $lookup.',
		},
		property: {
			type: new GraphQLList(CodeScalar),
			description: 'Properties supported for $lookup.',
		},
	}),
});
