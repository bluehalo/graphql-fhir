const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let CareTeamResourceInputType = new GraphQLEnumType({
	name: 'CareTeamResourceInputType',
	values: {
		CareTeam: { value: 'CareTeam' }
	}
});

/**
 * @name exports
 * @summary CareTeam Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CareTeam_Input',
	description: 'Base StructureDefinition for CareTeam Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(CareTeamResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'This records identifiers associated with this care team that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/care-team-status
		status: {
			type: CodeScalar,
			description: 'Indicates the current state of the care team.'
		},
		_status: {
			type: require('./element.input'),
			description: 'Indicates the current state of the care team.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/care-team-category
		category: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Identifies what kind of team.  This is to support differentiation between multiple co-existing teams, such as care plan team, episode of care team, longitudinal care team.'
		},
		name: {
			type: GraphQLString,
			description: 'A label for human use intended to distinguish like teams.  E.g. the \'red\' vs. \'green\' trauma teams.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A label for human use intended to distinguish like teams.  E.g. the \'red\' vs. \'green\' trauma teams.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'Identifies the patient or group whose intended care is handled by the team.'
		},
		context: {
			type: require('./reference.input'),
			description: 'The encounter or episode of care that establishes the context for this care team.'
		},
		period: {
			type: require('./period.input'),
			description: 'Indicates when the team did (or is intended to) come into effect and end.'
		},
		participant: {
			type: new GraphQLList(require('./careteamparticipant.input')),
			description: 'Identifies all people and organizations who are expected to be involved in the care team.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Describes why the care team exists.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Condition(s) that this care team addresses.'
		},
		managingOrganization: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The organization responsible for the care team.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Comments made about the CareTeam.'
		}
	})
});
