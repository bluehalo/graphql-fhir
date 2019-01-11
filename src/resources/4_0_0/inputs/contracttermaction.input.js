const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary Contracttermaction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Contracttermaction_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_doNotPerform: {
			type: require('./element.input.js'),
			description: 'True if the term prohibits the  action.',
		},
		doNotPerform: {
			type: GraphQLBoolean,
			description: 'True if the term prohibits the  action.',
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.',
		},
		subject: {
			type: new GraphQLList(require('./contracttermactionsubject.input.js')),
			description: 'Entity of the action.',
		},
		intent: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'Reason or purpose for the action stipulated by this Contract Provision.',
		},
		_linkId: {
			type: require('./element.input.js'),
			description:
				'Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.',
		},
		linkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.',
		},
		status: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description: 'Current state of the term action.',
		},
		context: {
			type: GraphQLString,
			description:
				'Encounter or Episode with primary association to specified term activity.',
		},
		_contextLinkId: {
			type: require('./element.input.js'),
			description:
				'Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.',
		},
		contextLinkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.',
		},
		_occurrenceDateTime: {
			type: require('./element.input.js'),
			description: 'When action happens.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'When action happens.',
		},
		occurrencePeriod: {
			type: require('./period.input.js'),
			description: 'When action happens.',
		},
		occurrenceTiming: {
			type: require('./timing.input.js'),
			description: 'When action happens.',
		},
		requester: {
			type: new GraphQLList(GraphQLString),
			description:
				'Who or what initiated the action and has responsibility for its activation.',
		},
		_requesterLinkId: {
			type: require('./element.input.js'),
			description:
				'Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.',
		},
		requesterLinkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.',
		},
		performerType: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The type of individual that is desired or required to perform or not perform the action.',
		},
		performerRole: {
			type: require('./codeableconcept.input.js'),
			description:
				'The type of role or competency of an individual desired or required to perform or not perform the action.',
		},
		performer: {
			type: GraphQLString,
			description:
				'Indicates who or what is being asked to perform (or not perform) the ction.',
		},
		_performerLinkId: {
			type: require('./element.input.js'),
			description:
				'Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.',
		},
		performerLinkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.',
		},
		reasonReference: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates another resource whose existence justifies permitting or not permitting this action.',
		},
		_reason: {
			type: require('./element.input.js'),
			description:
				'Describes why the action is to be performed or not performed in textual form.',
		},
		reason: {
			type: new GraphQLList(GraphQLString),
			description:
				'Describes why the action is to be performed or not performed in textual form.',
		},
		_reasonLinkId: {
			type: require('./element.input.js'),
			description:
				'Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.',
		},
		reasonLinkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Comments made about the term action made by the requester, performer, subject or other participants.',
		},
		_securityLabelNumber: {
			type: require('./element.input.js'),
			description: 'Security labels that protects the action.',
		},
		securityLabelNumber: {
			type: new GraphQLList(UnsignedIntScalar),
			description: 'Security labels that protects the action.',
		},
	}),
});
