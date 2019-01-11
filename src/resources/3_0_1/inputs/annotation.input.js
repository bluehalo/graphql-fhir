const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Annotation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Annotation_Input',
	description: 'Base StructureDefinition for Annotation Type',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		authorReference: {
			type: GraphQLString,
			description: 'The individual responsible for making the annotation.',
		},
		_authorString: {
			type: require('./element.input.js'),
			description: 'The individual responsible for making the annotation.',
		},
		authorString: {
			type: GraphQLString,
			description: 'The individual responsible for making the annotation.',
		},
		_time: {
			type: require('./element.input.js'),
			description: 'Indicates when this particular annotation was made.',
		},
		time: {
			type: DateTimeScalar,
			description: 'Indicates when this particular annotation was made.',
		},
		_text: {
			type: require('./element.input.js'),
			description: 'The text of the annotation.',
		},
		text: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The text of the annotation.',
		},
	}),
});
