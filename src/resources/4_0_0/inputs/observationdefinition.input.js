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

/**
 * @name exports
 * @summary ObservationDefinition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ObservationDefinition_Input',
	description:
		'Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ObservationDefinition_Enum_input',
					values: { ObservationDefinition: { value: 'ObservationDefinition' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
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
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		category: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'A code that classifies the general type of observation.',
		},
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				"Describes what will be observed. Sometimes this is called the observation 'name'.",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'A unique identifier assigned to this ObservationDefinition artifact.',
		},
		_permittedDataType: {
			type: require('./element.input.js'),
			description:
				'The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.',
		},
		permittedDataType: {
			type: new GraphQLList(CodeScalar),
			description:
				'The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.',
		},
		_multipleResultsAllowed: {
			type: require('./element.input.js'),
			description:
				'Multiple results allowed for observations conforming to this ObservationDefinition.',
		},
		multipleResultsAllowed: {
			type: GraphQLBoolean,
			description:
				'Multiple results allowed for observations conforming to this ObservationDefinition.',
		},
		method: {
			type: require('./codeableconcept.input.js'),
			description: 'The method or technique used to perform the observation.',
		},
		_preferredReportName: {
			type: require('./element.input.js'),
			description:
				'The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.',
		},
		preferredReportName: {
			type: GraphQLString,
			description:
				'The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.',
		},
		quantitativeDetails: {
			type: require('./observationdefinitionquantitativedetails.input.js'),
			description:
				'Characteristics for quantitative results of this observation.',
		},
		qualifiedInterval: {
			type: new GraphQLList(
				require('./observationdefinitionqualifiedinterval.input.js'),
			),
			description:
				'Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.',
		},
		validCodedValueSet: {
			type: GraphQLString,
			description:
				'The set of valid coded results for the observations  conforming to this ObservationDefinition.',
		},
		normalCodedValueSet: {
			type: GraphQLString,
			description:
				'The set of normal coded results for the observations conforming to this ObservationDefinition.',
		},
		abnormalCodedValueSet: {
			type: GraphQLString,
			description:
				'The set of abnormal coded results for the observation conforming to this ObservationDefinition.',
		},
		criticalCodedValueSet: {
			type: GraphQLString,
			description:
				'The set of critical coded results for the observation conforming to this ObservationDefinition.',
		},
	}),
});
