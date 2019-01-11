const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Endpoint Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Endpoint_Input',
	description: 'Base StructureDefinition for Endpoint Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Endpoint_Enum_input',
					values: { Endpoint: { value: 'Endpoint' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Identifier for the organization that is used to identify the endpoint across multiple disparate systems.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'active | suspended | error | off | test.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/endpoint-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'active | suspended | error | off | test.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/endpoint-connection-type
		connectionType: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description:
				'A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook).',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A friendly name that this endpoint can be referred to with.',
		},
		name: {
			type: GraphQLString,
			description:
				'A friendly name that this endpoint can be referred to with.',
		},
		managingOrganization: {
			type: GraphQLString,
			description:
				'The organization that manages this endpoint (even if technically another organisation is hosting this in the cloud, it is the organisation associated with the data).',
		},
		contact: {
			type: new GraphQLList(require('./contactpoint.input.js')),
			description:
				'Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.',
		},
		period: {
			type: require('./period.input.js'),
			description:
				'The interval during which the endpoint is expected to be operational.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/endpoint-payload-type
		payloadType: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./codeableconcept.input.js')),
			),
			description:
				'The payload type describes the acceptable content that can be communicated on the endpoint.',
		},
		_payloadMimeType: {
			type: require('./element.input.js'),
			description:
				'The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType).',
		},
		payloadMimeType: {
			type: new GraphQLList(CodeScalar),
			description:
				'The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType).',
		},
		_address: {
			type: require('./element.input.js'),
			description: 'The uri that describes the actual end-point to connect to.',
		},
		address: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The uri that describes the actual end-point to connect to.',
		},
		_header: {
			type: require('./element.input.js'),
			description:
				'Additional headers / information to send as part of the notification.',
		},
		header: {
			type: new GraphQLList(GraphQLString),
			description:
				'Additional headers / information to send as part of the notification.',
		},
	}),
});
