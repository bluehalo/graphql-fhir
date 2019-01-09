const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ProcessRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProcessRequest_Input',
	description: 'Base StructureDefinition for ProcessRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ProcessRequest_Enum_input',
					values: { ProcessRequest: { value: 'ProcessRequest' } },
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
		_action: {
			type: require('./element.input.js'),
			description:
				'The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/actionlist
		action: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description: 'The ProcessRequest business identifier.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		ruleset: {
			type: require('./coding.input.js'),
			description:
				'The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.input.js'),
			description:
				'The style (standard) and version of the original material which was converted into this resource.',
		},
		_created: {
			type: require('./element.input.js'),
			description: 'The date when this resource was created.',
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when this resource was created.',
		},
		target: {
			type: GraphQLString,
			description: 'The organization which is the target of the request.',
		},
		provider: {
			type: GraphQLString,
			description:
				'The practitioner who is responsible for the action specified in thise request.',
		},
		organization: {
			type: GraphQLString,
			description:
				'The organization which is responsible for the action speccified in thise request.',
		},
		request: {
			type: GraphQLString,
			description:
				'Reference of resource which is the target or subject of this action.',
		},
		response: {
			type: GraphQLString,
			description:
				'Reference of a prior response to resource which is the target or subject of this action.',
		},
		_nullify: {
			type: require('./element.input.js'),
			description: 'If true remove all history excluding audit.',
		},
		nullify: {
			type: GraphQLBoolean,
			description: 'If true remove all history excluding audit.',
		},
		_reference: {
			type: require('./element.input.js'),
			description: 'A reference to supply which authenticates the process.',
		},
		reference: {
			type: GraphQLString,
			description: 'A reference to supply which authenticates the process.',
		},
		item: {
			type: new GraphQLList(require('./processrequestitem.input.js')),
			description:
				'List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.',
		},
		_include: {
			type: require('./element.input.js'),
			description: 'Names of resource types to include.',
		},
		include: {
			type: new GraphQLList(GraphQLString),
			description: 'Names of resource types to include.',
		},
		_exclude: {
			type: require('./element.input.js'),
			description: 'Names of resource types to exclude.',
		},
		exclude: {
			type: new GraphQLList(GraphQLString),
			description: 'Names of resource types to exclude.',
		},
		period: {
			type: require('./period.input.js'),
			description:
				'A period of time during which the fulfilling resources would have been created.',
		},
	}),
});
