const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExpansionProfileDesignationExclude Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExpansionProfileDesignationExclude_Input',
	description: 'Designations to be excluded.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		designation: {
			type: new GraphQLList(require('./expansionprofiledesignationexcludedesignation.input')),
			description: 'A data group for each designation to be excluded.'
		}
	})
});
