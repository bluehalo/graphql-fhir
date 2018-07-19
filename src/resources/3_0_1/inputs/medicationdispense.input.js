const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let MedicationDispenseResourceInputType = new GraphQLEnumType({
	name: 'MedicationDispenseResourceInputType',
	values: {
		MedicationDispense: { value: 'MedicationDispense' }
	}
});

/**
 * @name exports
 * @summary MedicationDispense Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationDispense_Input',
	description: 'Base StructureDefinition for MedicationDispense Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(MedicationDispenseResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifier assigned by the dispensing facility - this is an identifier assigned outside FHIR.'
		},
		partOf: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The procedure that the dispense is done because of.'
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
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-dispense-category
		category: {
			type: require('./codeableconcept.input'),
			description: 'Indicates type of medication dispense and where the medication is expected to be consumed or administered.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'A link to a resource representing the person or the group to whom the medication will be given.'
		},
		context: {
			type: require('./reference.input'),
			description: 'The encounter or episode of care that establishes the context for this event.'
		},
		supportingInformation: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Additional information that supports the medication being dispensed.'
		},
		performer: {
			type: new GraphQLList(require('./medicationdispenseperformer.input')),
			description: 'Indicates who or what performed the event.  It should be assumed that the performer is the dispenser of the medication.'
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
			type: new GraphQLList(require('./annotation.input')),
			description: 'Extra information about the dispense that could not be conveyed in the other attributes.'
		},
		dosageInstruction: {
			type: new GraphQLList(require('./dosage.input')),
			description: 'Indicates how the medication is to be used by the patient.'
		},
		substitution: {
			type: require('./medicationdispensesubstitution.input'),
			description: 'Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.'
		},
		detectedIssue: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.'
		},
		notDone: {
			type: GraphQLBoolean,
			description: 'True if the dispense was not performed for some reason.'
		},
		_notDone: {
			type: require('./element.input'),
			description: 'True if the dispense was not performed for some reason.'
		},
		notDoneReasonCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the reason why a dispense was not performed.'
		},
		notDoneReasonReference: {
			type: require('./reference.input'),
			description: 'Indicates the reason why a dispense was not performed.'
		},
		eventHistory: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A summary of the events of interest that have occurred, such as when the dispense was verified.'
		}
	})
});
