const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary MedicationAdministration Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationAdministration',
	description: 'Base StructureDefinition for MedicationAdministration Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'MedicationAdministration_Enum_schema',
					values: {
						MedicationAdministration: { value: 'MedicationAdministration' },
					},
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
				'External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-admin-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way.',
		},
		patient: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'MedicationAdministrationpatient_patient_Union',
					description: 'The person or animal receiving the medication.',
					types: () => [require('./patient.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
					},
				}),
			),
			description: 'The person or animal receiving the medication.',
		},
		practitioner: {
			type: new GraphQLUnionType({
				name: 'MedicationAdministrationpractitioner_practitioner_Union',
				description:
					'The individual who was responsible for giving the medication to the patient.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description:
				'The individual who was responsible for giving the medication to the patient.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'MedicationAdministrationencounter_encounter_Union',
				description:
					'The visit, admission or other contact between patient and health care provider the medication administration was performed as part of.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'The visit, admission or other contact between patient and health care provider the medication administration was performed as part of.',
		},
		prescription: {
			type: new GraphQLUnionType({
				name: 'MedicationAdministrationprescription_prescription_Union',
				description:
					'The original request, instruction or authority to perform the administration.',
				types: () => [require('./medicationorder.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'MedicationOrder') {
						return require('./medicationorder.schema.js');
					}
				},
			}),
			description:
				'The original request, instruction or authority to perform the administration.',
		},
		_wasNotGiven: {
			type: require('./element.schema.js'),
			description:
				'Set this to true if the record is saying that the medication was NOT administered.',
		},
		wasNotGiven: {
			type: GraphQLBoolean,
			description:
				'Set this to true if the record is saying that the medication was NOT administered.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/reason-medication-not-given-codes
		reasonNotGiven: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A code indicating why the administration was not performed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/reason-medication-given-codes
		reasonGiven: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'A code indicating why the medication was given.',
		},
		_effectiveTimeDateTime: {
			type: require('./element.schema.js'),
			description:
				"A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.",
		},
		effectiveTimeDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description:
				"A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.",
		},
		effectiveTimePeriod: {
			type: new GraphQLNonNull(require('./period.schema.js')),
			description:
				"A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.",
		},
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.',
		},
		medicationReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name:
						'MedicationAdministrationmedicationReference_medicationReference_Union',
					description:
						'Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.',
					types: () => [require('./medication.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Medication') {
							return require('./medication.schema.js');
						}
					},
				}),
			),
			description:
				'Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.',
		},
		device: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationAdministrationdevice_device_Union',
					description:
						'The device used in administering the medication to the patient.  For example, a particular infusion pump.',
					types: () => [require('./device.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
					},
				}),
			),
			description:
				'The device used in administering the medication to the patient.  For example, a particular infusion pump.',
		},
		_note: {
			type: require('./element.schema.js'),
			description:
				'Extra information about the medication administration that is not conveyed by the other attributes.',
		},
		note: {
			type: GraphQLString,
			description:
				'Extra information about the medication administration that is not conveyed by the other attributes.',
		},
		dosage: {
			type: require('./medicationadministrationdosage.schema.js'),
			description:
				'Describes the medication dosage information details e.g. dose, rate, site, route, etc.',
		},
	}),
});
