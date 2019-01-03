const Account = require('../schemas/account.schema');
const AllergyIntolerance = require('../schemas/allergyintolerance.schema');
const Appointment = require('../schemas/appointment.schema');
const AppointmentResponse = require('../schemas/appointmentresponse.schema');
const AuditEvent = require('../schemas/auditevent.schema');
const Basic = require('../schemas/basic.schema');
const Binary = require('../schemas/binary.schema');
const BodySite = require('../schemas/bodysite.schema');
const Bundle = require('../schemas/bundle.schema');
const CarePlan = require('../schemas/careplan.schema');
const Claim = require('../schemas/claim.schema');
const ClaimResponse = require('../schemas/claimresponse.schema');
const ClinicalImpression = require('../schemas/clinicalimpression.schema');
const Communication = require('../schemas/communication.schema');
const CommunicationRequest = require('../schemas/communicationrequest.schema');
const Composition = require('../schemas/composition.schema');
const ConceptMap = require('../schemas/conceptmap.schema');
const Condition = require('../schemas/condition.schema');
const Conformance = require('../schemas/conformance.schema');
const Contract = require('../schemas/contract.schema');
const Coverage = require('../schemas/coverage.schema');
const DataElement = require('../schemas/dataelement.schema');
const DetectedIssue = require('../schemas/detectedissue.schema');
const Device = require('../schemas/device.schema');
const DeviceComponent = require('../schemas/devicecomponent.schema');
const DeviceMetric = require('../schemas/devicemetric.schema');
const DeviceUseRequest = require('../schemas/deviceuserequest.schema');
const DeviceUseStatement = require('../schemas/deviceusestatement.schema');
const DiagnosticOrder = require('../schemas/diagnosticorder.schema');
const DiagnosticReport = require('../schemas/diagnosticreport.schema');
const DocumentManifest = require('../schemas/documentmanifest.schema');
const DocumentReference = require('../schemas/documentreference.schema');
const EligibilityRequest = require('../schemas/eligibilityrequest.schema');
const EligibilityResponse = require('../schemas/eligibilityresponse.schema');
const Encounter = require('../schemas/encounter.schema');
const EnrollmentRequest = require('../schemas/enrollmentrequest.schema');
const EnrollmentResponse = require('../schemas/enrollmentresponse.schema');
const EpisodeOfCare = require('../schemas/episodeofcare.schema');
const ExplanationOfBenefit = require('../schemas/explanationofbenefit.schema');
const FamilyMemberHistory = require('../schemas/familymemberhistory.schema');
const Flag = require('../schemas/flag.schema');
const Goal = require('../schemas/goal.schema');
const Group = require('../schemas/group.schema');
const HealthcareService = require('../schemas/healthcareservice.schema');
const ImagingObjectSelection = require('../schemas/imagingobjectselection.schema');
const ImagingStudy = require('../schemas/imagingstudy.schema');
const Immunization = require('../schemas/immunization.schema');
const ImmunizationRecommendation = require('../schemas/immunizationrecommendation.schema');
const ImplementationGuide = require('../schemas/implementationguide.schema');
const List = require('../schemas/list.schema');
const Location = require('../schemas/location.schema');
const Media = require('../schemas/media.schema');
const Medication = require('../schemas/medication.schema');
const MedicationAdministration = require('../schemas/medicationadministration.schema');
const MedicationDispense = require('../schemas/medicationdispense.schema');
const MedicationOrder = require('../schemas/medicationorder.schema');
const MedicationStatement = require('../schemas/medicationstatement.schema');
const MessageHeader = require('../schemas/messageheader.schema');
const NamingSystem = require('../schemas/namingsystem.schema');
const NutritionOrder = require('../schemas/nutritionorder.schema');
const Observation = require('../schemas/observation.schema');
const OperationDefinition = require('../schemas/operationdefinition.schema');
const Order = require('../schemas/order.schema');
const OrderResponse = require('../schemas/orderresponse.schema');
const Organization = require('../schemas/organization.schema');
const Patient = require('../schemas/patient.schema');
const PaymentNotice = require('../schemas/paymentnotice.schema');
const PaymentReconciliation = require('../schemas/paymentreconciliation.schema');
const Person = require('../schemas/person.schema');
const Practitioner = require('../schemas/practitioner.schema');
const Procedure = require('../schemas/procedure.schema');
const ProcedureRequest = require('../schemas/procedurerequest.schema');
const ProcessRequest = require('../schemas/processrequest.schema');
const ProcessResponse = require('../schemas/processresponse.schema');
const Provenance = require('../schemas/provenance.schema');
const Questionnaire = require('../schemas/questionnaire.schema');
const QuestionnaireResponse = require('../schemas/questionnaireresponse.schema');
const ReferralRequest = require('../schemas/referralrequest.schema');
const RelatedPerson = require('../schemas/relatedperson.schema');
const RiskAssessment = require('../schemas/riskassessment.schema');
const Schedule = require('../schemas/schedule.schema');
const SearchParameter = require('../schemas/searchparameter.schema');
const Slot = require('../schemas/slot.schema');
const Specimen = require('../schemas/specimen.schema');
const StructureDefinition = require('../schemas/structuredefinition.schema');
const Subscription = require('../schemas/subscription.schema');
const Substance = require('../schemas/substance.schema');
const SupplyDelivery = require('../schemas/supplydelivery.schema');
const SupplyRequest = require('../schemas/supplyrequest.schema');
const TestScript = require('../schemas/testscript.schema');
const ValueSet = require('../schemas/valueset.schema');
const VisionPrescription = require('../schemas/visionprescription.schema');
const { GraphQLUnionType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ResourceList Union
 */
module.exports = new GraphQLUnionType({
	name: 'ResourceList',
	description: 'Union of all available resources.',
	types: [
		Account,
		AllergyIntolerance,
		Appointment,
		AppointmentResponse,
		AuditEvent,
		Basic,
		Binary,
		BodySite,
		Bundle,
		CarePlan,
		Claim,
		ClaimResponse,
		ClinicalImpression,
		Communication,
		CommunicationRequest,
		Composition,
		ConceptMap,
		Condition,
		Conformance,
		Contract,
		Coverage,
		DataElement,
		DetectedIssue,
		Device,
		DeviceComponent,
		DeviceMetric,
		DeviceUseRequest,
		DeviceUseStatement,
		DiagnosticOrder,
		DiagnosticReport,
		DocumentManifest,
		DocumentReference,
		EligibilityRequest,
		EligibilityResponse,
		Encounter,
		EnrollmentRequest,
		EnrollmentResponse,
		EpisodeOfCare,
		ExplanationOfBenefit,
		FamilyMemberHistory,
		Flag,
		Goal,
		Group,
		HealthcareService,
		ImagingObjectSelection,
		ImagingStudy,
		Immunization,
		ImmunizationRecommendation,
		ImplementationGuide,
		List,
		Location,
		Media,
		Medication,
		MedicationAdministration,
		MedicationDispense,
		MedicationOrder,
		MedicationStatement,
		MessageHeader,
		NamingSystem,
		NutritionOrder,
		Observation,
		OperationDefinition,
		Order,
		OrderResponse,
		Organization,
		Patient,
		PaymentNotice,
		PaymentReconciliation,
		Person,
		Practitioner,
		Procedure,
		ProcedureRequest,
		ProcessRequest,
		ProcessResponse,
		Provenance,
		Questionnaire,
		QuestionnaireResponse,
		ReferralRequest,
		RelatedPerson,
		RiskAssessment,
		Schedule,
		SearchParameter,
		Slot,
		Specimen,
		StructureDefinition,
		Subscription,
		Substance,
		SupplyDelivery,
		SupplyRequest,
		TestScript,
		ValueSet,
		VisionPrescription,
	],
	resolveType(value) {
		if (value && value.resourceType === 'Account') {
			return Account;
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
		if (value && value.resourceType === 'CarePlan') {
			return CarePlan;
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
		if (value && value.resourceType === 'Communication') {
			return Communication;
		}
		if (value && value.resourceType === 'CommunicationRequest') {
			return CommunicationRequest;
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
		if (value && value.resourceType === 'Conformance') {
			return Conformance;
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
		if (value && value.resourceType === 'DeviceUseRequest') {
			return DeviceUseRequest;
		}
		if (value && value.resourceType === 'DeviceUseStatement') {
			return DeviceUseStatement;
		}
		if (value && value.resourceType === 'DiagnosticOrder') {
			return DiagnosticOrder;
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
		if (value && value.resourceType === 'EnrollmentRequest') {
			return EnrollmentRequest;
		}
		if (value && value.resourceType === 'EnrollmentResponse') {
			return EnrollmentResponse;
		}
		if (value && value.resourceType === 'EpisodeOfCare') {
			return EpisodeOfCare;
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
		if (value && value.resourceType === 'Group') {
			return Group;
		}
		if (value && value.resourceType === 'HealthcareService') {
			return HealthcareService;
		}
		if (value && value.resourceType === 'ImagingObjectSelection') {
			return ImagingObjectSelection;
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
		if (value && value.resourceType === 'List') {
			return List;
		}
		if (value && value.resourceType === 'Location') {
			return Location;
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
		if (value && value.resourceType === 'MedicationOrder') {
			return MedicationOrder;
		}
		if (value && value.resourceType === 'MedicationStatement') {
			return MedicationStatement;
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
		if (value && value.resourceType === 'Order') {
			return Order;
		}
		if (value && value.resourceType === 'OrderResponse') {
			return OrderResponse;
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
		if (value && value.resourceType === 'Practitioner') {
			return Practitioner;
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
		if (value && value.resourceType === 'RiskAssessment') {
			return RiskAssessment;
		}
		if (value && value.resourceType === 'Schedule') {
			return Schedule;
		}
		if (value && value.resourceType === 'SearchParameter') {
			return SearchParameter;
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
		if (value && value.resourceType === 'TestScript') {
			return TestScript;
		}
		if (value && value.resourceType === 'ValueSet') {
			return ValueSet;
		}
		if (value && value.resourceType === 'VisionPrescription') {
			return VisionPrescription;
		}
	},
});
