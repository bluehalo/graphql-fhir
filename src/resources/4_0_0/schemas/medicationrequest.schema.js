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
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary MedicationRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationRequest',
	description:
		"An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called 'MedicationRequest' rather than 'MedicationPrescription' or 'MedicationOrder' to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.",
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'MedicationRequest_Enum_schema',
					values: { MedicationRequest: { value: 'MedicationRequest' } },
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
				'Identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'A code specifying the current state of the order.  Generally, this will be active or completed state.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'A code specifying the current state of the order.  Generally, this will be active or completed state.',
		},
		statusReason: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Captures the reason for the current state of the MedicationRequest.',
		},
		_intent: {
			type: require('./element.schema.js'),
			description:
				'Whether the request is a proposal, plan, or an original order.',
		},
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Whether the request is a proposal, plan, or an original order.',
		},
		category: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Indicates the type of medication request (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)).',
		},
		_priority: {
			type: require('./element.schema.js'),
			description:
				'Indicates how quickly the Medication Request should be addressed with respect to other requests.',
		},
		priority: {
			type: CodeScalar,
			description:
				'Indicates how quickly the Medication Request should be addressed with respect to other requests.',
		},
		_doNotPerform: {
			type: require('./element.schema.js'),
			description:
				'If true indicates that the provider is asking for the medication request not to occur.',
		},
		doNotPerform: {
			type: GraphQLBoolean,
			description:
				'If true indicates that the provider is asking for the medication request not to occur.',
		},
		_reportedBoolean: {
			type: require('./element.schema.js'),
			description:
				"Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.",
		},
		reportedBoolean: {
			type: GraphQLBoolean,
			description:
				"Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.",
		},
		reportedReference: {
			type: new GraphQLUnionType({
				name: 'MedicationRequestreportedReference_reportedReference_Union',
				description:
					"Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.",
				types: () => [
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./relatedperson.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				"Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.",
		},
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.',
		},
		medicationReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'MedicationRequestmedicationReference_medicationReference_Union',
					description:
						'Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.',
					types: () => [require('./medication.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Medication') {
							return require('./medication.schema.js');
						}
					},
				}),
			),
			description:
				'Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.',
		},
		subject: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'MedicationRequestsubject_subject_Union',
					description:
						'A link to a resource representing the person or set of individuals to whom the medication will be given.',
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
			description:
				'A link to a resource representing the person or set of individuals to whom the medication will be given.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'MedicationRequestencounter_encounter_Union',
				description:
					'The Encounter during which this [x] was created or to which the creation of this record is tightly associated.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'The Encounter during which this [x] was created or to which the creation of this record is tightly associated.',
		},
		supportingInformation: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationRequestsupportingInformation_supportingInformation_Union',
					description:
						'Include additional information (for example, patient height and weight) that supports the ordering of the medication.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'Include additional information (for example, patient height and weight) that supports the ordering of the medication.',
		},
		_authoredOn: {
			type: require('./element.schema.js'),
			description:
				'The date (and perhaps time) when the prescription was initially written or authored on.',
		},
		authoredOn: {
			type: DateTimeScalar,
			description:
				'The date (and perhaps time) when the prescription was initially written or authored on.',
		},
		requester: {
			type: new GraphQLUnionType({
				name: 'MedicationRequestrequester_requester_Union',
				description:
					'The individual, organization, or device that initiated the request and has responsibility for its activation.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
					require('./device.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
				},
			}),
			description:
				'The individual, organization, or device that initiated the request and has responsibility for its activation.',
		},
		performer: {
			type: new GraphQLUnionType({
				name: 'MedicationRequestperformer_performer_Union',
				description:
					'The specified desired performer of the medication treatment (e.g. the performer of the medication administration).',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./device.schema.js'),
					require('./relatedperson.schema.js'),
					require('./careteam.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'CareTeam') {
						return require('./careteam.schema.js');
					}
				},
			}),
			description:
				'The specified desired performer of the medication treatment (e.g. the performer of the medication administration).',
		},
		performerType: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates the type of performer of the administration of the medication.',
		},
		recorder: {
			type: new GraphQLUnionType({
				name: 'MedicationRequestrecorder_recorder_Union',
				description:
					'The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
				},
			}),
			description:
				'The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The reason or the indication for ordering or not ordering the medication.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationRequestreasonReference_reasonReference_Union',
					description:
						'Condition or observation that supports why the medication was ordered.',
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
				'Condition or observation that supports why the medication was ordered.',
		},
		_instantiatesCanonical: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.',
		},
		instantiatesCanonical: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.',
		},
		_instantiatesUri: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.',
		},
		instantiatesUri: {
			type: new GraphQLList(UriScalar),
			description:
				'The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.',
		},
		basedOn: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationRequestbasedOn_basedOn_Union',
					description:
						'A plan or request that is fulfilled in whole or in part by this medication request.',
					types: () => [
						require('./careplan.schema.js'),
						require('./medicationrequest.schema.js'),
						require('./servicerequest.schema.js'),
						require('./immunizationrecommendation.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'CarePlan') {
							return require('./careplan.schema.js');
						}
						if (data && data.resourceType === 'MedicationRequest') {
							return require('./medicationrequest.schema.js');
						}
						if (data && data.resourceType === 'ServiceRequest') {
							return require('./servicerequest.schema.js');
						}
						if (data && data.resourceType === 'ImmunizationRecommendation') {
							return require('./immunizationrecommendation.schema.js');
						}
					},
				}),
			),
			description:
				'A plan or request that is fulfilled in whole or in part by this medication request.',
		},
		groupIdentifier: {
			type: require('./identifier.schema.js'),
			description:
				'A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.',
		},
		courseOfTherapyType: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The description of the overall patte3rn of the administration of the medication to the patient.',
		},
		insurance: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationRequestinsurance_insurance_Union',
					description:
						'Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.',
					types: () => [
						require('./coverage.schema.js'),
						require('./claimresponse.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Coverage') {
							return require('./coverage.schema.js');
						}
						if (data && data.resourceType === 'ClaimResponse') {
							return require('./claimresponse.schema.js');
						}
					},
				}),
			),
			description:
				'Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Extra information about the prescription that could not be conveyed by the other attributes.',
		},
		dosageInstruction: {
			type: new GraphQLList(require('./dosage.schema.js')),
			description: 'Indicates how the medication is to be used by the patient.',
		},
		dispenseRequest: {
			type: require('./medicationrequestdispenserequest.schema.js'),
			description:
				'Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.',
		},
		substitution: {
			type: require('./medicationrequestsubstitution.schema.js'),
			description:
				"Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.",
		},
		priorPrescription: {
			type: new GraphQLUnionType({
				name: 'MedicationRequestpriorPrescription_priorPrescription_Union',
				description:
					'A link to a resource representing an earlier order related order or prescription.',
				types: () => [require('./medicationrequest.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'MedicationRequest') {
						return require('./medicationrequest.schema.js');
					}
				},
			}),
			description:
				'A link to a resource representing an earlier order related order or prescription.',
		},
		detectedIssue: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationRequestdetectedIssue_detectedIssue_Union',
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
		eventHistory: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationRequesteventHistory_eventHistory_Union',
					description:
						'Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.',
					types: () => [require('./provenance.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Provenance') {
							return require('./provenance.schema.js');
						}
					},
				}),
			),
			description:
				'Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.',
		},
	}),
});
