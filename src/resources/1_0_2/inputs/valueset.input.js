const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ValueSet Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ValueSet_Input',
	description: 'Base StructureDefinition for ValueSet Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URL that is used to identify this value set when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this value set is (or will be) published.'
		},
		_url: {
			type: require('./element.input'),
			description: 'An absolute URL that is used to identify this value set when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this value set is (or will be) published.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance.'
		},
		version: {
			type: GraphQLString,
			description: 'Used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.'
		},
		_version: {
			type: require('./element.input'),
			description: 'Used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.'
		},
		name: {
			type: GraphQLString,
			description: 'A free text natural language name describing the value set.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A free text natural language name describing the value set.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the value set.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the value set.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'This valueset was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.input'),
			description: 'This valueset was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the value set.'
		},
		_publisher: {
			type: require('./element.input'),
			description: 'The name of the individual or organization that published the value set.'
		},
		contact: {
			type: new GraphQLList(require('./valuesetcontact.input')),
			description: 'Contacts to assist a user in finding and communicating with the publisher.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date that the value set status was last changed. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes (e.g. the \'content logical definition\').'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date that the value set status was last changed. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes (e.g. the \'content logical definition\').'
		},
		lockedDate: {
			type: DateScalar,
			description: 'If a locked date is defined, then the Content Logical Definition must be evaluated using the current version of all referenced code system(s) and value set instances as of the locked date.'
		},
		_lockedDate: {
			type: require('./element.input'),
			description: 'If a locked date is defined, then the Content Logical Definition must be evaluated using the current version of all referenced code system(s) and value set instances as of the locked date.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the use of the value set - reason for definition, \'the semantic space\' to be included in the value set, conditions of use, etc. The description may include a list of expected usages for the value set and can also describe the approach taken to build the value set.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A free text natural language description of the use of the value set - reason for definition, \'the semantic space\' to be included in the value set, conditions of use, etc. The description may include a list of expected usages for the value set and can also describe the approach taken to build the value set.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of value set definitions.'
		},
		immutable: {
			type: GraphQLBoolean,
			description: 'If this is set to \'true\', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.'
		},
		_immutable: {
			type: require('./element.input'),
			description: 'If this is set to \'true\', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.'
		},
		requirements: {
			type: GraphQLString,
			description: 'Explains why this value set is needed and why it has been constrained as it has.'
		},
		_requirements: {
			type: require('./element.input'),
			description: 'Explains why this value set is needed and why it has been constrained as it has.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.'
		},
		_copyright: {
			type: require('./element.input'),
			description: 'A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.'
		},
		extensible: {
			type: GraphQLBoolean,
			description: 'Whether this is intended to be used with an extensible binding or not.'
		},
		_extensible: {
			type: require('./element.input'),
			description: 'Whether this is intended to be used with an extensible binding or not.'
		},
		codeSystem: {
			type: require('./valuesetcodesystem.input'),
			description: 'A definition of a code system, inlined into the value set (as a packaging convenience). Note that the inline code system may be used from other value sets by referring to its (codeSystem.system) directly.'
		},
		compose: {
			type: require('./valuesetcompose.input'),
			description: 'A set of criteria that provide the content logical definition of the value set by including or excluding codes from outside this value set.'
		},
		expansion: {
			type: require('./valuesetexpansion.input'),
			description: 'A value set can also be \'expanded\', where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.'
		}
	})
});
