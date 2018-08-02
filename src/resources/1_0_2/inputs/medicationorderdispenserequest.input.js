const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationOrderDispenseRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationOrderDispenseRequest_Input',
	description: 'Indicates the specific details for the dispense or medication supply part of a medication order (also known as a Medication Prescription).  Note that this information is NOT always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		medicationCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.'
		},
		medicationReference: {
			type: require('./reference.input'),
			description: 'Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.'
		},
		validityPeriod: {
			type: require('./period.input'),
			description: 'This indicates the validity period of a prescription (stale dating the Prescription).'
		},
		numberOfRepeatsAllowed: {
			type: PositiveIntScalar,
			description: 'An integer indicating the number of additional times (aka refills or repeats) the patient can receive the prescribed medication.   Usage Notes: This integer does NOT include the original order dispense.   This means that if an order indicates dispense 30 tablets plus  \'3 repeats\', then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.'
		},
		_numberOfRepeatsAllowed: {
			type: require('./element.input'),
			description: 'An integer indicating the number of additional times (aka refills or repeats) the patient can receive the prescribed medication.   Usage Notes: This integer does NOT include the original order dispense.   This means that if an order indicates dispense 30 tablets plus  \'3 repeats\', then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.'
		},
		quantity: {
			type: require('./quantity.input'),
			description: 'The amount that is to be dispensed for one fill.'
		},
		expectedSupplyDuration: {
			type: require('./quantity.input'),
			description: 'Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.'
		}
	})
});
