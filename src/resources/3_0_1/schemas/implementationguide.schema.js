const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ImplementationGuideResourceType = new GraphQLEnumType({
	name: 'ImplementationGuideResourceType',
	values: {
		ImplementationGuide: { value: 'ImplementationGuide' }
	}
});

/**
 * @name exports
 * @summary ImplementationGuide Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImplementationGuide',
	description: 'Base StructureDefinition for ImplementationGuide Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ImplementationGuideResourceType),
			description: 'Type of this resource'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URI that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this implementation guide is (or will be) published. The URL SHOULD include the major version of the implementation guide. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URI that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this implementation guide is (or will be) published. The URL SHOULD include the major version of the implementation guide. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the implementation guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the implementation guide author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The identifier that is used to identify this version of the implementation guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the implementation guide author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A natural language name identifying the implementation guide. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A natural language name identifying the implementation guide. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this implementation guide. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of this implementation guide. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this implementation guide is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'A boolean value to indicate that this implementation guide is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the implementation guide was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date  (and optionally time) when the implementation guide was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the implementation guide.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization that published the implementation guide.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the implementation guide from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the implementation guide from a consumer\'s perspective.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate implementation guide instances.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A legal or geographic region in which the implementation guide is intended to be used.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.'
		},
		_copyright: {
			type: require('./element.schema'),
			description: 'A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.'
		},
		fhirVersion: {
			type: IdScalar,
			description: 'The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 3.0.1 for this version.'
		},
		_fhirVersion: {
			type: require('./element.schema'),
			description: 'The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 3.0.1 for this version.'
		},
		dependency: {
			type: new GraphQLList(require('./implementationguidedependency.schema')),
			description: 'Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.'
		},
		package: {
			type: new GraphQLList(require('./implementationguidepackage.schema')),
			description: 'A logical group of resources. Logical groups can be used when building pages.'
		},
		global: {
			type: new GraphQLList(require('./implementationguideglobal.schema')),
			description: 'A set of profiles that all resources covered by this implementation guide must conform to.'
		},
		binary: {
			type: new GraphQLList(UriScalar),
			description: 'A binary file that is included in the  implementation guide when it is published.'
		},
		_binary: {
			type: require('./element.schema'),
			description: 'A binary file that is included in the  implementation guide when it is published.'
		},
		page: {
			type: require('./implementationguidepage.schema'),
			description: 'A page / section in the implementation guide. The root page is the implementation guide home page.'
		}
	})
});
