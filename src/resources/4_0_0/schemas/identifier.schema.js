const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Identifier Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Identifier',
	description:
		'Base StructureDefinition for Identifier Type: An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.',
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
		_use: {
			type: require('./element.schema.js'),
			description: 'The purpose of this identifier.',
		},
		use: {
			type: CodeScalar,
			description: 'The purpose of this identifier.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.',
		},
		_system: {
			type: require('./element.schema.js'),
			description:
				'Establishes the namespace for the value - that is, a URL that describes a set values that are unique.',
		},
		system: {
			type: UriScalar,
			description:
				'Establishes the namespace for the value - that is, a URL that describes a set values that are unique.',
		},
		_value: {
			type: require('./element.schema.js'),
			description:
				'The portion of the identifier typically relevant to the user and which is unique within the context of the system.',
		},
		value: {
			type: GraphQLString,
			description:
				'The portion of the identifier typically relevant to the user and which is unique within the context of the system.',
		},
		period: {
			type: require('./period.schema.js'),
			description: 'Time period during which identifier is/was valid for use.',
		},
		assigner: {
			type: new GraphQLUnionType({
				name: 'Identifierassigner_assigner_Union',
				description: 'Organization that issued/manages the identifier.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'Organization that issued/manages the identifier.',
		},
	}),
});
