const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let StructureMapResourceInputType = new GraphQLEnumType({
	name: 'StructureMapResourceInputType',
	values: {
		StructureMap: { value: 'StructureMap' },
	},
});

/**
 * @name exports
 * @summary StructureMap Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMap_Input',
	description: 'Base StructureDefinition for StructureMap Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(StructureMapResourceInputType),
				description: 'Type of this resource.',
			},
			url: {
				type: new GraphQLNonNull(UriScalar),
				description:
					'An absolute URI that is used to identify this structure map when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure map is (or will be) published. The URL SHOULD include the major version of the structure map. For more information see [Technical and Business Versions](resource.html#versions).',
			},
			_url: {
				type: require('./element.input'),
				description:
					'An absolute URI that is used to identify this structure map when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure map is (or will be) published. The URL SHOULD include the major version of the structure map. For more information see [Technical and Business Versions](resource.html#versions).',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.input')),
				description:
					'A formal identifier that is used to identify this structure map when it is represented in other formats, or referenced in a specification, model, design or an instance.',
			},
			version: {
				type: GraphQLString,
				description:
					'The identifier that is used to identify this version of the structure map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure map author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
			},
			_version: {
				type: require('./element.input'),
				description:
					'The identifier that is used to identify this version of the structure map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure map author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
			},
			name: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'A natural language name identifying the structure map. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
			},
			_name: {
				type: require('./element.input'),
				description:
					'A natural language name identifying the structure map. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
			},
			title: {
				type: GraphQLString,
				description:
					'A short, descriptive, user-friendly title for the structure map.',
			},
			_title: {
				type: require('./element.input'),
				description:
					'A short, descriptive, user-friendly title for the structure map.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
			status: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The status of this structure map. Enables tracking the life-cycle of the content.',
			},
			_status: {
				type: require('./element.input'),
				description:
					'The status of this structure map. Enables tracking the life-cycle of the content.',
			},
			experimental: {
				type: GraphQLBoolean,
				description:
					'A boolean value to indicate that this structure map is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
			},
			_experimental: {
				type: require('./element.input'),
				description:
					'A boolean value to indicate that this structure map is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
			},
			date: {
				type: DateTimeScalar,
				description:
					'The date  (and optionally time) when the structure map was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure map changes.',
			},
			_date: {
				type: require('./element.input'),
				description:
					'The date  (and optionally time) when the structure map was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure map changes.',
			},
			publisher: {
				type: GraphQLString,
				description:
					'The name of the individual or organization that published the structure map.',
			},
			_publisher: {
				type: require('./element.input'),
				description:
					'The name of the individual or organization that published the structure map.',
			},
			contact: {
				type: new GraphQLList(require('./contactdetail.input')),
				description:
					'Contact details to assist a user in finding and communicating with the publisher.',
			},
			description: {
				type: GraphQLString,
				description:
					"A free text natural language description of the structure map from a consumer's perspective.",
			},
			_description: {
				type: require('./element.input'),
				description:
					"A free text natural language description of the structure map from a consumer's perspective.",
			},
			useContext: {
				type: new GraphQLList(require('./usagecontext.input')),
				description:
					'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate structure map instances.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
			jurisdiction: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'A legal or geographic region in which the structure map is intended to be used.',
			},
			purpose: {
				type: GraphQLString,
				description:
					'Explaination of why this structure map is needed and why it has been designed as it has.',
			},
			_purpose: {
				type: require('./element.input'),
				description:
					'Explaination of why this structure map is needed and why it has been designed as it has.',
			},
			copyright: {
				type: GraphQLString,
				description:
					'A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.',
			},
			_copyright: {
				type: require('./element.input'),
				description:
					'A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.',
			},
			structure: {
				type: new GraphQLList(require('./structuremapstructure.input')),
				description:
					'A structure definition used by this map. The structure definition may describe instances that are converted, or the instances that are produced.',
			},
			import: {
				type: new GraphQLList(UriScalar),
				description: 'Other maps used by this map (canonical URLs).',
			},
			_import: {
				type: require('./element.input'),
				description: 'Other maps used by this map (canonical URLs).',
			},
			group: {
				type: new GraphQLList(
					new GraphQLNonNull(require('./structuremapgroup.input')),
				),
				description:
					'Organizes the mapping into managable chunks for human review/ease of maintenance.',
			},
		}),
});
