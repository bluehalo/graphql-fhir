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
 * @summary ResearchStudy Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ResearchStudy_Input',
	description:
		'A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ResearchStudy_Enum_input',
					values: { ResearchStudy: { value: 'ResearchStudy' } },
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
				'Identifiers assigned to this research study by the sponsor or other systems.',
		},
		_title: {
			type: require('./element.input.js'),
			description: 'A short, descriptive user-friendly label for the study.',
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive user-friendly label for the study.',
		},
		protocol: {
			type: new GraphQLList(GraphQLString),
			description:
				'The set of steps expected to be performed as part of the execution of the study.',
		},
		partOf: {
			type: new GraphQLList(GraphQLString),
			description:
				'A larger research study of which this particular study is a component or step.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The current state of the study.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of the study.',
		},
		primaryPurposeType: {
			type: require('./codeableconcept.input.js'),
			description:
				"The type of study based upon the intent of the study's activities. A classification of the intent of the study.",
		},
		phase: {
			type: require('./codeableconcept.input.js'),
			description:
				'The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.',
		},
		category: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.',
		},
		focus: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.',
		},
		condition: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				"The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion 'healthy volunteer', but the target condition code would be a Lupus SNOMED code.",
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'Contact details to assist a user in learning more about or engaging with the study.',
		},
		relatedArtifact: {
			type: new GraphQLList(require('./relatedartifact.input.js')),
			description: 'Citations, references and other related documents.',
		},
		keyword: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Key terms to aid in searching for or filtering the study.',
		},
		location: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Indicates a country, state or other region where the study is taking place.',
		},
		_description: {
			type: require('./element.input.js'),
			description: 'A full description of how the study is being conducted.',
		},
		description: {
			type: GraphQLString,
			description: 'A full description of how the study is being conducted.',
		},
		enrollment: {
			type: new GraphQLList(GraphQLString),
			description:
				"Reference to a Group that defines the criteria for and quantity of subjects participating in the study.  E.g. ' 200 female Europeans between the ages of 20 and 45 with early onset diabetes'.",
		},
		period: {
			type: require('./period.input.js'),
			description:
				'Identifies the start date and the expected (or actual, depending on status) end date for the study.',
		},
		sponsor: {
			type: GraphQLString,
			description:
				'An organization that initiates the investigation and is legally responsible for the study.',
		},
		principalInvestigator: {
			type: GraphQLString,
			description:
				'A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.',
		},
		site: {
			type: new GraphQLList(GraphQLString),
			description: 'A facility in which study activities are conducted.',
		},
		reasonStopped: {
			type: require('./codeableconcept.input.js'),
			description:
				'A description and/or code explaining the premature termination of the study.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Comments made about the study by the performer, subject or other participants.',
		},
		arm: {
			type: new GraphQLList(require('./researchstudyarm.input.js')),
			description:
				'Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.',
		},
		objective: {
			type: new GraphQLList(require('./researchstudyobjective.input.js')),
			description:
				'A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.',
		},
	}),
});
