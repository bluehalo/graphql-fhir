const {
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

// Scalars
const DateTimeScalar = require('../scalars/datetime.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Annotation Fields
 */
let Annotation = new GraphQLObjectType({
	name: 'Annotation',
	description: 'A text note which also  contains information about who made the statement and when.',
	fields: () => extendSchema(require('./element.schema'), {
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
			description: 'Extensions for authorString'
		},
		time: {
			type: DateTimeScalar,
			description: 'Indicates when this particular annotation was made.'
		},
		_time: {
			type: require('./element.schema'),
			description: 'Extensions for time'
		},
		text: {
			type: GraphQLString,
			description: 'The text of the annotation.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'Extensions for text'
		}
	})
});

module.exports = Annotation;
