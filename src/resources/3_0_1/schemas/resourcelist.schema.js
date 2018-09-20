const AccountType = require('../schemas/account.schema');
const ActivityDefinitionType = require('../schemas/activitydefinition.schema');
const AdverseEventType = require('../schemas/adverseevent.schema');
const AllergyIntoleranceType = require('../schemas/allergyintolerance.schema');
const AppointmentType = require('../schemas/appointment.schema');
const AppointmentResponseType = require('../schemas/appointmentresponse.schema');
const AuditEventType = require('../schemas/auditevent.schema');
const BasicType = require('../schemas/basic.schema');
const BinaryType = require('../schemas/binary.schema');
const BodySiteType = require('../schemas/bodysite.schema');
const BundleType = require('../schemas/bundle.schema');
const CapabilityStatementType = require('../schemas/capabilitystatement.schema');
const CarePlanType = require('../schemas/careplan.schema');
const CareTeamType = require('../schemas/careteam.schema');
const ChargeItemType = require('../schemas/chargeitem.schema');
const ClaimType = require('../schemas/claim.schema');
const ClaimResponseType = require('../schemas/claimresponse.schema');
const ClinicalImpressionType = require('../schemas/clinicalimpression.schema');
const CodeSystemType = require('../schemas/codesystem.schema');
const CommunicationType = require('../schemas/communication.schema');
const CommunicationRequestType = require('../schemas/communicationrequest.schema');
const CompartmentDefinitionType = require('../schemas/compartmentdefinition.schema');
const CompositionType = require('../schemas/composition.schema');
const ConceptMapType = require('../schemas/conceptmap.schema');
const ConditionType = require('../schemas/condition.schema');
const ConsentType = require('../schemas/consent.schema');
const ContractType = require('../schemas/contract.schema');
const CoverageType = require('../schemas/coverage.schema');
const DataElementType = require('../schemas/dataelement.schema');
const DetectedIssueType = require('../schemas/detectedissue.schema');
const DeviceType = require('../schemas/device.schema');
const DeviceComponentType = require('../schemas/devicecomponent.schema');
const DeviceMetricType = require('../schemas/devicemetric.schema');
const DeviceRequestType = require('../schemas/devicerequest.schema');
const DeviceUseStatementType = require('../schemas/deviceusestatement.schema');
const DiagnosticReportType = require('../schemas/diagnosticreport.schema');
const DocumentManifestType = require('../schemas/documentmanifest.schema');
const DocumentReferenceType = require('../schemas/documentreference.schema');
const EligibilityRequestType = require('../schemas/eligibilityrequest.schema');
const EligibilityResponseType = require('../schemas/eligibilityresponse.schema');
const EncounterType = require('../schemas/encounter.schema');
const EndpointType = require('../schemas/endpoint.schema');
const EnrollmentRequestType = require('../schemas/enrollmentrequest.schema');
const EnrollmentResponseType = require('../schemas/enrollmentresponse.schema');
const EpisodeOfCareType = require('../schemas/episodeofcare.schema');
const ExpansionProfileType = require('../schemas/expansionprofile.schema');
const ExplanationOfBenefitType = require('../schemas/explanationofbenefit.schema');
const FamilyMemberHistoryType = require('../schemas/familymemberhistory.schema');
const FlagType = require('../schemas/flag.schema');
const GoalType = require('../schemas/goal.schema');
const GraphDefinitionType = require('../schemas/graphdefinition.schema');
const GroupType = require('../schemas/group.schema');
const GuidanceResponseType = require('../schemas/guidanceresponse.schema');
const HealthcareServiceType = require('../schemas/healthcareservice.schema');
const ImagingManifestType = require('../schemas/imagingmanifest.schema');
const ImagingStudyType = require('../schemas/imagingstudy.schema');
const ImmunizationType = require('../schemas/immunization.schema');
const ImmunizationRecommendationType = require('../schemas/immunizationrecommendation.schema');
const ImplementationGuideType = require('../schemas/implementationguide.schema');
const LibraryType = require('../schemas/library.schema');
const LinkageType = require('../schemas/linkage.schema');
const ListType = require('../schemas/list.schema');
const LocationType = require('../schemas/location.schema');
const MeasureType = require('../schemas/measure.schema');
const MeasureReportType = require('../schemas/measurereport.schema');
const MediaType = require('../schemas/media.schema');
const MedicationType = require('../schemas/medication.schema');
const MedicationAdministrationType = require('../schemas/medicationadministration.schema');
const MedicationDispenseType = require('../schemas/medicationdispense.schema');
const MedicationRequestType = require('../schemas/medicationrequest.schema');
const MedicationStatementType = require('../schemas/medicationstatement.schema');
const MessageDefinitionType = require('../schemas/messagedefinition.schema');
const MessageHeaderType = require('../schemas/messageheader.schema');
const NamingSystemType = require('../schemas/namingsystem.schema');
const NutritionOrderType = require('../schemas/nutritionorder.schema');
const ObservationType = require('../schemas/observation.schema');
const OperationDefinitionType = require('../schemas/operationdefinition.schema');
const OrganizationType = require('../schemas/organization.schema');
const PatientType = require('../schemas/patient.schema');
const PaymentNoticeType = require('../schemas/paymentnotice.schema');
const PaymentReconciliationType = require('../schemas/paymentreconciliation.schema');
const PersonType = require('../schemas/person.schema');
const PlanDefinitionType = require('../schemas/plandefinition.schema');
const PractitionerType = require('../schemas/practitioner.schema');
const PractitionerRoleType = require('../schemas/practitionerrole.schema');
const ProcedureType = require('../schemas/procedure.schema');
const ProcedureRequestType = require('../schemas/procedurerequest.schema');
const ProcessRequestType = require('../schemas/processrequest.schema');
const ProcessResponseType = require('../schemas/processresponse.schema');
const ProvenanceType = require('../schemas/provenance.schema');
const QuestionnaireType = require('../schemas/questionnaire.schema');
const QuestionnaireResponseType = require('../schemas/questionnaireresponse.schema');
const ReferralRequestType = require('../schemas/referralrequest.schema');
const RelatedPersonType = require('../schemas/relatedperson.schema');
const RequestGroupType = require('../schemas/requestgroup.schema');
const ResearchStudyType = require('../schemas/researchstudy.schema');
const ResearchSubjectType = require('../schemas/researchsubject.schema');
const RiskAssessmentType = require('../schemas/riskassessment.schema');
const ScheduleType = require('../schemas/schedule.schema');
const SearchParameterType = require('../schemas/searchparameter.schema');
const SequenceType = require('../schemas/sequence.schema');
const ServiceDefinitionType = require('../schemas/servicedefinition.schema');
const SlotType = require('../schemas/slot.schema');
const SpecimenType = require('../schemas/specimen.schema');
const StructureDefinitionType = require('../schemas/structuredefinition.schema');
const StructureMapType = require('../schemas/structuremap.schema');
const SubscriptionType = require('../schemas/subscription.schema');
const SubstanceType = require('../schemas/substance.schema');
const SupplyDeliveryType = require('../schemas/supplydelivery.schema');
const SupplyRequestType = require('../schemas/supplyrequest.schema');
const TaskType = require('../schemas/task.schema');
const TestReportType = require('../schemas/testreport.schema');
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
	description: 'Union of all available resources.',
	types: [
		AccountType,
		ActivityDefinitionType,
		AdverseEventType,
		AllergyIntoleranceType,
		AppointmentType,
		AppointmentResponseType,
		AuditEventType,
		BasicType,
		BinaryType,
		BodySiteType,
		BundleType,
		CapabilityStatementType,
		CarePlanType,
		CareTeamType,
		ChargeItemType,
		ClaimType,
		ClaimResponseType,
		ClinicalImpressionType,
		CodeSystemType,
		CommunicationType,
		CommunicationRequestType,
		CompartmentDefinitionType,
		CompositionType,
		ConceptMapType,
		ConditionType,
		ConsentType,
		ContractType,
		CoverageType,
		DataElementType,
		DetectedIssueType,
		DeviceType,
		DeviceComponentType,
		DeviceMetricType,
		DeviceRequestType,
		DeviceUseStatementType,
		DiagnosticReportType,
		DocumentManifestType,
		DocumentReferenceType,
		EligibilityRequestType,
		EligibilityResponseType,
		EncounterType,
		EndpointType,
		EnrollmentRequestType,
		EnrollmentResponseType,
		EpisodeOfCareType,
		ExpansionProfileType,
		ExplanationOfBenefitType,
		FamilyMemberHistoryType,
		FlagType,
		GoalType,
		GraphDefinitionType,
		GroupType,
		GuidanceResponseType,
		HealthcareServiceType,
		ImagingManifestType,
		ImagingStudyType,
		ImmunizationType,
		ImmunizationRecommendationType,
		ImplementationGuideType,
		LibraryType,
		LinkageType,
		ListType,
		LocationType,
		MeasureType,
		MeasureReportType,
		MediaType,
		MedicationType,
		MedicationAdministrationType,
		MedicationDispenseType,
		MedicationRequestType,
		MedicationStatementType,
		MessageDefinitionType,
		MessageHeaderType,
		NamingSystemType,
		NutritionOrderType,
		ObservationType,
		OperationDefinitionType,
		OrganizationType,
		PatientType,
		PaymentNoticeType,
		PaymentReconciliationType,
		PersonType,
		PlanDefinitionType,
		PractitionerType,
		PractitionerRoleType,
		ProcedureType,
		ProcedureRequestType,
		ProcessRequestType,
		ProcessResponseType,
		ProvenanceType,
		QuestionnaireType,
		QuestionnaireResponseType,
		ReferralRequestType,
		RelatedPersonType,
		RequestGroupType,
		ResearchStudyType,
		ResearchSubjectType,
		RiskAssessmentType,
		ScheduleType,
		SearchParameterType,
		SequenceType,
		ServiceDefinitionType,
		SlotType,
		SpecimenType,
		StructureDefinitionType,
		StructureMapType,
		SubscriptionType,
		SubstanceType,
		SupplyDeliveryType,
		SupplyRequestType,
		TaskType,
		TestReportType,
		TestScriptType,
		ValueSetType,
		VisionPrescriptionType
	],
	resovleType ( value ) {
		if (value && value.resourceType === AccountType.name) {
			return AccountType;
		}
		if (value && value.resourceType === ActivityDefinitionType.name) {
			return ActivityDefinitionType;
		}
		if (value && value.resourceType === AdverseEventType.name) {
			return AdverseEventType;
		}
		if (value && value.resourceType === AllergyIntoleranceType.name) {
			return AllergyIntoleranceType;
		}
		if (value && value.resourceType === AppointmentType.name) {
			return AppointmentType;
		}
		if (value && value.resourceType === AppointmentResponseType.name) {
			return AppointmentResponseType;
		}
		if (value && value.resourceType === AuditEventType.name) {
			return AuditEventType;
		}
		if (value && value.resourceType === BasicType.name) {
			return BasicType;
		}
		if (value && value.resourceType === BinaryType.name) {
			return BinaryType;
		}
		if (value && value.resourceType === BodySiteType.name) {
			return BodySiteType;
		}
		if (value && value.resourceType === BundleType.name) {
			return BundleType;
		}
		if (value && value.resourceType === CapabilityStatementType.name) {
			return CapabilityStatementType;
		}
		if (value && value.resourceType === CarePlanType.name) {
			return CarePlanType;
		}
		if (value && value.resourceType === CareTeamType.name) {
			return CareTeamType;
		}
		if (value && value.resourceType === ChargeItemType.name) {
			return ChargeItemType;
		}
		if (value && value.resourceType === ClaimType.name) {
			return ClaimType;
		}
		if (value && value.resourceType === ClaimResponseType.name) {
			return ClaimResponseType;
		}
		if (value && value.resourceType === ClinicalImpressionType.name) {
			return ClinicalImpressionType;
		}
		if (value && value.resourceType === CodeSystemType.name) {
			return CodeSystemType;
		}
		if (value && value.resourceType === CommunicationType.name) {
			return CommunicationType;
		}
		if (value && value.resourceType === CommunicationRequestType.name) {
			return CommunicationRequestType;
		}
		if (value && value.resourceType === CompartmentDefinitionType.name) {
			return CompartmentDefinitionType;
		}
		if (value && value.resourceType === CompositionType.name) {
			return CompositionType;
		}
		if (value && value.resourceType === ConceptMapType.name) {
			return ConceptMapType;
		}
		if (value && value.resourceType === ConditionType.name) {
			return ConditionType;
		}
		if (value && value.resourceType === ConsentType.name) {
			return ConsentType;
		}
		if (value && value.resourceType === ContractType.name) {
			return ContractType;
		}
		if (value && value.resourceType === CoverageType.name) {
			return CoverageType;
		}
		if (value && value.resourceType === DataElementType.name) {
			return DataElementType;
		}
		if (value && value.resourceType === DetectedIssueType.name) {
			return DetectedIssueType;
		}
		if (value && value.resourceType === DeviceType.name) {
			return DeviceType;
		}
		if (value && value.resourceType === DeviceComponentType.name) {
			return DeviceComponentType;
		}
		if (value && value.resourceType === DeviceMetricType.name) {
			return DeviceMetricType;
		}
		if (value && value.resourceType === DeviceRequestType.name) {
			return DeviceRequestType;
		}
		if (value && value.resourceType === DeviceUseStatementType.name) {
			return DeviceUseStatementType;
		}
		if (value && value.resourceType === DiagnosticReportType.name) {
			return DiagnosticReportType;
		}
		if (value && value.resourceType === DocumentManifestType.name) {
			return DocumentManifestType;
		}
		if (value && value.resourceType === DocumentReferenceType.name) {
			return DocumentReferenceType;
		}
		if (value && value.resourceType === EligibilityRequestType.name) {
			return EligibilityRequestType;
		}
		if (value && value.resourceType === EligibilityResponseType.name) {
			return EligibilityResponseType;
		}
		if (value && value.resourceType === EncounterType.name) {
			return EncounterType;
		}
		if (value && value.resourceType === EndpointType.name) {
			return EndpointType;
		}
		if (value && value.resourceType === EnrollmentRequestType.name) {
			return EnrollmentRequestType;
		}
		if (value && value.resourceType === EnrollmentResponseType.name) {
			return EnrollmentResponseType;
		}
		if (value && value.resourceType === EpisodeOfCareType.name) {
			return EpisodeOfCareType;
		}
		if (value && value.resourceType === ExpansionProfileType.name) {
			return ExpansionProfileType;
		}
		if (value && value.resourceType === ExplanationOfBenefitType.name) {
			return ExplanationOfBenefitType;
		}
		if (value && value.resourceType === FamilyMemberHistoryType.name) {
			return FamilyMemberHistoryType;
		}
		if (value && value.resourceType === FlagType.name) {
			return FlagType;
		}
		if (value && value.resourceType === GoalType.name) {
			return GoalType;
		}
		if (value && value.resourceType === GraphDefinitionType.name) {
			return GraphDefinitionType;
		}
		if (value && value.resourceType === GroupType.name) {
			return GroupType;
		}
		if (value && value.resourceType === GuidanceResponseType.name) {
			return GuidanceResponseType;
		}
		if (value && value.resourceType === HealthcareServiceType.name) {
			return HealthcareServiceType;
		}
		if (value && value.resourceType === ImagingManifestType.name) {
			return ImagingManifestType;
		}
		if (value && value.resourceType === ImagingStudyType.name) {
			return ImagingStudyType;
		}
		if (value && value.resourceType === ImmunizationType.name) {
			return ImmunizationType;
		}
		if (value && value.resourceType === ImmunizationRecommendationType.name) {
			return ImmunizationRecommendationType;
		}
		if (value && value.resourceType === ImplementationGuideType.name) {
			return ImplementationGuideType;
		}
		if (value && value.resourceType === LibraryType.name) {
			return LibraryType;
		}
		if (value && value.resourceType === LinkageType.name) {
			return LinkageType;
		}
		if (value && value.resourceType === ListType.name) {
			return ListType;
		}
		if (value && value.resourceType === LocationType.name) {
			return LocationType;
		}
		if (value && value.resourceType === MeasureType.name) {
			return MeasureType;
		}
		if (value && value.resourceType === MeasureReportType.name) {
			return MeasureReportType;
		}
		if (value && value.resourceType === MediaType.name) {
			return MediaType;
		}
		if (value && value.resourceType === MedicationType.name) {
			return MedicationType;
		}
		if (value && value.resourceType === MedicationAdministrationType.name) {
			return MedicationAdministrationType;
		}
		if (value && value.resourceType === MedicationDispenseType.name) {
			return MedicationDispenseType;
		}
		if (value && value.resourceType === MedicationRequestType.name) {
			return MedicationRequestType;
		}
		if (value && value.resourceType === MedicationStatementType.name) {
			return MedicationStatementType;
		}
		if (value && value.resourceType === MessageDefinitionType.name) {
			return MessageDefinitionType;
		}
		if (value && value.resourceType === MessageHeaderType.name) {
			return MessageHeaderType;
		}
		if (value && value.resourceType === NamingSystemType.name) {
			return NamingSystemType;
		}
		if (value && value.resourceType === NutritionOrderType.name) {
			return NutritionOrderType;
		}
		if (value && value.resourceType === ObservationType.name) {
			return ObservationType;
		}
		if (value && value.resourceType === OperationDefinitionType.name) {
			return OperationDefinitionType;
		}
		if (value && value.resourceType === OrganizationType.name) {
			return OrganizationType;
		}
		if (value && value.resourceType === PatientType.name) {
			return PatientType;
		}
		if (value && value.resourceType === PaymentNoticeType.name) {
			return PaymentNoticeType;
		}
		if (value && value.resourceType === PaymentReconciliationType.name) {
			return PaymentReconciliationType;
		}
		if (value && value.resourceType === PersonType.name) {
			return PersonType;
		}
		if (value && value.resourceType === PlanDefinitionType.name) {
			return PlanDefinitionType;
		}
		if (value && value.resourceType === PractitionerType.name) {
			return PractitionerType;
		}
		if (value && value.resourceType === PractitionerRoleType.name) {
			return PractitionerRoleType;
		}
		if (value && value.resourceType === ProcedureType.name) {
			return ProcedureType;
		}
		if (value && value.resourceType === ProcedureRequestType.name) {
			return ProcedureRequestType;
		}
		if (value && value.resourceType === ProcessRequestType.name) {
			return ProcessRequestType;
		}
		if (value && value.resourceType === ProcessResponseType.name) {
			return ProcessResponseType;
		}
		if (value && value.resourceType === ProvenanceType.name) {
			return ProvenanceType;
		}
		if (value && value.resourceType === QuestionnaireType.name) {
			return QuestionnaireType;
		}
		if (value && value.resourceType === QuestionnaireResponseType.name) {
			return QuestionnaireResponseType;
		}
		if (value && value.resourceType === ReferralRequestType.name) {
			return ReferralRequestType;
		}
		if (value && value.resourceType === RelatedPersonType.name) {
			return RelatedPersonType;
		}
		if (value && value.resourceType === RequestGroupType.name) {
			return RequestGroupType;
		}
		if (value && value.resourceType === ResearchStudyType.name) {
			return ResearchStudyType;
		}
		if (value && value.resourceType === ResearchSubjectType.name) {
			return ResearchSubjectType;
		}
		if (value && value.resourceType === RiskAssessmentType.name) {
			return RiskAssessmentType;
		}
		if (value && value.resourceType === ScheduleType.name) {
			return ScheduleType;
		}
		if (value && value.resourceType === SearchParameterType.name) {
			return SearchParameterType;
		}
		if (value && value.resourceType === SequenceType.name) {
			return SequenceType;
		}
		if (value && value.resourceType === ServiceDefinitionType.name) {
			return ServiceDefinitionType;
		}
		if (value && value.resourceType === SlotType.name) {
			return SlotType;
		}
		if (value && value.resourceType === SpecimenType.name) {
			return SpecimenType;
		}
		if (value && value.resourceType === StructureDefinitionType.name) {
			return StructureDefinitionType;
		}
		if (value && value.resourceType === StructureMapType.name) {
			return StructureMapType;
		}
		if (value && value.resourceType === SubscriptionType.name) {
			return SubscriptionType;
		}
		if (value && value.resourceType === SubstanceType.name) {
			return SubstanceType;
		}
		if (value && value.resourceType === SupplyDeliveryType.name) {
			return SupplyDeliveryType;
		}
		if (value && value.resourceType === SupplyRequestType.name) {
			return SupplyRequestType;
		}
		if (value && value.resourceType === TaskType.name) {
			return TaskType;
		}
		if (value && value.resourceType === TestReportType.name) {
			return TestReportType;
		}
		if (value && value.resourceType === TestScriptType.name) {
			return TestScriptType;
		}
		if (value && value.resourceType === ValueSetType.name) {
			return ValueSetType;
		}
		if (value && value.resourceType === VisionPrescriptionType.name) {
			return VisionPrescriptionType;
		}
	}
});
