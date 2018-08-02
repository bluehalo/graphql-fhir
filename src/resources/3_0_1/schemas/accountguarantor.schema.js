const { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary AccountGuarantor Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AccountGuarantor',
	description: 'Parties financially responsible for the account.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		party: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The entity who is responsible.'
		},
		onHold: {
			type: GraphQLBoolean,
			description: 'A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.'
		},
		_onHold: {
			type: require('./element.schema'),
			description: 'A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The timeframe during which the guarantor accepts responsibility for the account.'
		}
	})
});
