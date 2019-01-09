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
				'External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.',
		},
		definition: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationAdministrationdefinition_definition_Union',
					description:
						'A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this event.',
					types: () => [
						require('./plandefinition.schema.js'),
						require('./activitydefinition.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'PlanDefinition') {
							return require('./plandefinition.schema.js');
						}
						if (data && data.resourceType === 'ActivityDefinition') {
							return require('./activitydefinition.schema.js');
						}
					},
				}),
			),
			description:
				'A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this event.',
		},
		partOf: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationAdministrationpartOf_partOf_Union',
					description:
						'A larger event of which this particular event is a component or step.',
					types: () => [
						require('./medicationadministration.schema.js'),
						require('./procedure.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'MedicationAdministration') {
							return require('./medicationadministration.schema.js');
						}
						if (data && data.resourceType === 'Procedure') {
							return require('./procedure.schema.js');
						}
					},
				}),
			),
			description:
				'A larger event of which this particular event is a component or step.',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-admin-category
		category: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates the type of medication administration and where the medication is expected to be consumed or administered.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
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
		subject: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'MedicationAdministrationsubject_subject_Union',
					description:
						'The person or animal or group receiving the medication.',
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
			),
			description: 'The person or animal or group receiving the medication.',
		},
		context: {
			type: new GraphQLUnionType({
				name: 'MedicationAdministrationcontext_context_Union',
				description:
					'The visit, admission or other contact between patient and health care provider the medication administration was performed as part of.',
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
				'The visit, admission or other contact between patient and health care provider the medication administration was performed as part of.',
		},
		supportingInformation: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name:
						'MedicationAdministrationsupportingInformation_supportingInformation_Union',
					description:
						'Additional information (for example, patient height and weight) that supports the administration of the medication.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'Additional information (for example, patient height and weight) that supports the administration of the medication.',
		},
		_effectiveDateTime: {
			type: require('./element.schema.js'),
			description:
				"A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.",
		},
		effectiveDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description:
				"A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.",
		},
		effectivePeriod: {
			type: new GraphQLNonNull(require('./period.schema.js')),
			description:
				"A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.",
		},
		performer: {
			type: new GraphQLList(
				require('./medicationadministrationperformer.schema.js'),
			),
			description:
				'The individual who was responsible for giving the medication to the patient.',
		},
		_notGiven: {
			type: require('./element.schema.js'),
			description:
				'Set this to true if the record is saying that the medication was NOT administered.',
		},
		notGiven: {
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
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'A code indicating why the medication was given.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationAdministrationreasonReference_reasonReference_Union',
					description:
						'Condition or observation that supports why the medication was administered.',
					types: () => [
						require('./condition.schema.js'),
						require('./observation.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
					},
				}),
			),
			description:
				'Condition or observation that supports why the medication was administered.',
		},
		prescription: {
			type: new GraphQLUnionType({
				name: 'MedicationAdministrationprescription_prescription_Union',
				description:
					'The original request, instruction or authority to perform the administration.',
				types: () => [require('./medicationrequest.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'MedicationRequest') {
						return require('./medicationrequest.schema.js');
					}
				},
			}),
			description:
				'The original request, instruction or authority to perform the administration.',
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
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Extra information about the medication administration that is not conveyed by the other attributes.',
		},
		dosage: {
			type: require('./medicationadministrationdosage.schema.js'),
			description:
				'Describes the medication dosage information details e.g. dose, rate, site, route, etc.',
		},
		eventHistory: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationAdministrationeventHistory_eventHistory_Union',
					description:
						'A summary of the events of interest that have occurred, such as when the administration was verified.',
					types: () => [require('./provenance.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Provenance') {
							return require('./provenance.schema.js');
						}
					},
				}),
			),
			description:
				'A summary of the events of interest that have occurred, such as when the administration was verified.',
		},
	}),
});
