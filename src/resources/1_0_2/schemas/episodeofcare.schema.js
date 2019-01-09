const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary EpisodeOfCare Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EpisodeOfCare',
	description: 'Base StructureDefinition for EpisodeOfCare Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'EpisodeOfCare_Enum_schema',
					values: { EpisodeOfCare: { value: 'EpisodeOfCare' } },
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
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'Identifier(s) by which this EpisodeOfCare is known.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'planned | waitlist | active | onhold | finished | cancelled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/episode-of-care-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'planned | waitlist | active | onhold | finished | cancelled.',
		},
		statusHistory: {
			type: new GraphQLList(require('./episodeofcarestatushistory.schema.js')),
			description:
				'The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).',
		},
		type: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A classification of the type of encounter; e.g. specialist referral, disease management, type of funded care.',
		},
		condition: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'EpisodeOfCarecondition_condition_Union',
					description:
						'A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.',
					types: () => [require('./condition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
					},
				}),
			),
			description:
				'A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.',
		},
		patient: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'EpisodeOfCarepatient_patient_Union',
					description: 'The patient that this EpisodeOfCare applies to.',
					types: () => [require('./patient.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
					},
				}),
			),
			description: 'The patient that this EpisodeOfCare applies to.',
		},
		managingOrganization: {
			type: new GraphQLUnionType({
				name: 'EpisodeOfCaremanagingOrganization_managingOrganization_Union',
				description:
					'The organization that has assumed the specific responsibilities for the specified duration.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The organization that has assumed the specific responsibilities for the specified duration.',
		},
		period: {
			type: require('./period.schema.js'),
			description:
				'The interval during which the managing organization assumes the defined responsibility.',
		},
		referralRequest: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'EpisodeOfCarereferralRequest_referralRequest_Union',
					description:
						'Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.',
					types: () => [require('./referralrequest.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'ReferralRequest') {
							return require('./referralrequest.schema.js');
						}
					},
				}),
			),
			description:
				'Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.',
		},
		careManager: {
			type: new GraphQLUnionType({
				name: 'EpisodeOfCarecareManager_careManager_Union',
				description:
					'The practitioner that is the care manager/care co-ordinator for this patient.',
				types: () => [require('./practitioner.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
				},
			}),
			description:
				'The practitioner that is the care manager/care co-ordinator for this patient.',
		},
		careTeam: {
			type: new GraphQLList(require('./episodeofcarecareteam.schema.js')),
			description:
				'The list of practitioners that may be facilitating this episode of care for specific purposes.',
		},
	}),
});
