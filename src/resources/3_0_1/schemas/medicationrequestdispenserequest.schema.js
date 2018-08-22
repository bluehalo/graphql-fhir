const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationRequestDispenseRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationRequestDispenseRequest',
	description: 'Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		validityPeriod: {
			type: require('./period.schema'),
			description: 'This indicates the validity period of a prescription (stale dating the Prescription).'
		},
		numberOfRepeatsAllowed: {
			type: PositiveIntScalar,
			description: 'An integer indicating the number of times, in addition to the original dispense, (aka refills or repeats) that the patient can receive the prescribed medication. Usage Notes: This integer does not include the original order dispense. This means that if an order indicates dispense 30 tablets plus \'3 repeats\', then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.'
		},
		_numberOfRepeatsAllowed: {
			type: require('./element.schema'),
			description: 'An integer indicating the number of times, in addition to the original dispense, (aka refills or repeats) that the patient can receive the prescribed medication. Usage Notes: This integer does not include the original order dispense. This means that if an order indicates dispense 30 tablets plus \'3 repeats\', then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.'
		},
		quantity: {
			type: require('./quantity.schema'),
			description: 'The amount that is to be dispensed for one fill.'
		},
		expectedSupplyDuration: {
			type: require('./duration.schema'),
			description: 'Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.'
		},
		performer: {
			type: require('./reference.schema'),
			description: 'Indicates the intended dispensing Organization specified by the prescriber.'
		}
	})
});
