const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary Measuregroupstratifier Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Measuregroupstratifier',
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
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				'The identifier for the stratifier used to coordinate the reported data back to this stratifier.',
		},
		_criteria: {
			type: require('./element.schema.js'),
			description:
				'The criteria for the stratifier. This must be the name of an expression defined within a referenced library.',
		},
		criteria: {
			type: GraphQLString,
			description:
				'The criteria for the stratifier. This must be the name of an expression defined within a referenced library.',
		},
		_path: {
			type: require('./element.schema.js'),
			description:
				'The path to an element that defines the stratifier, specified as a valid FHIR resource path.',
		},
		path: {
			type: GraphQLString,
			description:
				'The path to an element that defines the stratifier, specified as a valid FHIR resource path.',
		},
	}),
});
