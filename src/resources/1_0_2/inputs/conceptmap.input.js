const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let ConceptMapResourceInputType = new GraphQLEnumType({
	name: 'ConceptMapResourceInputType',
	values: {
		ConceptMap: { value: 'ConceptMap' }
	}
});

/**
 * @name exports
 * @summary ConceptMap Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConceptMap_Input',
	description: 'Base StructureDefinition for ConceptMap Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ConceptMapResourceInputType),
			description: 'Type of this resource'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URL that is used to identify this concept map when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this concept map is (or will be) published.'
		},
		_url: {
			type: require('./element.input'),
			description: 'An absolute URL that is used to identify this concept map when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this concept map is (or will be) published.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Formal identifier that is used to identify this concept map when it is represented in other formats, or referenced in a specification, model, design or an instance.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the concept map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.'
		},
		_version: {
			type: require('./element.input'),
			description: 'The identifier that is used to identify this version of the concept map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.'
		},
		name: {
			type: GraphQLString,
			description: 'A free text natural language name describing the concept map.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A free text natural language name describing the concept map.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the concept map.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the concept map.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'This ConceptMap was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.input'),
			description: 'This ConceptMap was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the concept map.'
		},
		_publisher: {
			type: require('./element.input'),
			description: 'The name of the individual or organization that published the concept map.'
		},
		contact: {
			type: new GraphQLList(require('./conceptmapcontact.input')),
			description: 'Contacts to assist a user in finding and communicating with the publisher.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date this version of the concept map was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the concept map changes.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date this version of the concept map was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the concept map changes.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the use of the concept map - reason for definition, conditions of use, etc.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A free text natural language description of the use of the concept map - reason for definition, conditions of use, etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of concept map instances.'
		},
		requirements: {
			type: GraphQLString,
			description: 'Explains why this concept map is needed and why it has been constrained as it has.'
		},
		_requirements: {
			type: require('./element.input'),
			description: 'Explains why this concept map is needed and why it has been constrained as it has.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the concept map and/or its contents.'
		},
		_copyright: {
			type: require('./element.input'),
			description: 'A copyright statement relating to the concept map and/or its contents.'
		},
		sourceUri: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The source value set that specifies the concepts that are being mapped.'
		},
		_sourceUri: {
			type: require('./element.input'),
			description: 'The source value set that specifies the concepts that are being mapped.'
		},
		sourceReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The source value set that specifies the concepts that are being mapped.'
		},
		targetUri: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.'
		},
		_targetUri: {
			type: require('./element.input'),
			description: 'The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.'
		},
		targetReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.'
		},
		element: {
			type: new GraphQLList(require('./conceptmapelement.input')),
			description: 'Mappings for an individual concept in the source to one or more concepts in the target.'
		}
	})
});
