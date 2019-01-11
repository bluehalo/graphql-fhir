const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary ExampleScenarioprocess Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExampleScenarioprocess',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_title: {
			type: require('./element.schema.js'),
			description: 'The diagram title of the group of operations.',
		},
		title: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The diagram title of the group of operations.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'A longer description of the group of operations.',
		},
		description: {
			type: GraphQLString,
			description: 'A longer description of the group of operations.',
		},
		_preConditions: {
			type: require('./element.schema.js'),
			description: 'Description of initial status before the process starts.',
		},
		preConditions: {
			type: GraphQLString,
			description: 'Description of initial status before the process starts.',
		},
		_postConditions: {
			type: require('./element.schema.js'),
			description: 'Description of final status after the process ends.',
		},
		postConditions: {
			type: GraphQLString,
			description: 'Description of final status after the process ends.',
		},
		step: {
			type: new GraphQLList(require('./examplescenarioprocessstep.schema.js')),
			description: 'Each step of the process.',
		},
	}),
});
