const CodeScalar = require('../scalars/code.scalar');
const {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary HumanName Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'HumanName_Input',
	description: 'Base StructureDefinition for HumanName Type.',
	fields: () =>
		extendSchema(require('./element.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/name-use
			use: {
				type: CodeScalar,
				description: 'Identifies the purpose for this name.',
			},
			_use: {
				type: require('./element.input'),
				description: 'Identifies the purpose for this name.',
			},
			text: {
				type: GraphQLString,
				description: 'A full text representation of the name.',
			},
			_text: {
				type: require('./element.input'),
				description: 'A full text representation of the name.',
			},
			family: {
				type: GraphQLString,
				description:
					'The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.',
			},
			_family: {
				type: require('./element.input'),
				description:
					'The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.',
			},
			given: {
				type: new GraphQLList(GraphQLString),
				description: 'Given name.',
			},
			_given: {
				type: require('./element.input'),
				description: 'Given name.',
			},
			prefix: {
				type: new GraphQLList(GraphQLString),
				description:
					'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.',
			},
			_prefix: {
				type: require('./element.input'),
				description:
					'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.',
			},
			suffix: {
				type: new GraphQLList(GraphQLString),
				description:
					'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.',
			},
			_suffix: {
				type: require('./element.input'),
				description:
					'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.',
			},
			period: {
				type: require('./period.input'),
				description:
					'Indicates the period of time when this name was valid for the named person.',
			},
		}),
});
