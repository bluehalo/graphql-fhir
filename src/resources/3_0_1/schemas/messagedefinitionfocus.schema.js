const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary MessageDefinitionfocus Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageDefinitionfocus',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_code: {
			type: require('./element.schema.js'),
			description:
				'The kind of resource that must be the focus for this message.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The kind of resource that must be the focus for this message.',
		},
		profile: {
			type: new GraphQLUnionType({
				name: 'MessageDefinitionfocusprofile_profile_Union',
				description:
					'A profile that reflects constraints for the focal resource (and potentially for related resources).',
				types: () => [require('./structuredefinition.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'StructureDefinition') {
						return require('./structuredefinition.schema.js');
					}
				},
			}),
			description:
				'A profile that reflects constraints for the focal resource (and potentially for related resources).',
		},
		_min: {
			type: require('./element.schema.js'),
			description:
				'Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.',
		},
		min: {
			type: UnsignedIntScalar,
			description:
				'Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.',
		},
		_max: {
			type: require('./element.schema.js'),
			description:
				'Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.',
		},
		max: {
			type: GraphQLString,
			description:
				'Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.',
		},
	}),
});
