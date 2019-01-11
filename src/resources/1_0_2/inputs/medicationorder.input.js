const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary MedicationOrder Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationOrder_Input',
	description: 'Base StructureDefinition for MedicationOrder Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'MedicationOrder_Enum_input',
					values: { MedicationOrder: { value: 'MedicationOrder' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'External identifier - one that would be used by another non-FHIR system - for example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records have to be tracked through an entire system.',
		},
		_dateWritten: {
			type: require('./element.input.js'),
			description:
				'The date (and perhaps time) when the prescription was written.',
		},
		dateWritten: {
			type: DateTimeScalar,
			description:
				'The date (and perhaps time) when the prescription was written.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'A code specifying the state of the order.  Generally this will be active or completed state.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-order-status
		status: {
			type: CodeScalar,
			description:
				'A code specifying the state of the order.  Generally this will be active or completed state.',
		},
		_dateEnded: {
			type: require('./element.input.js'),
			description:
				'The date (and perhaps time) when the prescription was stopped.',
		},
		dateEnded: {
			type: DateTimeScalar,
			description:
				'The date (and perhaps time) when the prescription was stopped.',
		},
		reasonEnded: {
			type: require('./codeableconcept.input.js'),
			description: 'The reason why the prescription was stopped, if it was.',
		},
		patient: {
			type: GraphQLString,
			description:
				'A link to a resource representing the person to whom the medication will be given.',
		},
		prescriber: {
			type: GraphQLString,
			description:
				'The healthcare professional responsible for authorizing the prescription.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'A link to a resource that identifies the particular occurrence of contact between patient and health care provider.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'Can be the reason or the indication for writing the prescription.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonReference: {
			type: GraphQLString,
			description:
				'Can be the reason or the indication for writing the prescription.',
		},
		_note: {
			type: require('./element.input.js'),
			description:
				'Extra information about the prescription that could not be conveyed by the other attributes.',
		},
		note: {
			type: GraphQLString,
			description:
				'Extra information about the prescription that could not be conveyed by the other attributes.',
		},
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.',
		},
		medicationReference: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.',
		},
		dosageInstruction: {
			type: new GraphQLList(
				require('./medicationorderdosageinstruction.input.js'),
			),
			description: 'Indicates how the medication is to be used by the patient.',
		},
		dispenseRequest: {
			type: require('./medicationorderdispenserequest.input.js'),
			description:
				'Indicates the specific details for the dispense or medication supply part of a medication order (also known as a Medication Prescription).  Note that this information is NOT always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.',
		},
		substitution: {
			type: require('./medicationordersubstitution.input.js'),
			description:
				"Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen, and in others it does not matter. This block explains the prescriber's intent. If nothing is specified substitution may be done.",
		},
		priorPrescription: {
			type: GraphQLString,
			description:
				'A link to a resource representing an earlier order or prescription that this order supersedes.',
		},
	}),
});
