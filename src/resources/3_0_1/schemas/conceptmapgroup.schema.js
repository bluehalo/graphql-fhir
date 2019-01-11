const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary ConceptMapgroup Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConceptMapgroup',
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
		_source: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).',
		},
		source: {
			type: UriScalar,
			description:
				'An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).',
		},
		_sourceVersion: {
			type: require('./element.schema.js'),
			description:
				'The specific version of the code system, as determined by the code system authority.',
		},
		sourceVersion: {
			type: GraphQLString,
			description:
				'The specific version of the code system, as determined by the code system authority.',
		},
		_target: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).',
		},
		target: {
			type: UriScalar,
			description:
				'An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).',
		},
		_targetVersion: {
			type: require('./element.schema.js'),
			description:
				'The specific version of the code system, as determined by the code system authority.',
		},
		targetVersion: {
			type: GraphQLString,
			description:
				'The specific version of the code system, as determined by the code system authority.',
		},
		element: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./conceptmapgroupelement.schema.js')),
			),
			description:
				'Mappings for an individual concept in the source to one or more concepts in the target.',
		},
		unmapped: {
			type: require('./conceptmapgroupunmapped.schema.js'),
			description:
				'What to do when there is no match in the mappings in the group.',
		},
	}),
});
