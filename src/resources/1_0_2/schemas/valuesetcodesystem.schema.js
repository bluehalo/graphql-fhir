const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary ValueSetcodeSystem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetcodeSystem',
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
				'An absolute URI that is used to reference this code system, including in [Coding]{datatypes.html#Coding}.system.',
		},
		system: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'An absolute URI that is used to reference this code system, including in [Coding]{datatypes.html#Coding}.system.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The version of this code system that defines the codes. Note that the version is optional because a well maintained code system does not suffer from versioning, and therefore the version does not need to be maintained. However many code systems are not well maintained, and the version needs to be defined and tracked.',
		},
		version: {
			type: GraphQLString,
			description:
				'The version of this code system that defines the codes. Note that the version is optional because a well maintained code system does not suffer from versioning, and therefore the version does not need to be maintained. However many code systems are not well maintained, and the version needs to be defined and tracked.',
		},
		_caseSensitive: {
			type: require('./element.schema.js'),
			description:
				'If code comparison is case sensitive when codes within this system are compared to each other.',
		},
		caseSensitive: {
			type: GraphQLBoolean,
			description:
				'If code comparison is case sensitive when codes within this system are compared to each other.',
		},
		concept: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./valuesetcodesystemconcept.schema.js')),
			),
			description:
				'Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.',
		},
	}),
});
