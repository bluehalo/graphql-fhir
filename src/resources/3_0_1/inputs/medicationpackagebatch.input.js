const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Medication.package.batch Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationPackageBatch_Input',
	description: 'Information about a group of medication produced or packaged from one production run.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		lotNumber: {
			type: GraphQLString,
			description: 'The assigned lot number of a batch of the specified product.'
		},
		_lotNumber: {
			type: require('./element.input'),
			description: 'The assigned lot number of a batch of the specified product.'
		},
		expirationDate: {
			type: DateTimeScalar,
			description: 'When this specific batch of product will expire.'
		},
		_expirationDate: {
			type: require('./element.input'),
			description: 'When this specific batch of product will expire.'
		}
	})
});
