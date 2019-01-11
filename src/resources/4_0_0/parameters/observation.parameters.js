const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the observation query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/clinical-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.code',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Condition](condition.html): Code for the condition  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [DiagnosticReport](diagnosticreport.html): The code for the report, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [List](list.html): What the purpose of this list is  * [Medication](medication.html): Returns medications for a specific code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationDispense](medicationdispense.html): Returns dispenses of this medicine code  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [Observation](observation.html): The code of the observation type  * [Procedure](procedure.html): A code to identify a  procedure  * [ServiceRequest](servicerequest.html): What is being requested/ordered  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Observation.effectiveDateTime',
		description:
			"Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Date first version of the resource instance was recorded  * [CarePlan](careplan.html): Time period plan covers  * [CareTeam](careteam.html): Time period team covers  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  * [Composition](composition.html): Composition editing time  * [Consent](consent.html): When this Consent was created or indexed  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [FamilyMemberHistory](familymemberhistory.html): When history was recorded or last updated  * [Flag](flag.html): Time period when flag is active  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [List](list.html): When the list was prepared  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [Procedure](procedure.html): When the procedure was performed  * [RiskAssessment](riskassessment.html): When was assessment made?  * [SupplyRequest](supplyrequest.html): When the request was made  ",
	},
	// http://hl7.org/fhir/SearchParameter/clinical-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.identifier',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [CareTeam](careteam.html): External Ids for this team  * [Composition](composition.html): Version-independent identifier for the Composition  * [Condition](condition.html): A unique identifier of the condition record  * [Consent](consent.html): Identifier for this record (external references)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Goal](goal.html): External Ids for this goal  * [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID and Accession number  * [Immunization](immunization.html): Business identifier  * [List](list.html): Business identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier  * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Observation](observation.html): The unique id for a particular observation  * [Procedure](procedure.html): A unique identifier for a procedure  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [ServiceRequest](servicerequest.html): Identifiers assigned to this order  * [SupplyDelivery](supplydelivery.html): External identifier  * [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.subject',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who the care plan is for  * [CareTeam](careteam.html): Who care team is for  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  * [Composition](composition.html): Who and/or what the composition is about  * [Condition](condition.html): Who has the condition?  * [Consent](consent.html): Who the consent applies to  * [DetectedIssue](detectedissue.html): Associated patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [Encounter](encounter.html): The patient or group present at the encounter  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Flag](flag.html): The identity of a subject to list flags for  * [Goal](goal.html): Who this goal is intended for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [Immunization](immunization.html): The patient for the vaccination record  * [List](list.html): If all resources have the same subject  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Observation](observation.html): The subject that the observation is about (if patient)  * [Procedure](procedure.html): Search by subject - a patient  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [ServiceRequest](servicerequest.html): Search by subject - a patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.encounter',
		description:
			'Multiple Resources:     * [Composition](composition.html): Context of the Composition  * [DeviceRequest](devicerequest.html): Encounter during which request was created  * [DiagnosticReport](diagnosticreport.html): The Encounter when the order was made  * [DocumentReference](documentreference.html): Context of the document  content  * [Flag](flag.html): Alert relevant during encounter  * [List](list.html): Context in which list created  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this encounter identifier  * [Observation](observation.html): Encounter related to the observation  * [Procedure](procedure.html): Encounter created as part of  * [RiskAssessment](riskassessment.html): Where was assessment performed?  * [ServiceRequest](servicerequest.html): An encounter in which this request is made  * [VisionPrescription](visionprescription.html): Return prescriptions with this encounter identifier  ',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-based-on
	based_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.basedOn',
		description: 'Reference to the service request.',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.category',
		description: 'The classification of the type of observation',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-combo-code
	combo_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.code',
		description: 'The code of the observation type or component type',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-combo-data-absent-reason
	combo_data_absent_reason: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.dataAbsentReason',
		description:
			'The reason why the expected value in the element Observation.value[x] or Observation.component.value[x] is missing.',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-combo-value-concept
	combo_value_concept: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.valueCodeableConcept',
		description:
			'The value or component value of the observation, if the value is a CodeableConcept',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-combo-value-quantity
	combo_value_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Observation.valueQuantity',
		description:
			'The value or component value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-component-code
	component_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.component.code',
		description: 'The component code of the observation type',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-component-data-absent-reason
	component_data_absent_reason: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.component.dataAbsentReason',
		description:
			'The reason why the expected value in the element Observation.component.value[x] is missing.',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-component-value-concept
	component_value_concept: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.component.valueCodeableConcept',
		description:
			'The value of the component observation, if the value is a CodeableConcept',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-component-value-quantity
	component_value_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Observation.component.valueQuantity',
		description:
			'The value of the component observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-data-absent-reason
	data_absent_reason: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.dataAbsentReason',
		description:
			'The reason why the expected value in the element Observation.value[x] is missing.',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-derived-from
	derived_from: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.derivedFrom',
		description: 'Related measurements the observation is made from',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-device
	device: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.device',
		description: 'The Device that generated the observation data.',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-focus
	focus: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.focus',
		description:
			'The focus of an observation when the focus is not the patient of record.',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-has-member
	has_member: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.hasMember',
		description: 'Related resource that belongs to the Observation group',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-method
	method: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.method',
		description: 'The method used for the observation',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-part-of
	part_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.partOf',
		description: 'Part of referenced event',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-performer
	performer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.performer',
		description: 'Who performed the observation',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-specimen
	specimen: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.specimen',
		description: 'Specimen used for this observation',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.status',
		description: 'The status of the observation',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.subject',
		description: 'The subject that the observation is about',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-value-concept
	value_concept: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.valueCodeableConcept',
		description:
			'The value of the observation, if the value is a CodeableConcept',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-value-date
	value_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Observation.valueDateTime',
		description:
			'The value of the observation, if the value is a date or period of time',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-value-quantity
	value_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Observation.valueQuantity',
		description:
			'The value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-value-string
	value_string: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Observation.valueQuantity',
		description:
			'The value of the observation, if the value is a string, and also searches in CodeableConcept.text',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-code-value-concept
	code_value_concept: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'Code and coded value parameter pair',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-code-value-date
	code_value_date: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'Code and date/time value parameter pair',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-code-value-quantity
	code_value_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'Code and quantity value parameter pair',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-code-value-string
	code_value_string: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'Code and string value parameter pair',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-combo-code-value-concept
	combo_code_value_concept: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'Code and coded value parameter pair, including in components',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-combo-code-value-quantity
	combo_code_value_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'Code and quantity value parameter pair, including in components',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-component-code-value-concept
	component_code_value_concept: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'Component code and component coded value parameter pair',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-component-code-value-quantity
	component_code_value_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'Component code and component quantity value parameter pair',
	},
};
