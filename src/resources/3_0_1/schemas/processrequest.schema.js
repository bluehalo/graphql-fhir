const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ProcessRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcessRequest',
	description: 'Base StructureDefinition for ProcessRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ProcessRequest_Enum_schema',
					values: { ProcessRequest: { value: 'ProcessRequest' } },
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
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
			description: 'The ProcessRequest business identifier.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the resource instance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/fm-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.',
		},
		_action: {
			type: require('./element.schema.js'),
			description:
				'The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/actionlist
		action: {
			type: CodeScalar,
			description:
				'The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.',
		},
		target: {
			type: new GraphQLUnionType({
				name: 'ProcessRequesttarget_target_Union',
				description: 'The organization which is the target of the request.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'The organization which is the target of the request.',
		},
		_created: {
			type: require('./element.schema.js'),
			description: 'The date when this resource was created.',
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when this resource was created.',
		},
		provider: {
			type: new GraphQLUnionType({
				name: 'ProcessRequestprovider_provider_Union',
				description:
					'The practitioner who is responsible for the action specified in this request.',
				types: () => [require('./practitioner.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
				},
			}),
			description:
				'The practitioner who is responsible for the action specified in this request.',
		},
		organization: {
			type: new GraphQLUnionType({
				name: 'ProcessRequestorganization_organization_Union',
				description:
					'The organization which is responsible for the action speccified in this request.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The organization which is responsible for the action speccified in this request.',
		},
		request: {
			type: new GraphQLUnionType({
				name: 'ProcessRequestrequest_request_Union',
				description:
					'Reference of resource which is the target or subject of this action.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'Reference of resource which is the target or subject of this action.',
		},
		response: {
			type: new GraphQLUnionType({
				name: 'ProcessRequestresponse_response_Union',
				description:
					'Reference of a prior response to resource which is the target or subject of this action.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'Reference of a prior response to resource which is the target or subject of this action.',
		},
		_nullify: {
			type: require('./element.schema.js'),
			description: 'If true remove all history excluding audit.',
		},
		nullify: {
			type: GraphQLBoolean,
			description: 'If true remove all history excluding audit.',
		},
		_reference: {
			type: require('./element.schema.js'),
			description: 'A reference to supply which authenticates the process.',
		},
		reference: {
			type: GraphQLString,
			description: 'A reference to supply which authenticates the process.',
		},
		item: {
			type: new GraphQLList(require('./processrequestitem.schema.js')),
			description:
				'List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.',
		},
		_include: {
			type: require('./element.schema.js'),
			description: 'Names of resource types to include.',
		},
		include: {
			type: new GraphQLList(GraphQLString),
			description: 'Names of resource types to include.',
		},
		_exclude: {
			type: require('./element.schema.js'),
			description: 'Names of resource types to exclude.',
		},
		exclude: {
			type: new GraphQLList(GraphQLString),
			description: 'Names of resource types to exclude.',
		},
		period: {
			type: require('./period.schema.js'),
			description:
				'A period of time during which the fulfilling resources would have been created.',
		},
	}),
});
