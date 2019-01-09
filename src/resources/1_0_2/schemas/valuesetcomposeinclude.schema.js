const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary ValueSetcomposeinclude Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetcomposeinclude',
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
		_system: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI which is the code system from which the selected codes come from.',
		},
		system: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'An absolute URI which is the code system from which the selected codes come from.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The version of the code system that the codes are selected from.',
		},
		version: {
			type: GraphQLString,
			description:
				'The version of the code system that the codes are selected from.',
		},
		concept: {
			type: new GraphQLList(
				require('./valuesetcomposeincludeconcept.schema.js'),
			),
			description: 'Specifies a concept to be included or excluded.',
		},
		filter: {
			type: new GraphQLList(
				require('./valuesetcomposeincludefilter.schema.js'),
			),
			description:
				'Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.',
		},
	}),
});
