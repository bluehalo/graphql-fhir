const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary GraphDefinitionlink Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'GraphDefinitionlink_Input',
	description: '',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_path: {
			type: require('./element.input.js'),
			description: 'Path in the resource that contains the link.',
		},
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Path in the resource that contains the link.',
		},
		_sliceName: {
			type: require('./element.input.js'),
			description: 'Which slice (if profiled).',
		},
		sliceName: {
			type: GraphQLString,
			description: 'Which slice (if profiled).',
		},
		_min: {
			type: require('./element.input.js'),
			description: 'Minimum occurrences for this link.',
		},
		min: {
			type: GraphQLInt,
			description: 'Minimum occurrences for this link.',
		},
		_max: {
			type: require('./element.input.js'),
			description: 'Maximum occurrences for this link.',
		},
		max: {
			type: GraphQLString,
			description: 'Maximum occurrences for this link.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'Information about why this link is of interest in this graph definition.',
		},
		description: {
			type: GraphQLString,
			description:
				'Information about why this link is of interest in this graph definition.',
		},
		target: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./graphdefinitionlinktarget.input.js')),
			),
			description: 'Potential target for the link.',
		},
	}),
});
