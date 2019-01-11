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
 * @summary NamingSystem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NamingSystem_Input',
	description: 'Base StructureDefinition for NamingSystem Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'NamingSystem_Enum_input',
					values: { NamingSystem: { value: 'NamingSystem' } },
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
		_name: {
			type: require('./element.input.js'),
			description:
				'The descriptive name of this particular identifier type or code system.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The descriptive name of this particular identifier type or code system.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				"Indicates whether the naming system is 'ready for use' or not.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"Indicates whether the naming system is 'ready for use' or not.",
		},
		_kind: {
			type: require('./element.input.js'),
			description:
				'Indicates the purpose for the naming system - what kinds of things does it make unique?',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/namingsystem-type
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Indicates the purpose for the naming system - what kinds of things does it make unique?',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the individual or organization that published the naming system.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the naming system.',
		},
		contact: {
			type: new GraphQLList(require('./namingsystemcontact.input.js')),
			description:
				'Contacts to assist a user in finding and communicating with the publisher.',
		},
		_responsible: {
			type: require('./element.input.js'),
			description:
				'The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.',
		},
		responsible: {
			type: GraphQLString,
			description:
				'The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date  (and optionally time) when the system was registered or published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the registration changes.',
		},
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description:
				'The date  (and optionally time) when the system was registered or published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the registration changes.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/identifier-type
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'Categorizes a naming system for easier search by grouping related naming systems.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'Details about what the namespace identifies including scope, granularity, version labeling, etc.',
		},
		description: {
			type: GraphQLString,
			description:
				'Details about what the namespace identifies including scope, granularity, version labeling, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of naming systems.',
		},
		_usage: {
			type: require('./element.input.js'),
			description:
				'Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.',
		},
		usage: {
			type: GraphQLString,
			description:
				'Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.',
		},
		uniqueId: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./namingsystemuniqueid.input.js')),
			),
			description:
				'Indicates how the system may be identified when referenced in electronic exchange.',
		},
		replacedBy: {
			type: GraphQLString,
			description:
				'For naming systems that are retired, indicates the naming system that should be used in their place (if any).',
		},
	}),
});
