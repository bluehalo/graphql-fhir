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
 * @summary Conformanceimplementation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Conformanceimplementation',
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
		_description: {
			type: require('./element.schema.js'),
			description:
				'Information about the specific installation that this conformance statement relates to.',
		},
		description: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Information about the specific installation that this conformance statement relates to.',
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.',
		},
	}),
});
