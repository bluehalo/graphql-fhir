const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary AuditEventagent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AuditEventagent',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Specification of the participation type the user plays when performing the event.',
		},
		role: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The security role that the user was acting under, that come from local codes defined by the access control security system (e.g. RBAC, ABAC) used in the local context.',
		},
		who: {
			type: new GraphQLUnionType({
				name: 'AuditEventagentwho_who_Union',
				description:
					'Reference to who this agent is that was involved in the event.',
				types: () => [
					require('./practitionerrole.schema.js'),
					require('./practitioner.schema.js'),
					require('./organization.schema.js'),
					require('./device.schema.js'),
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description:
				'Reference to who this agent is that was involved in the event.',
		},
		_altId: {
			type: require('./element.schema.js'),
			description:
				'Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.',
		},
		altId: {
			type: GraphQLString,
			description:
				'Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.',
		},
		_name: {
			type: require('./element.schema.js'),
			description: 'Human-meaningful name for the agent.',
		},
		name: {
			type: GraphQLString,
			description: 'Human-meaningful name for the agent.',
		},
		_requestor: {
			type: require('./element.schema.js'),
			description:
				'Indicator that the user is or is not the requestor, or initiator, for the event being audited.',
		},
		requestor: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Indicator that the user is or is not the requestor, or initiator, for the event being audited.',
		},
		location: {
			type: new GraphQLUnionType({
				name: 'AuditEventagentlocation_location_Union',
				description: 'Where the event occurred.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'Where the event occurred.',
		},
		_policy: {
			type: require('./element.schema.js'),
			description:
				'The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.',
		},
		policy: {
			type: new GraphQLList(UriScalar),
			description:
				'The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.',
		},
		media: {
			type: require('./coding.schema.js'),
			description:
				'Type of media involved. Used when the event is about exporting/importing onto media.',
		},
		network: {
			type: require('./auditeventagentnetwork.schema.js'),
			description:
				'Logical network location for application activity, if the activity has a network location.',
		},
		purposeOfUse: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The reason (purpose of use), specific to this agent, that was used during the event being recorded.',
		},
	}),
});
