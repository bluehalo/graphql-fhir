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
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Composition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Composition_Input',
	description: 'Base StructureDefinition for Composition Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Composition_Enum_input',
					values: { Composition: { value: 'Composition' } },
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
		identifier: {
			type: require('./identifier.input.js'),
			description:
				'Logical identifier for the composition, assigned when created. This identifier stays constant as the composition is changed over time.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The composition editing time, when the composition was last logically changed by the author.',
		},
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description:
				'The composition editing time, when the composition was last logically changed by the author.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/doc-typecodes
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/doc-classcodes
		class: {
			type: require('./codeableconcept.input.js'),
			description:
				'A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.',
		},
		_title: {
			type: require('./element.input.js'),
			description: 'Official human-readable label for the composition.',
		},
		title: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Official human-readable label for the composition.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/composition-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.',
		},
		_confidentiality: {
			type: require('./element.input.js'),
			description:
				'The code specifying the level of confidentiality of the Composition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-Confidentiality
		confidentiality: {
			type: CodeScalar,
			description:
				'The code specifying the level of confidentiality of the Composition.',
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).',
		},
		author: {
			type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
			description:
				'Identifies who is responsible for the information in the composition, not necessarily who typed it in.',
		},
		attester: {
			type: new GraphQLList(require('./compositionattester.input.js')),
			description:
				'A participant who has attested to the accuracy of the composition/document.',
		},
		custodian: {
			type: GraphQLString,
			description:
				'Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information.',
		},
		event: {
			type: new GraphQLList(require('./compositionevent.input.js')),
			description:
				'The clinical service, such as a colonoscopy or an appendectomy, being documented.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'Describes the clinical encounter or type of care this documentation is associated with.',
		},
		section: {
			type: new GraphQLList(require('./compositionsection.input.js')),
			description: 'The root of the sections that make up the composition.',
		},
	}),
});
