const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary AuditEventagentnetwork Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEventagentnetwork_Input',
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
		_address: {
			type: require('./element.input.js'),
			description:
				'An identifier for the network access point of the user device for the audit event.',
		},
		address: {
			type: GraphQLString,
			description:
				'An identifier for the network access point of the user device for the audit event.',
		},
		_type: {
			type: require('./element.input.js'),
			description:
				'An identifier for the type of network access point that originated the audit event.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/network-type
		type: {
			type: CodeScalar,
			description:
				'An identifier for the type of network access point that originated the audit event.',
		},
	}),
});
