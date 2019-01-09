const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary HumanName Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'HumanName_Input',
	description:
		"Base StructureDefinition for HumanName Type: A human's name with the ability to identify parts and usage.",
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
		_use: {
			type: require('./element.input.js'),
			description: 'Identifies the purpose for this name.',
		},
		use: {
			type: CodeScalar,
			description: 'Identifies the purpose for this name.',
		},
		_text: {
			type: require('./element.input.js'),
			description:
				'Specifies the entire name as it should be displayed e.g. on an application UI. This may be provided instead of or as well as the specific parts.',
		},
		text: {
			type: GraphQLString,
			description:
				'Specifies the entire name as it should be displayed e.g. on an application UI. This may be provided instead of or as well as the specific parts.',
		},
		_family: {
			type: require('./element.input.js'),
			description:
				'The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.',
		},
		family: {
			type: GraphQLString,
			description:
				'The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.',
		},
		_given: {
			type: require('./element.input.js'),
			description: 'Given name.',
		},
		given: {
			type: new GraphQLList(GraphQLString),
			description: 'Given name.',
		},
		_prefix: {
			type: require('./element.input.js'),
			description:
				'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.',
		},
		prefix: {
			type: new GraphQLList(GraphQLString),
			description:
				'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.',
		},
		_suffix: {
			type: require('./element.input.js'),
			description:
				'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.',
		},
		suffix: {
			type: new GraphQLList(GraphQLString),
			description:
				'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.',
		},
		period: {
			type: require('./period.input.js'),
			description:
				'Indicates the period of time when this name was valid for the named person.',
		},
	}),
});
