const UriScalar = require('../scalars/uri.scalar');
const {
	GraphQLObjectType,
	GraphQLList,
	GraphQLString,
	GraphQLNonNull,
	GraphQLBoolean,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary AuditEvent.agent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AuditEventAgent',
	description:
		'An actor taking an active role in the event or activity that is logged.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/security-role-type
			role: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'The security role that the user was acting under, that come from local codes defined by the access control security system (e.g. RBAC, ABAC) used in the local context.',
			},
			reference: {
				type: require('./reference.schema'),
				description:
					'Direct reference to a resource that identifies the agent.',
			},
			userId: {
				type: require('./identifier.schema'),
				description:
					'Unique identifier for the user actively participating in the event.',
			},
			altId: {
				type: GraphQLString,
				description:
					'Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.',
			},
			_altId: {
				type: require('./element.schema'),
				description:
					'Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.',
			},
			name: {
				type: GraphQLString,
				description: 'Human-meaningful name for the agent.',
			},
			_name: {
				type: require('./element.schema'),
				description: 'Human-meaningful name for the agent.',
			},
			requestor: {
				type: new GraphQLNonNull(GraphQLBoolean),
				description:
					'Indicator that the user is or is not the requestor, or initiator, for the event being audited.',
			},
			_requestor: {
				type: require('./element.schema'),
				description:
					'Indicator that the user is or is not the requestor, or initiator, for the event being audited.',
			},
			location: {
				type: require('./reference.schema'),
				description: 'Where the event occurred.',
			},
			policy: {
				type: new GraphQLList(UriScalar),
				description:
					'The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.',
			},
			_policy: {
				type: require('./element.schema'),
				description:
					'The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/dicm-405-mediatype
			media: {
				type: require('./coding.schema'),
				description:
					'Type of media involved. Used when the event is about exporting/importing onto media.',
			},
			network: {
				type: require('./auditeventagentnetwork.schema'),
				description:
					'Logical network location for application activity, if the activity has a network location.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
			purposeOfUse: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'The reason (purpose of use), specific to this agent, that was used during the event being recorded.',
			},
		}),
});
