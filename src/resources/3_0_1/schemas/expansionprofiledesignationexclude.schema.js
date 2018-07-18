const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ExpansionProfileDesignationExclude Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExpansionProfileDesignationExclude',
	description: 'Designations to be excluded.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		designation: {
			type: new GraphQLList(require('./expansionprofiledesignationexcludedesignation.schema')),
			description: 'A data group for each designation to be excluded.'
		}
	})
});
