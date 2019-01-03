const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary TestScript.ruleset Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptRuleset',
	description: 'Contains one or more rules.  Offers a way to group rules so assertions could reference the group of rules and have them all applied.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		resource: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Reference to the resource (containing the contents of the ruleset needed for assertions).'
		},
		rule: {
			type: new GraphQLList(new GraphQLNonNull(require('./testscriptrulesetrule.schema'))),
			description: 'The referenced rule within the external ruleset template.'
		}
	})
});
