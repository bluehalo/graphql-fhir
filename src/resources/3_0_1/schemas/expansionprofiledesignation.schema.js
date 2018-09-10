const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExpansionProfile.designation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExpansionProfileDesignation',
	description: 'A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		include: {
			type: require('./expansionprofiledesignationinclude.schema'),
			description: 'Designations to be included.'
		},
		exclude: {
			type: require('./expansionprofiledesignationexclude.schema'),
			description: 'Designations to be excluded.'
		}
	})
});
