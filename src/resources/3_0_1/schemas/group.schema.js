const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary Group Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Group',
	description: 'Base StructureDefinition for Group Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Group_Enum_schema',
					values: { Group: { value: 'Group' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'A unique business identifier for this group.',
		},
		_active: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether the record for the group is available for use or is merely being retained for historical purposes.',
		},
		active: {
			type: GraphQLBoolean,
			description:
				'Indicates whether the record for the group is available for use or is merely being retained for historical purposes.',
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				'Identifies the broad classification of the kind of resources the group includes.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/group-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Identifies the broad classification of the kind of resources the group includes.',
		},
		_actual: {
			type: require('./element.schema.js'),
			description:
				'If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.',
		},
		actual: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.',
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				"Provides a specific type of resource the group includes; e.g. 'cow', 'syringe', etc.",
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A label assigned to the group for human identification and communication.',
		},
		name: {
			type: GraphQLString,
			description:
				'A label assigned to the group for human identification and communication.',
		},
		_quantity: {
			type: require('./element.schema.js'),
			description:
				'A count of the number of resource instances that are part of the group.',
		},
		quantity: {
			type: UnsignedIntScalar,
			description:
				'A count of the number of resource instances that are part of the group.',
		},
		characteristic: {
			type: new GraphQLList(require('./groupcharacteristic.schema.js')),
			description: 'Identifies the traits shared by members of the group.',
		},
		member: {
			type: new GraphQLList(require('./groupmember.schema.js')),
			description:
				'Identifies the resource instances that are members of the group.',
		},
	}),
});
