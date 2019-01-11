const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary Range Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Range',
	description:
		'Base StructureDefinition for Range Type: A set of ordered Quantities defined by a low and high limit.',
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
		low: {
			type: require('./quantity.schema.js'),
			description: 'The low limit. The boundary is inclusive.',
		},
		high: {
			type: require('./quantity.schema.js'),
			description: 'The high limit. The boundary is inclusive.',
		},
	}),
});
