const {
	GraphQLList,
	GraphQLBoolean,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary Conformancerestsecurity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Conformancerestsecurity',
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
		_cors: {
			type: require('./element.schema.js'),
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
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Types of security services are supported/required by the system.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'General description of how security works.',
		},
		description: {
			type: GraphQLString,
			description: 'General description of how security works.',
		},
		certificate: {
			type: new GraphQLList(
				require('./conformancerestsecuritycertificate.schema.js'),
			),
			description: 'Certificates associated with security profiles.',
		},
	}),
});
