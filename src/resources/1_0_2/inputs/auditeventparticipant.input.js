const UriScalar = require('../scalars/uri.scalar');
const {
	GraphQLInputObjectType,
	GraphQLList,
	GraphQLString,
	GraphQLNonNull,
	GraphQLBoolean,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary AuditEvent.participant Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEventParticipant_Input',
	description: 'A person, a hardware device or software process.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/dicm-402-roleid
			role: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'Specification of the role(s) the user plays when performing the event. Usually the codes used in this element are local codes defined by the role-based access control security system used in the local context.',
			},
			reference: {
				type: require('./reference.input'),
				description:
					'Direct reference to a resource that identifies the participant.',
			},
			userId: {
				type: require('./identifier.input'),
				description:
					'Unique identifier for the user actively participating in the event.',
			},
			altId: {
				type: GraphQLString,
				description:
					'Alternative Participant Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.',
			},
			_altId: {
				type: require('./element.input'),
				description:
					'Alternative Participant Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.',
			},
			name: {
				type: GraphQLString,
				description: 'Human-meaningful name for the user.',
			},
			_name: {
				type: require('./element.input'),
				description: 'Human-meaningful name for the user.',
			},
			requestor: {
				type: new GraphQLNonNull(GraphQLBoolean),
				description:
					'Indicator that the user is or is not the requestor, or initiator, for the event being audited.',
			},
			_requestor: {
				type: require('./element.input'),
				description:
					'Indicator that the user is or is not the requestor, or initiator, for the event being audited.',
			},
			location: {
				type: require('./reference.input'),
				description: 'Where the event occurred.',
			},
			policy: {
				type: new GraphQLList(UriScalar),
				description:
					'The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.',
			},
			_policy: {
				type: require('./element.input'),
				description:
					'The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/dicm-405-mediatype
			media: {
				type: require('./coding.input'),
				description:
					'Type of media involved. Used when the event is about exporting/importing onto media.',
			},
			network: {
				type: require('./auditeventparticipantnetwork.input'),
				description:
					'Logical network location for application activity, if the activity has a network location.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
			purposeOfUse: {
				type: new GraphQLList(require('./coding.input')),
				description:
					'The reason (purpose of use), specific to this participant, that was used during the event being recorded.',
			},
		}),
});
