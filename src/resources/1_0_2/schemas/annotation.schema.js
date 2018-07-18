const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Annotation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Annotation',
	description: 'Base StructureDefinition for Annotation Type.',
	fields: () => extendSchema({
		authorReference: {
			type: require('./reference.schema'),
			description: 'The individual responsible for making the annotation.'
		},
		authorString: {
			type: GraphQLString,
			description: 'The individual responsible for making the annotation.'
		},
		_authorString: {
			type: require('./element.schema'),
			description: 'The individual responsible for making the annotation.'
		},
		time: {
			type: DateTimeScalar,
			description: 'Indicates when this particular annotation was made.'
		},
		_time: {
			type: require('./element.schema'),
			description: 'Indicates when this particular annotation was made.'
		},
		text: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The text of the annotation.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'The text of the annotation.'
		}
	})
});
