const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary TestScript.setup.action.assert.rule Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptSetupActionAssertRule',
	description: 'The TestScript.rule this assert will evaluate.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		ruleId: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The TestScript.rule id value this assert will evaluate.'
		},
		_ruleId: {
			type: require('./element.schema'),
			description: 'The TestScript.rule id value this assert will evaluate.'
		},
		param: {
			type: new GraphQLList(require('./testscriptsetupactionassertruleparam.schema')),
			description: 'Each rule template can take one or more parameters for rule evaluation.'
		}
	})
});
