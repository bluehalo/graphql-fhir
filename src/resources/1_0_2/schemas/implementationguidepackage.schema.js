const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ImplementationGuidePackage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImplementationGuidePackage',
	description: 'A logical group of resources. Logical groups can be used when building pages.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name for the group, as used in page.package.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'The name for the group, as used in page.package.'
		},
		description: {
			type: GraphQLString,
			description: 'Human readable text describing the package.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Human readable text describing the package.'
		},
		resource: {
			type: new GraphQLList(new GraphQLNonNull(require('./implementationguidepackageresource.schema'))),
			description: 'A resource that is part of the implementation guide. Conformance resources (value set, structure definition, conformance statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.'
		}
	})
});
