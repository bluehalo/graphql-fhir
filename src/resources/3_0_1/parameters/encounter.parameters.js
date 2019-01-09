const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the encounter query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/clinical-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Encounter.period',
		description:
			"Multiple Resources:     * [Consent](consent.html): When this Consent was created or indexed  * [SupplyRequest](supplyrequest.html): When the request was made  * [RiskAssessment](riskassessment.html): When was assessment made?  * [CareTeam](careteam.html): Time period team covers  * [FamilyMemberHistory](familymemberhistory.html): When history was captured/updated  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [AllergyIntolerance](allergyintolerance.html): Date record was believed accurate  * [CarePlan](careplan.html): Time period plan covers  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [Procedure](procedure.html): Date/Period the procedure was performed  * [List](list.html): When the list was prepared  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [Flag](flag.html): Time period when flag is active  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Composition](composition.html): Composition editing time  * [DetectedIssue](detectedissue.html): When identified  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  ",
	},
	// http://hl7.org/fhir/SearchParameter/clinical-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.identifier',
		description:
			'Multiple Resources:     * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [Goal](goal.html): External Ids for this goal  * [Consent](consent.html): Identifier for this record (external references)  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [SupplyRequest](supplyrequest.html): Unique identifier  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [CareTeam](careteam.html): External Ids for this team  * [ImagingStudy](imagingstudy.html): Other identifiers for the Study  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [Procedure](procedure.html): A unique identifier for a procedure  * [List](list.html): Business identifier  * [Immunization](immunization.html): Business identifier  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  * [ProcedureRequest](procedurerequest.html): Identifiers assigned to this order  * [Observation](observation.html): The unique id for a particular observation  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Condition](condition.html): A unique identifier of the condition record  * [Composition](composition.html): Logical identifier of composition (version-independent)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [SupplyDelivery](supplydelivery.html): External identifier  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.subject',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.type',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): The type of the referral  * [DocumentManifest](documentmanifest.html): Kind of document set  * [DocumentReference](documentreference.html): Kind of document (LOINC if possible)  * [Encounter](encounter.html): Specific type of encounter  * [AllergyIntolerance](allergyintolerance.html): allergy | intolerance - Underlying mechanism (if known)  * [EpisodeOfCare](episodeofcare.html): Type/class  - e.g. specialist referral, disease management  * [Composition](composition.html): Kind of composition (LOINC if possible)  ',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-appointment
	appointment: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.appointment',
		description: 'The appointment that scheduled this encounter',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-class
	class: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.class',
		description: 'inpatient | outpatient | ambulatory | emergency +',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-diagnosis
	diagnosis: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.diagnosis.condition',
		description: 'Reason the encounter takes place (resource)',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-episodeofcare
	episodeofcare: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.episodeOfCare',
		description:
			'Episode(s) of care that this encounter should be recorded against',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-incomingreferral
	incomingreferral: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.incomingReferral',
		description: 'The ReferralRequest that initiated this encounter',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-length
	length: {
		type: GraphQLString,
		fhirtype: 'number',
		xpath: 'Encounter.length',
		description: 'Length of encounter in days',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.location.location',
		description: 'Location the encounter takes place',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-location-period
	location_period: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Encounter.location.period',
		description:
			'Time period during which the patient was present at the location',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-part-of
	part_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.partOf',
		description: 'Another Encounter this encounter is part of',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-participant
	participant: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.participant.individual',
		description: 'Persons involved in the encounter other than the patient',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-participant-type
	participant_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.participant.type',
		description: 'Role of participant in encounter',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-practitioner
	practitioner: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.participant.individual',
		description: 'Persons involved in the encounter other than the patient',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-reason
	reason: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.reason',
		description: 'Reason the encounter takes place (code)',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-service-provider
	service_provider: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.serviceProvider',
		description: 'The custodian organization of this Encounter record',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-special-arrangement
	special_arrangement: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.hospitalization.specialArrangement',
		description: 'Wheelchair, translator, stretcher, etc.',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.status',
		description:
			'planned | arrived | triaged | in-progress | onleave | finished | cancelled +',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.subject',
		description: 'The patient ro group present at the encounter',
	},
};
