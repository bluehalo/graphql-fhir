const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLBoolean,
	GraphQLList,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ExpansionProfileResourceType = new GraphQLEnumType({
	name: 'ExpansionProfileResourceType',
	values: {
		ExpansionProfile: { value: 'ExpansionProfile' },
	},
});

/**
 * @name exports
 * @summary ExpansionProfile Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExpansionProfile',
	description: 'Base StructureDefinition for ExpansionProfile Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(ExpansionProfileResourceType),
				description: 'Type of this resource.',
			},
			url: {
				type: UriScalar,
				description:
					'An absolute URI that is used to identify this expansion profile when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this expansion profile is (or will be) published. The URL SHOULD include the major version of the expansion profile. For more information see [Technical and Business Versions](resource.html#versions).',
			},
			_url: {
				type: require('./element.schema'),
				description:
					'An absolute URI that is used to identify this expansion profile when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this expansion profile is (or will be) published. The URL SHOULD include the major version of the expansion profile. For more information see [Technical and Business Versions](resource.html#versions).',
			},
			identifier: {
				type: require('./identifier.schema'),
				description:
					'A formal identifier that is used to identify this expansion profile when it is represented in other formats, or referenced in a specification, model, design or an instance.',
			},
			version: {
				type: GraphQLString,
				description:
					'The identifier that is used to identify this version of the expansion profile when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the expansion profile author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
			},
			_version: {
				type: require('./element.schema'),
				description:
					'The identifier that is used to identify this version of the expansion profile when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the expansion profile author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
			},
			name: {
				type: GraphQLString,
				description:
					'A natural language name identifying the expansion profile. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
			},
			_name: {
				type: require('./element.schema'),
				description:
					'A natural language name identifying the expansion profile. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
			status: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The status of this expansion profile. Enables tracking the life-cycle of the content.',
			},
			_status: {
				type: require('./element.schema'),
				description:
					'The status of this expansion profile. Enables tracking the life-cycle of the content.',
			},
			experimental: {
				type: GraphQLBoolean,
				description:
					'A boolean value to indicate that this expansion profile is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
			},
			_experimental: {
				type: require('./element.schema'),
				description:
					'A boolean value to indicate that this expansion profile is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
			},
			date: {
				type: DateTimeScalar,
				description:
					'The date  (and optionally time) when the expansion profile was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the expansion profile changes.',
			},
			_date: {
				type: require('./element.schema'),
				description:
					'The date  (and optionally time) when the expansion profile was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the expansion profile changes.',
			},
			publisher: {
				type: GraphQLString,
				description:
					'The name of the individual or organization that published the expansion profile.',
			},
			_publisher: {
				type: require('./element.schema'),
				description:
					'The name of the individual or organization that published the expansion profile.',
			},
			contact: {
				type: new GraphQLList(require('./contactdetail.schema')),
				description:
					'Contact details to assist a user in finding and communicating with the publisher.',
			},
			description: {
				type: GraphQLString,
				description:
					"A free text natural language description of the expansion profile from a consumer's perspective.",
			},
			_description: {
				type: require('./element.schema'),
				description:
					"A free text natural language description of the expansion profile from a consumer's perspective.",
			},
			useContext: {
				type: new GraphQLList(require('./usagecontext.schema')),
				description:
					'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate expansion profile instances.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
			jurisdiction: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'A legal or geographic region in which the expansion profile is intended to be used.',
			},
			fixedVersion: {
				type: new GraphQLList(require('./expansionprofilefixedversion.schema')),
				description:
					'Fix use of a particular code system to a particular version.',
			},
			excludedSystem: {
				type: require('./expansionprofileexcludedsystem.schema'),
				description:
					'Code system, or a particular version of a code system to be excluded from value set expansions.',
			},
			includeDesignations: {
				type: GraphQLBoolean,
				description:
					'Controls whether concept designations are to be included or excluded in value set expansions.',
			},
			_includeDesignations: {
				type: require('./element.schema'),
				description:
					'Controls whether concept designations are to be included or excluded in value set expansions.',
			},
			designation: {
				type: require('./expansionprofiledesignation.schema'),
				description:
					'A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations.',
			},
			includeDefinition: {
				type: GraphQLBoolean,
				description:
					'Controls whether the value set definition is included or excluded in value set expansions.',
			},
			_includeDefinition: {
				type: require('./element.schema'),
				description:
					'Controls whether the value set definition is included or excluded in value set expansions.',
			},
			activeOnly: {
				type: GraphQLBoolean,
				description:
					'Controls whether inactive concepts are included or excluded in value set expansions.',
			},
			_activeOnly: {
				type: require('./element.schema'),
				description:
					'Controls whether inactive concepts are included or excluded in value set expansions.',
			},
			excludeNested: {
				type: GraphQLBoolean,
				description:
					'Controls whether or not the value set expansion nests codes or not (i.e. ValueSet.expansion.contains.contains).',
			},
			_excludeNested: {
				type: require('./element.schema'),
				description:
					'Controls whether or not the value set expansion nests codes or not (i.e. ValueSet.expansion.contains.contains).',
			},
			excludeNotForUI: {
				type: GraphQLBoolean,
				description:
					'Controls whether or not the value set expansion includes codes which cannot be displayed in user interfaces.',
			},
			_excludeNotForUI: {
				type: require('./element.schema'),
				description:
					'Controls whether or not the value set expansion includes codes which cannot be displayed in user interfaces.',
			},
			excludePostCoordinated: {
				type: GraphQLBoolean,
				description:
					'Controls whether or not the value set expansion includes post coordinated codes.',
			},
			_excludePostCoordinated: {
				type: require('./element.schema'),
				description:
					'Controls whether or not the value set expansion includes post coordinated codes.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/languages
			displayLanguage: {
				type: CodeScalar,
				description:
					'Specifies the language to be used for description in the expansions i.e. the language to be used for ValueSet.expansion.contains.display.',
			},
			_displayLanguage: {
				type: require('./element.schema'),
				description:
					'Specifies the language to be used for description in the expansions i.e. the language to be used for ValueSet.expansion.contains.display.',
			},
			limitedExpansion: {
				type: GraphQLBoolean,
				description:
					'If the value set being expanded is incomplete (because it is too big to expand), return a limited expansion (a subset) with an indicator that expansion is incomplete, using the extension [http://hl7.org/fhir/StructureDefinition/valueset-toocostly](extension-valueset-toocostly.html).',
			},
			_limitedExpansion: {
				type: require('./element.schema'),
				description:
					'If the value set being expanded is incomplete (because it is too big to expand), return a limited expansion (a subset) with an indicator that expansion is incomplete, using the extension [http://hl7.org/fhir/StructureDefinition/valueset-toocostly](extension-valueset-toocostly.html).',
			},
		}),
});
