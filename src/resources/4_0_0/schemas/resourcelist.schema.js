const { GraphQLUnionType } = require('graphql');

/**
 * @name exports
 * @summary ResourceList Union
 */
module.exports = new GraphQLUnionType({
	name: 'ResourceList',
	description: 'Union of all available resources',
	types: [
		require('./resource.schema.js'),
		require('./account.schema.js'),
		require('./activitydefinition.schema.js'),
		require('./adverseevent.schema.js'),
		require('./allergyintolerance.schema.js'),
		require('./appointment.schema.js'),
		require('./appointmentresponse.schema.js'),
		require('./auditevent.schema.js'),
		require('./basic.schema.js'),
		require('./binary.schema.js'),
		require('./biologicallyderivedproduct.schema.js'),
		require('./bodystructure.schema.js'),
		require('./bundle.schema.js'),
		require('./capabilitystatement.schema.js'),
		require('./careplan.schema.js'),
		require('./careteam.schema.js'),
		require('./catalogentry.schema.js'),
		require('./chargeitem.schema.js'),
		require('./chargeitemdefinition.schema.js'),
		require('./claim.schema.js'),
		require('./claimresponse.schema.js'),
		require('./clinicalimpression.schema.js'),
		require('./codesystem.schema.js'),
		require('./communication.schema.js'),
		require('./communicationrequest.schema.js'),
		require('./compartmentdefinition.schema.js'),
		require('./composition.schema.js'),
		require('./conceptmap.schema.js'),
		require('./condition.schema.js'),
		require('./consent.schema.js'),
		require('./contract.schema.js'),
		require('./coverage.schema.js'),
		require('./coverageeligibilityrequest.schema.js'),
		require('./coverageeligibilityresponse.schema.js'),
		require('./detectedissue.schema.js'),
		require('./device.schema.js'),
		require('./devicedefinition.schema.js'),
		require('./devicemetric.schema.js'),
		require('./devicerequest.schema.js'),
		require('./deviceusestatement.schema.js'),
		require('./diagnosticreport.schema.js'),
		require('./documentmanifest.schema.js'),
		require('./documentreference.schema.js'),
		require('./domainresource.schema.js'),
		require('./effectevidencesynthesis.schema.js'),
		require('./encounter.schema.js'),
		require('./endpoint.schema.js'),
		require('./enrollmentrequest.schema.js'),
		require('./enrollmentresponse.schema.js'),
		require('./episodeofcare.schema.js'),
		require('./eventdefinition.schema.js'),
		require('./evidence.schema.js'),
		require('./evidencevariable.schema.js'),
		require('./examplescenario.schema.js'),
		require('./explanationofbenefit.schema.js'),
		require('./familymemberhistory.schema.js'),
		require('./flag.schema.js'),
		require('./goal.schema.js'),
		require('./graphdefinition.schema.js'),
		require('./group.schema.js'),
		require('./guidanceresponse.schema.js'),
		require('./healthcareservice.schema.js'),
		require('./imagingstudy.schema.js'),
		require('./immunization.schema.js'),
		require('./immunizationevaluation.schema.js'),
		require('./immunizationrecommendation.schema.js'),
		require('./implementationguide.schema.js'),
		require('./insuranceplan.schema.js'),
		require('./invoice.schema.js'),
		require('./library.schema.js'),
		require('./linkage.schema.js'),
		require('./list.schema.js'),
		require('./location.schema.js'),
		require('./measure.schema.js'),
		require('./measurereport.schema.js'),
		require('./media.schema.js'),
		require('./medication.schema.js'),
		require('./medicationadministration.schema.js'),
		require('./medicationdispense.schema.js'),
		require('./medicationknowledge.schema.js'),
		require('./medicationrequest.schema.js'),
		require('./medicationstatement.schema.js'),
		require('./medicinalproduct.schema.js'),
		require('./medicinalproductauthorization.schema.js'),
		require('./medicinalproductcontraindication.schema.js'),
		require('./medicinalproductindication.schema.js'),
		require('./medicinalproductingredient.schema.js'),
		require('./medicinalproductinteraction.schema.js'),
		require('./medicinalproductmanufactured.schema.js'),
		require('./medicinalproductpackaged.schema.js'),
		require('./medicinalproductpharmaceutical.schema.js'),
		require('./medicinalproductundesirableeffect.schema.js'),
		require('./messagedefinition.schema.js'),
		require('./messageheader.schema.js'),
		require('./molecularsequence.schema.js'),
		require('./namingsystem.schema.js'),
		require('./nutritionorder.schema.js'),
		require('./observation.schema.js'),
		require('./observationdefinition.schema.js'),
		require('./operationdefinition.schema.js'),
		require('./operationoutcome.schema.js'),
		require('./organization.schema.js'),
		require('./organizationaffiliation.schema.js'),
		require('./parameters.schema.js'),
		require('./patient.schema.js'),
		require('./paymentnotice.schema.js'),
		require('./paymentreconciliation.schema.js'),
		require('./person.schema.js'),
		require('./plandefinition.schema.js'),
		require('./practitioner.schema.js'),
		require('./practitionerrole.schema.js'),
		require('./procedure.schema.js'),
		require('./provenance.schema.js'),
		require('./questionnaire.schema.js'),
		require('./questionnaireresponse.schema.js'),
		require('./relatedperson.schema.js'),
		require('./requestgroup.schema.js'),
		require('./researchdefinition.schema.js'),
		require('./researchelementdefinition.schema.js'),
		require('./researchstudy.schema.js'),
		require('./researchsubject.schema.js'),
		require('./riskassessment.schema.js'),
		require('./riskevidencesynthesis.schema.js'),
		require('./schedule.schema.js'),
		require('./searchparameter.schema.js'),
		require('./servicerequest.schema.js'),
		require('./slot.schema.js'),
		require('./specimen.schema.js'),
		require('./specimendefinition.schema.js'),
		require('./structuredefinition.schema.js'),
		require('./structuremap.schema.js'),
		require('./subscription.schema.js'),
		require('./substance.schema.js'),
		require('./substancenucleicacid.schema.js'),
		require('./substancepolymer.schema.js'),
		require('./substanceprotein.schema.js'),
		require('./substancereferenceinformation.schema.js'),
		require('./substancesourcematerial.schema.js'),
		require('./substancespecification.schema.js'),
		require('./supplydelivery.schema.js'),
		require('./supplyrequest.schema.js'),
		require('./task.schema.js'),
		require('./terminologycapabilities.schema.js'),
		require('./testreport.schema.js'),
		require('./testscript.schema.js'),
		require('./valueset.schema.js'),
		require('./verificationresult.schema.js'),
		require('./visionprescription.schema.js'),
	],
	resolveType(data) {
		if (data && data.resourceType === 'Resource') {
			return require('./resource.schema.js');
		}
		if (data && data.resourceType === 'Account') {
			return require('./account.schema.js');
		}
		if (data && data.resourceType === 'ActivityDefinition') {
			return require('./activitydefinition.schema.js');
		}
		if (data && data.resourceType === 'AdverseEvent') {
			return require('./adverseevent.schema.js');
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
		if (data && data.resourceType === 'BiologicallyDerivedProduct') {
			return require('./biologicallyderivedproduct.schema.js');
		}
		if (data && data.resourceType === 'BodyStructure') {
			return require('./bodystructure.schema.js');
		}
		if (data && data.resourceType === 'Bundle') {
			return require('./bundle.schema.js');
		}
		if (data && data.resourceType === 'CapabilityStatement') {
			return require('./capabilitystatement.schema.js');
		}
		if (data && data.resourceType === 'CarePlan') {
			return require('./careplan.schema.js');
		}
		if (data && data.resourceType === 'CareTeam') {
			return require('./careteam.schema.js');
		}
		if (data && data.resourceType === 'CatalogEntry') {
			return require('./catalogentry.schema.js');
		}
		if (data && data.resourceType === 'ChargeItem') {
			return require('./chargeitem.schema.js');
		}
		if (data && data.resourceType === 'ChargeItemDefinition') {
			return require('./chargeitemdefinition.schema.js');
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
		if (data && data.resourceType === 'CodeSystem') {
			return require('./codesystem.schema.js');
		}
		if (data && data.resourceType === 'Communication') {
			return require('./communication.schema.js');
		}
		if (data && data.resourceType === 'CommunicationRequest') {
			return require('./communicationrequest.schema.js');
		}
		if (data && data.resourceType === 'CompartmentDefinition') {
			return require('./compartmentdefinition.schema.js');
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
		if (data && data.resourceType === 'Consent') {
			return require('./consent.schema.js');
		}
		if (data && data.resourceType === 'Contract') {
			return require('./contract.schema.js');
		}
		if (data && data.resourceType === 'Coverage') {
			return require('./coverage.schema.js');
		}
		if (data && data.resourceType === 'CoverageEligibilityRequest') {
			return require('./coverageeligibilityrequest.schema.js');
		}
		if (data && data.resourceType === 'CoverageEligibilityResponse') {
			return require('./coverageeligibilityresponse.schema.js');
		}
		if (data && data.resourceType === 'DetectedIssue') {
			return require('./detectedissue.schema.js');
		}
		if (data && data.resourceType === 'Device') {
			return require('./device.schema.js');
		}
		if (data && data.resourceType === 'DeviceDefinition') {
			return require('./devicedefinition.schema.js');
		}
		if (data && data.resourceType === 'DeviceMetric') {
			return require('./devicemetric.schema.js');
		}
		if (data && data.resourceType === 'DeviceRequest') {
			return require('./devicerequest.schema.js');
		}
		if (data && data.resourceType === 'DeviceUseStatement') {
			return require('./deviceusestatement.schema.js');
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
		if (data && data.resourceType === 'DomainResource') {
			return require('./domainresource.schema.js');
		}
		if (data && data.resourceType === 'EffectEvidenceSynthesis') {
			return require('./effectevidencesynthesis.schema.js');
		}
		if (data && data.resourceType === 'Encounter') {
			return require('./encounter.schema.js');
		}
		if (data && data.resourceType === 'Endpoint') {
			return require('./endpoint.schema.js');
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
		if (data && data.resourceType === 'EventDefinition') {
			return require('./eventdefinition.schema.js');
		}
		if (data && data.resourceType === 'Evidence') {
			return require('./evidence.schema.js');
		}
		if (data && data.resourceType === 'EvidenceVariable') {
			return require('./evidencevariable.schema.js');
		}
		if (data && data.resourceType === 'ExampleScenario') {
			return require('./examplescenario.schema.js');
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
		if (data && data.resourceType === 'GraphDefinition') {
			return require('./graphdefinition.schema.js');
		}
		if (data && data.resourceType === 'Group') {
			return require('./group.schema.js');
		}
		if (data && data.resourceType === 'GuidanceResponse') {
			return require('./guidanceresponse.schema.js');
		}
		if (data && data.resourceType === 'HealthcareService') {
			return require('./healthcareservice.schema.js');
		}
		if (data && data.resourceType === 'ImagingStudy') {
			return require('./imagingstudy.schema.js');
		}
		if (data && data.resourceType === 'Immunization') {
			return require('./immunization.schema.js');
		}
		if (data && data.resourceType === 'ImmunizationEvaluation') {
			return require('./immunizationevaluation.schema.js');
		}
		if (data && data.resourceType === 'ImmunizationRecommendation') {
			return require('./immunizationrecommendation.schema.js');
		}
		if (data && data.resourceType === 'ImplementationGuide') {
			return require('./implementationguide.schema.js');
		}
		if (data && data.resourceType === 'InsurancePlan') {
			return require('./insuranceplan.schema.js');
		}
		if (data && data.resourceType === 'Invoice') {
			return require('./invoice.schema.js');
		}
		if (data && data.resourceType === 'Library') {
			return require('./library.schema.js');
		}
		if (data && data.resourceType === 'Linkage') {
			return require('./linkage.schema.js');
		}
		if (data && data.resourceType === 'List') {
			return require('./list.schema.js');
		}
		if (data && data.resourceType === 'Location') {
			return require('./location.schema.js');
		}
		if (data && data.resourceType === 'Measure') {
			return require('./measure.schema.js');
		}
		if (data && data.resourceType === 'MeasureReport') {
			return require('./measurereport.schema.js');
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
		if (data && data.resourceType === 'MedicationKnowledge') {
			return require('./medicationknowledge.schema.js');
		}
		if (data && data.resourceType === 'MedicationRequest') {
			return require('./medicationrequest.schema.js');
		}
		if (data && data.resourceType === 'MedicationStatement') {
			return require('./medicationstatement.schema.js');
		}
		if (data && data.resourceType === 'MedicinalProduct') {
			return require('./medicinalproduct.schema.js');
		}
		if (data && data.resourceType === 'MedicinalProductAuthorization') {
			return require('./medicinalproductauthorization.schema.js');
		}
		if (data && data.resourceType === 'MedicinalProductContraindication') {
			return require('./medicinalproductcontraindication.schema.js');
		}
		if (data && data.resourceType === 'MedicinalProductIndication') {
			return require('./medicinalproductindication.schema.js');
		}
		if (data && data.resourceType === 'MedicinalProductIngredient') {
			return require('./medicinalproductingredient.schema.js');
		}
		if (data && data.resourceType === 'MedicinalProductInteraction') {
			return require('./medicinalproductinteraction.schema.js');
		}
		if (data && data.resourceType === 'MedicinalProductManufactured') {
			return require('./medicinalproductmanufactured.schema.js');
		}
		if (data && data.resourceType === 'MedicinalProductPackaged') {
			return require('./medicinalproductpackaged.schema.js');
		}
		if (data && data.resourceType === 'MedicinalProductPharmaceutical') {
			return require('./medicinalproductpharmaceutical.schema.js');
		}
		if (data && data.resourceType === 'MedicinalProductUndesirableEffect') {
			return require('./medicinalproductundesirableeffect.schema.js');
		}
		if (data && data.resourceType === 'MessageDefinition') {
			return require('./messagedefinition.schema.js');
		}
		if (data && data.resourceType === 'MessageHeader') {
			return require('./messageheader.schema.js');
		}
		if (data && data.resourceType === 'MolecularSequence') {
			return require('./molecularsequence.schema.js');
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
		if (data && data.resourceType === 'ObservationDefinition') {
			return require('./observationdefinition.schema.js');
		}
		if (data && data.resourceType === 'OperationDefinition') {
			return require('./operationdefinition.schema.js');
		}
		if (data && data.resourceType === 'OperationOutcome') {
			return require('./operationoutcome.schema.js');
		}
		if (data && data.resourceType === 'Organization') {
			return require('./organization.schema.js');
		}
		if (data && data.resourceType === 'OrganizationAffiliation') {
			return require('./organizationaffiliation.schema.js');
		}
		if (data && data.resourceType === 'Parameters') {
			return require('./parameters.schema.js');
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
		if (data && data.resourceType === 'PlanDefinition') {
			return require('./plandefinition.schema.js');
		}
		if (data && data.resourceType === 'Practitioner') {
			return require('./practitioner.schema.js');
		}
		if (data && data.resourceType === 'PractitionerRole') {
			return require('./practitionerrole.schema.js');
		}
		if (data && data.resourceType === 'Procedure') {
			return require('./procedure.schema.js');
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
		if (data && data.resourceType === 'RelatedPerson') {
			return require('./relatedperson.schema.js');
		}
		if (data && data.resourceType === 'RequestGroup') {
			return require('./requestgroup.schema.js');
		}
		if (data && data.resourceType === 'ResearchDefinition') {
			return require('./researchdefinition.schema.js');
		}
		if (data && data.resourceType === 'ResearchElementDefinition') {
			return require('./researchelementdefinition.schema.js');
		}
		if (data && data.resourceType === 'ResearchStudy') {
			return require('./researchstudy.schema.js');
		}
		if (data && data.resourceType === 'ResearchSubject') {
			return require('./researchsubject.schema.js');
		}
		if (data && data.resourceType === 'RiskAssessment') {
			return require('./riskassessment.schema.js');
		}
		if (data && data.resourceType === 'RiskEvidenceSynthesis') {
			return require('./riskevidencesynthesis.schema.js');
		}
		if (data && data.resourceType === 'Schedule') {
			return require('./schedule.schema.js');
		}
		if (data && data.resourceType === 'SearchParameter') {
			return require('./searchparameter.schema.js');
		}
		if (data && data.resourceType === 'ServiceRequest') {
			return require('./servicerequest.schema.js');
		}
		if (data && data.resourceType === 'Slot') {
			return require('./slot.schema.js');
		}
		if (data && data.resourceType === 'Specimen') {
			return require('./specimen.schema.js');
		}
		if (data && data.resourceType === 'SpecimenDefinition') {
			return require('./specimendefinition.schema.js');
		}
		if (data && data.resourceType === 'StructureDefinition') {
			return require('./structuredefinition.schema.js');
		}
		if (data && data.resourceType === 'StructureMap') {
			return require('./structuremap.schema.js');
		}
		if (data && data.resourceType === 'Subscription') {
			return require('./subscription.schema.js');
		}
		if (data && data.resourceType === 'Substance') {
			return require('./substance.schema.js');
		}
		if (data && data.resourceType === 'SubstanceNucleicAcid') {
			return require('./substancenucleicacid.schema.js');
		}
		if (data && data.resourceType === 'SubstancePolymer') {
			return require('./substancepolymer.schema.js');
		}
		if (data && data.resourceType === 'SubstanceProtein') {
			return require('./substanceprotein.schema.js');
		}
		if (data && data.resourceType === 'SubstanceReferenceInformation') {
			return require('./substancereferenceinformation.schema.js');
		}
		if (data && data.resourceType === 'SubstanceSourceMaterial') {
			return require('./substancesourcematerial.schema.js');
		}
		if (data && data.resourceType === 'SubstanceSpecification') {
			return require('./substancespecification.schema.js');
		}
		if (data && data.resourceType === 'SupplyDelivery') {
			return require('./supplydelivery.schema.js');
		}
		if (data && data.resourceType === 'SupplyRequest') {
			return require('./supplyrequest.schema.js');
		}
		if (data && data.resourceType === 'Task') {
			return require('./task.schema.js');
		}
		if (data && data.resourceType === 'TerminologyCapabilities') {
			return require('./terminologycapabilities.schema.js');
		}
		if (data && data.resourceType === 'TestReport') {
			return require('./testreport.schema.js');
		}
		if (data && data.resourceType === 'TestScript') {
			return require('./testscript.schema.js');
		}
		if (data && data.resourceType === 'ValueSet') {
			return require('./valueset.schema.js');
		}
		if (data && data.resourceType === 'VerificationResult') {
			return require('./verificationresult.schema.js');
		}
		if (data && data.resourceType === 'VisionPrescription') {
			return require('./visionprescription.schema.js');
		}
	},
});
