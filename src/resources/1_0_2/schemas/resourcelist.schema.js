const AccountType = require('../schemas/account.schema');
const AllergyIntoleranceType = require('../schemas/allergyintolerance.schema');
const AppointmentType = require('../schemas/appointment.schema');
const AppointmentResponseType = require('../schemas/appointmentresponse.schema');
const AuditEventType = require('../schemas/auditevent.schema');
const BasicType = require('../schemas/basic.schema');
const BinaryType = require('../schemas/binary.schema');
const BodySiteType = require('../schemas/bodysite.schema');
const BundleType = require('../schemas/bundle.schema');
const CarePlanType = require('../schemas/careplan.schema');
const ClaimType = require('../schemas/claim.schema');
const ClaimResponseType = require('../schemas/claimresponse.schema');
const ClinicalImpressionType = require('../schemas/clinicalimpression.schema');
const CommunicationType = require('../schemas/communication.schema');
const CommunicationRequestType = require('../schemas/communicationrequest.schema');
const CompositionType = require('../schemas/composition.schema');
const ConceptMapType = require('../schemas/conceptmap.schema');
const ConditionType = require('../schemas/condition.schema');
const ConformanceType = require('../schemas/conformance.schema');
const ContractType = require('../schemas/contract.schema');
const CoverageType = require('../schemas/coverage.schema');
const DataElementType = require('../schemas/dataelement.schema');
const DetectedIssueType = require('../schemas/detectedissue.schema');
const DeviceType = require('../schemas/device.schema');
const DeviceComponentType = require('../schemas/devicecomponent.schema');
const DeviceMetricType = require('../schemas/devicemetric.schema');
const DeviceUseRequestType = require('../schemas/deviceuserequest.schema');
const DeviceUseStatementType = require('../schemas/deviceusestatement.schema');
const DiagnosticOrderType = require('../schemas/diagnosticorder.schema');
const DiagnosticReportType = require('../schemas/diagnosticreport.schema');
const DocumentManifestType = require('../schemas/documentmanifest.schema');
const DocumentReferenceType = require('../schemas/documentreference.schema');
const EligibilityRequestType = require('../schemas/eligibilityrequest.schema');
const EligibilityResponseType = require('../schemas/eligibilityresponse.schema');
const EncounterType = require('../schemas/encounter.schema');
const EnrollmentRequestType = require('../schemas/enrollmentrequest.schema');
const EnrollmentResponseType = require('../schemas/enrollmentresponse.schema');
const EpisodeOfCareType = require('../schemas/episodeofcare.schema');
const ExplanationOfBenefitType = require('../schemas/explanationofbenefit.schema');
const FamilyMemberHistoryType = require('../schemas/familymemberhistory.schema');
const FlagType = require('../schemas/flag.schema');
const GoalType = require('../schemas/goal.schema');
const GroupType = require('../schemas/group.schema');
const HealthcareServiceType = require('../schemas/healthcareservice.schema');
const ImagingObjectSelectionType = require('../schemas/imagingobjectselection.schema');
const ImagingStudyType = require('../schemas/imagingstudy.schema');
const ImmunizationType = require('../schemas/immunization.schema');
const ImmunizationRecommendationType = require('../schemas/immunizationrecommendation.schema');
const ImplementationGuideType = require('../schemas/implementationguide.schema');
const ListType = require('../schemas/list.schema');
const LocationType = require('../schemas/location.schema');
const MediaType = require('../schemas/media.schema');
const MedicationType = require('../schemas/medication.schema');
const MedicationAdministrationType = require('../schemas/medicationadministration.schema');
const MedicationDispenseType = require('../schemas/medicationdispense.schema');
const MedicationOrderType = require('../schemas/medicationorder.schema');
const MedicationStatementType = require('../schemas/medicationstatement.schema');
const MessageHeaderType = require('../schemas/messageheader.schema');
const NamingSystemType = require('../schemas/namingsystem.schema');
const NutritionOrderType = require('../schemas/nutritionorder.schema');
const ObservationType = require('../schemas/observation.schema');
const OperationDefinitionType = require('../schemas/operationdefinition.schema');
const OrderType = require('../schemas/order.schema');
const OrderResponseType = require('../schemas/orderresponse.schema');
const OrganizationType = require('../schemas/organization.schema');
const PatientType = require('../schemas/patient.schema');
const PaymentNoticeType = require('../schemas/paymentnotice.schema');
const PaymentReconciliationType = require('../schemas/paymentreconciliation.schema');
const PersonType = require('../schemas/person.schema');
const PractitionerType = require('../schemas/practitioner.schema');
const ProcedureType = require('../schemas/procedure.schema');
const ProcedureRequestType = require('../schemas/procedurerequest.schema');
const ProcessRequestType = require('../schemas/processrequest.schema');
const ProcessResponseType = require('../schemas/processresponse.schema');
const ProvenanceType = require('../schemas/provenance.schema');
const QuestionnaireType = require('../schemas/questionnaire.schema');
const QuestionnaireResponseType = require('../schemas/questionnaireresponse.schema');
const ReferralRequestType = require('../schemas/referralrequest.schema');
const RelatedPersonType = require('../schemas/relatedperson.schema');
const RiskAssessmentType = require('../schemas/riskassessment.schema');
const ScheduleType = require('../schemas/schedule.schema');
const SearchParameterType = require('../schemas/searchparameter.schema');
const SlotType = require('../schemas/slot.schema');
const SpecimenType = require('../schemas/specimen.schema');
const StructureDefinitionType = require('../schemas/structuredefinition.schema');
const SubscriptionType = require('../schemas/subscription.schema');
const SubstanceType = require('../schemas/substance.schema');
const SupplyDeliveryType = require('../schemas/supplydelivery.schema');
const SupplyRequestType = require('../schemas/supplyrequest.schema');
const TestScriptType = require('../schemas/testscript.schema');
const ValueSetType = require('../schemas/valueset.schema');
const VisionPrescriptionType = require('../schemas/visionprescription.schema');
const { GraphQLUnionType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ResourceList Union
 */
module.exports = new GraphQLUnionType({
	name: 'ResourceList',
	description: 'Union of all available resources',
	types: [
		AccountType,
		AllergyIntoleranceType,
		AppointmentType,
		AppointmentResponseType,
		AuditEventType,
		BasicType,
		BinaryType,
		BodySiteType,
		BundleType,
		CarePlanType,
		ClaimType,
		ClaimResponseType,
		ClinicalImpressionType,
		CommunicationType,
		CommunicationRequestType,
		CompositionType,
		ConceptMapType,
		ConditionType,
		ConformanceType,
		ContractType,
		CoverageType,
		DataElementType,
		DetectedIssueType,
		DeviceType,
		DeviceComponentType,
		DeviceMetricType,
		DeviceUseRequestType,
		DeviceUseStatementType,
		DiagnosticOrderType,
		DiagnosticReportType,
		DocumentManifestType,
		DocumentReferenceType,
		EligibilityRequestType,
		EligibilityResponseType,
		EncounterType,
		EnrollmentRequestType,
		EnrollmentResponseType,
		EpisodeOfCareType,
		ExplanationOfBenefitType,
		FamilyMemberHistoryType,
		FlagType,
		GoalType,
		GroupType,
		HealthcareServiceType,
		ImagingObjectSelectionType,
		ImagingStudyType,
		ImmunizationType,
		ImmunizationRecommendationType,
		ImplementationGuideType,
		ListType,
		LocationType,
		MediaType,
		MedicationType,
		MedicationAdministrationType,
		MedicationDispenseType,
		MedicationOrderType,
		MedicationStatementType,
		MessageHeaderType,
		NamingSystemType,
		NutritionOrderType,
		ObservationType,
		OperationDefinitionType,
		OrderType,
		OrderResponseType,
		OrganizationType,
		PatientType,
		PaymentNoticeType,
		PaymentReconciliationType,
		PersonType,
		PractitionerType,
		ProcedureType,
		ProcedureRequestType,
		ProcessRequestType,
		ProcessResponseType,
		ProvenanceType,
		QuestionnaireType,
		QuestionnaireResponseType,
		ReferralRequestType,
		RelatedPersonType,
		RiskAssessmentType,
		ScheduleType,
		SearchParameterType,
		SlotType,
		SpecimenType,
		StructureDefinitionType,
		SubscriptionType,
		SubstanceType,
		SupplyDeliveryType,
		SupplyRequestType,
		TestScriptType,
		ValueSetType,
		VisionPrescriptionType
	],
	resovleType ( value ) {
		if (value && value.resourceType === 'AccountType') {
			return AccountType;
		}
		if (value && value.resourceType === 'AllergyIntoleranceType') {
			return AllergyIntoleranceType;
		}
		if (value && value.resourceType === 'AppointmentType') {
			return AppointmentType;
		}
		if (value && value.resourceType === 'AppointmentResponseType') {
			return AppointmentResponseType;
		}
		if (value && value.resourceType === 'AuditEventType') {
			return AuditEventType;
		}
		if (value && value.resourceType === 'BasicType') {
			return BasicType;
		}
		if (value && value.resourceType === 'BinaryType') {
			return BinaryType;
		}
		if (value && value.resourceType === 'BodySiteType') {
			return BodySiteType;
		}
		if (value && value.resourceType === 'BundleType') {
			return BundleType;
		}
		if (value && value.resourceType === 'CarePlanType') {
			return CarePlanType;
		}
		if (value && value.resourceType === 'ClaimType') {
			return ClaimType;
		}
		if (value && value.resourceType === 'ClaimResponseType') {
			return ClaimResponseType;
		}
		if (value && value.resourceType === 'ClinicalImpressionType') {
			return ClinicalImpressionType;
		}
		if (value && value.resourceType === 'CommunicationType') {
			return CommunicationType;
		}
		if (value && value.resourceType === 'CommunicationRequestType') {
			return CommunicationRequestType;
		}
		if (value && value.resourceType === 'CompositionType') {
			return CompositionType;
		}
		if (value && value.resourceType === 'ConceptMapType') {
			return ConceptMapType;
		}
		if (value && value.resourceType === 'ConditionType') {
			return ConditionType;
		}
		if (value && value.resourceType === 'ConformanceType') {
			return ConformanceType;
		}
		if (value && value.resourceType === 'ContractType') {
			return ContractType;
		}
		if (value && value.resourceType === 'CoverageType') {
			return CoverageType;
		}
		if (value && value.resourceType === 'DataElementType') {
			return DataElementType;
		}
		if (value && value.resourceType === 'DetectedIssueType') {
			return DetectedIssueType;
		}
		if (value && value.resourceType === 'DeviceType') {
			return DeviceType;
		}
		if (value && value.resourceType === 'DeviceComponentType') {
			return DeviceComponentType;
		}
		if (value && value.resourceType === 'DeviceMetricType') {
			return DeviceMetricType;
		}
		if (value && value.resourceType === 'DeviceUseRequestType') {
			return DeviceUseRequestType;
		}
		if (value && value.resourceType === 'DeviceUseStatementType') {
			return DeviceUseStatementType;
		}
		if (value && value.resourceType === 'DiagnosticOrderType') {
			return DiagnosticOrderType;
		}
		if (value && value.resourceType === 'DiagnosticReportType') {
			return DiagnosticReportType;
		}
		if (value && value.resourceType === 'DocumentManifestType') {
			return DocumentManifestType;
		}
		if (value && value.resourceType === 'DocumentReferenceType') {
			return DocumentReferenceType;
		}
		if (value && value.resourceType === 'EligibilityRequestType') {
			return EligibilityRequestType;
		}
		if (value && value.resourceType === 'EligibilityResponseType') {
			return EligibilityResponseType;
		}
		if (value && value.resourceType === 'EncounterType') {
			return EncounterType;
		}
		if (value && value.resourceType === 'EnrollmentRequestType') {
			return EnrollmentRequestType;
		}
		if (value && value.resourceType === 'EnrollmentResponseType') {
			return EnrollmentResponseType;
		}
		if (value && value.resourceType === 'EpisodeOfCareType') {
			return EpisodeOfCareType;
		}
		if (value && value.resourceType === 'ExplanationOfBenefitType') {
			return ExplanationOfBenefitType;
		}
		if (value && value.resourceType === 'FamilyMemberHistoryType') {
			return FamilyMemberHistoryType;
		}
		if (value && value.resourceType === 'FlagType') {
			return FlagType;
		}
		if (value && value.resourceType === 'GoalType') {
			return GoalType;
		}
		if (value && value.resourceType === 'GroupType') {
			return GroupType;
		}
		if (value && value.resourceType === 'HealthcareServiceType') {
			return HealthcareServiceType;
		}
		if (value && value.resourceType === 'ImagingObjectSelectionType') {
			return ImagingObjectSelectionType;
		}
		if (value && value.resourceType === 'ImagingStudyType') {
			return ImagingStudyType;
		}
		if (value && value.resourceType === 'ImmunizationType') {
			return ImmunizationType;
		}
		if (value && value.resourceType === 'ImmunizationRecommendationType') {
			return ImmunizationRecommendationType;
		}
		if (value && value.resourceType === 'ImplementationGuideType') {
			return ImplementationGuideType;
		}
		if (value && value.resourceType === 'ListType') {
			return ListType;
		}
		if (value && value.resourceType === 'LocationType') {
			return LocationType;
		}
		if (value && value.resourceType === 'MediaType') {
			return MediaType;
		}
		if (value && value.resourceType === 'MedicationType') {
			return MedicationType;
		}
		if (value && value.resourceType === 'MedicationAdministrationType') {
			return MedicationAdministrationType;
		}
		if (value && value.resourceType === 'MedicationDispenseType') {
			return MedicationDispenseType;
		}
		if (value && value.resourceType === 'MedicationOrderType') {
			return MedicationOrderType;
		}
		if (value && value.resourceType === 'MedicationStatementType') {
			return MedicationStatementType;
		}
		if (value && value.resourceType === 'MessageHeaderType') {
			return MessageHeaderType;
		}
		if (value && value.resourceType === 'NamingSystemType') {
			return NamingSystemType;
		}
		if (value && value.resourceType === 'NutritionOrderType') {
			return NutritionOrderType;
		}
		if (value && value.resourceType === 'ObservationType') {
			return ObservationType;
		}
		if (value && value.resourceType === 'OperationDefinitionType') {
			return OperationDefinitionType;
		}
		if (value && value.resourceType === 'OrderType') {
			return OrderType;
		}
		if (value && value.resourceType === 'OrderResponseType') {
			return OrderResponseType;
		}
		if (value && value.resourceType === 'OrganizationType') {
			return OrganizationType;
		}
		if (value && value.resourceType === 'PatientType') {
			return PatientType;
		}
		if (value && value.resourceType === 'PaymentNoticeType') {
			return PaymentNoticeType;
		}
		if (value && value.resourceType === 'PaymentReconciliationType') {
			return PaymentReconciliationType;
		}
		if (value && value.resourceType === 'PersonType') {
			return PersonType;
		}
		if (value && value.resourceType === 'PractitionerType') {
			return PractitionerType;
		}
		if (value && value.resourceType === 'ProcedureType') {
			return ProcedureType;
		}
		if (value && value.resourceType === 'ProcedureRequestType') {
			return ProcedureRequestType;
		}
		if (value && value.resourceType === 'ProcessRequestType') {
			return ProcessRequestType;
		}
		if (value && value.resourceType === 'ProcessResponseType') {
			return ProcessResponseType;
		}
		if (value && value.resourceType === 'ProvenanceType') {
			return ProvenanceType;
		}
		if (value && value.resourceType === 'QuestionnaireType') {
			return QuestionnaireType;
		}
		if (value && value.resourceType === 'QuestionnaireResponseType') {
			return QuestionnaireResponseType;
		}
		if (value && value.resourceType === 'ReferralRequestType') {
			return ReferralRequestType;
		}
		if (value && value.resourceType === 'RelatedPersonType') {
			return RelatedPersonType;
		}
		if (value && value.resourceType === 'RiskAssessmentType') {
			return RiskAssessmentType;
		}
		if (value && value.resourceType === 'ScheduleType') {
			return ScheduleType;
		}
		if (value && value.resourceType === 'SearchParameterType') {
			return SearchParameterType;
		}
		if (value && value.resourceType === 'SlotType') {
			return SlotType;
		}
		if (value && value.resourceType === 'SpecimenType') {
			return SpecimenType;
		}
		if (value && value.resourceType === 'StructureDefinitionType') {
			return StructureDefinitionType;
		}
		if (value && value.resourceType === 'SubscriptionType') {
			return SubscriptionType;
		}
		if (value && value.resourceType === 'SubstanceType') {
			return SubstanceType;
		}
		if (value && value.resourceType === 'SupplyDeliveryType') {
			return SupplyDeliveryType;
		}
		if (value && value.resourceType === 'SupplyRequestType') {
			return SupplyRequestType;
		}
		if (value && value.resourceType === 'TestScriptType') {
			return TestScriptType;
		}
		if (value && value.resourceType === 'ValueSetType') {
			return ValueSetType;
		}
		if (value && value.resourceType === 'VisionPrescriptionType') {
			return VisionPrescriptionType;
		}
	}
});
