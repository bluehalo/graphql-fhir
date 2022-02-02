const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
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
	description:
		'Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.',
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
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
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Identifiers associated with this Medication Administration that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.',
		},
		_instantiates: {
			type: require('./element.schema.js'),
			description:
				'A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.',
		},
		instantiates: {
			type: new GraphQLList(UriScalar),
			description:
				'A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.',
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
				'Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions, it is possible for an administration to be started but not completed or it may be paused while some other process is under way.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions, it is possible for an administration to be started but not completed or it may be paused while some other process is under way.',
		},
		statusReason: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A code indicating why the administration was not performed.',
		},
		category: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates where the medication is expected to be consumed or administered.',
		},
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.',
		},
		medicationReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'MedicationAdministrationmedicationReference_medicationReference_Union',
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
					'The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.',
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
				'The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.',
		},
		supportingInformation: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationAdministrationsupportingInformation_supportingInformation_Union',
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
				'Indicates who or what performed the medication administration and how they were involved.',
		},
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
						require('./diagnosticreport.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
						if (data && data.resourceType === 'DiagnosticReport') {
							return require('./diagnosticreport.schema.js');
						}
					},
				}),
			),
			description:
				'Condition or observation that supports why the medication was administered.',
		},
		request: {
			type: new GraphQLUnionType({
				name: 'MedicationAdministrationrequest_request_Union',
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
