const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary MessageHeadersource Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageHeadersource',
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
		_name: {
			type: require('./element.schema.js'),
			description: 'Human-readable name for the source system.',
		},
		name: {
			type: GraphQLString,
			description: 'Human-readable name for the source system.',
		},
		_software: {
			type: require('./element.schema.js'),
			description:
				'May include configuration or other information useful in debugging.',
		},
		software: {
			type: GraphQLString,
			description:
				'May include configuration or other information useful in debugging.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'Can convey versions of multiple systems in situations where a message passes through multiple hands.',
		},
		version: {
			type: GraphQLString,
			description:
				'Can convey versions of multiple systems in situations where a message passes through multiple hands.',
		},
		contact: {
			type: require('./contactpoint.schema.js'),
			description:
				'An e-mail, phone, website or other contact point to use to resolve issues with message communications.',
		},
		_endpoint: {
			type: require('./element.schema.js'),
			description: 'Identifies the routing target to send acknowledgements to.',
		},
		endpoint: {
			type: new GraphQLNonNull(UriScalar),
			description: 'Identifies the routing target to send acknowledgements to.',
		},
	}),
});
