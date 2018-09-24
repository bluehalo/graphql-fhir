const Account = require('../schemas/account.schema');
const ActivityDefinition = require('../schemas/activitydefinition.schema');
const AdverseEvent = require('../schemas/adverseevent.schema');
const AllergyIntolerance = require('../schemas/allergyintolerance.schema');
const Appointment = require('../schemas/appointment.schema');
const AppointmentResponse = require('../schemas/appointmentresponse.schema');
const AuditEvent = require('../schemas/auditevent.schema');
const Basic = require('../schemas/basic.schema');
const Binary = require('../schemas/binary.schema');
const BodySite = require('../schemas/bodysite.schema');
const Bundle = require('../schemas/bundle.schema');
const CapabilityStatement = require('../schemas/capabilitystatement.schema');
const CarePlan = require('../schemas/careplan.schema');
const CareTeam = require('../schemas/careteam.schema');
const ChargeItem = require('../schemas/chargeitem.schema');
const Claim = require('../schemas/claim.schema');
const ClaimResponse = require('../schemas/claimresponse.schema');
const ClinicalImpression = require('../schemas/clinicalimpression.schema');
const CodeSystem = require('../schemas/codesystem.schema');
const Communication = require('../schemas/communication.schema');
const CommunicationRequest = require('../schemas/communicationrequest.schema');
const CompartmentDefinition = require('../schemas/compartmentdefinition.schema');
const Composition = require('../schemas/composition.schema');
const ConceptMap = require('../schemas/conceptmap.schema');
const Condition = require('../schemas/condition.schema');
const Consent = require('../schemas/consent.schema');
const Contract = require('../schemas/contract.schema');
const Coverage = require('../schemas/coverage.schema');
const DataElement = require('../schemas/dataelement.schema');
const DetectedIssue = require('../schemas/detectedissue.schema');
const Device = require('../schemas/device.schema');
const DeviceComponent = require('../schemas/devicecomponent.schema');
const DeviceMetric = require('../schemas/devicemetric.schema');
const DeviceRequest = require('../schemas/devicerequest.schema');
const DeviceUseStatement = require('../schemas/deviceusestatement.schema');
const DiagnosticReport = require('../schemas/diagnosticreport.schema');
const DocumentManifest = require('../schemas/documentmanifest.schema');
const DocumentReference = require('../schemas/documentreference.schema');
const EligibilityRequest = require('../schemas/eligibilityrequest.schema');
const EligibilityResponse = require('../schemas/eligibilityresponse.schema');
const Encounter = require('../schemas/encounter.schema');
const Endpoint = require('../schemas/endpoint.schema');
const EnrollmentRequest = require('../schemas/enrollmentrequest.schema');
const EnrollmentResponse = require('../schemas/enrollmentresponse.schema');
const EpisodeOfCare = require('../schemas/episodeofcare.schema');
const ExpansionProfile = require('../schemas/expansionprofile.schema');
const ExplanationOfBenefit = require('../schemas/explanationofbenefit.schema');
const FamilyMemberHistory = require('../schemas/familymemberhistory.schema');
const Flag = require('../schemas/flag.schema');
const Goal = require('../schemas/goal.schema');
const GraphDefinition = require('../schemas/graphdefinition.schema');
const Group = require('../schemas/group.schema');
const GuidanceResponse = require('../schemas/guidanceresponse.schema');
const HealthcareService = require('../schemas/healthcareservice.schema');
const ImagingManifest = require('../schemas/imagingmanifest.schema');
const ImagingStudy = require('../schemas/imagingstudy.schema');
const Immunization = require('../schemas/immunization.schema');
const ImmunizationRecommendation = require('../schemas/immunizationrecommendation.schema');
const ImplementationGuide = require('../schemas/implementationguide.schema');
const Library = require('../schemas/library.schema');
const Linkage = require('../schemas/linkage.schema');
const List = require('../schemas/list.schema');
const Location = require('../schemas/location.schema');
const Measure = require('../schemas/measure.schema');
const MeasureReport = require('../schemas/measurereport.schema');
const Media = require('../schemas/media.schema');
const Medication = require('../schemas/medication.schema');
const MedicationAdministration = require('../schemas/medicationadministration.schema');
const MedicationDispense = require('../schemas/medicationdispense.schema');
const MedicationRequest = require('../schemas/medicationrequest.schema');
const MedicationStatement = require('../schemas/medicationstatement.schema');
const MessageDefinition = require('../schemas/messagedefinition.schema');
const MessageHeader = require('../schemas/messageheader.schema');
const NamingSystem = require('../schemas/namingsystem.schema');
const NutritionOrder = require('../schemas/nutritionorder.schema');
const Observation = require('../schemas/observation.schema');
const OperationDefinition = require('../schemas/operationdefinition.schema');
const Organization = require('../schemas/organization.schema');
const Patient = require('../schemas/patient.schema');
const PaymentNotice = require('../schemas/paymentnotice.schema');
const PaymentReconciliation = require('../schemas/paymentreconciliation.schema');
const Person = require('../schemas/person.schema');
const PlanDefinition = require('../schemas/plandefinition.schema');
const Practitioner = require('../schemas/practitioner.schema');
const PractitionerRole = require('../schemas/practitionerrole.schema');
const Procedure = require('../schemas/procedure.schema');
const ProcedureRequest = require('../schemas/procedurerequest.schema');
const ProcessRequest = require('../schemas/processrequest.schema');
const ProcessResponse = require('../schemas/processresponse.schema');
const Provenance = require('../schemas/provenance.schema');
const Questionnaire = require('../schemas/questionnaire.schema');
const QuestionnaireResponse = require('../schemas/questionnaireresponse.schema');
const ReferralRequest = require('../schemas/referralrequest.schema');
const RelatedPerson = require('../schemas/relatedperson.schema');
const RequestGroup = require('../schemas/requestgroup.schema');
const ResearchStudy = require('../schemas/researchstudy.schema');
const ResearchSubject = require('../schemas/researchsubject.schema');
const RiskAssessment = require('../schemas/riskassessment.schema');
const Schedule = require('../schemas/schedule.schema');
const SearchParameter = require('../schemas/searchparameter.schema');
const Sequence = require('../schemas/sequence.schema');
const ServiceDefinition = require('../schemas/servicedefinition.schema');
const Slot = require('../schemas/slot.schema');
const Specimen = require('../schemas/specimen.schema');
const StructureDefinition = require('../schemas/structuredefinition.schema');
const StructureMap = require('../schemas/structuremap.schema');
const Subscription = require('../schemas/subscription.schema');
const Substance = require('../schemas/substance.schema');
const SupplyDelivery = require('../schemas/supplydelivery.schema');
const SupplyRequest = require('../schemas/supplyrequest.schema');
const Task = require('../schemas/task.schema');
const TestReport = require('../schemas/testreport.schema');
const TestScript = require('../schemas/testscript.schema');
const ValueSet = require('../schemas/valueset.schema');
const VisionPrescription = require('../schemas/visionprescription.schema');
const { GraphQLUnionType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ResourceList Union
 */
module.exports = new GraphQLUnionType({
	name: 'ResourceList',
	description: 'Union of all available resources.',
	types: [
		Account,
		ActivityDefinition,
		AdverseEvent,
		AllergyIntolerance,
		Appointment,
		AppointmentResponse,
		AuditEvent,
		Basic,
		Binary,
		BodySite,
		Bundle,
		CapabilityStatement,
		CarePlan,
		CareTeam,
		ChargeItem,
		Claim,
		ClaimResponse,
		ClinicalImpression,
		CodeSystem,
		Communication,
		CommunicationRequest,
		CompartmentDefinition,
		Composition,
		ConceptMap,
		Condition,
		Consent,
		Contract,
		Coverage,
		DataElement,
		DetectedIssue,
		Device,
		DeviceComponent,
		DeviceMetric,
		DeviceRequest,
		DeviceUseStatement,
		DiagnosticReport,
		DocumentManifest,
		DocumentReference,
		EligibilityRequest,
		EligibilityResponse,
		Encounter,
		Endpoint,
		EnrollmentRequest,
		EnrollmentResponse,
		EpisodeOfCare,
		ExpansionProfile,
		ExplanationOfBenefit,
		FamilyMemberHistory,
		Flag,
		Goal,
		GraphDefinition,
		Group,
		GuidanceResponse,
		HealthcareService,
		ImagingManifest,
		ImagingStudy,
		Immunization,
		ImmunizationRecommendation,
		ImplementationGuide,
		Library,
		Linkage,
		List,
		Location,
		Measure,
		MeasureReport,
		Media,
		Medication,
		MedicationAdministration,
		MedicationDispense,
		MedicationRequest,
		MedicationStatement,
		MessageDefinition,
		MessageHeader,
		NamingSystem,
		NutritionOrder,
		Observation,
		OperationDefinition,
		Organization,
		Patient,
		PaymentNotice,
		PaymentReconciliation,
		Person,
		PlanDefinition,
		Practitioner,
		PractitionerRole,
		Procedure,
		ProcedureRequest,
		ProcessRequest,
		ProcessResponse,
		Provenance,
		Questionnaire,
		QuestionnaireResponse,
		ReferralRequest,
		RelatedPerson,
		RequestGroup,
		ResearchStudy,
		ResearchSubject,
		RiskAssessment,
		Schedule,
		SearchParameter,
		Sequence,
		ServiceDefinition,
		Slot,
		Specimen,
		StructureDefinition,
		StructureMap,
		Subscription,
		Substance,
		SupplyDelivery,
		SupplyRequest,
		Task,
		TestReport,
		TestScript,
		ValueSet,
		VisionPrescription
	],
	resolveType ( value ) {
		if (value && value.resourceType === 'Account') {
			return Account;
		}
		if (value && value.resourceType === 'ActivityDefinition') {
			return ActivityDefinition;
		}
		if (value && value.resourceType === 'AdverseEvent') {
			return AdverseEvent;
		}
		if (value && value.resourceType === 'AllergyIntolerance') {
			return AllergyIntolerance;
		}
		if (value && value.resourceType === 'Appointment') {
			return Appointment;
		}
		if (value && value.resourceType === 'AppointmentResponse') {
			return AppointmentResponse;
		}
		if (value && value.resourceType === 'AuditEvent') {
			return AuditEvent;
		}
		if (value && value.resourceType === 'Basic') {
			return Basic;
		}
		if (value && value.resourceType === 'Binary') {
			return Binary;
		}
		if (value && value.resourceType === 'BodySite') {
			return BodySite;
		}
		if (value && value.resourceType === 'Bundle') {
			return Bundle;
		}
		if (value && value.resourceType === 'CapabilityStatement') {
			return CapabilityStatement;
		}
		if (value && value.resourceType === 'CarePlan') {
			return CarePlan;
		}
		if (value && value.resourceType === 'CareTeam') {
			return CareTeam;
		}
		if (value && value.resourceType === 'ChargeItem') {
			return ChargeItem;
		}
		if (value && value.resourceType === 'Claim') {
			return Claim;
		}
		if (value && value.resourceType === 'ClaimResponse') {
			return ClaimResponse;
		}
		if (value && value.resourceType === 'ClinicalImpression') {
			return ClinicalImpression;
		}
		if (value && value.resourceType === 'CodeSystem') {
			return CodeSystem;
		}
		if (value && value.resourceType === 'Communication') {
			return Communication;
		}
		if (value && value.resourceType === 'CommunicationRequest') {
			return CommunicationRequest;
		}
		if (value && value.resourceType === 'CompartmentDefinition') {
			return CompartmentDefinition;
		}
		if (value && value.resourceType === 'Composition') {
			return Composition;
		}
		if (value && value.resourceType === 'ConceptMap') {
			return ConceptMap;
		}
		if (value && value.resourceType === 'Condition') {
			return Condition;
		}
		if (value && value.resourceType === 'Consent') {
			return Consent;
		}
		if (value && value.resourceType === 'Contract') {
			return Contract;
		}
		if (value && value.resourceType === 'Coverage') {
			return Coverage;
		}
		if (value && value.resourceType === 'DataElement') {
			return DataElement;
		}
		if (value && value.resourceType === 'DetectedIssue') {
			return DetectedIssue;
		}
		if (value && value.resourceType === 'Device') {
			return Device;
		}
		if (value && value.resourceType === 'DeviceComponent') {
			return DeviceComponent;
		}
		if (value && value.resourceType === 'DeviceMetric') {
			return DeviceMetric;
		}
		if (value && value.resourceType === 'DeviceRequest') {
			return DeviceRequest;
		}
		if (value && value.resourceType === 'DeviceUseStatement') {
			return DeviceUseStatement;
		}
		if (value && value.resourceType === 'DiagnosticReport') {
			return DiagnosticReport;
		}
		if (value && value.resourceType === 'DocumentManifest') {
			return DocumentManifest;
		}
		if (value && value.resourceType === 'DocumentReference') {
			return DocumentReference;
		}
		if (value && value.resourceType === 'EligibilityRequest') {
			return EligibilityRequest;
		}
		if (value && value.resourceType === 'EligibilityResponse') {
			return EligibilityResponse;
		}
		if (value && value.resourceType === 'Encounter') {
			return Encounter;
		}
		if (value && value.resourceType === 'Endpoint') {
			return Endpoint;
		}
		if (value && value.resourceType === 'EnrollmentRequest') {
			return EnrollmentRequest;
		}
		if (value && value.resourceType === 'EnrollmentResponse') {
			return EnrollmentResponse;
		}
		if (value && value.resourceType === 'EpisodeOfCare') {
			return EpisodeOfCare;
		}
		if (value && value.resourceType === 'ExpansionProfile') {
			return ExpansionProfile;
		}
		if (value && value.resourceType === 'ExplanationOfBenefit') {
			return ExplanationOfBenefit;
		}
		if (value && value.resourceType === 'FamilyMemberHistory') {
			return FamilyMemberHistory;
		}
		if (value && value.resourceType === 'Flag') {
			return Flag;
		}
		if (value && value.resourceType === 'Goal') {
			return Goal;
		}
		if (value && value.resourceType === 'GraphDefinition') {
			return GraphDefinition;
		}
		if (value && value.resourceType === 'Group') {
			return Group;
		}
		if (value && value.resourceType === 'GuidanceResponse') {
			return GuidanceResponse;
		}
		if (value && value.resourceType === 'HealthcareService') {
			return HealthcareService;
		}
		if (value && value.resourceType === 'ImagingManifest') {
			return ImagingManifest;
		}
		if (value && value.resourceType === 'ImagingStudy') {
			return ImagingStudy;
		}
		if (value && value.resourceType === 'Immunization') {
			return Immunization;
		}
		if (value && value.resourceType === 'ImmunizationRecommendation') {
			return ImmunizationRecommendation;
		}
		if (value && value.resourceType === 'ImplementationGuide') {
			return ImplementationGuide;
		}
		if (value && value.resourceType === 'Library') {
			return Library;
		}
		if (value && value.resourceType === 'Linkage') {
			return Linkage;
		}
		if (value && value.resourceType === 'List') {
			return List;
		}
		if (value && value.resourceType === 'Location') {
			return Location;
		}
		if (value && value.resourceType === 'Measure') {
			return Measure;
		}
		if (value && value.resourceType === 'MeasureReport') {
			return MeasureReport;
		}
		if (value && value.resourceType === 'Media') {
			return Media;
		}
		if (value && value.resourceType === 'Medication') {
			return Medication;
		}
		if (value && value.resourceType === 'MedicationAdministration') {
			return MedicationAdministration;
		}
		if (value && value.resourceType === 'MedicationDispense') {
			return MedicationDispense;
		}
		if (value && value.resourceType === 'MedicationRequest') {
			return MedicationRequest;
		}
		if (value && value.resourceType === 'MedicationStatement') {
			return MedicationStatement;
		}
		if (value && value.resourceType === 'MessageDefinition') {
			return MessageDefinition;
		}
		if (value && value.resourceType === 'MessageHeader') {
			return MessageHeader;
		}
		if (value && value.resourceType === 'NamingSystem') {
			return NamingSystem;
		}
		if (value && value.resourceType === 'NutritionOrder') {
			return NutritionOrder;
		}
		if (value && value.resourceType === 'Observation') {
			return Observation;
		}
		if (value && value.resourceType === 'OperationDefinition') {
			return OperationDefinition;
		}
		if (value && value.resourceType === 'Organization') {
			return Organization;
		}
		if (value && value.resourceType === 'Patient') {
			return Patient;
		}
		if (value && value.resourceType === 'PaymentNotice') {
			return PaymentNotice;
		}
		if (value && value.resourceType === 'PaymentReconciliation') {
			return PaymentReconciliation;
		}
		if (value && value.resourceType === 'Person') {
			return Person;
		}
		if (value && value.resourceType === 'PlanDefinition') {
			return PlanDefinition;
		}
		if (value && value.resourceType === 'Practitioner') {
			return Practitioner;
		}
		if (value && value.resourceType === 'PractitionerRole') {
			return PractitionerRole;
		}
		if (value && value.resourceType === 'Procedure') {
			return Procedure;
		}
		if (value && value.resourceType === 'ProcedureRequest') {
			return ProcedureRequest;
		}
		if (value && value.resourceType === 'ProcessRequest') {
			return ProcessRequest;
		}
		if (value && value.resourceType === 'ProcessResponse') {
			return ProcessResponse;
		}
		if (value && value.resourceType === 'Provenance') {
			return Provenance;
		}
		if (value && value.resourceType === 'Questionnaire') {
			return Questionnaire;
		}
		if (value && value.resourceType === 'QuestionnaireResponse') {
			return QuestionnaireResponse;
		}
		if (value && value.resourceType === 'ReferralRequest') {
			return ReferralRequest;
		}
		if (value && value.resourceType === 'RelatedPerson') {
			return RelatedPerson;
		}
		if (value && value.resourceType === 'RequestGroup') {
			return RequestGroup;
		}
		if (value && value.resourceType === 'ResearchStudy') {
			return ResearchStudy;
		}
		if (value && value.resourceType === 'ResearchSubject') {
			return ResearchSubject;
		}
		if (value && value.resourceType === 'RiskAssessment') {
			return RiskAssessment;
		}
		if (value && value.resourceType === 'Schedule') {
			return Schedule;
		}
		if (value && value.resourceType === 'SearchParameter') {
			return SearchParameter;
		}
		if (value && value.resourceType === 'Sequence') {
			return Sequence;
		}
		if (value && value.resourceType === 'ServiceDefinition') {
			return ServiceDefinition;
		}
		if (value && value.resourceType === 'Slot') {
			return Slot;
		}
		if (value && value.resourceType === 'Specimen') {
			return Specimen;
		}
		if (value && value.resourceType === 'StructureDefinition') {
			return StructureDefinition;
		}
		if (value && value.resourceType === 'StructureMap') {
			return StructureMap;
		}
		if (value && value.resourceType === 'Subscription') {
			return Subscription;
		}
		if (value && value.resourceType === 'Substance') {
			return Substance;
		}
		if (value && value.resourceType === 'SupplyDelivery') {
			return SupplyDelivery;
		}
		if (value && value.resourceType === 'SupplyRequest') {
			return SupplyRequest;
		}
		if (value && value.resourceType === 'Task') {
			return Task;
		}
		if (value && value.resourceType === 'TestReport') {
			return TestReport;
		}
		if (value && value.resourceType === 'TestScript') {
			return TestScript;
		}
		if (value && value.resourceType === 'ValueSet') {
			return ValueSet;
		}
		if (value && value.resourceType === 'VisionPrescription') {
			return VisionPrescription;
		}
	}
});
