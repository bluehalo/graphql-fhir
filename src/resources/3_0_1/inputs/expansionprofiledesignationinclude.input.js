const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExpansionProfileDesignationInclude Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExpansionProfileDesignationInclude_Input',
	description: 'Designations to be included.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		designation: {
			type: new GraphQLList(require('./expansionprofiledesignationincludedesignation.input')),
			description: 'A data group for each designation to be included.'
		}
	})
});
