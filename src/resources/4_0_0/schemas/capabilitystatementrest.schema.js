const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary CapabilityStatementrest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementrest',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_mode: {
			type: require('./element.schema.js'),
			description:
				'Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.',
		},
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.',
		},
		_documentation: {
			type: require('./element.schema.js'),
			description:
				"Information about the system's restful capabilities that apply across all applications, such as security.",
		},
		documentation: {
			type: GraphQLString,
			description:
				"Information about the system's restful capabilities that apply across all applications, such as security.",
		},
		security: {
			type: require('./capabilitystatementrestsecurity.schema.js'),
			description:
				'Information about security implementation from an interface perspective - what a client needs to know.',
		},
		resource: {
			type: new GraphQLList(
				require('./capabilitystatementrestresource.schema.js'),
			),
			description:
				'A specification of the restful capabilities of the solution for a specific resource type.',
		},
		interaction: {
			type: new GraphQLList(
				require('./capabilitystatementrestinteraction.schema.js'),
			),
			description:
				'A specification of restful operations supported by the system.',
		},
		_compartment: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI which is a reference to the definition of a compartment that the system supports. The reference is to a CompartmentDefinition resource by its canonical URL .',
		},
		compartment: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'An absolute URI which is a reference to the definition of a compartment that the system supports. The reference is to a CompartmentDefinition resource by its canonical URL .',
		},
	}),
});
