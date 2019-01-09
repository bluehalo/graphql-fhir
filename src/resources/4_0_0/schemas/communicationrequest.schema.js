const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary CommunicationRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CommunicationRequest',
	description:
		'A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'CommunicationRequest_Enum_schema',
					values: { CommunicationRequest: { value: 'CommunicationRequest' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
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
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Business identifiers assigned to this communication request by the performer or other systems which remain constant as the resource is updated and propagates from server to server.',
		},
		basedOn: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CommunicationRequestbasedOn_basedOn_Union',
					description:
						'A plan or proposal that is fulfilled in whole or in part by this request.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'A plan or proposal that is fulfilled in whole or in part by this request.',
		},
		replaces: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CommunicationRequestreplaces_replaces_Union',
					description:
						'Completed or terminated request(s) whose function is taken by this new request.',
					types: () => [require('./communicationrequest.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'CommunicationRequest') {
							return require('./communicationrequest.schema.js');
						}
					},
				}),
			),
			description:
				'Completed or terminated request(s) whose function is taken by this new request.',
		},
		groupIdentifier: {
			type: require('./identifier.schema.js'),
			description:
				'A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the proposal or order.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the proposal or order.',
		},
		statusReason: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Captures the reason for the current state of the CommunicationRequest.',
		},
		category: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The type of message to be sent such as alert, notification, reminder, instruction, etc.',
		},
		_priority: {
			type: require('./element.schema.js'),
			description:
				'Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.',
		},
		priority: {
			type: CodeScalar,
			description:
				'Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.',
		},
		_doNotPerform: {
			type: require('./element.schema.js'),
			description:
				'If true indicates that the CommunicationRequest is asking for the specified action to *not* occur.',
		},
		doNotPerform: {
			type: GraphQLBoolean,
			description:
				'If true indicates that the CommunicationRequest is asking for the specified action to *not* occur.',
		},
		medium: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A channel that was used for this communication (e.g. email, fax).',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'CommunicationRequestsubject_subject_Union',
				description:
					'The patient or group that is the focus of this communication request.',
				types: () => [
					require('./patient.schema.js'),
					require('./group.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Group') {
						return require('./group.schema.js');
					}
				},
			}),
			description:
				'The patient or group that is the focus of this communication request.',
		},
		about: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CommunicationRequestabout_about_Union',
					description:
						'Other resources that pertain to this communication request and to which this communication request should be associated.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'Other resources that pertain to this communication request and to which this communication request should be associated.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'CommunicationRequestencounter_encounter_Union',
				description:
					'The Encounter during which this CommunicationRequest was created or to which the creation of this record is tightly associated.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'The Encounter during which this CommunicationRequest was created or to which the creation of this record is tightly associated.',
		},
		payload: {
			type: new GraphQLList(require('./communicationrequestpayload.schema.js')),
			description:
				'Text, attachment(s), or resource(s) to be communicated to the recipient.',
		},
		_occurrenceDateTime: {
			type: require('./element.schema.js'),
			description: 'The time when this communication is to occur.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'The time when this communication is to occur.',
		},
		occurrencePeriod: {
			type: require('./period.schema.js'),
			description: 'The time when this communication is to occur.',
		},
		_authoredOn: {
			type: require('./element.schema.js'),
			description:
				'For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.',
		},
		authoredOn: {
			type: DateTimeScalar,
			description:
				'For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.',
		},
		requester: {
			type: new GraphQLUnionType({
				name: 'CommunicationRequestrequester_requester_Union',
				description:
					'The device, individual, or organization who initiated the request and has responsibility for its activation.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
					require('./device.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
				},
			}),
			description:
				'The device, individual, or organization who initiated the request and has responsibility for its activation.',
		},
		recipient: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CommunicationRequestrecipient_recipient_Union',
					description:
						'The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.',
					types: () => [
						require('./device.schema.js'),
						require('./organization.schema.js'),
						require('./patient.schema.js'),
						require('./practitioner.schema.js'),
						require('./practitionerrole.schema.js'),
						require('./relatedperson.schema.js'),
						require('./group.schema.js'),
						require('./careteam.schema.js'),
						require('./healthcareservice.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
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
						if (data && data.resourceType === 'RelatedPerson') {
							return require('./relatedperson.schema.js');
						}
						if (data && data.resourceType === 'Group') {
							return require('./group.schema.js');
						}
						if (data && data.resourceType === 'CareTeam') {
							return require('./careteam.schema.js');
						}
						if (data && data.resourceType === 'HealthcareService') {
							return require('./healthcareservice.schema.js');
						}
					},
				}),
			),
			description:
				'The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.',
		},
		sender: {
			type: new GraphQLUnionType({
				name: 'CommunicationRequestsender_sender_Union',
				description:
					'The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.',
				types: () => [
					require('./device.schema.js'),
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./relatedperson.schema.js'),
					require('./healthcareservice.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
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
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'HealthcareService') {
						return require('./healthcareservice.schema.js');
					}
				},
			}),
			description:
				'The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Describes why the request is being made in coded or textual form.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CommunicationRequestreasonReference_reasonReference_Union',
					description:
						'Indicates another resource whose existence justifies this request.',
					types: () => [
						require('./condition.schema.js'),
						require('./observation.schema.js'),
						require('./diagnosticreport.schema.js'),
						require('./documentreference.schema.js'),
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
					},
				}),
			),
			description:
				'Indicates another resource whose existence justifies this request.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Comments made about the request by the requester, sender, recipient, subject or other participants.',
		},
	}),
});
