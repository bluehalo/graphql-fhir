const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary TestScript.setup.action.assert.ruleset Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptSetupActionAssertRuleset',
	description: 'The TestScript.ruleset this assert will evaluate.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			rulesetId: {
				type: new GraphQLNonNull(IdScalar),
				description:
					'The TestScript.ruleset id value this assert will evaluate.',
			},
			_rulesetId: {
				type: require('./element.schema'),
				description:
					'The TestScript.ruleset id value this assert will evaluate.',
			},
			rule: {
				type: new GraphQLList(
					require('./testscriptsetupactionassertrulesetrule.schema'),
				),
				description:
					'The referenced rule within the external ruleset template.',
			},
		}),
});
