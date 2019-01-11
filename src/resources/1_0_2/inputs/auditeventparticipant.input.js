const {
	GraphQLList,
	GraphQLString,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary AuditEventparticipant Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEventparticipant_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/dicm-402-roleid
		role: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Specification of the role(s) the user plays when performing the event. Usually the codes used in this element are local codes defined by the role-based access control security system used in the local context.',
		},
		reference: {
			type: GraphQLString,
			description:
				'Direct reference to a resource that identifies the participant.',
		},
		userId: {
			type: require('./identifier.input.js'),
			description:
				'Unique identifier for the user actively participating in the event.',
		},
		_altId: {
			type: require('./element.input.js'),
			description:
				'Alternative Participant Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.',
		},
		altId: {
			type: GraphQLString,
			description:
				'Alternative Participant Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.',
		},
		_name: {
			type: require('./element.input.js'),
			description: 'Human-meaningful name for the user.',
		},
		name: {
			type: GraphQLString,
			description: 'Human-meaningful name for the user.',
		},
		_requestor: {
			type: require('./element.input.js'),
			description:
				'Indicator that the user is or is not the requestor, or initiator, for the event being audited.',
		},
		requestor: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Indicator that the user is or is not the requestor, or initiator, for the event being audited.',
		},
		location: {
			type: GraphQLString,
			description: 'Where the event occurred.',
		},
		_policy: {
			type: require('./element.input.js'),
			description:
				'The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.',
		},
		policy: {
			type: new GraphQLList(UriScalar),
			description:
				'The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/dicm-405-mediatype
		media: {
			type: require('./coding.input.js'),
			description:
				'Type of media involved. Used when the event is about exporting/importing onto media.',
		},
		network: {
			type: require('./auditeventparticipantnetwork.input.js'),
			description:
				'Logical network location for application activity, if the activity has a network location.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		purposeOfUse: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'The reason (purpose of use), specific to this participant, that was used during the event being recorded.',
		},
	}),
});
