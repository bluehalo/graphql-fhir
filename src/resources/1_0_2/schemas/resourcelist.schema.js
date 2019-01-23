const { GraphQLUnionType } = require('graphql');

/**
 * @name exports
 * @summary ResourceList Union
 */
module.exports = new GraphQLUnionType({
	name: 'ResourceList',
	description: 'Union of all available resources',
	types: [
		require('./valueset.schema.js'),
		require('./parameters.schema.js'),
		require('./resource.schema.js'),
		require('./domainresource.schema.js'),
		require('./account.schema.js'),
		require('./allergyintolerance.schema.js'),
		require('./appointment.schema.js'),
		require('./appointmentresponse.schema.js'),
		require('./auditevent.schema.js'),
		require('./basic.schema.js'),
		require('./binary.schema.js'),
		require('./bodysite.schema.js'),
		require('./bundle.schema.js'),
		require('./careplan.schema.js'),
		require('./claim.schema.js'),
		require('./claimresponse.schema.js'),
		require('./clinicalimpression.schema.js'),
		require('./communication.schema.js'),
		require('./communicationrequest.schema.js'),
		require('./composition.schema.js'),
		require('./conceptmap.schema.js'),
		require('./condition.schema.js'),
		require('./conformance.schema.js'),
		require('./contract.schema.js'),
		require('./coverage.schema.js'),
		require('./dataelement.schema.js'),
		require('./detectedissue.schema.js'),
		require('./device.schema.js'),
		require('./devicecomponent.schema.js'),
		require('./devicemetric.schema.js'),
		require('./deviceuserequest.schema.js'),
		require('./deviceusestatement.schema.js'),
		require('./diagnosticorder.schema.js'),
		require('./diagnosticreport.schema.js'),
		require('./documentmanifest.schema.js'),
		require('./documentreference.schema.js'),
		require('./eligibilityrequest.schema.js'),
		require('./eligibilityresponse.schema.js'),
		require('./encounter.schema.js'),
		require('./enrollmentrequest.schema.js'),
		require('./enrollmentresponse.schema.js'),
		require('./episodeofcare.schema.js'),
		require('./explanationofbenefit.schema.js'),
		require('./familymemberhistory.schema.js'),
		require('./flag.schema.js'),
		require('./goal.schema.js'),
		require('./group.schema.js'),
		require('./healthcareservice.schema.js'),
		require('./imagingobjectselection.schema.js'),
		require('./imagingstudy.schema.js'),
		require('./immunization.schema.js'),
		require('./immunizationrecommendation.schema.js'),
		require('./implementationguide.schema.js'),
		require('./list.schema.js'),
		require('./location.schema.js'),
		require('./media.schema.js'),
		require('./medication.schema.js'),
		require('./medicationadministration.schema.js'),
		require('./medicationdispense.schema.js'),
		require('./medicationorder.schema.js'),
		require('./medicationstatement.schema.js'),
		require('./messageheader.schema.js'),
		require('./namingsystem.schema.js'),
		require('./nutritionorder.schema.js'),
		require('./observation.schema.js'),
		require('./operationdefinition.schema.js'),
		require('./operationoutcome.schema.js'),
		require('./order.schema.js'),
		require('./orderresponse.schema.js'),
		require('./organization.schema.js'),
		require('./patient.schema.js'),
		require('./paymentnotice.schema.js'),
		require('./paymentreconciliation.schema.js'),
		require('./person.schema.js'),
		require('./practitioner.schema.js'),
		require('./procedure.schema.js'),
		require('./procedurerequest.schema.js'),
		require('./processrequest.schema.js'),
		require('./processresponse.schema.js'),
		require('./provenance.schema.js'),
		require('./questionnaire.schema.js'),
		require('./questionnaireresponse.schema.js'),
		require('./referralrequest.schema.js'),
		require('./relatedperson.schema.js'),
		require('./riskassessment.schema.js'),
		require('./schedule.schema.js'),
		require('./searchparameter.schema.js'),
		require('./slot.schema.js'),
		require('./specimen.schema.js'),
		require('./structuredefinition.schema.js'),
		require('./subscription.schema.js'),
		require('./substance.schema.js'),
		require('./supplydelivery.schema.js'),
		require('./supplyrequest.schema.js'),
		require('./testscript.schema.js'),
		require('./visionprescription.schema.js'),
	],
	resolveType(data) {
		if (data && data.resourceType === 'ValueSet') {
			return require('./valueset.schema.js');
		}
		if (data && data.resourceType === 'Parameters') {
			return require('./parameters.schema.js');
		}
		if (data && data.resourceType === 'Resource') {
			return require('./resource.schema.js');
		}
		if (data && data.resourceType === 'DomainResource') {
			return require('./domainresource.schema.js');
		}
		if (data && data.resourceType === 'Account') {
			return require('./account.schema.js');
		}
		if (data && data.resourceType === 'AllergyIntolerance') {
			return require('./allergyintolerance.schema.js');
		}
		if (data && data.resourceType === 'Appointment') {
			return require('./appointment.schema.js');
		}
		if (data && data.resourceType === 'AppointmentResponse') {
			return require('./appointmentresponse.schema.js');
		}
		if (data && data.resourceType === 'AuditEvent') {
			return require('./auditevent.schema.js');
		}
		if (data && data.resourceType === 'Basic') {
			return require('./basic.schema.js');
		}
		if (data && data.resourceType === 'Binary') {
			return require('./binary.schema.js');
		}
		if (data && data.resourceType === 'BodySite') {
			return require('./bodysite.schema.js');
		}
		if (data && data.resourceType === 'Bundle') {
			return require('./bundle.schema.js');
		}
		if (data && data.resourceType === 'CarePlan') {
			return require('./careplan.schema.js');
		}
		if (data && data.resourceType === 'Claim') {
			return require('./claim.schema.js');
		}
		if (data && data.resourceType === 'ClaimResponse') {
			return require('./claimresponse.schema.js');
		}
		if (data && data.resourceType === 'ClinicalImpression') {
			return require('./clinicalimpression.schema.js');
		}
		if (data && data.resourceType === 'Communication') {
			return require('./communication.schema.js');
		}
		if (data && data.resourceType === 'CommunicationRequest') {
			return require('./communicationrequest.schema.js');
		}
		if (data && data.resourceType === 'Composition') {
			return require('./composition.schema.js');
		}
		if (data && data.resourceType === 'ConceptMap') {
			return require('./conceptmap.schema.js');
		}
		if (data && data.resourceType === 'Condition') {
			return require('./condition.schema.js');
		}
		if (data && data.resourceType === 'Conformance') {
			return require('./conformance.schema.js');
		}
		if (data && data.resourceType === 'Contract') {
			return require('./contract.schema.js');
		}
		if (data && data.resourceType === 'Coverage') {
			return require('./coverage.schema.js');
		}
		if (data && data.resourceType === 'DataElement') {
			return require('./dataelement.schema.js');
		}
		if (data && data.resourceType === 'DetectedIssue') {
			return require('./detectedissue.schema.js');
		}
		if (data && data.resourceType === 'Device') {
			return require('./device.schema.js');
		}
		if (data && data.resourceType === 'DeviceComponent') {
			return require('./devicecomponent.schema.js');
		}
		if (data && data.resourceType === 'DeviceMetric') {
			return require('./devicemetric.schema.js');
		}
		if (data && data.resourceType === 'DeviceUseRequest') {
			return require('./deviceuserequest.schema.js');
		}
		if (data && data.resourceType === 'DeviceUseStatement') {
			return require('./deviceusestatement.schema.js');
		}
		if (data && data.resourceType === 'DiagnosticOrder') {
			return require('./diagnosticorder.schema.js');
		}
		if (data && data.resourceType === 'DiagnosticReport') {
			return require('./diagnosticreport.schema.js');
		}
		if (data && data.resourceType === 'DocumentManifest') {
			return require('./documentmanifest.schema.js');
		}
		if (data && data.resourceType === 'DocumentReference') {
			return require('./documentreference.schema.js');
		}
		if (data && data.resourceType === 'EligibilityRequest') {
			return require('./eligibilityrequest.schema.js');
		}
		if (data && data.resourceType === 'EligibilityResponse') {
			return require('./eligibilityresponse.schema.js');
		}
		if (data && data.resourceType === 'Encounter') {
			return require('./encounter.schema.js');
		}
		if (data && data.resourceType === 'EnrollmentRequest') {
			return require('./enrollmentrequest.schema.js');
		}
		if (data && data.resourceType === 'EnrollmentResponse') {
			return require('./enrollmentresponse.schema.js');
		}
		if (data && data.resourceType === 'EpisodeOfCare') {
			return require('./episodeofcare.schema.js');
		}
		if (data && data.resourceType === 'ExplanationOfBenefit') {
			return require('./explanationofbenefit.schema.js');
		}
		if (data && data.resourceType === 'FamilyMemberHistory') {
			return require('./familymemberhistory.schema.js');
		}
		if (data && data.resourceType === 'Flag') {
			return require('./flag.schema.js');
		}
		if (data && data.resourceType === 'Goal') {
			return require('./goal.schema.js');
		}
		if (data && data.resourceType === 'Group') {
			return require('./group.schema.js');
		}
		if (data && data.resourceType === 'HealthcareService') {
			return require('./healthcareservice.schema.js');
		}
		if (data && data.resourceType === 'ImagingObjectSelection') {
			return require('./imagingobjectselection.schema.js');
		}
		if (data && data.resourceType === 'ImagingStudy') {
			return require('./imagingstudy.schema.js');
		}
		if (data && data.resourceType === 'Immunization') {
			return require('./immunization.schema.js');
		}
		if (data && data.resourceType === 'ImmunizationRecommendation') {
			return require('./immunizationrecommendation.schema.js');
		}
		if (data && data.resourceType === 'ImplementationGuide') {
			return require('./implementationguide.schema.js');
		}
		if (data && data.resourceType === 'List') {
			return require('./list.schema.js');
		}
		if (data && data.resourceType === 'Location') {
			return require('./location.schema.js');
		}
		if (data && data.resourceType === 'Media') {
			return require('./media.schema.js');
		}
		if (data && data.resourceType === 'Medication') {
			return require('./medication.schema.js');
		}
		if (data && data.resourceType === 'MedicationAdministration') {
			return require('./medicationadministration.schema.js');
		}
		if (data && data.resourceType === 'MedicationDispense') {
			return require('./medicationdispense.schema.js');
		}
		if (data && data.resourceType === 'MedicationOrder') {
			return require('./medicationorder.schema.js');
		}
		if (data && data.resourceType === 'MedicationStatement') {
			return require('./medicationstatement.schema.js');
		}
		if (data && data.resourceType === 'MessageHeader') {
			return require('./messageheader.schema.js');
		}
		if (data && data.resourceType === 'NamingSystem') {
			return require('./namingsystem.schema.js');
		}
		if (data && data.resourceType === 'NutritionOrder') {
			return require('./nutritionorder.schema.js');
		}
		if (data && data.resourceType === 'Observation') {
			return require('./observation.schema.js');
		}
		if (data && data.resourceType === 'OperationDefinition') {
			return require('./operationdefinition.schema.js');
		}
		if (data && data.resourceType === 'OperationOutcome') {
			return require('./operationoutcome.schema.js');
		}
		if (data && data.resourceType === 'Order') {
			return require('./order.schema.js');
		}
		if (data && data.resourceType === 'OrderResponse') {
			return require('./orderresponse.schema.js');
		}
		if (data && data.resourceType === 'Organization') {
			return require('./organization.schema.js');
		}
		if (data && data.resourceType === 'Patient') {
			return require('./patient.schema.js');
		}
		if (data && data.resourceType === 'PaymentNotice') {
			return require('./paymentnotice.schema.js');
		}
		if (data && data.resourceType === 'PaymentReconciliation') {
			return require('./paymentreconciliation.schema.js');
		}
		if (data && data.resourceType === 'Person') {
			return require('./person.schema.js');
		}
		if (data && data.resourceType === 'Practitioner') {
			return require('./practitioner.schema.js');
		}
		if (data && data.resourceType === 'Procedure') {
			return require('./procedure.schema.js');
		}
		if (data && data.resourceType === 'ProcedureRequest') {
			return require('./procedurerequest.schema.js');
		}
		if (data && data.resourceType === 'ProcessRequest') {
			return require('./processrequest.schema.js');
		}
		if (data && data.resourceType === 'ProcessResponse') {
			return require('./processresponse.schema.js');
		}
		if (data && data.resourceType === 'Provenance') {
			return require('./provenance.schema.js');
		}
		if (data && data.resourceType === 'Questionnaire') {
			return require('./questionnaire.schema.js');
		}
		if (data && data.resourceType === 'QuestionnaireResponse') {
			return require('./questionnaireresponse.schema.js');
		}
		if (data && data.resourceType === 'ReferralRequest') {
			return require('./referralrequest.schema.js');
		}
		if (data && data.resourceType === 'RelatedPerson') {
			return require('./relatedperson.schema.js');
		}
		if (data && data.resourceType === 'RiskAssessment') {
			return require('./riskassessment.schema.js');
		}
		if (data && data.resourceType === 'Schedule') {
			return require('./schedule.schema.js');
		}
		if (data && data.resourceType === 'SearchParameter') {
			return require('./searchparameter.schema.js');
		}
		if (data && data.resourceType === 'Slot') {
			return require('./slot.schema.js');
		}
		if (data && data.resourceType === 'Specimen') {
			return require('./specimen.schema.js');
		}
		if (data && data.resourceType === 'StructureDefinition') {
			return require('./structuredefinition.schema.js');
		}
		if (data && data.resourceType === 'Subscription') {
			return require('./subscription.schema.js');
		}
		if (data && data.resourceType === 'Substance') {
			return require('./substance.schema.js');
		}
		if (data && data.resourceType === 'SupplyDelivery') {
			return require('./supplydelivery.schema.js');
		}
		if (data && data.resourceType === 'SupplyRequest') {
			return require('./supplyrequest.schema.js');
		}
		if (data && data.resourceType === 'TestScript') {
			return require('./testscript.schema.js');
		}
		if (data && data.resourceType === 'VisionPrescription') {
			return require('./visionprescription.schema.js');
		}
	},
});
