const { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Group.member Schema
 */
module.exports = new GraphQLObjectType({
	name: 'GroupMember',
	description: 'Identifies the resource instances that are members of the group.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		entity: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'A reference to the entity that is a member of the group. Must be consistent with Group.type.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The period that the member was in the group, if known.'
		},
		inactive: {
			type: GraphQLBoolean,
			description: 'A flag to indicate that the member is no longer in the group, but previously may have been a member.'
		},
		_inactive: {
			type: require('./element.schema'),
			description: 'A flag to indicate that the member is no longer in the group, but previously may have been a member.'
		}
	})
});
