const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Measuregroup Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Measuregroup_Input',
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
		identifier: {
			type: new GraphQLNonNull(require('./identifier.input.js')),
			description:
				'A unique identifier for the group. This identifier will used to report data for the group in the measure report.',
		},
		_name: {
			type: require('./element.input.js'),
			description: 'Optional name or short description of this group.',
		},
		name: {
			type: GraphQLString,
			description: 'Optional name or short description of this group.',
		},
		_description: {
			type: require('./element.input.js'),
			description: 'The human readable description of this population group.',
		},
		description: {
			type: GraphQLString,
			description: 'The human readable description of this population group.',
		},
		population: {
			type: new GraphQLList(require('./measuregrouppopulation.input.js')),
			description: 'A population criteria for the measure.',
		},
		stratifier: {
			type: new GraphQLList(require('./measuregroupstratifier.input.js')),
			description:
				'The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library, or a valid FHIR Resource Path.',
		},
	}),
});
