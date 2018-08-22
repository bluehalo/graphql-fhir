const { GraphQLInputObjectType, GraphQLNonNull, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary AccountGuarantor Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AccountGuarantor_Input',
	description: 'Parties financially responsible for the account.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		party: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The entity who is responsible.'
		},
		onHold: {
			type: GraphQLBoolean,
			description: 'A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.'
		},
		_onHold: {
			type: require('./element.input'),
			description: 'A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.'
		},
		period: {
			type: require('./period.input'),
			description: 'The timeframe during which the guarantor accepts responsibility for the account.'
		}
	})
});
