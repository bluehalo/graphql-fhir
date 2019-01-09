const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary Contracttermaction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Contracttermaction',
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
		_doNotPerform: {
			type: require('./element.schema.js'),
			description: 'True if the term prohibits the  action.',
		},
		doNotPerform: {
			type: GraphQLBoolean,
			description: 'True if the term prohibits the  action.',
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.',
		},
		subject: {
			type: new GraphQLList(require('./contracttermactionsubject.schema.js')),
			description: 'Entity of the action.',
		},
		intent: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Reason or purpose for the action stipulated by this Contract Provision.',
		},
		_linkId: {
			type: require('./element.schema.js'),
			description:
				'Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.',
		},
		linkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.',
		},
		status: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description: 'Current state of the term action.',
		},
		context: {
			type: new GraphQLUnionType({
				name: 'Contracttermactioncontext_context_Union',
				description:
					'Encounter or Episode with primary association to specified term activity.',
				types: () => [
					require('./encounter.schema.js'),
					require('./episodeofcare.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
					if (data && data.resourceType === 'EpisodeOfCare') {
						return require('./episodeofcare.schema.js');
					}
				},
			}),
			description:
				'Encounter or Episode with primary association to specified term activity.',
		},
		_contextLinkId: {
			type: require('./element.schema.js'),
			description:
				'Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.',
		},
		contextLinkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.',
		},
		_occurrenceDateTime: {
			type: require('./element.schema.js'),
			description: 'When action happens.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'When action happens.',
		},
		occurrencePeriod: {
			type: require('./period.schema.js'),
			description: 'When action happens.',
		},
		occurrenceTiming: {
			type: require('./timing.schema.js'),
			description: 'When action happens.',
		},
		requester: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Contracttermactionrequester_requester_Union',
					description:
						'Who or what initiated the action and has responsibility for its activation.',
					types: () => [
						require('./patient.schema.js'),
						require('./relatedperson.schema.js'),
						require('./practitioner.schema.js'),
						require('./practitionerrole.schema.js'),
						require('./device.schema.js'),
						require('./group.schema.js'),
						require('./organization.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'RelatedPerson') {
							return require('./relatedperson.schema.js');
						}
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'PractitionerRole') {
							return require('./practitionerrole.schema.js');
						}
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
						if (data && data.resourceType === 'Group') {
							return require('./group.schema.js');
						}
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description:
				'Who or what initiated the action and has responsibility for its activation.',
		},
		_requesterLinkId: {
			type: require('./element.schema.js'),
			description:
				'Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.',
		},
		requesterLinkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.',
		},
		performerType: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The type of individual that is desired or required to perform or not perform the action.',
		},
		performerRole: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The type of role or competency of an individual desired or required to perform or not perform the action.',
		},
		performer: {
			type: new GraphQLUnionType({
				name: 'Contracttermactionperformer_performer_Union',
				description:
					'Indicates who or what is being asked to perform (or not perform) the ction.',
				types: () => [
					require('./relatedperson.schema.js'),
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./careteam.schema.js'),
					require('./device.schema.js'),
					require('./substance.schema.js'),
					require('./organization.schema.js'),
					require('./location.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'CareTeam') {
						return require('./careteam.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'Substance') {
						return require('./substance.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description:
				'Indicates who or what is being asked to perform (or not perform) the ction.',
		},
		_performerLinkId: {
			type: require('./element.schema.js'),
			description:
				'Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.',
		},
		performerLinkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ContracttermactionreasonReference_reasonReference_Union',
					description:
						'Indicates another resource whose existence justifies permitting or not permitting this action.',
					types: () => [
						require('./condition.schema.js'),
						require('./observation.schema.js'),
						require('./diagnosticreport.schema.js'),
						require('./documentreference.schema.js'),
						require('./questionnaire.schema.js'),
						require('./questionnaireresponse.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
						if (data && data.resourceType === 'DiagnosticReport') {
							return require('./diagnosticreport.schema.js');
						}
						if (data && data.resourceType === 'DocumentReference') {
							return require('./documentreference.schema.js');
						}
						if (data && data.resourceType === 'Questionnaire') {
							return require('./questionnaire.schema.js');
						}
						if (data && data.resourceType === 'QuestionnaireResponse') {
							return require('./questionnaireresponse.schema.js');
						}
					},
				}),
			),
			description:
				'Indicates another resource whose existence justifies permitting or not permitting this action.',
		},
		_reason: {
			type: require('./element.schema.js'),
			description:
				'Describes why the action is to be performed or not performed in textual form.',
		},
		reason: {
			type: new GraphQLList(GraphQLString),
			description:
				'Describes why the action is to be performed or not performed in textual form.',
		},
		_reasonLinkId: {
			type: require('./element.schema.js'),
			description:
				'Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.',
		},
		reasonLinkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Comments made about the term action made by the requester, performer, subject or other participants.',
		},
		_securityLabelNumber: {
			type: require('./element.schema.js'),
			description: 'Security labels that protects the action.',
		},
		securityLabelNumber: {
			type: new GraphQLList(UnsignedIntScalar),
			description: 'Security labels that protects the action.',
		},
	}),
});
