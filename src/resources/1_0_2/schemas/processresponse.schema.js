const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ProcessResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcessResponse',
	description: 'Base StructureDefinition for ProcessResponse Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ProcessResponse_Enum_schema',
					values: { ProcessResponse: { value: 'ProcessResponse' } },
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
			description: 'The Response business identifier.',
		},
		request: {
			type: new GraphQLUnionType({
				name: 'ProcessResponserequest_request_Union',
				description: 'Original request resource reference.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description: 'Original request resource reference.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/process-outcome
		outcome: {
			type: require('./coding.schema.js'),
			description: 'Transaction status: error, complete, held.',
		},
		_disposition: {
			type: require('./element.schema.js'),
			description:
				'A description of the status of the adjudication or processing.',
		},
		disposition: {
			type: GraphQLString,
			description:
				'A description of the status of the adjudication or processing.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		ruleset: {
			type: require('./coding.schema.js'),
			description:
				'The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.schema.js'),
			description:
				'The style (standard) and version of the original material which was converted into this resource.',
		},
		_created: {
			type: require('./element.schema.js'),
			description:
				'The date when the enclosed suite of services were performed or completed.',
		},
		created: {
			type: DateTimeScalar,
			description:
				'The date when the enclosed suite of services were performed or completed.',
		},
		organization: {
			type: new GraphQLUnionType({
				name: 'ProcessResponseorganization_organization_Union',
				description: 'The organization who produced this adjudicated response.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'The organization who produced this adjudicated response.',
		},
		requestProvider: {
			type: new GraphQLUnionType({
				name: 'ProcessResponserequestProvider_requestProvider_Union',
				description:
					'The practitioner who is responsible for the services rendered to the patient.',
				types: () => [require('./practitioner.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
				},
			}),
			description:
				'The practitioner who is responsible for the services rendered to the patient.',
		},
		requestOrganization: {
			type: new GraphQLUnionType({
				name: 'ProcessResponserequestOrganization_requestOrganization_Union',
				description:
					'The organization which is responsible for the services rendered to the patient.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The organization which is responsible for the services rendered to the patient.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/forms
		form: {
			type: require('./coding.schema.js'),
			description: 'The form to be used for printing the content.',
		},
		notes: {
			type: new GraphQLList(require('./processresponsenotes.schema.js')),
			description:
				'Suite of processing note or additional requirements is the processing has been held.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/adjudication-error
		error: {
			type: new GraphQLList(require('./coding.schema.js')),
			description: 'Processing errors.',
		},
	}),
});
