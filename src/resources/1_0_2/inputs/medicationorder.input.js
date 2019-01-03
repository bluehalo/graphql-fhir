const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let MedicationOrderResourceInputType = new GraphQLEnumType({
	name: 'MedicationOrderResourceInputType',
	values: {
		MedicationOrder: { value: 'MedicationOrder' }
	}
});

/**
 * @name exports
 * @summary MedicationOrder Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationOrder_Input',
	description: 'Base StructureDefinition for MedicationOrder Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(MedicationOrderResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'External identifier - one that would be used by another non-FHIR system - for example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records have to be tracked through an entire system.'
		},
		dateWritten: {
			type: DateTimeScalar,
			description: 'The date (and perhaps time) when the prescription was written.'
		},
		_dateWritten: {
			type: require('./element.input'),
			description: 'The date (and perhaps time) when the prescription was written.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-order-status
		status: {
			type: CodeScalar,
			description: 'A code specifying the state of the order.  Generally this will be active or completed state.'
		},
		_status: {
			type: require('./element.input'),
			description: 'A code specifying the state of the order.  Generally this will be active or completed state.'
		},
		dateEnded: {
			type: DateTimeScalar,
			description: 'The date (and perhaps time) when the prescription was stopped.'
		},
		_dateEnded: {
			type: require('./element.input'),
			description: 'The date (and perhaps time) when the prescription was stopped.'
		},
		reasonEnded: {
			type: require('./codeableconcept.input'),
			description: 'The reason why the prescription was stopped, if it was.'
		},
		patient: {
			type: require('./reference.input'),
			description: 'A link to a resource representing the person to whom the medication will be given.'
		},
		prescriber: {
			type: require('./reference.input'),
			description: 'The healthcare professional responsible for authorizing the prescription.'
		},
		encounter: {
			type: require('./reference.input'),
			description: 'A link to a resource that identifies the particular occurrence of contact between patient and health care provider.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Can be the reason or the indication for writing the prescription.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonReference: {
			type: require('./reference.input'),
			description: 'Can be the reason or the indication for writing the prescription.'
		},
		note: {
			type: GraphQLString,
			description: 'Extra information about the prescription that could not be conveyed by the other attributes.'
		},
		_note: {
			type: require('./element.input'),
			description: 'Extra information about the prescription that could not be conveyed by the other attributes.'
		},
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.'
		},
		medicationReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.'
		},
		dosageInstruction: {
			type: new GraphQLList(require('./medicationorderdosageinstruction.input')),
			description: 'Indicates how the medication is to be used by the patient.'
		},
		dispenseRequest: {
			type: require('./medicationorderdispenserequest.input'),
			description: 'Indicates the specific details for the dispense or medication supply part of a medication order (also known as a Medication Prescription).  Note that this information is NOT always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.'
		},
		substitution: {
			type: require('./medicationordersubstitution.input'),
			description: 'Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen, and in others it does not matter. This block explains the prescriber\'s intent. If nothing is specified substitution may be done.'
		},
		priorPrescription: {
			type: require('./reference.input'),
			description: 'A link to a resource representing an earlier order or prescription that this order supersedes.'
		}
	})
});
