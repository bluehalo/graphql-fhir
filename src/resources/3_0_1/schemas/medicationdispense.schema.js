const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary MedicationDispense Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationDispense',
	description: 'Base StructureDefinition for MedicationDispense Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'MedicationDispense_Enum_schema',
					values: { MedicationDispense: { value: 'MedicationDispense' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Identifier assigned by the dispensing facility - this is an identifier assigned outside FHIR.',
		},
		partOf: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationDispensepartOf_partOf_Union',
					description: 'The procedure that the dispense is done because of.',
					types: () => [require('./procedure.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Procedure') {
							return require('./procedure.schema.js');
						}
					},
				}),
			),
			description: 'The procedure that the dispense is done because of.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'A code specifying the state of the set of dispense events.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-dispense-status
		status: {
			type: CodeScalar,
			description: 'A code specifying the state of the set of dispense events.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-dispense-category
		category: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates type of medication dispense and where the medication is expected to be consumed or administered.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'MedicationDispensemedicationReference_medicationReference_Union',
					description:
						'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.',
					types: () => [require('./medication.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Medication') {
							return require('./medication.schema.js');
						}
					},
				}),
			),
			description:
				'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'MedicationDispensesubject_subject_Union',
				description:
					'A link to a resource representing the person or the group to whom the medication will be given.',
				types: () => [
					require('./patient.schema.js'),
					require('./group.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Group') {
						return require('./group.schema.js');
					}
				},
			}),
			description:
				'A link to a resource representing the person or the group to whom the medication will be given.',
		},
		context: {
			type: new GraphQLUnionType({
				name: 'MedicationDispensecontext_context_Union',
				description:
					'The encounter or episode of care that establishes the context for this event.',
				types: () => [
					require('./encounter.schema.js'),
					require('./episodeofcare.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
					if (data && data.resourceType === 'EpisodeOfCare') {
						return require('./episodeofcare.schema.js');
					}
				},
			}),
			description:
				'The encounter or episode of care that establishes the context for this event.',
		},
		supportingInformation: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationDispensesupportingInformation_supportingInformation_Union',
					description:
						'Additional information that supports the medication being dispensed.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'Additional information that supports the medication being dispensed.',
		},
		performer: {
			type: new GraphQLList(require('./medicationdispenseperformer.schema.js')),
			description:
				'Indicates who or what performed the event.  It should be assumed that the performer is the dispenser of the medication.',
		},
		authorizingPrescription: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationDispenseauthorizingPrescription_authorizingPrescription_Union',
					description:
						'Indicates the medication order that is being dispensed against.',
					types: () => [require('./medicationrequest.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'MedicationRequest') {
							return require('./medicationrequest.schema.js');
						}
					},
				}),
			),
			description:
				'Indicates the medication order that is being dispensed against.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActPharmacySupplyType
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description:
				'The amount of medication that has been dispensed. Includes unit of measure.',
		},
		daysSupply: {
			type: require('./quantity.schema.js'),
			description: 'The amount of medication expressed as a timing amount.',
		},
		_whenPrepared: {
			type: require('./element.schema.js'),
			description:
				'The time when the dispensed product was packaged and reviewed.',
		},
		whenPrepared: {
			type: DateTimeScalar,
			description:
				'The time when the dispensed product was packaged and reviewed.',
		},
		_whenHandedOver: {
			type: require('./element.schema.js'),
			description:
				'The time the dispensed product was provided to the patient or their representative.',
		},
		whenHandedOver: {
			type: DateTimeScalar,
			description:
				'The time the dispensed product was provided to the patient or their representative.',
		},
		destination: {
			type: new GraphQLUnionType({
				name: 'MedicationDispensedestination_destination_Union',
				description:
					'Identification of the facility/location where the medication was shipped to, as part of the dispense event.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description:
				'Identification of the facility/location where the medication was shipped to, as part of the dispense event.',
		},
		receiver: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationDispensereceiver_receiver_Union',
					description:
						'Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.',
					types: () => [
						require('./patient.schema.js'),
						require('./practitioner.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
					},
				}),
			),
			description:
				'Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Extra information about the dispense that could not be conveyed in the other attributes.',
		},
		dosageInstruction: {
			type: new GraphQLList(require('./dosage.schema.js')),
			description: 'Indicates how the medication is to be used by the patient.',
		},
		substitution: {
			type: require('./medicationdispensesubstitution.schema.js'),
			description:
				'Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.',
		},
		detectedIssue: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationDispensedetectedIssue_detectedIssue_Union',
					description:
						'Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.',
					types: () => [require('./detectedissue.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'DetectedIssue') {
							return require('./detectedissue.schema.js');
						}
					},
				}),
			),
			description:
				'Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.',
		},
		_notDone: {
			type: require('./element.schema.js'),
			description: 'True if the dispense was not performed for some reason.',
		},
		notDone: {
			type: GraphQLBoolean,
			description: 'True if the dispense was not performed for some reason.',
		},
		notDoneReasonCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description: 'Indicates the reason why a dispense was not performed.',
		},
		notDoneReasonReference: {
			type: new GraphQLUnionType({
				name: 'MedicationDispensenotDoneReasonReference_notDoneReasonReference_Union',
				description: 'Indicates the reason why a dispense was not performed.',
				types: () => [require('./detectedissue.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'DetectedIssue') {
						return require('./detectedissue.schema.js');
					}
				},
			}),
			description: 'Indicates the reason why a dispense was not performed.',
		},
		eventHistory: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationDispenseeventHistory_eventHistory_Union',
					description:
						'A summary of the events of interest that have occurred, such as when the dispense was verified.',
					types: () => [require('./provenance.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Provenance') {
							return require('./provenance.schema.js');
						}
					},
				}),
			),
			description:
				'A summary of the events of interest that have occurred, such as when the dispense was verified.',
		},
	}),
});
