const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScriptRuleset Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptRuleset_Input',
	description: 'Contains one or more rules.  Offers a way to group rules so assertions could reference the group of rules and have them all applied.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		resource: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Reference to the resource (containing the contents of the ruleset needed for assertions).'
		},
		rule: {
			type: new GraphQLList(new GraphQLNonNull(require('./testscriptrulesetrule.input'))),
			description: 'The referenced rule within the external ruleset template.'
		}
	})
});
