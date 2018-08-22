const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let DataElementResourceType = new GraphQLEnumType({
	name: 'DataElementResourceType',
	values: {
		DataElement: { value: 'DataElement' }
	}
});

/**
 * @name exports
 * @summary DataElement Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DataElement',
	description: 'Base StructureDefinition for DataElement Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(DataElementResourceType),
			description: 'Type of this resource'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URL that is used to identify this data element when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this data element is (or will be) published.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URL that is used to identify this data element when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this data element is (or will be) published.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Formal identifier that is used to identify this data element when it is represented in other formats, or referenced in a specification, model, design or an instance.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the data element when it is referenced in a StructureDefinition, Questionnaire or instance. This is an arbitrary value managed by the definition author manually.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The identifier that is used to identify this version of the data element when it is referenced in a StructureDefinition, Questionnaire or instance. This is an arbitrary value managed by the definition author manually.'
		},
		name: {
			type: GraphQLString,
			description: 'The term used by humans to refer to the data element.  Should ideally be unique within the context in which the data element is expected to be used.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'The term used by humans to refer to the data element.  Should ideally be unique within the context in which the data element is expected to be used.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the data element.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the data element.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A flag to indicate that this search data element definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'A flag to indicate that this search data element definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the data element.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization that published the data element.'
		},
		contact: {
			type: new GraphQLList(require('./dataelementcontact.schema')),
			description: 'Contacts to assist a user in finding and communicating with the publisher.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date this version of the data element was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the data element  changes.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date this version of the data element was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the data element  changes.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of data element definitions.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the definition of the data element. Copyright statements are generally legal restrictions on the use and publishing of the details of the definition of the data element.'
		},
		_copyright: {
			type: require('./element.schema'),
			description: 'A copyright statement relating to the definition of the data element. Copyright statements are generally legal restrictions on the use and publishing of the details of the definition of the data element.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/dataelement-stringency
		stringency: {
			type: CodeScalar,
			description: 'Identifies how precise the data element is in its definition.'
		},
		_stringency: {
			type: require('./element.schema'),
			description: 'Identifies how precise the data element is in its definition.'
		},
		mapping: {
			type: new GraphQLList(require('./dataelementmapping.schema')),
			description: 'Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.'
		},
		element: {
			type: new GraphQLList(new GraphQLNonNull(require('./elementdefinition.schema'))),
			description: 'Defines the structure, type, allowed values and other constraining characteristics of the data element.'
		}
	})
});
