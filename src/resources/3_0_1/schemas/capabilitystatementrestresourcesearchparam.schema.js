const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary CapabilityStatementrestresourcesearchParam Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementrestresourcesearchParam',
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
			description: 'The name of the search parameter used in the interface.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name of the search parameter used in the interface.',
		},
		_definition: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [SearchParameter.url]()).',
		},
		definition: {
			type: UriScalar,
			description:
				'An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [SearchParameter.url]()).',
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				'The type of value a search parameter refers to, and how the content is interpreted.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-param-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The type of value a search parameter refers to, and how the content is interpreted.',
		},
		_documentation: {
			type: require('./element.schema.js'),
			description:
				'This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.',
		},
		documentation: {
			type: GraphQLString,
			description:
				'This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.',
		},
	}),
});
