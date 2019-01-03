const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let CareTeamResourceType = new GraphQLEnumType({
	name: 'CareTeamResourceType',
	values: {
		CareTeam: { value: 'CareTeam' }
	}
});

/**
 * @name exports
 * @summary CareTeam Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CareTeam',
	description: 'Base StructureDefinition for CareTeam Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(CareTeamResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'This records identifiers associated with this care team that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/care-team-status
		status: {
			type: CodeScalar,
			description: 'Indicates the current state of the care team.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Indicates the current state of the care team.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/care-team-category
		category: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Identifies what kind of team.  This is to support differentiation between multiple co-existing teams, such as care plan team, episode of care team, longitudinal care team.'
		},
		name: {
			type: GraphQLString,
			description: 'A label for human use intended to distinguish like teams.  E.g. the \'red\' vs. \'green\' trauma teams.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A label for human use intended to distinguish like teams.  E.g. the \'red\' vs. \'green\' trauma teams.'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'Identifies the patient or group whose intended care is handled by the team.'
		},
		context: {
			type: require('./reference.schema'),
			description: 'The encounter or episode of care that establishes the context for this care team.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Indicates when the team did (or is intended to) come into effect and end.'
		},
		participant: {
			type: new GraphQLList(require('./careteamparticipant.schema')),
			description: 'Identifies all people and organizations who are expected to be involved in the care team.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Describes why the care team exists.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Condition(s) that this care team addresses.'
		},
		managingOrganization: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The organization responsible for the care team.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Comments made about the CareTeam.'
		}
	})
});
