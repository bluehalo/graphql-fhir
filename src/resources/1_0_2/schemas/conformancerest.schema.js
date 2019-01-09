const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Conformancerest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Conformancerest',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		_mode: {
			type: require('./element.schema.js'),
			description:
				'Identifies whether this portion of the statement is describing ability to initiate or receive restful operations.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/restful-conformance-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Identifies whether this portion of the statement is describing ability to initiate or receive restful operations.',
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
			type: require('./conformancerestsecurity.schema.js'),
			description:
				'Information about security implementation from an interface perspective - what a client needs to know.',
		},
		resource: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./conformancerestresource.schema.js')),
			),
			description:
				'A specification of the restful capabilities of the solution for a specific resource type.',
		},
		interaction: {
			type: new GraphQLList(require('./conformancerestinteraction.schema.js')),
			description:
				'A specification of restful operations supported by the system.',
		},
		_transactionMode: {
			type: require('./element.schema.js'),
			description: 'A code that indicates how transactions are supported.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/transaction-mode
		transactionMode: {
			type: CodeScalar,
			description: 'A code that indicates how transactions are supported.',
		},
		operation: {
			type: new GraphQLList(require('./conformancerestoperation.schema.js')),
			description:
				'Definition of an operation or a named query and with its parameters and their meaning and type.',
		},
		_compartment: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI which is a reference to the definition of a compartment hosted by the system.',
		},
		compartment: {
			type: new GraphQLList(UriScalar),
			description:
				'An absolute URI which is a reference to the definition of a compartment hosted by the system.',
		},
	}),
});
