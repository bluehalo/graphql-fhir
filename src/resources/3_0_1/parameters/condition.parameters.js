const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the condition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/clinical-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.code',
		description:
			'Multiple Resources:     * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Procedure](procedure.html): A code to identify a  procedure  * [List](list.html): What the purpose of this list is  * [ProcedureRequest](procedurerequest.html): What is being requested/ordered  * [Observation](observation.html): The code of the observation type  * [DiagnosticReport](diagnosticreport.html): The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [Condition](condition.html): Code for the condition  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.identifier',
		description:
			'Multiple Resources:     * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [Goal](goal.html): External Ids for this goal  * [Consent](consent.html): Identifier for this record (external references)  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [SupplyRequest](supplyrequest.html): Unique identifier  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [CareTeam](careteam.html): External Ids for this team  * [ImagingStudy](imagingstudy.html): Other identifiers for the Study  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [Procedure](procedure.html): A unique identifier for a procedure  * [List](list.html): Business identifier  * [Immunization](immunization.html): Business identifier  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  * [ProcedureRequest](procedurerequest.html): Identifiers assigned to this order  * [Observation](observation.html): The unique id for a particular observation  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Condition](condition.html): A unique identifier of the condition record  * [Composition](composition.html): Logical identifier of composition (version-independent)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [SupplyDelivery](supplydelivery.html): External identifier  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Condition.subject',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-abatement-age
	abatement_age: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Condition.abatementAge',
		description: 'Abatement as age or age range',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-abatement-boolean
	abatement_boolean: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.abatementDateTime',
		description:
			'Abatement boolean (boolean is true or non-boolean values are present)',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-abatement-date
	abatement_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Condition.abatementDateTime',
		description: 'Date-related abatements (dateTime and period)',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-abatement-string
	abatement_string: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Condition.abatementString',
		description: 'Abatement as a string',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-asserted-date
	asserted_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Condition.assertedDate',
		description: 'Date record was believed accurate',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-asserter
	asserter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Condition.asserter',
		description: 'Person who asserts this condition',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-body-site
	body_site: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.bodySite',
		description: 'Anatomical location, if relevant',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.category',
		description: 'The category of the condition',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-clinical-status
	clinical_status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.clinicalStatus',
		description: 'The clinical status of the condition',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-context
	context: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Condition.context',
		description: 'Encounter or episode when condition first asserted',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Condition.context',
		description: 'Encounter when condition first asserted',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-evidence
	evidence: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.evidence.code',
		description: 'Manifestation/symptom',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-evidence-detail
	evidence_detail: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Condition.evidence.detail',
		description: 'Supporting information found elsewhere',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-onset-age
	onset_age: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Condition.onsetAge',
		description: 'Onsets as age or age range',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-onset-date
	onset_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Condition.onsetDateTime',
		description: 'Date related onsets (dateTime and Period)',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-onset-info
	onset_info: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Condition.onsetString',
		description: 'Onsets as a string',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-severity
	severity: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.severity',
		description: 'The severity of the condition',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-stage
	stage: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.stage.summary',
		description: 'Simple summary (disease specific)',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Condition.subject',
		description: 'Who has the condition?',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-verification-status
	verification_status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.verificationStatus',
		description:
			'provisional | differential | confirmed | refuted | entered-in-error | unknown',
	},
};
