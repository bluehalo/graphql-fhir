const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary TerminologyCapabilitiesexpansion Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TerminologyCapabilitiesexpansion',
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
		_hierarchical: {
			type: require('./element.schema.js'),
			description: 'Whether the server can return nested value sets.',
		},
		hierarchical: {
			type: GraphQLBoolean,
			description: 'Whether the server can return nested value sets.',
		},
		_paging: {
			type: require('./element.schema.js'),
			description: 'Whether the server supports paging on expansion.',
		},
		paging: {
			type: GraphQLBoolean,
			description: 'Whether the server supports paging on expansion.',
		},
		_incomplete: {
			type: require('./element.schema.js'),
			description: 'Allow request for incomplete expansions?',
		},
		incomplete: {
			type: GraphQLBoolean,
			description: 'Allow request for incomplete expansions?',
		},
		parameter: {
			type: new GraphQLList(
				require('./terminologycapabilitiesexpansionparameter.schema.js'),
			),
			description: 'Supported expansion parameter.',
		},
		_textFilter: {
			type: require('./element.schema.js'),
			description: 'Documentation about text searching works.',
		},
		textFilter: {
			type: GraphQLString,
			description: 'Documentation about text searching works.',
		},
	}),
});
