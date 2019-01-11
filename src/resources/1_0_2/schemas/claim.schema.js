const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary Claim Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Claim',
	description: 'Base StructureDefinition for Claim Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Claim_Enum_schema',
					values: { Claim: { value: 'Claim' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_type: {
			type: require('./element.schema.js'),
			description: 'The category of claim this is.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-type-link
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The category of claim this is.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		ruleset: {
			type: require('./coding.schema.js'),
			description:
				'The version of the specification on which this instance relies.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.schema.js'),
			description:
				'The version of the specification from which the original instance was created.',
		},
		_created: {
			type: require('./element.schema.js'),
			description:
				'The date when the enclosed suite of services were performed or completed.',
		},
		created: {
			type: DateTimeScalar,
			description:
				'The date when the enclosed suite of services were performed or completed.',
		},
		target: {
			type: new GraphQLUnionType({
				name: 'Claimtarget_target_Union',
				description: 'Insurer Identifier, typical BIN number (6 digit).',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'Insurer Identifier, typical BIN number (6 digit).',
		},
		provider: {
			type: new GraphQLUnionType({
				name: 'Claimprovider_provider_Union',
				description:
					'The provider which is responsible for the bill, claim pre-determination, pre-authorization.',
				types: () => [require('./practitioner.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
				},
			}),
			description:
				'The provider which is responsible for the bill, claim pre-determination, pre-authorization.',
		},
		organization: {
			type: new GraphQLUnionType({
				name: 'Claimorganization_organization_Union',
				description:
					'The organization which is responsible for the bill, claim pre-determination, pre-authorization.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The organization which is responsible for the bill, claim pre-determination, pre-authorization.',
		},
		_use: {
			type: require('./element.schema.js'),
			description:
				'Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-use-link
		use: {
			type: CodeScalar,
			description:
				'Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/process-priority
		priority: {
			type: require('./coding.schema.js'),
			description:
				'Immediate (stat), best effort (normal), deferred (deferred).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/fundsreserve
		fundsReserve: {
			type: require('./coding.schema.js'),
			description:
				"In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.",
		},
		enterer: {
			type: new GraphQLUnionType({
				name: 'Claimenterer_enterer_Union',
				description:
					'Person who created the invoice/claim/pre-determination or pre-authorization.',
				types: () => [require('./practitioner.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
				},
			}),
			description:
				'Person who created the invoice/claim/pre-determination or pre-authorization.',
		},
		facility: {
			type: new GraphQLUnionType({
				name: 'Claimfacility_facility_Union',
				description: 'Facility where the services were provided.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'Facility where the services were provided.',
		},
		prescription: {
			type: new GraphQLUnionType({
				name: 'Claimprescription_prescription_Union',
				description:
					'Prescription to support the dispensing of Pharmacy or Vision products.',
				types: () => [
					require('./medicationorder.schema.js'),
					require('./visionprescription.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'MedicationOrder') {
						return require('./medicationorder.schema.js');
					}
					if (data && data.resourceType === 'VisionPrescription') {
						return require('./visionprescription.schema.js');
					}
				},
			}),
			description:
				'Prescription to support the dispensing of Pharmacy or Vision products.',
		},
		originalPrescription: {
			type: new GraphQLUnionType({
				name: 'ClaimoriginalPrescription_originalPrescription_Union',
				description:
					'Original prescription to support the dispensing of pharmacy services, medications or products.',
				types: () => [require('./medicationorder.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'MedicationOrder') {
						return require('./medicationorder.schema.js');
					}
				},
			}),
			description:
				'Original prescription to support the dispensing of pharmacy services, medications or products.',
		},
		payee: {
			type: require('./claimpayee.schema.js'),
			description: 'The party to be reimbursed for the services.',
		},
		referral: {
			type: new GraphQLUnionType({
				name: 'Claimreferral_referral_Union',
				description:
					'The referral resource which lists the date, practitioner, reason and other supporting information.',
				types: () => [require('./referralrequest.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'ReferralRequest') {
						return require('./referralrequest.schema.js');
					}
				},
			}),
			description:
				'The referral resource which lists the date, practitioner, reason and other supporting information.',
		},
		diagnosis: {
			type: new GraphQLList(require('./claimdiagnosis.schema.js')),
			description:
				'Ordered list of patient diagnosis for which care is sought.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/fm-conditions
		condition: {
			type: new GraphQLList(require('./coding.schema.js')),
			description: 'List of patient conditions for which care is sought.',
		},
		patient: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'Claimpatient_patient_Union',
					description: 'Patient Resource.',
					types: () => [require('./patient.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
					},
				}),
			),
			description: 'Patient Resource.',
		},
		coverage: {
			type: new GraphQLList(require('./claimcoverage.schema.js')),
			description:
				'Financial instrument by which payment information for health care.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-exception
		exception: {
			type: new GraphQLList(require('./coding.schema.js')),
			description: 'Factors which may influence the applicability of coverage.',
		},
		_school: {
			type: require('./element.schema.js'),
			description: 'Name of school for over-aged dependents.',
		},
		school: {
			type: GraphQLString,
			description: 'Name of school for over-aged dependents.',
		},
		_accident: {
			type: require('./element.schema.js'),
			description: 'Date of an accident which these services are addressing.',
		},
		accident: {
			type: DateScalar,
			description: 'Date of an accident which these services are addressing.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActIncidentCode
		accidentType: {
			type: require('./coding.schema.js'),
			description: 'Type of accident: work, auto, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/intervention
		interventionException: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'A list of intervention and exception codes which may influence the adjudication of the claim.',
		},
		item: {
			type: new GraphQLList(require('./claimitem.schema.js')),
			description: 'First tier of goods and services.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/additionalmaterials
		additionalMaterials: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'Code to indicate that Xrays, images, emails, documents, models or attachments are being sent in support of this submission.',
		},
		missingTeeth: {
			type: new GraphQLList(require('./claimmissingteeth.schema.js')),
			description:
				'A list of teeth which would be expected but are not found due to having been previously  extracted or for other reasons.',
		},
	}),
});
