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

/**
 * @name exports
 * @summary ReferralRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ReferralRequest',
	description: 'Base StructureDefinition for ReferralRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ReferralRequest_Enum_schema',
					values: { ReferralRequest: { value: 'ReferralRequest' } },
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
		_status: {
			type: require('./element.schema.js'),
			description:
				'The workflow status of the referral or transfer of care request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/referralstatus
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The workflow status of the referral or transfer of care request.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Business identifier that uniquely identifies the referral/care transfer request instance.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'Date/DateTime of creation for draft requests and date of activation for active requests.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'Date/DateTime of creation for draft requests and date of activation for active requests.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'An indication of the type of referral (or where applicable the type of transfer of care) request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/practitioner-specialty
		specialty: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-priority
		priority: {
			type: require('./codeableconcept.schema.js'),
			description:
				'An indication of the urgency of referral (or where applicable the type of transfer of care) request.',
		},
		patient: {
			type: new GraphQLUnionType({
				name: 'ReferralRequestpatient_patient_Union',
				description:
					'The patient who is the subject of a referral or transfer of care request.',
				types: () => [require('./patient.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
				},
			}),
			description:
				'The patient who is the subject of a referral or transfer of care request.',
		},
		requester: {
			type: new GraphQLUnionType({
				name: 'ReferralRequestrequester_requester_Union',
				description:
					'The healthcare provider or provider organization who/which initiated the referral/transfer of care request. Can also be  Patient (a self referral).',
				types: () => [
					require('./practitioner.schema.js'),
					require('./organization.schema.js'),
					require('./patient.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
				},
			}),
			description:
				'The healthcare provider or provider organization who/which initiated the referral/transfer of care request. Can also be  Patient (a self referral).',
		},
		recipient: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ReferralRequestrecipient_recipient_Union',
					description:
						'The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.',
					types: () => [
						require('./practitioner.schema.js'),
						require('./organization.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description:
				'The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'ReferralRequestencounter_encounter_Union',
				description:
					'The encounter at which the request for referral or transfer of care is initiated.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'The encounter at which the request for referral or transfer of care is initiated.',
		},
		_dateSent: {
			type: require('./element.schema.js'),
			description:
				'Date/DateTime the request for referral or transfer of care is sent by the author.',
		},
		dateSent: {
			type: DateTimeScalar,
			description:
				'Date/DateTime the request for referral or transfer of care is sent by the author.',
		},
		reason: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.',
		},
		description: {
			type: GraphQLString,
			description:
				'The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		serviceRequested: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion.',
		},
		supportingInformation: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ReferralRequestsupportingInformation_supportingInformation_Union',
					description:
						'Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.',
		},
		fulfillmentTime: {
			type: require('./period.schema.js'),
			description:
				'The period of time within which the services identified in the referral/transfer of care is specified or required to occur.',
		},
	}),
});
