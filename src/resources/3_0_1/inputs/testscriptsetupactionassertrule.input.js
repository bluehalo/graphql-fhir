const IdScalar = require('../scalars/id.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScriptSetupActionAssertRule Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptSetupActionAssertRule_Input',
	description: 'The TestScript.rule this assert will evaluate.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		ruleId: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The TestScript.rule id value this assert will evaluate.'
		},
		_ruleId: {
			type: require('./element.input'),
			description: 'The TestScript.rule id value this assert will evaluate.'
		},
		param: {
			type: new GraphQLList(require('./testscriptsetupactionassertruleparam.input')),
			description: 'Each rule template can take one or more parameters for rule evaluation.'
		}
	})
});
