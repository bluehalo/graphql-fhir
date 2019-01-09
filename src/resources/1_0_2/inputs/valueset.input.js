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
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary ValueSet Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ValueSet_Input',
	description: 'Base StructureDefinition for ValueSet Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ValueSet_Enum_input',
					values: { ValueSet: { value: 'ValueSet' } },
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
		_url: {
			type: require('./element.input.js'),
			description:
				'An absolute URL that is used to identify this value set when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this value set is (or will be) published.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URL that is used to identify this value set when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this value set is (or will be) published.',
		},
		identifier: {
			type: require('./identifier.input.js'),
			description:
				'Formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'Used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.',
		},
		version: {
			type: GraphQLString,
			description:
				'Used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A free text natural language name describing the value set.',
		},
		name: {
			type: GraphQLString,
			description:
				'A free text natural language name describing the value set.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the value set.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the value set.',
		},
		_experimental: {
			type: require('./element.input.js'),
			description:
				'This valueset was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'This valueset was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the individual or organization that published the value set.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the value set.',
		},
		contact: {
			type: new GraphQLList(require('./valuesetcontact.input.js')),
			description:
				'Contacts to assist a user in finding and communicating with the publisher.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				"The date that the value set status was last changed. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes (e.g. the 'content logical definition').",
		},
		date: {
			type: DateTimeScalar,
			description:
				"The date that the value set status was last changed. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes (e.g. the 'content logical definition').",
		},
		_lockedDate: {
			type: require('./element.input.js'),
			description:
				'If a locked date is defined, then the Content Logical Definition must be evaluated using the current version of all referenced code system(s) and value set instances as of the locked date.',
		},
		lockedDate: {
			type: DateScalar,
			description:
				'If a locked date is defined, then the Content Logical Definition must be evaluated using the current version of all referenced code system(s) and value set instances as of the locked date.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				"A free text natural language description of the use of the value set - reason for definition, 'the semantic space' to be included in the value set, conditions of use, etc. The description may include a list of expected usages for the value set and can also describe the approach taken to build the value set.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the use of the value set - reason for definition, 'the semantic space' to be included in the value set, conditions of use, etc. The description may include a list of expected usages for the value set and can also describe the approach taken to build the value set.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of value set definitions.',
		},
		_immutable: {
			type: require('./element.input.js'),
			description:
				"If this is set to 'true', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.",
		},
		immutable: {
			type: GraphQLBoolean,
			description:
				"If this is set to 'true', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.",
		},
		_requirements: {
			type: require('./element.input.js'),
			description:
				'Explains why this value set is needed and why it has been constrained as it has.',
		},
		requirements: {
			type: GraphQLString,
			description:
				'Explains why this value set is needed and why it has been constrained as it has.',
		},
		_copyright: {
			type: require('./element.input.js'),
			description:
				'A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.',
		},
		_extensible: {
			type: require('./element.input.js'),
			description:
				'Whether this is intended to be used with an extensible binding or not.',
		},
		extensible: {
			type: GraphQLBoolean,
			description:
				'Whether this is intended to be used with an extensible binding or not.',
		},
		codeSystem: {
			type: require('./valuesetcodesystem.input.js'),
			description:
				'A definition of a code system, inlined into the value set (as a packaging convenience). Note that the inline code system may be used from other value sets by referring to its (codeSystem.system) directly.',
		},
		compose: {
			type: require('./valuesetcompose.input.js'),
			description:
				'A set of criteria that provide the content logical definition of the value set by including or excluding codes from outside this value set.',
		},
		expansion: {
			type: require('./valuesetexpansion.input.js'),
			description:
				"A value set can also be 'expanded', where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.",
		},
	}),
});
