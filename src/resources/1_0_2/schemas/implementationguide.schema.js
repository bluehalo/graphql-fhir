const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ImplementationGuide Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImplementationGuide',
	description: 'Base StructureDefinition for ImplementationGuide Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URL that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this implementation guide is (or will be) published.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URL that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this implementation guide is (or will be) published.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the Implementation Guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Implementation Guide author manually.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The identifier that is used to identify this version of the Implementation Guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Implementation Guide author manually.'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A free text natural language name identifying the Implementation Guide.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A free text natural language name identifying the Implementation Guide.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the Implementation Guide.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the Implementation Guide.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'This Implementation Guide was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'This Implementation Guide was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
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
			type: new GraphQLList(require('./implementationguidecontact.schema')),
			description: 'Contacts to assist a user in finding and communicating with the publisher.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date this version of the implementation guide was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date this version of the implementation guide was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the Implementation Guide and its use.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the Implementation Guide and its use.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of implementation guides. The most common use of this element is to represent the country / jurisdiction for which this implementation guide was defined.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.'
		},
		_copyright: {
			type: require('./element.schema'),
			description: 'A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.'
		},
		fhirVersion: {
			type: IdScalar,
			description: 'The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.'
		},
		_fhirVersion: {
			type: require('./element.schema'),
			description: 'The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.'
		},
		dependency: {
			type: new GraphQLList(require('./implementationguidedependency.schema')),
			description: 'Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.'
		},
		package: {
			type: new GraphQLList(new GraphQLNonNull(require('./implementationguidepackage.schema'))),
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
			type: new GraphQLNonNull(require('./implementationguidepage.schema')),
			description: 'A page / section in the implementation guide. The root page is the implementation guide home page.'
		}
	})
});
