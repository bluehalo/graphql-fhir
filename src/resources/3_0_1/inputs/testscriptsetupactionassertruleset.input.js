const IdScalar = require('../scalars/id.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary TestScript.setup.action.assert.ruleset Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptSetupActionAssertRuleset_Input',
	description: 'The TestScript.ruleset this assert will evaluate.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		rulesetId: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The TestScript.ruleset id value this assert will evaluate.'
		},
		_rulesetId: {
			type: require('./element.input'),
			description: 'The TestScript.ruleset id value this assert will evaluate.'
		},
		rule: {
			type: new GraphQLList(require('./testscriptsetupactionassertrulesetrule.input')),
			description: 'The referenced rule within the external ruleset template.'
		}
	})
});
