const {
	GraphQLInputObjectType,
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
let AnnotationInput = new GraphQLInputObjectType({
	name: 'AnnotationInput',
	description: 'A text note which also  contains information about who made the statement and when.',
	fields: () => extendSchema(require('./element.input'), {
		authorReference: {
			type: require('./reference.input'),
			description: 'The individual responsible for making the annotation.'
		},
		authorString: {
			type: GraphQLString,
			description: 'The individual responsible for making the annotation.'
		},
		_authorString: {
			type: require('./extension.input'),
			description: 'Extensions for authorString'
		},
		time: {
			type: DateTimeScalar,
			description: 'Indicates when this particular annotation was made.'
		},
		_time: {
			type: require('./extension.input'),
			description: 'Extensions for time'
		},
		text: {
			type: GraphQLString,
			description: 'The text of the annotation.'
		},
		_text: {
			type: require('./extension.input'),
			description: 'Extensions for text'
		}
	})
});

module.exports = AnnotationInput;
