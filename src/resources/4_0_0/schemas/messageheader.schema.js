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
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary MessageHeader Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageHeader',
	description:
		'The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'MessageHeader_Enum_schema',
					values: { MessageHeader: { value: 'MessageHeader' } },
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
		eventCoding: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description:
				"Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value 'http://terminology.hl7.org/CodeSystem/message-events'.  Alternatively uri to the EventDefinition.",
		},
		_eventUri: {
			type: require('./element.schema.js'),
			description:
				"Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value 'http://terminology.hl7.org/CodeSystem/message-events'.  Alternatively uri to the EventDefinition.",
		},
		eventUri: {
			type: new GraphQLNonNull(UriScalar),
			description:
				"Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value 'http://terminology.hl7.org/CodeSystem/message-events'.  Alternatively uri to the EventDefinition.",
		},
		destination: {
			type: new GraphQLList(require('./messageheaderdestination.schema.js')),
			description:
				'The destination application which the message is intended for.',
		},
		sender: {
			type: new GraphQLUnionType({
				name: 'MessageHeadersender_sender_Union',
				description:
					'Identifies the sending system to allow the use of a trust relationship.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
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
				},
			}),
			description:
				'Identifies the sending system to allow the use of a trust relationship.',
		},
		enterer: {
			type: new GraphQLUnionType({
				name: 'MessageHeaderenterer_enterer_Union',
				description:
					'The person or device that performed the data entry leading to this message. When there is more than one candidate, pick the most proximal to the message. Can provide other enterers in extensions.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
				},
			}),
			description:
				'The person or device that performed the data entry leading to this message. When there is more than one candidate, pick the most proximal to the message. Can provide other enterers in extensions.',
		},
		author: {
			type: new GraphQLUnionType({
				name: 'MessageHeaderauthor_author_Union',
				description:
					'The logical author of the message - the person or device that decided the described event should happen. When there is more than one candidate, pick the most proximal to the MessageHeader. Can provide other authors in extensions.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
				},
			}),
			description:
				'The logical author of the message - the person or device that decided the described event should happen. When there is more than one candidate, pick the most proximal to the MessageHeader. Can provide other authors in extensions.',
		},
		source: {
			type: new GraphQLNonNull(require('./messageheadersource.schema.js')),
			description: 'The source application from which this message originated.',
		},
		responsible: {
			type: new GraphQLUnionType({
				name: 'MessageHeaderresponsible_responsible_Union',
				description:
					'The person or organization that accepts overall responsibility for the contents of the message. The implication is that the message event happened under the policies of the responsible party.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
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
				},
			}),
			description:
				'The person or organization that accepts overall responsibility for the contents of the message. The implication is that the message event happened under the policies of the responsible party.',
		},
		reason: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.',
		},
		response: {
			type: require('./messageheaderresponse.schema.js'),
			description:
				'Information about the message that this message is a response to.  Only present if this message is a response.',
		},
		focus: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MessageHeaderfocus_focus_Union',
					description:
						'The actual data of the message - a reference to the root/focus class of the event.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'The actual data of the message - a reference to the root/focus class of the event.',
		},
		_definition: {
			type: require('./element.schema.js'),
			description: 'Permanent link to the MessageDefinition for this message.',
		},
		definition: {
			type: CanonicalScalar,
			description: 'Permanent link to the MessageDefinition for this message.',
		},
	}),
});
