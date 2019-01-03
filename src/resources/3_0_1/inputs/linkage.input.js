const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLBoolean,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let LinkageResourceInputType = new GraphQLEnumType({
	name: 'LinkageResourceInputType',
	values: {
		Linkage: { value: 'Linkage' },
	},
});

/**
 * @name exports
 * @summary Linkage Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Linkage_Input',
	description: 'Base StructureDefinition for Linkage Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(LinkageResourceInputType),
				description: 'Type of this resource.',
			},
			active: {
				type: GraphQLBoolean,
				description:
					"Indicates whether the asserted set of linkages are considered to be 'in effect'.",
			},
			_active: {
				type: require('./element.input'),
				description:
					"Indicates whether the asserted set of linkages are considered to be 'in effect'.",
			},
			author: {
				type: require('./reference.input'),
				description:
					'Identifies the user or organization responsible for asserting the linkages and who establishes the context for evaluating the nature of each linkage.',
			},
			item: {
				type: new GraphQLList(
					new GraphQLNonNull(require('./linkageitem.input')),
				),
				description:
					'Identifies one of the records that is considered to refer to the same real-world occurrence as well as how the items hould be evaluated within the collection of linked items.',
			},
		}),
});
