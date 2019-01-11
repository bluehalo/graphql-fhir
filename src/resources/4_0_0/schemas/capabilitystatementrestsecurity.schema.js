const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary CapabilityStatementrestsecurity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementrestsecurity',
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
		_cors: {
			type: require('./element.schema.js'),
			description:
				'Server adds CORS headers when responding to requests - this enables Javascript applications to use the server.',
		},
		cors: {
			type: GraphQLBoolean,
			description:
				'Server adds CORS headers when responding to requests - this enables Javascript applications to use the server.',
		},
		service: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Types of security services that are supported/required by the system.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'General description of how security works.',
		},
		description: {
			type: GraphQLString,
			description: 'General description of how security works.',
		},
	}),
});
