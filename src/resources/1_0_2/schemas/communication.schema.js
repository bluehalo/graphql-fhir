const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Communication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Communication',
	description: 'Base StructureDefinition for Communication Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Communication_Enum_schema',
					values: { Communication: { value: 'Communication' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
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
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Identifiers associated with this Communication that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).',
		},
		category: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The type of message conveyed such as alert, notification, reminder, instruction, etc.',
		},
		sender: {
			type: new GraphQLUnionType({
				name: 'Communicationsender_sender_Union',
				description:
					'The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.',
				types: () => [
					require('./device.schema.js'),
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./relatedperson.schema.js'),
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
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description:
				'The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.',
		},
		recipient: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Communicationrecipient_recipient_Union',
					description:
						'The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).',
					types: () => [
						require('./device.schema.js'),
						require('./organization.schema.js'),
						require('./patient.schema.js'),
						require('./practitioner.schema.js'),
						require('./relatedperson.schema.js'),
						require('./group.schema.js'),
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
						if (data && data.resourceType === 'RelatedPerson') {
							return require('./relatedperson.schema.js');
						}
						if (data && data.resourceType === 'Group') {
							return require('./group.schema.js');
						}
					},
				}),
			),
			description:
				'The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).',
		},
		payload: {
			type: new GraphQLList(require('./communicationpayload.schema.js')),
			description:
				'Text, attachment(s), or resource(s) that was communicated to the recipient.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ParticipationMode
		medium: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A channel that was used for this communication (e.g. email, fax).',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the transmission.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/communication-status
		status: {
			type: CodeScalar,
			description: 'The status of the transmission.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'Communicationencounter_encounter_Union',
				description: 'The encounter within which the communication was sent.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description: 'The encounter within which the communication was sent.',
		},
		_sent: {
			type: require('./element.schema.js'),
			description: 'The time when this communication was sent.',
		},
		sent: {
			type: DateTimeScalar,
			description: 'The time when this communication was sent.',
		},
		_received: {
			type: require('./element.schema.js'),
			description:
				'The time when this communication arrived at the destination.',
		},
		received: {
			type: DateTimeScalar,
			description:
				'The time when this communication arrived at the destination.',
		},
		reason: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'The reason or justification for the communication.',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'Communicationsubject_subject_Union',
				description: 'The patient who was the focus of this communication.',
				types: () => [require('./patient.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
				},
			}),
			description: 'The patient who was the focus of this communication.',
		},
		requestDetail: {
			type: new GraphQLUnionType({
				name: 'CommunicationrequestDetail_requestDetail_Union',
				description:
					'The communication request that was responsible for producing this communication.',
				types: () => [require('./communicationrequest.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'CommunicationRequest') {
						return require('./communicationrequest.schema.js');
					}
				},
			}),
			description:
				'The communication request that was responsible for producing this communication.',
		},
	}),
});
