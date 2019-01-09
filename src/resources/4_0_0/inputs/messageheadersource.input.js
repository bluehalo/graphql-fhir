const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UrlScalar = require('../scalars/url.scalar.js');

/**
 * @name exports
 * @summary MessageHeadersource Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MessageHeadersource_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_name: {
			type: require('./element.input.js'),
			description: 'Human-readable name for the source system.',
		},
		name: {
			type: GraphQLString,
			description: 'Human-readable name for the source system.',
		},
		_software: {
			type: require('./element.input.js'),
			description:
				'May include configuration or other information useful in debugging.',
		},
		software: {
			type: GraphQLString,
			description:
				'May include configuration or other information useful in debugging.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'Can convey versions of multiple systems in situations where a message passes through multiple hands.',
		},
		version: {
			type: GraphQLString,
			description:
				'Can convey versions of multiple systems in situations where a message passes through multiple hands.',
		},
		contact: {
			type: require('./contactpoint.input.js'),
			description:
				'An e-mail, phone, website or other contact point to use to resolve issues with message communications.',
		},
		_endpoint: {
			type: require('./element.input.js'),
			description: 'Identifies the routing target to send acknowledgements to.',
		},
		endpoint: {
			type: new GraphQLNonNull(UrlScalar),
			description: 'Identifies the routing target to send acknowledgements to.',
		},
	}),
});
