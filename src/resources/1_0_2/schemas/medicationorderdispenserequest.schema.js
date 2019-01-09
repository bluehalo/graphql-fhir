const { GraphQLList, GraphQLUnionType, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary MedicationOrderdispenseRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationOrderdispenseRequest',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		medicationCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.',
		},
		medicationReference: {
			type: new GraphQLUnionType({
				name:
					'MedicationOrderdispenseRequestmedicationReference_medicationReference_Union',
				description:
					'Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.',
				types: () => [require('./medication.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Medication') {
						return require('./medication.schema.js');
					}
				},
			}),
			description:
				'Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.',
		},
		validityPeriod: {
			type: require('./period.schema.js'),
			description:
				'This indicates the validity period of a prescription (stale dating the Prescription).',
		},
		_numberOfRepeatsAllowed: {
			type: require('./element.schema.js'),
			description:
				"An integer indicating the number of additional times (aka refills or repeats) the patient can receive the prescribed medication.   Usage Notes: This integer does NOT include the original order dispense.   This means that if an order indicates dispense 30 tablets plus  '3 repeats', then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.",
		},
		numberOfRepeatsAllowed: {
			type: PositiveIntScalar,
			description:
				"An integer indicating the number of additional times (aka refills or repeats) the patient can receive the prescribed medication.   Usage Notes: This integer does NOT include the original order dispense.   This means that if an order indicates dispense 30 tablets plus  '3 repeats', then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.",
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description: 'The amount that is to be dispensed for one fill.',
		},
		expectedSupplyDuration: {
			type: require('./quantity.schema.js'),
			description:
				'Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.',
		},
	}),
});
