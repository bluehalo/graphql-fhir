const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the referralrequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/clinical-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ReferralRequest.subject',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ReferralRequest.type',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): The type of the referral  * [DocumentManifest](documentmanifest.html): Kind of document set  * [DocumentReference](documentreference.html): Kind of document (LOINC if possible)  * [Encounter](encounter.html): Specific type of encounter  * [AllergyIntolerance](allergyintolerance.html): allergy | intolerance - Underlying mechanism (if known)  * [EpisodeOfCare](episodeofcare.html): Type/class  - e.g. specialist referral, disease management  * [Composition](composition.html): Kind of composition (LOINC if possible)  ',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-authored-on
	authored_on: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ReferralRequest.authoredOn',
		description: 'Creation or activation date',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-based-on
	based_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ReferralRequest.basedOn',
		description: 'Request being fulfilled',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-context
	context: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ReferralRequest.context',
		description: 'Part of encounter or episode of care',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-definition
	definition: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ReferralRequest.definition',
		description: 'Instantiates protocol or definition',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ReferralRequest.context',
		description: 'Originating encounter',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-group-identifier
	group_identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ReferralRequest.groupIdentifier',
		description: 'Part of common request',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ReferralRequest.identifier',
		description: 'Business identifier',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-intent
	intent: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ReferralRequest.intent',
		description: 'Proposal, plan or order',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-occurrence-date
	occurrence_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ReferralRequest.occurrenceDateTime',
		description: 'When the service(s) requested in the referral should occur',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-priority
	priority: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ReferralRequest.priority',
		description: 'The priority assigned to the referral',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-recipient
	recipient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ReferralRequest.recipient',
		description: 'The person that the referral was sent to',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-replaces
	replaces: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ReferralRequest.replaces',
		description: 'Request(s) replaced by this request',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-requester
	requester: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ReferralRequest.requester.agent',
		description: 'Individual making the request',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-service
	service: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ReferralRequest.serviceRequested',
		description: 'Actions requested as part of the referral',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-specialty
	specialty: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ReferralRequest.specialty',
		description: 'The specialty that the referral is for',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ReferralRequest.status',
		description: 'The status of the referral',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ReferralRequest.subject',
		description: 'Patient referred to care or transfer',
	},
};
