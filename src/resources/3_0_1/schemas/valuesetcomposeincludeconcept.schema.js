const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ValueSetComposeIncludeConcept Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetComposeIncludeConcept',
	description: 'Specifies a concept to be included or excluded.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Specifies a code for the concept to be included or excluded.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'Specifies a code for the concept to be included or excluded.'
		},
		display: {
			type: GraphQLString,
			description: 'The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.'
		},
		_display: {
			type: require('./element.schema'),
			description: 'The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.'
		},
		designation: {
			type: new GraphQLList(require('./valuesetcomposeincludeconceptdesignation.schema')),
			description: 'Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.'
		}
	})
});
