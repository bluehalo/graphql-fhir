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
 * @summary ResearchSubject Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ResearchSubject_Input',
	description: 'Base StructureDefinition for ResearchSubject Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ResearchSubject_Enum_input',
					values: { ResearchSubject: { value: 'ResearchSubject' } },
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
			type: require('./identifier.input.js'),
			description:
				'Identifiers assigned to this research study by the sponsor or other systems.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The current state of the subject.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/research-subject-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of the subject.',
		},
		period: {
			type: require('./period.input.js'),
			description:
				'The dates the subject began and ended their participation in the study.',
		},
		study: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Reference to the study the subject is participating in.',
		},
		individual: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The record of the person or animal who is involved in the study.',
		},
		_assignedArm: {
			type: require('./element.input.js'),
			description:
				'The name of the arm in the study the subject is expected to follow as part of this study.',
		},
		assignedArm: {
			type: GraphQLString,
			description:
				'The name of the arm in the study the subject is expected to follow as part of this study.',
		},
		_actualArm: {
			type: require('./element.input.js'),
			description:
				'The name of the arm in the study the subject actually followed as part of this study.',
		},
		actualArm: {
			type: GraphQLString,
			description:
				'The name of the arm in the study the subject actually followed as part of this study.',
		},
		consent: {
			type: GraphQLString,
			description:
				"A record of the patient's informed agreement to participate in the study.",
		},
	}),
});
