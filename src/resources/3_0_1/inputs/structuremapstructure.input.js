const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary StructureMapstructure Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapstructure_Input',
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
		_url: {
			type: require('./element.input.js'),
			description: 'The canonical URL that identifies the structure.',
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The canonical URL that identifies the structure.',
		},
		_mode: {
			type: require('./element.input.js'),
			description: 'How the referenced structure is used in this mapping.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/map-model-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'How the referenced structure is used in this mapping.',
		},
		_alias: {
			type: require('./element.input.js'),
			description: 'The name used for this type in the map.',
		},
		alias: {
			type: GraphQLString,
			description: 'The name used for this type in the map.',
		},
		_documentation: {
			type: require('./element.input.js'),
			description:
				'Documentation that describes how the structure is used in the mapping.',
		},
		documentation: {
			type: GraphQLString,
			description:
				'Documentation that describes how the structure is used in the mapping.',
		},
	}),
});
