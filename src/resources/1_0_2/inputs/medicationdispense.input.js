const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary MedicationDispense Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationDispense_Input',
	description: 'Base StructureDefinition for MedicationDispense Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Identifier assigned by the dispensing facility - this is an identifier assigned outside FHIR.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-dispense-status
		status: {
			type: CodeScalar,
			description: 'A code specifying the state of the set of dispense events.'
		},
		_status: {
			type: require('./element.input'),
			description: 'A code specifying the state of the set of dispense events.'
		},
		patient: {
			type: require('./reference.input'),
			description: 'A link to a resource representing the person to whom the medication will be given.'
		},
		dispenser: {
			type: require('./reference.input'),
			description: 'The individual responsible for dispensing the medication.'
		},
		authorizingPrescription: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Indicates the medication order that is being dispensed against.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActPharmacySupplyType
		type: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.'
		},
		quantity: {
			type: require('./quantity.input'),
			description: 'The amount of medication that has been dispensed. Includes unit of measure.'
		},
		daysSupply: {
			type: require('./quantity.input'),
			description: 'The amount of medication expressed as a timing amount.'
		},
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.'
		},
		medicationReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.'
		},
		whenPrepared: {
			type: DateTimeScalar,
			description: 'The time when the dispensed product was packaged and reviewed.'
		},
		_whenPrepared: {
			type: require('./element.input'),
			description: 'The time when the dispensed product was packaged and reviewed.'
		},
		whenHandedOver: {
			type: DateTimeScalar,
			description: 'The time the dispensed product was provided to the patient or their representative.'
		},
		_whenHandedOver: {
			type: require('./element.input'),
			description: 'The time the dispensed product was provided to the patient or their representative.'
		},
		destination: {
			type: require('./reference.input'),
			description: 'Identification of the facility/location where the medication was shipped to, as part of the dispense event.'
		},
		receiver: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.'
		},
		note: {
			type: GraphQLString,
			description: 'Extra information about the dispense that could not be conveyed in the other attributes.'
		},
		_note: {
			type: require('./element.input'),
			description: 'Extra information about the dispense that could not be conveyed in the other attributes.'
		},
		dosageInstruction: {
			type: new GraphQLList(require('./medicationdispensedosageinstruction.input')),
			description: 'Indicates how the medication is to be used by the patient.'
		},
		substitution: {
			type: require('./medicationdispensesubstitution.input'),
			description: 'Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.'
		}
	})
});
