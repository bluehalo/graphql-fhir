const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExpansionProfileDesignationInclude Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExpansionProfileDesignationInclude',
	description: 'Designations to be included.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		designation: {
			type: new GraphQLList(require('./expansionprofiledesignationincludedesignation.schema')),
			description: 'A data group for each designation to be included.'
		}
	})
});
