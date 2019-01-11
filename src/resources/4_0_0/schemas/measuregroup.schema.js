const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary Measuregroup Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Measuregroup',
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
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates a meaning for the group. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing groups to be correlated across measures.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'The human readable description of this population group.',
		},
		description: {
			type: GraphQLString,
			description: 'The human readable description of this population group.',
		},
		population: {
			type: new GraphQLList(require('./measuregrouppopulation.schema.js')),
			description: 'A population criteria for the measure.',
		},
		stratifier: {
			type: new GraphQLList(require('./measuregroupstratifier.schema.js')),
			description:
				'The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path.',
		},
	}),
});
