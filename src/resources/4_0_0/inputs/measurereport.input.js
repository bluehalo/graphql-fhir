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
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary MeasureReport Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MeasureReport_Input',
	description:
		'The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'MeasureReport_Enum_input',
					values: { MeasureReport: { value: 'MeasureReport' } },
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
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'A formal identifier that is used to identify this MeasureReport when it is represented in other formats or referenced in a specification, model, design or an instance.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The MeasureReport status. No data will be available until the MeasureReport status is complete.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The MeasureReport status. No data will be available until the MeasureReport status is complete.',
		},
		_type: {
			type: require('./element.input.js'),
			description:
				'The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure.',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure.',
		},
		_measure: {
			type: require('./element.input.js'),
			description:
				'A reference to the Measure that was calculated to produce this report.',
		},
		measure: {
			type: new GraphQLNonNull(CanonicalScalar),
			description:
				'A reference to the Measure that was calculated to produce this report.',
		},
		subject: {
			type: GraphQLString,
			description:
				'Optional subject identifying the individual or individuals the report is for.',
		},
		_date: {
			type: require('./element.input.js'),
			description: 'The date this measure report was generated.',
		},
		date: {
			type: DateTimeScalar,
			description: 'The date this measure report was generated.',
		},
		reporter: {
			type: GraphQLString,
			description:
				'The individual, location, or organization that is reporting the data.',
		},
		period: {
			type: new GraphQLNonNull(require('./period.input.js')),
			description: 'The reporting period for which the report was calculated.',
		},
		improvementNotation: {
			type: require('./codeableconcept.input.js'),
			description:
				'Whether improvement in the measure is noted by an increase or decrease in the measure score.',
		},
		group: {
			type: new GraphQLList(require('./measurereportgroup.input.js')),
			description:
				'The results of the calculation, one for each population group in the measure.',
		},
		evaluatedResource: {
			type: new GraphQLList(GraphQLString),
			description:
				'A reference to a Bundle containing the Resources that were used in the calculation of this measure.',
		},
	}),
});
