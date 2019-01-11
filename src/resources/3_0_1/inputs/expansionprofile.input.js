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
 * @summary ExpansionProfile Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExpansionProfile_Input',
	description: 'Base StructureDefinition for ExpansionProfile Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ExpansionProfile_Enum_input',
					values: { ExpansionProfile: { value: 'ExpansionProfile' } },
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
		_url: {
			type: require('./element.input.js'),
			description:
				'An absolute URI that is used to identify this expansion profile when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this expansion profile is (or will be) published. The URL SHOULD include the major version of the expansion profile. For more information see [Technical and Business Versions](resource.html#versions).',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this expansion profile when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this expansion profile is (or will be) published. The URL SHOULD include the major version of the expansion profile. For more information see [Technical and Business Versions](resource.html#versions).',
		},
		identifier: {
			type: require('./identifier.input.js'),
			description:
				'A formal identifier that is used to identify this expansion profile when it is represented in other formats, or referenced in a specification, model, design or an instance.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The identifier that is used to identify this version of the expansion profile when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the expansion profile author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the expansion profile when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the expansion profile author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A natural language name identifying the expansion profile. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: GraphQLString,
			description:
				'A natural language name identifying the expansion profile. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The status of this expansion profile. Enables tracking the life-cycle of the content.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this expansion profile. Enables tracking the life-cycle of the content.',
		},
		_experimental: {
			type: require('./element.input.js'),
			description:
				'A boolean value to indicate that this expansion profile is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A boolean value to indicate that this expansion profile is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date  (and optionally time) when the expansion profile was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the expansion profile changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the expansion profile was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the expansion profile changes.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the individual or organization that published the expansion profile.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the expansion profile.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				"A free text natural language description of the expansion profile from a consumer's perspective.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the expansion profile from a consumer's perspective.",
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate expansion profile instances.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A legal or geographic region in which the expansion profile is intended to be used.',
		},
		fixedVersion: {
			type: new GraphQLList(require('./expansionprofilefixedversion.input.js')),
			description:
				'Fix use of a particular code system to a particular version.',
		},
		excludedSystem: {
			type: require('./expansionprofileexcludedsystem.input.js'),
			description:
				'Code system, or a particular version of a code system to be excluded from value set expansions.',
		},
		_includeDesignations: {
			type: require('./element.input.js'),
			description:
				'Controls whether concept designations are to be included or excluded in value set expansions.',
		},
		includeDesignations: {
			type: GraphQLBoolean,
			description:
				'Controls whether concept designations are to be included or excluded in value set expansions.',
		},
		designation: {
			type: require('./expansionprofiledesignation.input.js'),
			description:
				'A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations.',
		},
		_includeDefinition: {
			type: require('./element.input.js'),
			description:
				'Controls whether the value set definition is included or excluded in value set expansions.',
		},
		includeDefinition: {
			type: GraphQLBoolean,
			description:
				'Controls whether the value set definition is included or excluded in value set expansions.',
		},
		_activeOnly: {
			type: require('./element.input.js'),
			description:
				'Controls whether inactive concepts are included or excluded in value set expansions.',
		},
		activeOnly: {
			type: GraphQLBoolean,
			description:
				'Controls whether inactive concepts are included or excluded in value set expansions.',
		},
		_excludeNested: {
			type: require('./element.input.js'),
			description:
				'Controls whether or not the value set expansion nests codes or not (i.e. ValueSet.expansion.contains.contains).',
		},
		excludeNested: {
			type: GraphQLBoolean,
			description:
				'Controls whether or not the value set expansion nests codes or not (i.e. ValueSet.expansion.contains.contains).',
		},
		_excludeNotForUI: {
			type: require('./element.input.js'),
			description:
				'Controls whether or not the value set expansion includes codes which cannot be displayed in user interfaces.',
		},
		excludeNotForUI: {
			type: GraphQLBoolean,
			description:
				'Controls whether or not the value set expansion includes codes which cannot be displayed in user interfaces.',
		},
		_excludePostCoordinated: {
			type: require('./element.input.js'),
			description:
				'Controls whether or not the value set expansion includes post coordinated codes.',
		},
		excludePostCoordinated: {
			type: GraphQLBoolean,
			description:
				'Controls whether or not the value set expansion includes post coordinated codes.',
		},
		_displayLanguage: {
			type: require('./element.input.js'),
			description:
				'Specifies the language to be used for description in the expansions i.e. the language to be used for ValueSet.expansion.contains.display.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		displayLanguage: {
			type: CodeScalar,
			description:
				'Specifies the language to be used for description in the expansions i.e. the language to be used for ValueSet.expansion.contains.display.',
		},
		_limitedExpansion: {
			type: require('./element.input.js'),
			description:
				'If the value set being expanded is incomplete (because it is too big to expand), return a limited expansion (a subset) with an indicator that expansion is incomplete, using the extension [http://hl7.org/fhir/StructureDefinition/valueset-toocostly](extension-valueset-toocostly.html).',
		},
		limitedExpansion: {
			type: GraphQLBoolean,
			description:
				'If the value set being expanded is incomplete (because it is too big to expand), return a limited expansion (a subset) with an indicator that expansion is incomplete, using the extension [http://hl7.org/fhir/StructureDefinition/valueset-toocostly](extension-valueset-toocostly.html).',
		},
	}),
});
