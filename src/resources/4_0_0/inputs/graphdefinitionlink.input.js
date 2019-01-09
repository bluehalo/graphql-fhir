const {
	GraphQLString,
	GraphQLList,
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
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_path: {
			type: require('./element.input.js'),
			description:
				'A FHIR expression that identifies one of FHIR References to other resources.',
		},
		path: {
			type: GraphQLString,
			description:
				'A FHIR expression that identifies one of FHIR References to other resources.',
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
			type: new GraphQLList(require('./graphdefinitionlinktarget.input.js')),
			description: 'Potential target for the link.',
		},
	}),
});
