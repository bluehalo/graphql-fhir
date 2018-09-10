const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let EpisodeOfCareResourceInputType = new GraphQLEnumType({
	name: 'EpisodeOfCareResourceInputType',
	values: {
		EpisodeOfCare: { value: 'EpisodeOfCare' }
	}
});

/**
 * @name exports
 * @summary EpisodeOfCare Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EpisodeOfCare_Input',
	description: 'Base StructureDefinition for EpisodeOfCare Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(EpisodeOfCareResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifier(s) by which this EpisodeOfCare is known.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/episode-of-care-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'planned | waitlist | active | onhold | finished | cancelled.'
		},
		_status: {
			type: require('./element.input'),
			description: 'planned | waitlist | active | onhold | finished | cancelled.'
		},
		statusHistory: {
			type: new GraphQLList(require('./episodeofcarestatushistory.input')),
			description: 'The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).'
		},
		type: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A classification of the type of encounter; e.g. specialist referral, disease management, type of funded care.'
		},
		condition: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The patient that this EpisodeOfCare applies to.'
		},
		managingOrganization: {
			type: require('./reference.input'),
			description: 'The organization that has assumed the specific responsibilities for the specified duration.'
		},
		period: {
			type: require('./period.input'),
			description: 'The interval during which the managing organization assumes the defined responsibility.'
		},
		referralRequest: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.'
		},
		careManager: {
			type: require('./reference.input'),
			description: 'The practitioner that is the care manager/care co-ordinator for this patient.'
		},
		careTeam: {
			type: new GraphQLList(require('./episodeofcarecareteam.input')),
			description: 'The list of practitioners that may be facilitating this episode of care for specific purposes.'
		}
	})
});
