const { GraphQLList, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary ValueSetcompose Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetcompose',
	description: '',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_import: {
			type: require('./element.schema.js'),
			description:
				'Includes the contents of the referenced value set as a part of the contents of this value set. This is an absolute URI that is a reference to ValueSet.uri.',
		},
		import: {
			type: new GraphQLList(UriScalar),
			description:
				'Includes the contents of the referenced value set as a part of the contents of this value set. This is an absolute URI that is a reference to ValueSet.uri.',
		},
		include: {
			type: new GraphQLList(require('./valuesetcomposeinclude.schema.js')),
			description: 'Include one or more codes from a code system.',
		},
	}),
});
