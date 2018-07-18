const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Endpoint Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Endpoint',
	description: 'Base StructureDefinition for Endpoint Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifier for the organization that is used to identify the endpoint across multiple disparate systems.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/endpoint-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'active | suspended | error | off | test.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'active | suspended | error | off | test.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/endpoint-connection-type
		connectionType: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook).'
		},
		name: {
			type: GraphQLString,
			description: 'A friendly name that this endpoint can be referred to with.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A friendly name that this endpoint can be referred to with.'
		},
		managingOrganization: {
			type: require('./reference.schema'),
			description: 'The organization that manages this endpoint (even if technically another organisation is hosting this in the cloud, it is the organisation associated with the data).'
		},
		contact: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The interval during which the endpoint is expected to be operational.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/endpoint-payload-type
		payloadType: {
			type: new GraphQLList(new GraphQLNonNull(require('./codeableconcept.schema'))),
			description: 'The payload type describes the acceptable content that can be communicated on the endpoint.'
		},
		payloadMimeType: {
			type: new GraphQLList(CodeScalar),
			description: 'The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType).'
		},
		_payloadMimeType: {
			type: require('./element.schema'),
			description: 'The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType).'
		},
		address: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The uri that describes the actual end-point to connect to.'
		},
		_address: {
			type: require('./element.schema'),
			description: 'The uri that describes the actual end-point to connect to.'
		},
		header: {
			type: new GraphQLList(GraphQLString),
			description: 'Additional headers / information to send as part of the notification.'
		},
		_header: {
			type: require('./element.schema'),
			description: 'Additional headers / information to send as part of the notification.'
		}
	})
});
