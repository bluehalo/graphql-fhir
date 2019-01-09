const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the procedurerequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/clinical-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ProcedureRequest.code',
		description:
			'Multiple Resources:     * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Procedure](procedure.html): A code to identify a  procedure  * [List](list.html): What the purpose of this list is  * [ProcedureRequest](procedurerequest.html): What is being requested/ordered  * [Observation](observation.html): The code of the observation type  * [DiagnosticReport](diagnosticreport.html): The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [Condition](condition.html): Code for the condition  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ProcedureRequest.identifier',
		description:
			'Multiple Resources:     * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [Goal](goal.html): External Ids for this goal  * [Consent](consent.html): Identifier for this record (external references)  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [SupplyRequest](supplyrequest.html): Unique identifier  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [CareTeam](careteam.html): External Ids for this team  * [ImagingStudy](imagingstudy.html): Other identifiers for the Study  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [Procedure](procedure.html): A unique identifier for a procedure  * [List](list.html): Business identifier  * [Immunization](immunization.html): Business identifier  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  * [ProcedureRequest](procedurerequest.html): Identifiers assigned to this order  * [Observation](observation.html): The unique id for a particular observation  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Condition](condition.html): A unique identifier of the condition record  * [Composition](composition.html): Logical identifier of composition (version-independent)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [SupplyDelivery](supplydelivery.html): External identifier  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.subject',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.context',
		description:
			'Multiple Resources:     * [DocumentReference](documentreference.html): Context of the document  content  * [RiskAssessment](riskassessment.html): Where was assessment performed?  * [DeviceRequest](devicerequest.html): Encounter or Episode during which request was created  * [Procedure](procedure.html): Search by encounter  * [List](list.html): Context in which list created  * [VisionPrescription](visionprescription.html): Return prescriptions with this encounter identifier  * [ProcedureRequest](procedurerequest.html): An encounter in which this request is made  * [Flag](flag.html): Alert relevant during encounter  * [Observation](observation.html): Encounter related to the observation  * [DiagnosticReport](diagnosticreport.html): The Encounter when the order was made  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this encounter identifier  * [Composition](composition.html): Context of the Composition  ',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-authored
	authored: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ProcedureRequest.authoredOn',
		description: 'Date request signed',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-based-on
	based_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.basedOn',
		description: 'What request fulfills',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-body-site
	body_site: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ProcedureRequest.bodySite',
		description: 'Where procedure is going to be done',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-context
	context: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.context',
		description: 'Encounter or Episode during which request was created',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-definition
	definition: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.definition',
		description: 'Protocol or definition',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-intent
	intent: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ProcedureRequest.intent',
		description: 'proposal | plan | order +',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-occurrence
	occurrence: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ProcedureRequest.occurrenceDateTime',
		description: 'When procedure should occur',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-performer
	performer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.performer',
		description: 'Requested perfomer',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-performer-type
	performer_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ProcedureRequest.performerType',
		description: 'Performer role',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-priority
	priority: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ProcedureRequest.priority',
		description: 'routine | urgent | asap | stat',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-replaces
	replaces: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.replaces',
		description: 'What request replaces',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-requester
	requester: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.requester.agent',
		description: 'Individual making the request',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-requisition
	requisition: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ProcedureRequest.requisition',
		description: 'Composite Request ID',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-specimen
	specimen: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.specimen',
		description: 'Specimen to be tested',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ProcedureRequest.status',
		description:
			'draft | active | suspended | completed | entered-in-error | cancelled',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.subject',
		description: 'Search by subject',
	},
};
