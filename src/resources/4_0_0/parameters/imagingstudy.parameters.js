const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the imagingstudy query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/clinical-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImagingStudy.identifier',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [CareTeam](careteam.html): External Ids for this team  * [Composition](composition.html): Version-independent identifier for the Composition  * [Condition](condition.html): A unique identifier of the condition record  * [Consent](consent.html): Identifier for this record (external references)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Goal](goal.html): External Ids for this goal  * [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID and Accession number  * [Immunization](immunization.html): Business identifier  * [List](list.html): Business identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier  * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Observation](observation.html): The unique id for a particular observation  * [Procedure](procedure.html): A unique identifier for a procedure  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [ServiceRequest](servicerequest.html): Identifiers assigned to this order  * [SupplyDelivery](supplydelivery.html): External identifier  * [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImagingStudy.subject',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who the care plan is for  * [CareTeam](careteam.html): Who care team is for  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  * [Composition](composition.html): Who and/or what the composition is about  * [Condition](condition.html): Who has the condition?  * [Consent](consent.html): Who the consent applies to  * [DetectedIssue](detectedissue.html): Associated patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [Encounter](encounter.html): The patient or group present at the encounter  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Flag](flag.html): The identity of a subject to list flags for  * [Goal](goal.html): Who this goal is intended for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [Immunization](immunization.html): The patient for the vaccination record  * [List](list.html): If all resources have the same subject  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Observation](observation.html): The subject that the observation is about (if patient)  * [Procedure](procedure.html): Search by subject - a patient  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [ServiceRequest](servicerequest.html): Search by subject - a patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  ',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-basedon
	basedon: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImagingStudy.basedOn',
		description: 'The order for the image',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-bodysite
	bodysite: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImagingStudy.series.bodySite',
		description: 'The body site studied',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-dicom-class
	dicom_class: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImagingStudy.series.instance.sopClass',
		description: 'The type of the instance',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImagingStudy.encounter',
		description: 'The context of the study',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-endpoint
	endpoint: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImagingStudy.endpoint',
		description: 'The endpoint for the study or series',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-instance
	instance: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImagingStudy.series.instance.uid',
		description: 'SOP Instance UID for an instance',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-interpreter
	interpreter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImagingStudy.interpreter',
		description: 'Who interpreted the images',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-modality
	modality: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImagingStudy.series.modality',
		description: 'The modality of the series',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-performer
	performer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImagingStudy.series.performer.actor',
		description: 'The person who performed the study',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-reason
	reason: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImagingStudy.reasonCode',
		description: 'The reason for the study',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-referrer
	referrer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImagingStudy.referrer',
		description: 'The referring physician',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-series
	series: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImagingStudy.series.uid',
		description: 'DICOM Series Instance UID for a series',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-started
	started: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ImagingStudy.started',
		description: 'When the study was started',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImagingStudy.status',
		description: 'The status of the study',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImagingStudy.subject',
		description: 'Who the study is about',
	},
};
