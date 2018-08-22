const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationPackageBatch Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationPackageBatch',
	description: 'Information about a group of medication produced or packaged from one production run.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		lotNumber: {
			type: GraphQLString,
			description: 'The assigned lot number of a batch of the specified product.'
		},
		_lotNumber: {
			type: require('./element.schema'),
			description: 'The assigned lot number of a batch of the specified product.'
		},
		expirationDate: {
			type: DateTimeScalar,
			description: 'When this specific batch of product will expire.'
		},
		_expirationDate: {
			type: require('./element.schema'),
			description: 'When this specific batch of product will expire.'
		}
	})
});
