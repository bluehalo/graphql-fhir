const {
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary HumanName Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'HumanName_Input',
	description: 'Base StructureDefinition for HumanName Type',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_use: {
			type: require('./element.input.js'),
			description: 'Identifies the purpose for this name.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/name-use
		use: {
			type: CodeScalar,
			description: 'Identifies the purpose for this name.',
		},
		_text: {
			type: require('./element.input.js'),
			description: 'A full text representation of the name.',
		},
		text: {
			type: GraphQLString,
			description: 'A full text representation of the name.',
		},
		_family: {
			type: require('./element.input.js'),
			description:
				'The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.',
		},
		family: {
			type: new GraphQLList(GraphQLString),
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
