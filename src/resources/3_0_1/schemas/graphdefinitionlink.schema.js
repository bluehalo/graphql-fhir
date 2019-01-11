const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary GraphDefinitionlink Schema
 */
module.exports = new GraphQLObjectType({
	name: 'GraphDefinitionlink',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_path: {
			type: require('./element.schema.js'),
			description: 'Path in the resource that contains the link.',
		},
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Path in the resource that contains the link.',
		},
		_sliceName: {
			type: require('./element.schema.js'),
			description: 'Which slice (if profiled).',
		},
		sliceName: {
			type: GraphQLString,
			description: 'Which slice (if profiled).',
		},
		_min: {
			type: require('./element.schema.js'),
			description: 'Minimum occurrences for this link.',
		},
		min: {
			type: GraphQLInt,
			description: 'Minimum occurrences for this link.',
		},
		_max: {
			type: require('./element.schema.js'),
			description: 'Maximum occurrences for this link.',
		},
		max: {
			type: GraphQLString,
			description: 'Maximum occurrences for this link.',
		},
		_description: {
			type: require('./element.schema.js'),
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
				new GraphQLNonNull(require('./graphdefinitionlinktarget.schema.js')),
			),
			description: 'Potential target for the link.',
		},
	}),
});
