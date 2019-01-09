const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary Ratio Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Ratio',
	description: 'Base StructureDefinition for Ratio Type',
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
		numerator: {
			type: require('./quantity.schema.js'),
			description: 'The value of the numerator.',
		},
		denominator: {
			type: require('./quantity.schema.js'),
			description: 'The value of the denominator.',
		},
	}),
});
