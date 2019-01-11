const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary MedicationRequestdispenseRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationRequestdispenseRequest',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
		validityPeriod: {
			type: require('./period.schema.js'),
			description:
				'This indicates the validity period of a prescription (stale dating the Prescription).',
		},
		_numberOfRepeatsAllowed: {
			type: require('./element.schema.js'),
			description:
				"An integer indicating the number of times, in addition to the original dispense, (aka refills or repeats) that the patient can receive the prescribed medication. Usage Notes: This integer does not include the original order dispense. This means that if an order indicates dispense 30 tablets plus '3 repeats', then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.",
		},
		numberOfRepeatsAllowed: {
			type: PositiveIntScalar,
			description:
				"An integer indicating the number of times, in addition to the original dispense, (aka refills or repeats) that the patient can receive the prescribed medication. Usage Notes: This integer does not include the original order dispense. This means that if an order indicates dispense 30 tablets plus '3 repeats', then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.",
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description: 'The amount that is to be dispensed for one fill.',
		},
		expectedSupplyDuration: {
			type: require('./duration.schema.js'),
			description:
				'Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.',
		},
		performer: {
			type: new GraphQLUnionType({
				name: 'MedicationRequestdispenseRequestperformer_performer_Union',
				description:
					'Indicates the intended dispensing Organization specified by the prescriber.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'Indicates the intended dispensing Organization specified by the prescriber.',
		},
	}),
});
