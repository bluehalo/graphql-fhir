const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary HumanName Schema
 */
module.exports = new GraphQLObjectType({
	name: 'HumanName',
	description: 'Base StructureDefinition for HumanName Type.',
	fields: () => extendSchema(require('./element.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/name-use
		use: {
			type: CodeScalar,
			description: 'Identifies the purpose for this name.'
		},
		_use: {
			type: require('./element.schema'),
			description: 'Identifies the purpose for this name.'
		},
		text: {
			type: GraphQLString,
			description: 'A full text representation of the name.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'A full text representation of the name.'
		},
		family: {
			type: GraphQLString,
			description: 'The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.'
		},
		_family: {
			type: require('./element.schema'),
			description: 'The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.'
		},
		given: {
			type: new GraphQLList(GraphQLString),
			description: 'Given name.'
		},
		_given: {
			type: require('./element.schema'),
			description: 'Given name.'
		},
		prefix: {
			type: new GraphQLList(GraphQLString),
			description: 'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.'
		},
		_prefix: {
			type: require('./element.schema'),
			description: 'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.'
		},
		suffix: {
			type: new GraphQLList(GraphQLString),
			description: 'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.'
		},
		_suffix: {
			type: require('./element.schema'),
			description: 'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Indicates the period of time when this name was valid for the named person.'
		}
	})
});
