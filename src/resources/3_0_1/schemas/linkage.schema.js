const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let LinkageResourceType = new GraphQLEnumType({
	name: 'LinkageResourceType',
	values: {
		Linkage: { value: 'Linkage' }
	}
});

/**
 * @name exports
 * @summary Linkage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Linkage',
	description: 'Base StructureDefinition for Linkage Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(LinkageResourceType),
			description: 'Type of this resource.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Indicates whether the asserted set of linkages are considered to be \'in effect\'.'
		},
		_active: {
			type: require('./element.schema'),
			description: 'Indicates whether the asserted set of linkages are considered to be \'in effect\'.'
		},
		author: {
			type: require('./reference.schema'),
			description: 'Identifies the user or organization responsible for asserting the linkages and who establishes the context for evaluating the nature of each linkage.'
		},
		item: {
			type: new GraphQLList(new GraphQLNonNull(require('./linkageitem.schema'))),
			description: 'Identifies one of the records that is considered to refer to the same real-world occurrence as well as how the items hould be evaluated within the collection of linked items.'
		}
	})
});
