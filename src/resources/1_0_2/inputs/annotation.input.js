const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Annotation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Annotation_Input',
	description: 'Base StructureDefinition for Annotation Type.',
	fields: () => extendSchema({
		authorReference: {
			type: require('./reference.input'),
			description: 'The individual responsible for making the annotation.'
		},
		authorString: {
			type: GraphQLString,
			description: 'The individual responsible for making the annotation.'
		},
		_authorString: {
			type: require('./element.input'),
			description: 'The individual responsible for making the annotation.'
		},
		time: {
			type: DateTimeScalar,
			description: 'Indicates when this particular annotation was made.'
		},
		_time: {
			type: require('./element.input'),
			description: 'Indicates when this particular annotation was made.'
		},
		text: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The text of the annotation.'
		},
		_text: {
			type: require('./element.input'),
			description: 'The text of the annotation.'
		}
	})
});
