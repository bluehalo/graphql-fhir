const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary CapabilityStatementrestsecurity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CapabilityStatementrestsecurity_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_cors: {
			type: require('./element.input.js'),
			description:
				'Server adds CORS headers when responding to requests - this enables javascript applications to use the server.',
		},
		cors: {
			type: GraphQLBoolean,
			description:
				'Server adds CORS headers when responding to requests - this enables javascript applications to use the server.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/restful-security-service
		service: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Types of security services that are supported/required by the system.',
		},
		_description: {
			type: require('./element.input.js'),
			description: 'General description of how security works.',
		},
		description: {
			type: GraphQLString,
			description: 'General description of how security works.',
		},
		certificate: {
			type: new GraphQLList(
				require('./capabilitystatementrestsecuritycertificate.input.js'),
			),
			description: 'Certificates associated with security profiles.',
		},
	}),
});
