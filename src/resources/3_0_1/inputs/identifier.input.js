const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Identifier Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Identifier_Input',
	description: 'Base StructureDefinition for Identifier Type',
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
		_use: {
			type: require('./element.input.js'),
			description: 'The purpose of this identifier.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/identifier-use
		use: {
			type: CodeScalar,
			description: 'The purpose of this identifier.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/identifier-type
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.',
		},
		_system: {
			type: require('./element.input.js'),
			description:
				'Establishes the namespace for the value - that is, a URL that describes a set values that are unique.',
		},
		system: {
			type: UriScalar,
			description:
				'Establishes the namespace for the value - that is, a URL that describes a set values that are unique.',
		},
		_value: {
			type: require('./element.input.js'),
			description:
				'The portion of the identifier typically relevant to the user and which is unique within the context of the system.',
		},
		value: {
			type: GraphQLString,
			description:
				'The portion of the identifier typically relevant to the user and which is unique within the context of the system.',
		},
		period: {
			type: require('./period.input.js'),
			description: 'Time period during which identifier is/was valid for use.',
		},
		assigner: {
			type: GraphQLString,
			description: 'Organization that issued/manages the identifier.',
		},
	}),
});
