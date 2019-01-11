const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary CodeableConcept Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CodeableConcept',
	description: 'Base StructureDefinition for CodeableConcept Type',
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
		coding: {
			type: new GraphQLList(require('./coding.schema.js')),
			description: 'A reference to a code defined by a terminology system.',
		},
		_text: {
			type: require('./element.schema.js'),
			description:
				'A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.',
		},
		text: {
			type: GraphQLString,
			description:
				'A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.',
		},
	}),
});
