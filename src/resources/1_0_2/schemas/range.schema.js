const { GraphQLList, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary Range Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Range',
	description: 'Base StructureDefinition for Range Type',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
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
