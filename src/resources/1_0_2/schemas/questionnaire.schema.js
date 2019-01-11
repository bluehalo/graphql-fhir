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
 * @summary Questionnaire Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Questionnaire',
	description: 'Base StructureDefinition for Questionnaire Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Questionnaire_Enum_schema',
					values: { Questionnaire: { value: 'Questionnaire' } },
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
				'This records identifiers associated with this question set that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The version number assigned by the publisher for business reasons.  It may remain the same when the resource is updated.',
		},
		version: {
			type: GraphQLString,
			description:
				'The version number assigned by the publisher for business reasons.  It may remain the same when the resource is updated.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The lifecycle status of the questionnaire as a whole.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The lifecycle status of the questionnaire as a whole.',
		},
		_date: {
			type: require('./element.schema.js'),
			description: 'The date that this questionnaire was last changed.',
		},
		date: {
			type: DateTimeScalar,
			description: 'The date that this questionnaire was last changed.',
		},
		_publisher: {
			type: require('./element.schema.js'),
			description:
				'Organization or person responsible for developing and maintaining the questionnaire.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'Organization or person responsible for developing and maintaining the questionnaire.',
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_subjectType: {
			type: require('./element.schema.js'),
			description:
				'Identifies the types of subjects that can be the subject of the questionnaire.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		subjectType: {
			type: new GraphQLList(CodeScalar),
			description:
				'Identifies the types of subjects that can be the subject of the questionnaire.',
		},
		group: {
			type: new GraphQLNonNull(require('./questionnairegroup.schema.js')),
			description:
				'A collection of related questions (or further groupings of questions).',
		},
	}),
});
